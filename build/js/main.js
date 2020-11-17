'use strict';

(function () {
  var inputTel = document.getElementById('field-tel');
  var inputTelModal = document.getElementById('field-tel-modal');
  var MIN_TITLE_LENGTH = 22;

  var phoneMask = function (tel) {
    window.iMask.phone(tel, {
      mask: '+{7} (000) 000 - 00 - 00',
    });
  };

  var onInputTel = function (tel) {
    var numberLength = tel.value.length;

    if (numberLength < MIN_TITLE_LENGTH) {
      tel.setCustomValidity('Введите пожалуйста 10 цифр номера телефона.');
    } else {
      tel.setCustomValidity('');
    }
    tel.reportValidity();
  };

  var onInputTelForm = function () {
    phoneMask(inputTel);
    onInputTel(inputTel);
  };

  var onInputTelModal = function () {
    phoneMask(inputTelModal);
    onInputTel(inputTelModal);
  };

  inputTel.addEventListener('input', onInputTelForm);
  inputTelModal.addEventListener('input', onInputTelModal);
})();

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
  };

  var onBtnCallbackClick = function (evt) {
    evt.preventDefault();
    modalCallback.classList.add('form--show');
    overlay.classList.add('overlay--show');

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
