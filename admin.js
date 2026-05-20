// 관리자 페이지 로직
let allMembers = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', async () => {
    await waitForSiteAuthReady();
    if (typeof isCurrentUserAdmin === 'function') {
        const isAdmin = await isCurrentUserAdmin();
        if (!isAdmin) {
            window.location.href = 'index.html';
            return;
        }
    }

    // 페이지 탭 전환
    document.querySelectorAll('.admin-page-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-page-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.admin-page-content').forEach(c => c.classList.remove('active'));
            const page = document.getElementById('page-' + tab.dataset.page);
            if (page) page.classList.add('active');
        });
    });

    await loadMembers();
    await loadCardnews();

    // 회원 필터 탭
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderMembers();
        });
    });
});

async function loadMembers() {
    const { data, error } = await _supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('회원 목록 로드 실패:', error);
        return;
    }

    allMembers = data || [];
    updateCounts();
    renderMembers();
}

function updateCounts() {
    const pending = allMembers.filter(m => m.status === 'pending').length;
    const el = document.getElementById('count-pending');
    if (el) {
        el.textContent = pending;
        el.style.display = pending > 0 ? '' : 'none';
    }
}

function renderMembers() {
    const list = document.getElementById('admin-list');
    const filtered = currentFilter === 'all'
        ? allMembers
        : allMembers.filter(m => m.status === currentFilter);

    if (filtered.length === 0) {
        const messages = {
            all: '등록된 회원이 없습니다.',
            pending: '대기 중인 가입 요청이 없습니다.',
            approved: '승인된 회원이 없습니다.',
            rejected: '거절된 회원이 없습니다.'
        };
        list.innerHTML = `<div class="admin-empty">${messages[currentFilter]}</div>`;
        return;
    }

    list.innerHTML = filtered.map(m => {
        const safeStatus = getSafeStatus(m.status);
        const safeId = String(m.id);
        return `
        <div class="admin-member-card" data-id="${safeId}" data-status="${safeStatus}">
            <div class="admin-member-info">
                <div class="admin-member-top">
                    <span class="admin-member-nickname">${escapeHtml(m.nickname || '익명')}</span>
                    <span class="admin-member-status admin-status-${safeStatus}">${getStatusLabel(safeStatus)}</span>
                </div>
                <div class="admin-member-email">${escapeHtml(m.email)}</div>
                <div class="admin-member-date">가입: ${formatDate(m.created_at)}</div>
            </div>
            <div class="admin-member-actions">
                ${getActionButtons(safeId, safeStatus)}
            </div>
        </div>
    `;
    }).join('');

    list.querySelectorAll('[data-action="approve"]').forEach(btn => {
        btn.addEventListener('click', () => updateStatus(btn.dataset.id, 'approved'));
    });
    list.querySelectorAll('[data-action="reject"]').forEach(btn => {
        btn.addEventListener('click', () => updateStatus(btn.dataset.id, 'rejected'));
    });
    list.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', () => deleteMember(btn.dataset.id));
    });
}

function getStatusLabel(status) {
    const labels = { pending: '대기', approved: '승인', rejected: '거절' };
    return labels[status] || status;
}

function getSafeStatus(status) {
    return ['pending', 'approved', 'rejected'].includes(status) ? status : 'pending';
}

function getActionButtons(memberId, status) {
    const idAttr = escapeHtml(memberId);
    switch (status) {
        case 'pending':
            return `
                <button class="admin-btn admin-btn-approve" data-action="approve" data-id="${idAttr}">승인</button>
                <button class="admin-btn admin-btn-reject" data-action="reject" data-id="${idAttr}">거절</button>
            `;
        case 'approved':
            return `
                <button class="admin-btn admin-btn-reject" data-action="reject" data-id="${idAttr}">거절</button>
            `;
        case 'rejected':
            return `
                <button class="admin-btn admin-btn-approve" data-action="approve" data-id="${idAttr}">승인</button>
                <button class="admin-btn admin-btn-delete" data-action="delete" data-id="${idAttr}">삭제</button>
            `;
        default:
            return '';
    }
}

async function updateStatus(id, newStatus) {
    const { error } = await _supabase
        .from('members')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

    if (error) {
        alert('상태 변경 실패: ' + error.message);
        return;
    }

    await loadMembers();
}

async function deleteMember(id) {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    const { error } = await _supabase
        .from('members')
        .delete()
        .eq('id', id);

    if (error) {
        alert('삭제 실패: ' + error.message);
        return;
    }

    await loadMembers();
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

/* ===== 카드뉴스 ===== */

async function loadCardnews() {
    const list = document.getElementById('cardnews-list');
    try {
        // 카드뉴스 목록 manifest 로드
        const resp = await fetch('admin/cardnews/index.json');
        if (!resp.ok) throw new Error('Not found');
        const manifest = await resp.json();
        renderCardnewsList(manifest);
    } catch (e) {
        // manifest 없으면 디렉토리 스캔 대신 기본 메시지
        list.innerHTML = '<div class="cardnews-empty">카드뉴스가 없습니다.<br>게발이 브리핑 생성 후 자동으로 만들어집니다.</div>';
    }
}

function renderCardnewsList(manifest) {
    const list = document.getElementById('cardnews-list');
    const items = manifest.items || [];
    if (items.length === 0) {
        list.innerHTML = '<div class="cardnews-empty">카드뉴스가 없습니다.</div>';
        return;
    }
    list.innerHTML = items.map(item => {
        const dateStr = item.date.replace(/-/g, '.');
        return `
        <div class="cardnews-item">
            <div>
                <div class="cardnews-date">📰 ${dateStr}</div>
                <div class="cardnews-status"><span class="dot active"></span>${item.summary || '게발이 아침 카드뉴스'}</div>
            </div>
            <div class="cardnews-actions">
                <a class="btn-view" href="javascript:void(0)" onclick="openCardnewsViewer('${item.date}')">보기</a>
            </div>
        </div>
    `}).join('');
}

function openCardnewsViewer(dateStr) {
    const viewer = document.getElementById('cardnews-viewer');
    const iframe = document.getElementById('cardnews-iframe');
    iframe.src = 'admin/cardnews/' + dateStr + '.html';
    viewer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCardnewsViewer() {
    const viewer = document.getElementById('cardnews-viewer');
    viewer.classList.remove('open');
    document.body.style.overflow = '';
}

