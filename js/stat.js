'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var PADDING = 20;
var FONT_VERT_GAP = 5;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 16;
var BAR_Y = CLOUD_Y + PADDING * 2 + TEXT_HEIGHT * 2 + FONT_VERT_GAP;


var createCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var createText = function(ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  createCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  createCloud(ctx, 100, 10, '#fff');

  createText(ctx, 'Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  createText(ctx, 'Список результатов:', CLOUD_X + PADDING,  CLOUD_Y + PADDING + TEXT_HEIGHT + FONT_VERT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    createText(ctx, players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, BAR_Y + BAR_HEIGHT + FONT_VERT_GAP * 2);
    if (players[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%, ' + Math.random() * (100) + '%)';
    }
    var currentBarHeight = ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_HEIGHT;
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (BAR_Y + (BAR_HEIGHT - currentBarHeight)), BAR_WIDTH, currentBarHeight);
    createText(ctx, Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, BAR_Y + (BAR_HEIGHT - currentBarHeight) - (FONT_VERT_GAP + TEXT_HEIGHT));
  }
};
