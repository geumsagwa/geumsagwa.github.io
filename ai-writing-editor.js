let easyMDE;
let editId = null;

document.addEventListener('DOMContentLoaded', async () => {
  easyMDE = new EasyMDE({
    element: document.getElementById('f-body'),
    spellChecker: false,
    autosave: { enabled: false },
    placeholder: '마크다운으로 작성하세요...',
    toolbar: ['bold', 'italic', 'heading-2', '|', 'quote', 'horizontal-rule', '|', 'preview', 'side-by-side', '|', 'guide'],
    status: ['lines', 'words'],
    minHeight: '400px',
  });

  document.getElementById('btn-save').addEventListener('click', savePost);
  document.getElementById('btn-delete').addEventListener('click', deletePost);

  const params = new URLSearchParams(window.location.search);
  editId = params.get('id');

  if (editId) {
    document.getElementById('page-mode').textContent = 'AI Writing 수정';
    document.getElementById('btn-delete').style.display = 'inline-block';
    await loadPost(editId);
  }
});

async function loadPost(id) {
  const { data, error } = await _supabase.from('ai_writings').select('*').eq('id', id).single();
  if (error || !data) {
    showMsg('글을 불러올 수 없습니다.', true);
    return;
  }

  document.getElementById('f-title').value = data.title || '';
  document.getElementById('f-excerpt').value = data.excerpt || '';
  document.getElementById('f-card-image').value = data.card_image_url || '';
  document.getElementById('f-prompt').value = data.prompt || '';
  document.getElementById('f-ai-model').value = data.ai_model || '';
  easyMDE.value(data.body_markdown || '');
}

async function savePost() {
  const btn = document.getElementById('btn-save');
  btn.disabled = true;

  const title = document.getElementById('f-title').value.trim();
  const body = easyMDE.value().trim();

  if (!title || !body) {
    showMsg('제목과 본문은 필수입니다.', true);
    btn.disabled = false;
    return;
  }

  const row = {
    title,
    excerpt: document.getElementById('f-excerpt').value.trim() || null,
    body_markdown: body,
    card_image_url: document.getElementById('f-card-image').value.trim() || null,
    prompt: document.getElementById('f-prompt').value.trim() || null,
    ai_model: document.getElementById('f-ai-model').value.trim() || null,
    updated_at: new Date().toISOString(),
  };

  const result = editId
    ? await _supabase.from('ai_writings').update(row).eq('id', editId)
    : await _supabase.from('ai_writings').insert(row).select();

  if (result.error) {
    showMsg(`저장 실패: ${result.error.message}`, true);
    btn.disabled = false;
    return;
  }

  showMsg('저장되었습니다!', false);
  setTimeout(() => {
    const savedId = editId || result.data?.[0]?.id;
    window.location.href = savedId ? `ai-writing.html?id=${savedId}` : 'blog.html';
  }, 800);
}

async function deletePost() {
  if (!editId) return;
  if (!confirm('이 글을 삭제하시겠습니까?')) return;

  const { error } = await _supabase.from('ai_writings').delete().eq('id', editId);
  if (error) {
    showMsg(`삭제 실패: ${error.message}`, true);
    return;
  }
  window.location.href = 'blog.html';
}

function showMsg(text, isError) {
  const el = document.getElementById('re-message');
  el.textContent = text;
  el.className = `re-message ${isError ? 'error' : 'success'}`;
}
