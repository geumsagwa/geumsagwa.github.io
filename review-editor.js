let easyMDE;
let editId = null;

document.addEventListener('DOMContentLoaded', async () => {
  easyMDE = new EasyMDE({
    element: document.getElementById('f-body'),
    spellChecker: false,
    autosave: { enabled: false },
    placeholder: '마크다운으로 서평을 작성하세요...\n\n## 저자 소개\n\n:::author\n저자 소개 내용...\n:::\n\n## 책의 내용\n\n본문...',
    toolbar: ['bold', 'italic', 'heading-2', '|', 'quote', 'horizontal-rule', '|', 'preview', 'side-by-side', '|', 'guide'],
    status: ['lines', 'words'],
    minHeight: '350px',
  });

  document.getElementById('btn-save').addEventListener('click', saveReview);
  document.getElementById('btn-delete').addEventListener('click', deleteReview);

  const params = new URLSearchParams(window.location.search);
  editId = params.get('id');

  if (editId) {
    document.getElementById('page-mode').textContent = '서평 수정';
    document.getElementById('btn-delete').style.display = 'inline-block';
    await loadReview(editId);
  }
});

async function loadReview(id) {
  const { data, error } = await _supabase.from('book_reviews').select('*').eq('id', id).single();
  if (error || !data) {
    showMsg('서평을 불러올 수 없습니다.', true);
    return;
  }

  document.getElementById('f-review-title').value = data.review_title || '';
  document.getElementById('f-title').value = data.title || '';
  document.getElementById('f-author').value = data.author || '';
  document.getElementById('f-translator').value = data.translator || '';
  document.getElementById('f-year').value = data.year || '';
  document.getElementById('f-publisher').value = data.publisher || '';
  document.getElementById('f-cover-url').value = data.cover_url || '';
  document.getElementById('f-card-image').value = data.card_image_url || '';
  document.getElementById('f-excerpt').value = data.excerpt || '';
  easyMDE.value(data.body_markdown || '');
}

async function saveReview() {
  const btn = document.getElementById('btn-save');
  btn.disabled = true;

  const title = document.getElementById('f-title').value.trim();
  const author = document.getElementById('f-author').value.trim();
  const body = easyMDE.value().trim();

  if (!title || !author || !body) {
    showMsg('책 제목, 저자, 본문은 필수입니다.', true);
    btn.disabled = false;
    return;
  }

  const row = {
    title,
    author,
    translator: document.getElementById('f-translator').value.trim() || null,
    year: parseInt(document.getElementById('f-year').value, 10) || null,
    publisher: document.getElementById('f-publisher').value.trim() || null,
    cover_url: document.getElementById('f-cover-url').value.trim() || null,
    review_title: document.getElementById('f-review-title').value.trim() || title,
    excerpt: document.getElementById('f-excerpt').value.trim() || null,
    body_markdown: body,
    card_image_url: document.getElementById('f-card-image').value.trim() || null,
    updated_at: new Date().toISOString(),
  };

  const result = editId
    ? await _supabase.from('book_reviews').update(row).eq('id', editId)
    : await _supabase.from('book_reviews').insert(row).select();

  if (result.error) {
    showMsg(`저장 실패: ${result.error.message}`, true);
    btn.disabled = false;
    return;
  }

  showMsg('저장되었습니다!', false);
  setTimeout(() => {
    const savedId = editId || result.data?.[0]?.id;
    window.location.href = savedId ? `review.html?id=${savedId}` : 'blog.html';
  }, 800);
}

async function deleteReview() {
  if (!editId) return;
  if (!confirm('이 서평을 삭제하시겠습니까?')) return;

  const { error } = await _supabase.from('book_reviews').delete().eq('id', editId);
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
