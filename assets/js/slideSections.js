export function setupSlideEffect() {
  window.sr = ScrollReveal({ reset: true });
  sr.reveal(".wc-main__banner", { duration: 2000 });
  sr.reveal(".wc-about *", { duration: 1500 });
  sr.reveal(".wc-skills", { duration: 1000 });
  sr.reveal(".wc-experience *", { duration: 1000 });
  sr.reveal(".wc-projects", { duration: 1500 });
}
