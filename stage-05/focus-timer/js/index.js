import Controls from './controls.js';
import Timer from './timer.js';
import Events from './events.js';
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimer,
  minutesDysplay,
  secondsDysplay,
} from './elements.js';


const controls = Controls({
  buttonPause,
  buttonStop,
  buttonPlay,
  buttonTimer,
});

const timer = Timer({
  minutesDysplay,
  secondsDysplay,
  resetControls: controls.reset,
});

Events({controls, timer})