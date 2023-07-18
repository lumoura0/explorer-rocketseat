const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const imgCookieClosed = document.querySelector('#screen1 img');

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

async function newPhrase() {
  try {
    return await fetch('./dev/phrases.txt')
      .then((response) => response.text())
      .then((text) => {
        const phrases = text.split('\n');
        const max = phrases.length - 1;
        const min = 0;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        return phrases[random];
      });
  } catch (erro) {
    console.error(erro);
  }
}

async function openCookie(e) {
  const phrase = await newPhrase();

    toggleScreen();

  screen2.querySelector('p').textContent = phrase;
}

imgCookieClosed.addEventListener('click', openCookie);
screen2.querySelector('button').addEventListener('click', toggleScreen)


