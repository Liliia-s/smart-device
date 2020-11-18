'use strict';

(function () {
  var titles = document.querySelectorAll('.site-footer__menu-title, .site-footer__contacts-title');
  var contentLists = document.querySelectorAll('.site-footer__list');

  var hideLists = function () {
    contentLists.forEach(function (list) {
      list.classList.add('site-footer__list--hide');
    });
  };

  hideLists();

  titles.forEach(function (title) {
    title.addEventListener('click', function (evt) {
      evt.preventDefault();
      var list = title.nextElementSibling;

      if (list.classList.contains('site-footer__list--active')) {
        list.classList.toggle('site-footer__list--active');
      } else {
        list.classList.toggle('site-footer__list--active');
      }
    });
  });
})();
