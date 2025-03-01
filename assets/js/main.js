import { menuScroll } from "./menu_scroll.js";
import { setupMenu } from "./menu_mobile.js";
import { setupSlideEffect } from "./slideSections.js";
import { typeWrite } from "./typeWrite.js";

menuScroll();
setupMenu();
setupSlideEffect();
const typewriterElement = document.querySelector(".typewriter");
if (typewriterElement) {
  typeWrite(typewriterElement);
}