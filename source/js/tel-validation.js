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

