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

function atualizarFooter() {
   const span = document.querySelector('span.year');
   const date = new Date();
   span.innerHTML = date.getFullYear();
}
atualizarFooter();

function responsiveHeader() {
   const divMenu = document.querySelector('body > .menu');
   const links = [...divMenu.querySelectorAll('nav ul li, nav ul li a')];
   const barsIcon = document.querySelector('i.fa-bars');
   const xMarkIcon = document.querySelector('i.fa-xmark');

   // interação de abrir e fechar
   barsIcon.addEventListener('click', () => {
      divMenu.classList.toggle('ativo');
   });
   xMarkIcon.addEventListener('click', () => {
      divMenu.classList.toggle('ativo');
   });

   // se ouver click nos links, fecha menu e scroll até o lugar
   links.forEach((element) => {
      element.addEventListener('click', () => {
         divMenu.classList.remove('ativo');
      });
   });

   // se ouver rezise no site, o menu é desabilitado
   window.addEventListener('resize', () => {
      if (window.innerWidth >= 840) {
         divMenu.classList.remove('ativo');
         // barsIcon.style.display = 'none';
      }
   });
}
responsiveHeader();
