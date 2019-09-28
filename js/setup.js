'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var randomizeElement = function (randomizedElement) {
  return randomizedElement[Math.floor(Math.random() * randomizedElement.length)];
};

var currentColorEyes = randomizeElement(EYES_COLORS);
var currentFireballColor = randomizeElement(FIREBALL_COLORS);
var currentCoatColor = randomizeElement(COAT_COLORS);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');

var openPopUp = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopUp = function () {
  setup.classList.add('hidden');
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopUp();
  }
};

setupOpen.addEventListener('click', openPopUp);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopUp();
  }
});

setupClose.addEventListener('click', closePopUp);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopUp();
  }
});

wizardEyes.addEventListener('click', function () {
  currentColorEyes = randomizeElement(EYES_COLORS);
  wizardEyes.style.fill = currentColorEyes;
  setup.querySelector('input[name="eyes-color"]').value = currentColorEyes;
});

setupFireballWrap.addEventListener('click', function () {
  currentFireballColor = randomizeElement(FIREBALL_COLORS);
  setupFireballWrap.style.background = currentFireballColor;
  setup.querySelector('input[name="fireball-color"]').value = currentFireballColor;
});

wizardCoat.addEventListener('click', function () {
  currentCoatColor = randomizeElement(COAT_COLORS);
  wizardCoat.style.fill = currentCoatColor;
  setup.querySelector('input[name="coat-color"]').value = currentCoatColor;
});

setupUserName.addEventListener('focusin', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('focusout', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var wizards = [];
var wizardsCount = 4;

for (var i = 0; i < wizardsCount; i++) {
  wizards.push({
    name: randomizeElement(WIZARD_NAMES) + ' ' + randomizeElement(WIZARD_SURNAMES),
    coatColor: currentCoatColor,
    eyesColor: currentColorEyes
  });
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var f = 0; f < wizards.length; f++) {
  fragment.appendChild(createWizard(wizards[f]));
}

similarListElement.appendChild(fragment);
