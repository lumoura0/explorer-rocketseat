export const Modal = {
  wrapper: document.querySelector('.wrapper-modal'),
  message: document.querySelector('#result'),
  buttonClose: document.querySelector('.modal button'),
  open() {
    Modal.wrapper.classList.remove('hide');
  },

  close() {
    Modal.wrapper.classList.add('hide');
  },
};

function handleKeydown(event) {
  if (event.key == 'Escape') {
    Modal.close();
  }
}

Modal.buttonClose.addEventListener('click', () => Modal.close());
window.addEventListener('keydown', handleKeydown);
