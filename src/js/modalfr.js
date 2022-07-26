(() => {
  const refs = {
    openFrmodalBtn: document.querySelector('[data-frmodal-open]'),
    closeFrmodalBtn: document.querySelector('[data-frmodal-close]'),
    frmodal: document.querySelector('[data-frmodal]'),
    body: document.querySelector('body'),
  };

  refs.openFrmodalBtn.addEventListener('click', toggleFrmodal);
  refs.closeFrmodalBtn.addEventListener('click', toggleFrmodal);

  function toggleFrmodal() {
    refs.frmodal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
