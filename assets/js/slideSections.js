export function setupSlideEffect() {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal(".wc-main__banner", {
        duration: 2000,
        distance: "50px",
    });
    // sr.reveal(".wc-about", { duration: 3000 });
    sr.reveal(".wc-skills li", {
        duration: 2000,
        distance: "50px",
        interval: 200,
    });
    sr.reveal(".wc-about", {
        duration: 1500,
        origin: "bottom",
        delay: 300,
        easing: "ease-in-out",
        interval: 200,
        opacity: 0,
    });
    sr.reveal(".wc-experience", {
        duration: 1500,
        origin: "bottom",
        delay: 300,
        easing: "ease-in-out",
        interval: 200,
        scale: 0.85,
        opacity: 0,
    });
    sr.reveal(".wc-projects__items", {
        duration: 1500,
        origin: "bottom",
        delay: 300,
        easing: "ease-in-out",
        interval: 200,
        scale: 0.85,
        opacity: 0,
    });
}
