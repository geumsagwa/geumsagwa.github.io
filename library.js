// Library: Supabase DB 조회 + Storage 업로드
// Storage는 비공개 → 인증된 signed URL로 접근

let selectedFile = null;
let assistantRefreshTimer = null;
let manualCategoryLocked = false;

const CATEGORY_KEYWORDS = {
    history: ['역사', '세계사', '문명', '전쟁', '제국', '왕조', 'history'],
    philosophy: ['철학', '윤리', '존재', '인식', '사유', 'philosophy'],
    psychology: ['심리', '감정', '인지', '무의식', '상담', 'psychology']
};

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    loadAllBooks();
    initUpload();

    const btn = document.getElementById('library-upload-btn');
    if (btn) btn.style.display = 'flex';
});

function initTabs() {
    const tabs = document.querySelectorAll('.library-tab');
    const panels = document.querySelectorAll('.library-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach(p => p.classList.remove('active'));
            document.querySelector(`.library-panel[data-category="${category}"]`).classList.add('active');
        });
    });
}

async function loadAllBooks() {
    for (const category of ['history', 'philosophy', 'psychology']) {
        await loadBooks(category);
    }
}

async function loadBooks(category) {
    const shelf = document.getElementById(`shelf-${category}`);
    if (!shelf) return;

    shelf.querySelectorAll('.book-spine').forEach(el => el.remove());

    try {
        const { data: books, error } = await _supabase
            .from('library')
            .select('*')
            .eq('category', category)
            .order('created_at', { ascending: true });

        if (error) throw error;
        const surface = shelf.querySelector('.shelf-surface');

        if (!books || books.length === 0) {
            const empty = document.createElement('a');
            empty.href = '#';
            empty.className = 'book-spine';
            empty.style.cssText = '--spine-color: #2a2a2a; --spine-height: 220px; --spine-width: 50px; opacity: 0.4; cursor: default;';
            empty.innerHTML = '<span class="spine-title">준비 중</span><span class="spine-author">—</span>';
            empty.addEventListener('click', e => e.preventDefault());
            shelf.insertBefore(empty, surface);
            return;
        }

        books.forEach(book => {
            const a = document.createElement('a');
            a.href = '#';
            a.className = 'book-spine';
            a.style.cssText = `--spine-color: ${book.spine_color}; --spine-height: ${book.spine_height}px; --spine-width: ${book.spine_width}px;`;
            a.innerHTML = `<span class="spine-title">${book.title}</span><span class="spine-author">${book.author}</span>`;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                openBookAnimation(book);
            });
            shelf.insertBefore(a, surface);
        });
    } catch (err) {
        console.error(`${category} 책 로드 실패:`, err);
    }
}

function openUploadModal() {
    document.getElementById('upload-modal').classList.add('active');
}

function closeUploadModal() {
    document.getElementById('upload-modal').classList.remove('active');
    resetUploadForm();
}

function resetUploadForm() {
    document.getElementById('upload-form').reset();
    document.getElementById('upload-dropzone-text').textContent = '파일을 드래그하거나 클릭하여 선택';
    document.getElementById('upload-message').textContent = '';
    document.getElementById('upload-auto-info').textContent = '';
    document.getElementById('upload-duplicate-warning').textContent = '';
    document.getElementById('upload-file').value = '';
    selectedFile = null;
    manualCategoryLocked = false;

    document.querySelectorAll('.upload-category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.upload-category-btn[data-cat="history"]').classList.add('active');
}

