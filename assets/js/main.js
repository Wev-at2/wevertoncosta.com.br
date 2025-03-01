import { menuScroll } from "./menu_scroll.js";
import { setupMenu } from "./menu_mobile.js";
import { setupSlideEffect } from "./slideSections.js";
import { typeWrite } from "./typeWrite.js";

menuScroll();
setupMenu();
setupSlideEffect();
typeWrite(document.querySelector(".typewriter"));
// ============================================================
// document.addEventListener("DOMContentLoaded", function () {
//     import { slickSlide } from "./slick_slide.js";
//     slickSlide();
// });