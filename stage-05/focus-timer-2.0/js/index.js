import { Timer } from './timer.js';
import { Controls } from './controls.js';
import { Events } from './events.js';

const controls = Controls();
const timer = Timer({
  resetControls: controls.resetControls,
  disableOrEnableButton: controls.disableOrEnableButton,
});

Events({ timer, controls });