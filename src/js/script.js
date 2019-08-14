'use strict';

var players = Array.from(document.querySelectorAll('.js-video,.js-audio')).map(function (player) {
  return new Plyr(player);
});
players.forEach(function (instance, index) {
  instance.on('play', function () {
    players.forEach(function (instance1, index1) {
      if (instance != instance1) {
        instance1.pause();
      }
    });
  });
});