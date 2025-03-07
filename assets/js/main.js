import { menuScroll } from "./menu_scroll.js";
import { setupMenu } from "./menu_mobile.js";
import { setupSlideEffect } from "./slideSections.js";
import { typeWrite } from "./typeWrite.js";
import { swiperInit } from "./swiper_init.js";
import { toggleContent } from "./toggleContent.js";

menuScroll();
setupMenu();
setupSlideEffect();
swiperInit();
const typewriterElement = document.querySelector(".typewriter");
if (typewriterElement) {
  typeWrite(typewriterElement);
}

// Adiciona o evento de clique para o botão "Leia mais"
const readButton = document.getElementById('read-button');
if (readButton) {
  readButton.addEventListener('click', toggleContent);
}