$(document).ready(function () {
    // Inicialize o carrossel Slick
    $(".wc-projects__items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        centerPadding: "3px",
        speed: 900,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".slick-prev").attr("aria-label", "Anterior");
    $(".slick-next").attr("aria-label", "Próximo");
});
// export function slickSlide() {
// }
