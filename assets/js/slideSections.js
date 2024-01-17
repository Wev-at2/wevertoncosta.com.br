export function setupSlideEffect() {
  window.sr = ScrollReveal({ reset: true });
  sr.reveal(".wc-main__banner", { duration: 2000 });
  sr.reveal(".wc-about *", { duration: 2000 });
  sr.reveal(".wc-skills", { duration: 2000 });
  sr.reveal(".wc-experience *", { duration: 2000 });
  sr.reveal(".wc-projects", { duration: 2000 });
}
