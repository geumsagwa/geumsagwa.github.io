// Board - 메모 게시판 (localStorage 기반)
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('memo-name');
    const textInput = document.getElementById('memo-text');
    const charCount = document.getElementById('memo-char-count');
    const submitBtn = document.getElementById('memo-submit');
    const memoList = document.getElementById('memo-list');

    // 샘플 데이터 (처음 방문 시)
    const sampleMemos = [
        {
            id: 1, name: '지나가던 독자', text: '블로그 글 잘 읽고 갑니다. "사피엔스" 리뷰가 특히 좋았어요.',
            date: '2026. 02. 08',
            reply: { name: '생각을 잇다', text: '감사합니다. 그 책은 쓸수록 더 하고 싶은 이야기가 많아지더라고요.', date: '2026. 02. 08' }
        },
        {
            id: 2, name: '밤의 산책자', text: '갤러리 사진들이 좋습니다. 멈춘 시간이라는 표현이 와닿아요.',
            date: '2026. 01. 25',
            reply: null
        },
        {
            id: 3, name: '익명', text: '이 사이트 분위기가 독특하네요. 어두운데 따뜻한 느낌?',
            date: '2026. 01. 15',
            reply: { name: '생각을 잇다', text: '정확히 그 느낌을 의도했습니다. 고마운 말이에요.', date: '2026. 01. 16' }
        },
        {
            id: 4, name: '느린 독서가', text: '"느리게 읽는 연습" 글 덕분에 요즘 한 페이지에 오래 머무르려 노력 중입니다.',
            date: '2025. 12. 30',
            reply: { name: '생각을 잇다', text: '그 노력 자체가 이미 변화의 시작이라고 생각해요.', date: '2025. 12. 31' }
        },
        {
            id: 5, name: '커피 한 잔', text: '좋은 공간이네요. 가끔 들르겠습니다.',
            date: '2025. 12. 10',
            reply: null
        }
    ];

    // localStorage에서 메모 불러오기 (없으면 샘플)
    function loadMemos() {
        const saved = localStorage.getItem('board-memos');
        if (saved) return JSON.parse(saved);
        localStorage.setItem('board-memos', JSON.stringify(sampleMemos));
        return sampleMemos;
    }

    // localStorage에 저장
    function saveMemos(memos) {
        localStorage.setItem('board-memos', JSON.stringify(memos));
    }

    // 날짜 포맷
    function formatDate(d) {
        const date = d || new Date();
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${y}. ${m}. ${day}`;
    }

    // 메모 렌더링
    function renderMemos() {
        const memos = loadMemos();
        memoList.innerHTML = '';

        memos.forEach(memo => {
            const card = document.createElement('div');
            card.className = 'memo-card';

            let replyHTML = '';
            if (memo.reply) {
                replyHTML = `
                    <div class="memo-reply">
                        <span class="memo-reply-name">${memo.reply.name}</span>
                        <p class="memo-reply-text">${memo.reply.text}</p>
                        <span class="memo-reply-date">${memo.reply.date}</span>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="memo-header">
                    <span class="memo-author">${memo.name}</span>
                    <span class="memo-date">${memo.date}</span>
                </div>
                <p class="memo-content">${memo.text}</p>
                ${replyHTML}
            `;

            memoList.appendChild(card);
        });
    }

    // 글자 수 카운트
    textInput.addEventListener('input', () => {
        charCount.textContent = `${textInput.value.length} / 300`;
    });

    // 로그인된 사용자가 있으면 이름 필드 자동 채우기
    async function fillUserName() {
        try {
            const { data: { user } } = await _supabase.auth.getUser();
            if (user) {
                const nickname = user.user_metadata?.nickname || user.email?.split('@')[0] || '사용자';
                nameInput.value = nickname;
                nameInput.disabled = true;
                nameInput.style.opacity = '0.7';
            }
        } catch (e) {
            // Supabase 미설정 시 무시
        }
    }
    fillUserName();

    // 제출
    submitBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (!text) return;

        const name = nameInput.value.trim() || '익명';
        const memos = loadMemos();
        const newMemo = {
            id: Date.now(),
            name: name,
            text: text,
            date: formatDate(new Date()),
            reply: null
        };

        memos.unshift(newMemo);
        saveMemos(memos);

        nameInput.value = '';
        textInput.value = '';
        charCount.textContent = '0 / 300';

        renderMemos();
        fillUserName(); // 로그인 사용자면 이름 다시 채우기
    });

    // Enter (Ctrl+Enter) 제출
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            submitBtn.click();
        }
    });

    // 초기 렌더링
    renderMemos();
});
