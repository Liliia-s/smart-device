'use strict';

(function () {
  var KEY_CODE_ESC = 27;
  var btnCallback = document.querySelector('.site-header__btn-callback');
  var modalCallback = document.querySelector('.form--modal');
  var btnCallbackClose = document.querySelector('.form__btn-callback');
  var overlay = document.querySelector('.overlay');
  var name = modalCallback.querySelector('#field-name-modal');
  var phone = modalCallback.querySelector('#field-tel-modal');
  var question = modalCallback.querySelector('.form__textarea--modal');
  var storageLogin = '';
  var storageTel = '';

  var hideElements = function () {
    modalCallback.classList.remove('form--show');
    overlay.classList.remove('overlay--show');
    document.body.classList.remove('overflow-hidden');
    document.body.removeAttribute('class');
  };

  var onBtnCallbackClick = function (evt) {
    evt.preventDefault();
    modalCallback.classList.add('form--show');
    overlay.classList.add('overlay--show');
    document.body.classList.add('overflow-hidden');

    if (localStorage.getItem('name') === true && localStorage.getItem('phone') === true) {
      name.value = storageLogin;
      phone.value = storageTel;
      question.focus();
    } else {
      name.focus();
    }
  };

  var onBtnCallbackCloseClick = function (evt) {
    evt.preventDefault();
    hideElements();
  };

  var onOverlayClick = function (evt) {
    evt.preventDefault();
    hideElements();
  };

  var modalEscKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE_ESC) {
      evt.preventDefault();
      if (modalCallback.classList.contains('form--show')) {
        hideElements();
      }
    }
  };

  btnCallback.addEventListener('click', onBtnCallbackClick);
  btnCallbackClose.addEventListener('click', onBtnCallbackCloseClick);
  overlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', modalEscKeydown);
})();
