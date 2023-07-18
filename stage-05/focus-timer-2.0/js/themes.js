export default function Themes({ buttonLigthMode, buttonDarkmode }) {
  function darkMode() {
    document.body.style.backgroundColor = '#121214';
    document.documentElement.style.setProperty('--primary-color', '#fff');
    document.documentElement.style.setProperty('--card-bg-color', '#29292E');
    document.documentElement.style.setProperty(
      '--card-bg-colo-clicked',
      '#0A3442'
    );
  }

  function ligthMode() {
    document.body.style.backgroundColor = 'initial';
    document.documentElement.style.setProperty('--primary-color', '#323238');
    document.documentElement.style.setProperty('--card-bg-color', '#e1e1e6');
    document.documentElement.style.setProperty(
      '--card-bg-colo-clicked',
      '#02799d'
    );
  }

  function change() {
    buttonLigthMode.classList.toggle('hide');
    buttonDarkmode.classList.toggle('hide');

    let isDark = !buttonDarkmode.classList.contains('hide');

    if (isDark) {
      darkMode();
    } else {
      ligthMode();
    }
  }

  return { change };
}
