// Скрипт для плавного скролла в MacOS и ios -- Начало --
// Script for smooth scrolling only because of MacOS and ios -- Start --
import {scrollTo} from '../utils/scroll-to';
const initScrollToAnchor = () => {
  const anchorLinks = document.querySelectorAll('[data-target]');
  if (anchorLinks.length) {
    anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const currentBlock = link.dataset.target;
        const blockTop = document.getElementById(currentBlock).offsetTop;
        e.preventDefault();
        scrollTo(blockTop, 400);
      });
    });
  }
};
export {initScrollToAnchor};
// Скрипт для плавного скролла в MacOS и ios -- Конец --
// Script for smooth scrolling only because of MacOS and ios -- End --
