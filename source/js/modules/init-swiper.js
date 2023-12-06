import Swiper, {Navigation} from 'swiper';
import EffectCarousel from '../utils/effect-carousel.esm.js';

const breakpoint = window.matchMedia('(min-width: 1680px)');

const initSwiper = () => {
  window.translateCoefficient = 16;
  window.modifyCoefficient = 0.55;

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, EffectCarousel],
    effect: 'carousel',
    grabCursor: true,
    loop: true,
    loopAdditionalSlides: 7,
    loopedSlides: 7,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
  });

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      window.translateCoefficient = 16;
      window.modifyCoefficient = 0.55;
    } else {
      window.translateCoefficient = 40;
      window.modifyCoefficient = 0.2;
    }
    swiper.update();
  };

  breakpoint.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

export {initSwiper};
