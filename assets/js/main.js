import "./slick_slide.js";
import "./menu.js";
import { setupMenu } from "./menu_mobile.js";
import { typeWrite } from "./typeWrite.js";
// import { readMore } from "./readMore.js";

setupMenu();
typeWrite(document.querySelector(".typewriter"));
// readMore(document.querySelector(".leiamais"));

// import { phoneNumberUtils } from "./contactForm.js";
// import { setupFormSubmit } from "./contactForm.js"; 
// const phoneInput = document.getElementById("wc-contact__phone");
// phoneInput.addEventListener("input", function () {
//   phoneNumberUtils.format(this);
// });
// setupFormSubmit();
