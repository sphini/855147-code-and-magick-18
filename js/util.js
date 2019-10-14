'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {

    openPopUp: function () {
      window.setup.setup.classList.remove('hidden');
      document.addEventListener('keydown', window.util.onPopupEscPress);
    },

    closePopUp: function () {
      window.setup.setup.classList.add('hidden');
    },

    onPopupEscPress: function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        window.util.closePopUp();
      }
    },

    onEnterClose: function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        window.util.closePopUp();
      }
    },

    onEnterOpen: function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        window.util.openPopUp();
      }
    },

    randomizeElement: function (randomizedElement) {
      return randomizedElement[Math.floor(Math.random() * randomizedElement.length)];
    }

  };

})();
