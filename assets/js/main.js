import { menuScroll } from "./menu_scroll.js";
import { setupMenu } from "./menu_mobile.js";
import { setupSlideEffect } from "./slideSections.js";
import { typeWrite } from "./typeWrite.js";
import { swiperInit } from "./swiper_init.js";

menuScroll();
setupMenu();
setupSlideEffect();
swiperInit();
const typewriterElement = document.querySelector(".typewriter");
if (typewriterElement) {
  typeWrite(typewriterElement);
}