function initUpload() {
    const dropzone = document.getElementById('upload-dropzone');
    const fileInput = document.getElementById('upload-file');
    const form = document.getElementById('upload-form');
    const titleInput = document.getElementById('upload-book-title');
    const authorInput = document.getElementById('upload-book-author');

    if (!dropzone || !fileInput || !form) return;

    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (!isEpubFile(file)) {
            showMessage('epub 파일만 업로드할 수 있습니다.', true);
            return;
        }
        handleSelectedFile(file);
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!isEpubFile(file)) {
            showMessage('epub 파일만 업로드할 수 있습니다.', true);
            return;
        }
        handleSelectedFile(file);
    });

    document.querySelectorAll('.upload-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            manualCategoryLocked = true;
            document.querySelectorAll('.upload-category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    [titleInput, authorInput].forEach(input => {
        if (!input) return;
        input.addEventListener('input', () => {
            if (!selectedFile) return;
            clearTimeout(assistantRefreshTimer);
            assistantRefreshTimer = setTimeout(() => refreshAssistant(), 250);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await uploadBook();
    });
}

function isEpubFile(file) {
    return !!file && file.name.toLowerCase().endsWith('.epub');
}

async function handleSelectedFile(file) {
    selectedFile = file;
    manualCategoryLocked = false;
    document.getElementById('upload-dropzone-text').textContent = file.name;
    showMessage('');

    const metadata = await extractEpubMetadata(file);
    autoFillBookFields(metadata);
    await refreshAssistant();
}

async function refreshAssistant() {
    const title = document.getElementById('upload-book-title').value.trim();
    const author = document.getElementById('upload-book-author').value.trim();

    const autoInfoEl = document.getElementById('upload-auto-info');
    const duplicateEl = document.getElementById('upload-duplicate-warning');
    autoInfoEl.textContent = '';
    duplicateEl.textContent = '';

    const suggested = await suggestCategory(title, author);
    if (suggested && !manualCategoryLocked) {
        setCategoryButton(suggested);
    }
    if (suggested) {
        autoInfoEl.className = 'upload-message success';
        autoInfoEl.textContent = `카테고리 추천: ${capitalizeCategory(suggested)}`;
    }

    const duplicate = await checkDuplicateBook({ title, author, fileName: selectedFile?.name || '' });
    if (duplicate.isDuplicate) {
        duplicateEl.className = 'upload-message error';
        duplicateEl.textContent = `중복 가능성이 있습니다. 기존 항목: ${duplicate.preview}`;
    }
}

function setCategoryButton(category) {
    document.querySelectorAll('.upload-category-btn').forEach(btn => btn.classList.remove('active'));
    const target = document.querySelector(`.upload-category-btn[data-cat="${category}"]`);
    if (target) target.classList.add('active');
}

function capitalizeCategory(category) {
    return category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
}

async function suggestCategory(title, author) {
    const text = `${title} ${author}`.toLowerCase();
    const scores = { history: 0, philosophy: 0, psychology: 0 };

    for (const [category, words] of Object.entries(CATEGORY_KEYWORDS)) {
        for (const word of words) {
            if (text.includes(word)) scores[category] += 1;
        }
    }

    const byScore = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    if (byScore[0][1] > 0) return byScore[0][0];

    if (author) {
        const { data, error } = await _supabase
            .from('library')
            .select('category')
            .eq('author', author)
            .limit(10);

        if (!error && data && data.length > 0) {
            const counts = data.reduce((acc, row) => {
                acc[row.category] = (acc[row.category] || 0) + 1;
                return acc;
            }, {});
            return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        }
    }

    return 'history';
}

async function checkDuplicateBook({ title, author, fileName }) {
    const normalizedTitle = (title || '').toLowerCase().trim();
    const normalizedAuthor = (author || '').toLowerCase().trim();
    const normalizedFileName = (fileName || '').toLowerCase().trim();

    const { data, error } = await _supabase
        .from('library')
        .select('title, author, epub_path')
        .limit(300);

    if (error || !data) return { isDuplicate: false, preview: '' };

    const matched = data.filter(item => {
        const itemTitle = (item.title || '').toLowerCase().trim();
        const itemAuthor = (item.author || '').toLowerCase().trim();
        const itemFileName = (item.epub_path || '').split('/').pop()?.toLowerCase().trim() || '';
        const sameTitleAuthor = normalizedTitle && normalizedAuthor && itemTitle === normalizedTitle && itemAuthor === normalizedAuthor;
        const sameFileName = normalizedFileName && itemFileName.endsWith(normalizedFileName);
        return sameTitleAuthor || sameFileName;
    });

    return {
        isDuplicate: matched.length > 0,
        preview: matched.slice(0, 2).map(v => `"${v.title}" / ${v.author}`).join(', ')
    };
}

async function extractEpubMetadata(file) {
    const fallback = parseFileNameMetadata(file?.name || '');
    if (!window.JSZip || !file) return fallback;

    try {
        const zip = await window.JSZip.loadAsync(file);
        const container = zip.file('META-INF/container.xml');
        if (!container) return fallback;

        const containerXml = await container.async('text');
        const containerDoc = new DOMParser().parseFromString(containerXml, 'application/xml');
        const opfPath = containerDoc.querySelector('rootfile')?.getAttribute('full-path');
        if (!opfPath) return fallback;

        const opfEntry = zip.file(opfPath);
        if (!opfEntry) return fallback;

        const opfXml = await opfEntry.async('text');
        const opfDoc = new DOMParser().parseFromString(opfXml, 'application/xml');
        const titleNode = opfDoc.querySelector('metadata > dc\\:title, metadata > title');
        const authorNode = opfDoc.querySelector('metadata > dc\\:creator, metadata > creator');

        return {
            title: normalizeText(titleNode?.textContent || fallback.title),
            author: normalizeText(authorNode?.textContent || fallback.author)
        };
    } catch (err) {
        console.warn('EPUB 메타데이터 읽기 실패:', err);
        return fallback;
    }
}

function parseFileNameMetadata(fileName) {
    const base = (fileName || '').replace(/\.epub$/i, '').trim();
    if (!base) return { title: '', author: '' };
    const parts = base.split(/\s*[-_]\s*/).map(s => s.trim()).filter(Boolean);
    if (parts.length >= 2) return { title: normalizeText(parts.slice(1).join(' - ')), author: normalizeText(parts[0]) };
    return { title: normalizeText(base), author: '' };
}

function normalizeText(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
}

function autoFillBookFields(metadata) {
    const titleInput = document.getElementById('upload-book-title');
    const authorInput = document.getElementById('upload-book-author');
    if (metadata.title && !titleInput.value.trim()) titleInput.value = metadata.title;
    if (metadata.author && !authorInput.value.trim()) authorInput.value = metadata.author;
}

function validateUploadInput() {
    const title = document.getElementById('upload-book-title').value.trim();
    const author = document.getElementById('upload-book-author').value.trim();
    const category = document.querySelector('.upload-category-btn.active')?.dataset.cat;

    if (!title || !author || !category) return { valid: false, message: '모든 필드를 입력해주세요.' };
    if (!selectedFile) return { valid: false, message: 'epub 파일을 선택해주세요.' };
    if (!isEpubFile(selectedFile)) return { valid: false, message: 'epub 파일만 업로드할 수 있습니다.' };
    if (selectedFile.size > 100 * 1024 * 1024) return { valid: false, message: '파일 용량은 100MB 이하만 가능합니다.' };
    return { valid: true, message: '' };
}

async function uploadBook() {
    const title = document.getElementById('upload-book-title').value.trim();
    const author = document.getElementById('upload-book-author').value.trim();
    const category = document.querySelector('.upload-category-btn.active')?.dataset.cat;
    const spineColor = document.getElementById('upload-spine-color').value;
    const submitBtn = document.getElementById('upload-submit-btn');

    const validation = validateUploadInput();
    if (!validation.valid) {
        showMessage(validation.message, true);
        return;
    }

    const duplicate = await checkDuplicateBook({ title, author, fileName: selectedFile.name });
    if (duplicate.isDuplicate) {
        const ok = confirm('중복 가능성이 있는 도서가 있습니다. 그래도 등록하시겠습니까?');
        if (!ok) {
            showMessage('중복 확인 후 업로드를 취소했습니다.', true);
            return;
        }
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '업로드 중...';
    showMessage('');

    try {
        const fileName = `${Date.now()}_${selectedFile.name}`;
        const storagePath = `${category}/${fileName}`;

        const { error: uploadError } = await _supabase.storage
            .from('epubs')
            .upload(storagePath, selectedFile, {
                contentType: 'application/epub+zip',
                upsert: false
            });

        if (uploadError) throw uploadError;

        const { error: dbError } = await _supabase
            .from('library')
            .insert({
                title,
                author,
                category,
                epub_path: storagePath,
                spine_color: spineColor,
                spine_height: 220 + Math.floor(Math.random() * 40),
                spine_width: 48 + Math.floor(Math.random() * 14)
            });

        if (dbError) throw dbError;

        showMessage('등록 완료!', false);
        await loadBooks(category);
        setTimeout(() => closeUploadModal(), 1200);
    } catch (err) {
        console.error('업로드 실패:', err);
        showMessage('업로드 실패: ' + (err.message || err), true);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '등록';
    }
}

function showMessage(text, isError) {
    const msg = document.getElementById('upload-message');
    msg.textContent = text;
    msg.className = 'upload-message' + (isError ? ' error' : ' success');
}

function openBookAnimation(book) {
    const overlay = document.getElementById('book-open-overlay');
    const coverFront = document.getElementById('book-open-cover-front');
    const titleEl = document.getElementById('book-open-title');
    const authorEl = document.getElementById('book-open-author');

    coverFront.style.background = `linear-gradient(135deg, ${book.spine_color}, #1a1208)`;
    titleEl.textContent = book.title;
    authorEl.textContent = book.author;

    overlay.classList.remove('fade-out');
    overlay.classList.remove('active');

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add('active');
            setTimeout(() => {
                document.documentElement.style.background = '#000';
                document.body.style.background = '#000';
                document.body.innerHTML = '';
                window.location.href = `reader.html?path=${encodeURIComponent(book.epub_path)}&title=${encodeURIComponent(book.title)}`;
            }, 1800);
        });
    });
}
