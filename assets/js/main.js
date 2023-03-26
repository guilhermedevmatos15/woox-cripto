import initAOS from './library/aos.js';
import initSmoothScroll from './library/smoothScroll.js';
import initTypedTexts from './library/typed.js';
initAOS(1800); // 1000 === 1 segundo
initSmoothScroll(150, 2000);

function returnInitialPage() {
   const buttons = Array.from(
      document.querySelectorAll('[data-retornar-topo="true"]')
   );

   buttons.forEach((element, index, arr) => {
      element.addEventListener('click', () => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
         });
      });
   });
}
returnInitialPage();
