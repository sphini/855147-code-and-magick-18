'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');

  window.setup = {
    setup: setup,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    COAT_COLORS: COAT_COLORS
  };


  var wizards = [];
  var wizardsCount = 4;

  for (var i = 0; i < wizardsCount; i++) {
    wizards.push({
      name: window.util.randomizeElement(WIZARD_NAMES) + ' ' + window.util.randomizeElement(WIZARD_SURNAMES),
      coatColor: window.util.randomizeElement(COAT_COLORS),
      eyesColor: window.util.randomizeElement(EYES_COLORS)
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

})();
