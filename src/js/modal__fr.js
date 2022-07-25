(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal__fr-open]'),
    closeModalBtn: document.querySelector('[data-modal__fr-close]'),
    modal: document.querySelector('[data-modal__fr]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scrool');
  }
})();
