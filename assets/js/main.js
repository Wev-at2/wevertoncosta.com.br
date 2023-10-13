// main.js
import { typeWrite } from "./typeWrite.js";
import { setupMenu } from "./menu_mobile.js";
import { phoneNumberUtils } from "./contactForm.js";
import { setupFormSubmit } from "./contactForm.js"; 
import "./menu.js";
import "./slick_slide.js";

typeWrite(document.querySelector(".typewriter"));
setupMenu();

const phoneInput = document.getElementById("wc-contact__phone");

phoneInput.addEventListener("input", function () {
  phoneNumberUtils.format(this);
});
setupFormSubmit();
