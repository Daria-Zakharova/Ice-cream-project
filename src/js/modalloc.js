(() => {
  const refs = {
    openLocmodalBtn: document.querySelector('[data-locmodal-open]'),
    closeLocmodalBtn: document.querySelector('[data-locmodal-close]'),
    locmodal: document.querySelector('[data-locmodal]'),
    body: document.querySelector('body'),
  };

  refs.openLocmodalBtn.addEventListener('click', toggleLocmodal);
  refs.closeLocmodalBtn.addEventListener('click', toggleLocmodal);

  function toggleLocmodal() {
    refs.locmodal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
