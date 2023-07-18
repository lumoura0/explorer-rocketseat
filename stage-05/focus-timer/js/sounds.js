export default function Sounds() {
  const clickButtons = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  );
  const timerEnd = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  );
  const lofi = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  );

  lofi.loop = true;

  function pressButton() {
    clickButtons.play();
  }

  return {
    lofi,
    timerEnd,
    pressButton,
  };
}
