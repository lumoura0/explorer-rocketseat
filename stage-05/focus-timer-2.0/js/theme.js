import { buttonLightMode, buttonDarkMode } from './elements.js';

export function changeTheme() {
  buttonLightMode.classList.toggle('hide');
  buttonDarkMode.classList.toggle('hide');

  const darkMode = document.body.id == 'darkMode';
  if (darkMode) {
    document.body.id = '';
  } else {
    document.body.id = 'darkMode';
  }
}
