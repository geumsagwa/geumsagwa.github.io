// Library: Supabase DB 조회 + Storage 업로드

// Storage는 비공개 → 인증된 signed URL로 접근

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    loadAllBooks();
    initUpload();

    // 이 페이지는 인증 사용자만 접근 가능하므로 업로드 버튼 표시
    const btn = document.getElementById('library-upload-btn');
    if (btn) btn.style.display = 'flex';
});

// ── 카테고리 탭 전환 ──
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

// ── DB에서 책 목록 로드 ──
async function loadAllBooks() {
    const categories = ['history', 'philosophy', 'psychology'];
    for (const cat of categories) {
        await loadBooks(cat);
    }
}

async function loadBooks(category) {
    const shelf = document.getElementById(`shelf-${category}`);
    if (!shelf) return;

    // 기존 책등 제거 (shelf-surface는 유지)
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
            empty.innerHTML = `
                <span class="spine-title">준비 중</span>
                <span class="spine-author">—</span>
            `;
            empty.addEventListener('click', e => e.preventDefault());
            shelf.insertBefore(empty, surface);
            return;
        }

        books.forEach(book => {
            const a = document.createElement('a');
            a.href = '#';
            a.className = 'book-spine';
            a.style.cssText = `--spine-color: ${book.spine_color}; --spine-height: ${book.spine_height}px; --spine-width: ${book.spine_width}px;`;
            a.innerHTML = `
                <span class="spine-title">${book.title}</span>
                <span class="spine-author">${book.author}</span>
            `;
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

// ── 업로드 모달 ──
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
    document.getElementById('upload-file').value = '';
    selectedFile = null;

    // 카테고리 버튼 초기화
    document.querySelectorAll('.upload-category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.upload-category-btn[data-cat="history"]').classList.add('active');
}

// ── 업로드 기능 초기화 ──
let selectedFile = null;

function initUpload() {
    const dropzone = document.getElementById('upload-dropzone');
    const fileInput = document.getElementById('upload-file');
    const form = document.getElementById('upload-form');

    if (!dropzone || !fileInput || !form) return;

    // 드롭존 클릭 → 파일 선택
    dropzone.addEventListener('click', () => fileInput.click());

    // 드래그앤드롭
    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });
    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.name.endsWith('.epub')) {
            selectedFile = file;
            document.getElementById('upload-dropzone-text').textContent = file.name;
        } else {
            showMessage('epub 파일만 업로드할 수 있습니다.', true);
        }
    });

    // 파일 선택
    fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) {
            selectedFile = fileInput.files[0];
            document.getElementById('upload-dropzone-text').textContent = selectedFile.name;
        }
    });

    // 카테고리 버튼 전환
    document.querySelectorAll('.upload-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.upload-category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 폼 제출
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await uploadBook();
    });
}

// ── 책 업로드 처리 ──
async function uploadBook() {
    const title = document.getElementById('upload-book-title').value.trim();
    const author = document.getElementById('upload-book-author').value.trim();
    const category = document.querySelector('.upload-category-btn.active')?.dataset.cat;
    const spineColor = document.getElementById('upload-spine-color').value;
    const submitBtn = document.getElementById('upload-submit-btn');

    if (!title || !author || !category) {
        showMessage('모든 필드를 입력해주세요.', true);
        return;
    }
    if (!selectedFile) {
        showMessage('epub 파일을 선택해주세요.', true);
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '업로드 중...';
    showMessage('');

    try {
        // 1) Storage에 파일 업로드
        const fileName = `${Date.now()}_${selectedFile.name}`;
        const storagePath = `${category}/${fileName}`;

        const { data: uploadData, error: uploadError } = await _supabase.storage
            .from('epubs')
            .upload(storagePath, selectedFile, {
                contentType: 'application/epub+zip',
                upsert: false
            });

        if (uploadError) throw uploadError;

        // 2) DB에 메타데이터 저장
        const spineHeight = 220 + Math.floor(Math.random() * 40);
        const spineWidth = 48 + Math.floor(Math.random() * 14);

        const { error: dbError } = await _supabase
            .from('library')
            .insert({
                title,
                author,
                category,
                epub_path: storagePath,
                spine_color: spineColor,
                spine_height: spineHeight,
                spine_width: spineWidth
            });

        if (dbError) throw dbError;

        showMessage('등록 완료!', false);

        // 해당 카테고리 책장 새로고침
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

// ── 책 펼침 애니메이션 ──
function openBookAnimation(book) {
    const overlay = document.getElementById('book-open-overlay');
    const coverFront = document.getElementById('book-open-cover-front');
    const titleEl = document.getElementById('book-open-title');
    const authorEl = document.getElementById('book-open-author');

    // 표지 색상 설정
    coverFront.style.background = `linear-gradient(135deg, ${book.spine_color}, #1a1208)`;
    titleEl.textContent = book.title;
    authorEl.textContent = book.author;

    // 초기화 (이전 애니메이션 클래스 제거)
    overlay.classList.remove('fade-out');
    overlay.classList.remove('active');

    // 약간의 지연 후 애니메이션 시작 (reflow)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add('active');

            // 책이 펼쳐진 후 바로 리더로 이동 (오버레이 유지하여 뒷 화면 안 보이게)
            setTimeout(() => {
                window.location.href = `reader.html?path=${encodeURIComponent(book.epub_path)}&title=${encodeURIComponent(book.title)}`;
            }, 1800);
        });
    });
}
