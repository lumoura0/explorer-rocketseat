export function Sounds() {
  const sounds = {
    forest: new Audio('./sounds/floresta.wav'),
    rain: new Audio('./sounds/chuva.wav'),
    marketplace: new Audio('./sounds/cafeteria.wav'),
    fire: new Audio('./sounds/lareira.wav'),
    clickButtons: new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
    ),
    timerEnd: new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
    ),
  };

  for (let sound in sounds) {
    
    sounds[sound].volume = 0.5;
  }

  function setVolume(audio, volume) {
    sounds[audio].volume = volume;
  }

  function handleSound() {
    const sound = this.id;
    this.classList.toggle('clicked');

    if (sounds[sound].paused) {
      sounds[sound].loop = true;
      sounds[sound].play();
    } else {
      sounds[sound].pause();
    }
  }

  return {
    handleSound,
    setVolume,
    sounds,
  };
}
