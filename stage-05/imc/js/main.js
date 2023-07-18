import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { IMC, notNumber } from './utils.js';

const btnCalc = document.querySelector('form > button');

function handleBtnCalc(e) {
  const weight = Number(document.querySelector('#weight').value);
  const height = Number(document.querySelector('#height').value);
  e?.preventDefault();

  const weightOrHeightIsNotANumber = (!weight || !height || weight <= 0 || height <= 0) || (notNumber(weight) || notNumber(height))
  
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  Modal.message.textContent = `Seu IMC é de ${ IMC(weight, height)}`;
  Modal.open();
}

btnCalc.addEventListener('click', handleBtnCalc);
window.addEventListener('keydown', (e) => {
  if(e.key == 'Enter') {
    handleBtnCalc()
  }
})