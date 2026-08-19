// scroll-forward.js
// 내부 스크롤 컨테이너 패턴(body overflow:hidden)에서, 커서가 스크롤 컨테이너 밖
// (메뉴바·테마 문구·탭 영역 등 "죽은 영역")에 있을 때 휠/트랙패드 입력을
// 해당 페이지의 스크롤 컨테이너로 전달해 위·아래 어느 방향이든 스크롤되도록 한다.
(function () {
  var selectors = [
    '.review-container',
    '.post-container',
    '.editor-container',
    '.blog-content',
    '.library-content',
    '.board-content',
    '.diary-content',
    '.gallery-content',
  ];

  function getContainers() {
    var result = [];
    for (var i = 0; i < selectors.length; i++) {
      var els = document.querySelectorAll(selectors[i]);
      for (var j = 0; j < els.length; j++) result.push(els[j]);
    }
    return result;
  }

  function scrollable(el) {
    return el.scrollHeight - el.clientHeight > 0;
  }

  document.addEventListener(
    'wheel',
    function (e) {
      var containers = getContainers();
      if (containers.length === 0) return;

      // 커서가 이미 스크롤 컨테이너 내부 → 브라우저 기본 스크롤에 맡김
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].contains(e.target)) return;
      }

      // 커서가 죽은 영역에 있음 → 스크롤 가능한 컨테이너로 전달
      for (var i = 0; i < containers.length; i++) {
        if (scrollable(containers[i])) {
          containers[i].scrollTop += e.deltaY;
          break;
        }
      }
    },
    { passive: true }
  );
})();
