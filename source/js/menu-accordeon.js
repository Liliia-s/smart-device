'use strict';

(function () {
  var titles = document.querySelectorAll('.site-footer__title');
  var contentLists = document.querySelectorAll('.site-footer__list');
  var siteFooterNav = document.querySelector('.site-footer__nav-wrapper');
  var siteFooterNavItems = document.querySelectorAll('.site-footer__nav-item');

  var hideLists = function () {
    for (var i = 0; i < contentLists.length; i++) {
      contentLists[i].classList.add('site-footer__list--hide');
    }

    for (var j = 0; j < titles.length; j++) {
      titles[j].classList.add('site-footer__title--indents');
    }

    for (var k = 0; k < siteFooterNavItems.length; k++) {
      siteFooterNavItems[k].classList.add('site-footer__nav-item--indents');
    }

    siteFooterNav.classList.add('site-footer__nav-wrapper--indents');
  };

  hideLists();

  for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var list = evt.target.nextElementSibling;

      for (var j = 0; j < contentLists.length; j++) {
        if (!list.classList.contains('site-footer__list--active')) {
          contentLists[j].classList.remove('site-footer__list--active');
          contentLists[j].previousElementSibling.classList.remove('site-footer__title--minus');
        }
      }

      if (list.classList.contains('site-footer__list--active')) {
        list.classList.remove('site-footer__list--active');
        evt.target.classList.toggle('site-footer__title--minus');
      } else {
        list.classList.add('site-footer__list--active');
        evt.target.classList.toggle('site-footer__title--minus');
      }
    });
  }
})();
