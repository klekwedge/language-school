import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import isWebp from './modules/webp.js';
import burgerMenu from './modules/burger-menu.js';
import animButton from './modules/anim-button.js';

window.addEventListener('DOMContentLoaded', () => {
  isWebp();
  burgerMenu();
  animButton();
});
