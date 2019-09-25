'use strict';



document.querySelector('.setup-open').addEventListener('click', function() {
 document.querySelector('.setup').classList.remove('hidden');
});

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
var wizardsCount = 4;

var randomizeElement = function (randomizedElement) {
  return randomizedElement[Math.floor(Math.random() * randomizedElement.length)];
};


for (var i = 0; i < wizardsCount; i++) {
  wizards.push({
    name: randomizeElement(WIZARD_NAMES) + ' ' + randomizeElement(WIZARD_SURNAMES),
    coatColor: randomizeElement(COAT_COLORS),
    eyesColor: randomizeElement(EYES_COLORS)
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
