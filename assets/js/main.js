// main.js
import "./slick_slide.js";
import "./menu.js";
import { setupMenu } from "./menu_mobile.js";
import { typeWrite } from "./typeWrite.js";
// import { phoneNumberUtils } from "./contactForm.js";
// import { setupFormSubmit } from "./contactForm.js"; 

typeWrite(document.querySelector(".typewriter"));
setupMenu();

// const phoneInput = document.getElementById("wc-contact__phone");
// phoneInput.addEventListener("input", function () {
//   phoneNumberUtils.format(this);
// });
// setupFormSubmit();
