'use strict';

(function () {
  var titles = document.querySelectorAll('.site-footer__menu-title, .site-footer__contacts-title');
  var contentLists = document.querySelectorAll('.site-footer__list');
  // var keks = document.querySelector('.site-footer__nav-wrapper');

  var hideLists = function () {
    contentLists.forEach(function (list) {
      list.classList.add('site-footer__list--hide');
    });
  };

  hideLists();

  titles.forEach(function (title) {
    title.addEventListener('click', function (e) {
      e.preventDefault();
      var list = title.nextElementSibling;
      // var parent = title.parentNode;

      // if (keks.children.contains('test') && parent) {
      //   keks.children.

      // } else
      if (list.classList.contains('site-footer__list--active')) {
        list.classList.toggle('site-footer__list--active');
      } else {
        list.classList.toggle('site-footer__list--active');
      }
    });
  });
})();
