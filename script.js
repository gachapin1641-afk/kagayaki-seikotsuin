/* ===================================
   かがやき鍼灸整骨院 - 共通スクリプト
   =================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- ハンバーガーメニュー ---------- */
  var hamburger = document.getElementById('hamburger');
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('drawerOverlay');

  function openDrawer() {
    hamburger.classList.add('is-open');
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    hamburger.classList.remove('is-open');
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  /* ---------- FAQ アコーディオン ---------- */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
      });

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  /* ---------- スムーズスクロール ---------- */
  var anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href) return;

      var hash = href.indexOf('#') !== -1 ? href.split('#')[1] : null;
      if (!hash) return;

      var target = document.getElementById(hash);
      if (!target) return;

      var isSamePage = href.startsWith('#') ||
        href.startsWith(location.pathname + '#') ||
        href === location.pathname;

      if (isSamePage) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 12;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- ページロード時のアンカースクロール ---------- */
  if (location.hash) {
    var hashTarget = document.querySelector(location.hash);
    if (hashTarget) {
      setTimeout(function () {
        var top = hashTarget.getBoundingClientRect().top + window.pageYOffset - 12;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }, 300);
    }
  }

});
