export function setupSlideEffect() {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal(".wc-main__banner", {
        duration: 2000,
        distance: "50px",
    });
    sr.reveal(".wc-about", { duration: 3000 });
    sr.reveal(".wc-skills li", {
        duration: 1500,
        distance: "50px",
        interval: 200,
    });
    sr.reveal(".wc-experience *", { duration: 1000 });
    // sr.reveal(".wc-projects", { duration: 1500 });
}
