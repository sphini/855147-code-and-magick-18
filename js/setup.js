'use strict';

document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: WIZARD_NAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: WIZARD_NAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: WIZARD_NAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: WIZARD_NAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomizeElement = function (randomizedElement) {
  return randomizedElement[Math.floor(Math.random() * randomizedElement.length)];
};

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizardFullName = randomizeElement(WIZARD_NAMES) + ' ' + randomizeElement(WIZARD_SURNAMES);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardFullName;

  wizardElement.querySelector('.wizard-coat').style.fill = randomizeElement(wizard.coatColor);

  wizardElement.querySelector('.wizard-eyes').style.fill = randomizeElement(wizard.eyesColor);

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
