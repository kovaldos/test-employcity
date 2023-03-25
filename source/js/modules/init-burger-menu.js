// Меню бургер -- Начало --
// Burger menu -- Start --
const initBurgerMenu = () => {
  const burgerBtns = document.querySelectorAll('[data-burger-btn]');
  if (burgerBtns.length) {
    const menuBody = document.querySelector('[data-burger-body]');
    burgerBtns.forEach((burgerBtn) => {
      burgerBtn.addEventListener('click', () => {
        document.body.classList.toggle('scroll-lock');
        burgerBtn.classList.toggle('is-active');
        menuBody.classList.toggle('is-active');
      });
      menuBody.addEventListener('click', (e) => {
        const burgerLinks = menuBody.querySelectorAll('.burger__link');
        burgerLinks.forEach((burgerLink) => {
          if (e.target === burgerLink && menuBody.classList.contains('is-active')) {
            document.body.classList.remove('scroll-lock');
            burgerBtn.classList.remove('is-active');
            menuBody.classList.remove('is-active');
          }
        });
      });
    });
  }
};
export {initBurgerMenu};
// Меню бургер -- Конец --
// Burger menu -- End --
