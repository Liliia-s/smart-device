'use strict';

(function () {
  var titles = document.querySelectorAll('.site-footer__menu-title, .site-footer__contacts-title');
  var contentLists = document.querySelectorAll('.site-footer__list');
  var siteFooterNav = document.querySelector('.site-footer__nav-wrapper');

  var hideLists = function () {
    contentLists.forEach(function (list) {
      list.classList.add('site-footer__list--hide');
    });
    siteFooterNav.classList.add('site-footer__nav-wrapper--indents');
  };

  hideLists();

  titles.forEach(function (title) {
    title.addEventListener('click', function (evt) {
      evt.preventDefault();
      var list = title.nextElementSibling;

      contentLists.forEach(function (menu) {
        if (!list.classList.contains('site-footer__list--active')) {
          menu.classList.remove('site-footer__list--active');
        } else {
          return;
        }
      });

      if (list.classList.contains('site-footer__list--active')) {
        list.classList.remove('site-footer__list--active');
      } else {
        list.classList.add('site-footer__list--active');
      }
    });
  });
})();
