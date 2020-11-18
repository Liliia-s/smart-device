'use strict';

(function () {
  var titles = document.querySelectorAll('.site-footer__title');
  var contentLists = document.querySelectorAll('.site-footer__list');
  var siteFooterNav = document.querySelector('.site-footer__nav-wrapper');
  var siteFooterNavItems = document.querySelectorAll('.site-footer__nav-item');

  var hideLists = function () {
    contentLists.forEach(function (list) {
      list.classList.add('site-footer__list--hide');
    });

    titles.forEach(function (title) {
      title.classList.add('site-footer__title--indents');
    });

    siteFooterNavItems.forEach(function (item) {
      item.classList.add('container', 'site-footer__nav-item--indents');
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
          menu.previousElementSibling.classList.remove('site-footer__title--minus');
        } else {
          return;
        }
      });

      if (list.classList.contains('site-footer__list--active')) {
        list.classList.remove('site-footer__list--active');
        title.classList.toggle('site-footer__title--minus');
      } else {
        list.classList.add('site-footer__list--active');
        title.classList.toggle('site-footer__title--minus');
      }
    });
  });
})();
