import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const player = new Player('vimeo-player');
const TIME_KEY = 'videoplayer-current-time';
const timeValue = localStorage.getItem(TIME_KEY);

player.setCurrentTime(JSON.parse(timeValue));

player.on(
  'timeupdate',
  throttle(data => {
    const time = data.seconds;
    localStorage.setItem(TIME_KEY, JSON.stringify(time));
  }, 1000)
);
