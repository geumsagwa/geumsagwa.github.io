// 회원관리 페이지 로직
let allMembers = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', async () => {
    await loadMembers();

    // 필터 탭 이벤트
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

    list.innerHTML = filtered.map(m => `
        <div class="admin-member-card" data-id="${m.id}" data-status="${m.status}">
            <div class="admin-member-info">
                <div class="admin-member-top">
                    <span class="admin-member-nickname">${escapeHtml(m.nickname || '익명')}</span>
                    <span class="admin-member-status admin-status-${m.status}">${getStatusLabel(m.status)}</span>
                </div>
                <div class="admin-member-email">${escapeHtml(m.email)}</div>
                <div class="admin-member-date">가입: ${formatDate(m.created_at)}</div>
            </div>
            <div class="admin-member-actions">
                ${getActionButtons(m)}
            </div>
        </div>
    `).join('');
}

function getStatusLabel(status) {
    const labels = { pending: '대기', approved: '승인', rejected: '거절' };
    return labels[status] || status;
}

function getActionButtons(member) {
    switch (member.status) {
        case 'pending':
            return `
                <button class="admin-btn admin-btn-approve" onclick="updateStatus(${member.id}, 'approved')">승인</button>
                <button class="admin-btn admin-btn-reject" onclick="updateStatus(${member.id}, 'rejected')">거절</button>
            `;
        case 'approved':
            return `
                <button class="admin-btn admin-btn-reject" onclick="updateStatus(${member.id}, 'rejected')">거절</button>
            `;
        case 'rejected':
            return `
                <button class="admin-btn admin-btn-approve" onclick="updateStatus(${member.id}, 'approved')">승인</button>
                <button class="admin-btn admin-btn-delete" onclick="deleteMember(${member.id})">삭제</button>
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

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
