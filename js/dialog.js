'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = window.setup.setup.querySelector('.setup-user-name');
  var setupFireballWrap = window.setup.setup.querySelector('.setup-fireball-wrap');

  var wizardEyes = window.setup.setup.querySelector('.wizard-eyes');
  var wizardCoat = window.setup.setup.querySelector('.wizard-coat');

  var currentColorEyes = window.util.randomizeElement(window.setup.EYES_COLORS);
  var currentFireballColor = window.util.randomizeElement(window.setup.FIREBALL_COLORS);
  var currentCoatColor = window.util.randomizeElement(window.setup.COAT_COLORS);


  setupOpen.addEventListener('click', window.util.openPopUp);

  setupOpen.addEventListener('keydown', window.util.onEnterOpen);

  setupClose.addEventListener('click', window.util.closePopUp);

  setupClose.addEventListener('keydown', window.util.onEnterClose);

  wizardEyes.addEventListener('click', function () {
    currentColorEyes = window.util.randomizeElement(window.setup.EYES_COLORS);
    wizardEyes.style.fill = currentColorEyes;
    window.setup.setup.querySelector('input[name="eyes-color"]').value = currentColorEyes;
  });

  setupFireballWrap.addEventListener('click', function () {
    currentFireballColor = window.util.randomizeElement(window.setup.FIREBALL_COLORS);
    setupFireballWrap.style.background = currentFireballColor;
    window.setup.setup.querySelector('input[name="fireball-color"]').value = currentFireballColor;
  });

  wizardCoat.addEventListener('click', function () {
    currentCoatColor = window.util.randomizeElement(window.setup.COAT_COLORS);
    wizardCoat.style.fill = currentCoatColor;
    window.setup.setup.querySelector('input[name="coat-color"]').value = currentCoatColor;
  });

  setupUserName.addEventListener('focusin', function () {
    document.removeEventListener('keydown', window.util.onPopupEscPress);
  });

  setupUserName.addEventListener('focusout', function () {
    document.addEventListener('keydown', window.util.onPopupEscPress);
  });


  var dialogHandler = window.setup.setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.setup.style.top = (window.setup.setup.offsetTop - shift.y) + 'px';
      window.setup.setup.style.left = (window.setup.setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (dragEvt) {
          dragEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
