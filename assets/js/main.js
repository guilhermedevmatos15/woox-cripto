import initAOS from './library/aos.js';
import initSmoothScroll from './library/smoothScroll.js';
import initTypedTexts from './library/typed.js';
initAOS(1800); // 1000 === 1 segundo
initSmoothScroll(0, 2000);
// ! Se não utilizar a library typed, deixe comentada para não gerar erros. Se quiser usar apenas descomente a linha abaixo e configure da maneira que quiser
// initTypedTexts(['one', 'two', 'tree'], 300, 300, 400);
