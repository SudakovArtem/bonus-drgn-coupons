import {mobileVhFix} from './utils/mobile-vh-fix.js';
import './vendor/focus-visible-polyfill';
import {initSwiper} from './modules/init-swiper.js';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initSwiper();
  });
});
