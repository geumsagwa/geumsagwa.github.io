document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('diary-date');
    const textInput = document.getElementById('diary-text');
    const saveBtn = document.getElementById('diary-save');
    const cancelBtn = document.getElementById('diary-cancel');
    const diaryList = document.getElementById('diary-list');

    let editingId = null;

    // 날짜 기본값: 오늘
    dateInput.valueAsDate = new Date();

    // 일기 목록 불러오기
    async function loadDiaries() {
        const { data, error } = await _supabase
            .from('diaries')
            .select('*')
            .order('written_date', { ascending: false });

        if (error) {
            console.error('load error:', error);
            diaryList.innerHTML = '<p class="diary-empty">일기를 불러오지 못했습니다.</p>';
            return;
        }

        renderDiaries(data || []);
    }

    // 렌더링
    function renderDiaries(diaries) {
        if (diaries.length === 0) {
            diaryList.innerHTML = '<p class="diary-empty">아직 기록이 없습니다.</p>';
            return;
        }

        diaryList.innerHTML = '';
        diaries.forEach(entry => {
            const card = document.createElement('div');
            card.className = 'diary-entry';
            card.dataset.id = entry.id;

            const dateStr = formatDate(entry.written_date);
            const bodyHtml = entry.body.replace(/\n/g, '<br>');

            card.innerHTML = `
                <div class="diary-entry-header">
                    <span class="diary-entry-date">${dateStr}</span>
                    <div class="diary-entry-actions">
                        <button class="diary-edit-btn" data-id="${entry.id}">수정</button>
                        <button class="diary-delete-btn" data-id="${entry.id}">삭제</button>
                    </div>
                </div>
                <div class="diary-entry-body">${bodyHtml}</div>
            `;

            diaryList.appendChild(card);
        });

        // 수정/삭제 이벤트
        diaryList.querySelectorAll('.diary-edit-btn').forEach(btn => {
            btn.addEventListener('click', () => startEdit(btn.dataset.id, diaries));
        });
        diaryList.querySelectorAll('.diary-delete-btn').forEach(btn => {
            btn.addEventListener('click', () => deleteDiary(btn.dataset.id));
        });
    }

    // 날짜 포맷
    function formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        const wd = weekdays[d.getDay()];
        return `${y}. ${m}. ${day} (${wd})`;
    }

    // 저장 (신규 / 수정)
    saveBtn.addEventListener('click', async () => {
        const body = textInput.value.trim();
        const written_date = dateInput.value;
        if (!body) return;

        saveBtn.disabled = true;
        saveBtn.textContent = '저장 중...';

        try {
            if (editingId) {
                const { error } = await _supabase
                    .from('diaries')
                    .update({ body, written_date, updated_at: new Date().toISOString() })
                    .eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await _supabase
                    .from('diaries')
                    .insert({ body, written_date });
                if (error) throw error;
            }

            resetForm();
            await loadDiaries();
        } catch (e) {
            console.error('save error:', e);
            alert('저장에 실패했습니다.');
        } finally {
            saveBtn.disabled = false;
            saveBtn.textContent = editingId ? '수정 완료' : '기록하기';
        }
    });

    // 수정 모드 진입
    function startEdit(id, diaries) {
        const entry = diaries.find(d => d.id === Number(id));
        if (!entry) return;

        editingId = entry.id;
        dateInput.value = entry.written_date;
        textInput.value = entry.body;
        saveBtn.textContent = '수정 완료';
        cancelBtn.style.display = 'inline-block';

        // 해당 항목 강조
        document.querySelectorAll('.diary-entry').forEach(el => el.classList.remove('editing'));
        const card = document.querySelector(`.diary-entry[data-id="${id}"]`);
        if (card) card.classList.add('editing');

        textInput.focus();
    }

    // 취소
    cancelBtn.addEventListener('click', () => {
        resetForm();
        document.querySelectorAll('.diary-entry').forEach(el => el.classList.remove('editing'));
    });

    // 삭제
    async function deleteDiary(id) {
        if (!confirm('이 기록을 삭제할까요?')) return;

        const { error } = await _supabase
            .from('diaries')
            .delete()
            .eq('id', Number(id));

        if (error) {
            console.error('delete error:', error);
            alert('삭제에 실패했습니다.');
            return;
        }

        if (editingId === Number(id)) resetForm();
        await loadDiaries();
    }

    // 폼 초기화
    function resetForm() {
        editingId = null;
        textInput.value = '';
        dateInput.valueAsDate = new Date();
        saveBtn.textContent = '기록하기';
        cancelBtn.style.display = 'none';
    }

    // Ctrl+Enter 저장
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            saveBtn.click();
        }
    });

    // 초기 로드
    loadDiaries();
});
