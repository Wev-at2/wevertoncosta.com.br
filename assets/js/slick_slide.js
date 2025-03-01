$(document).ready(function () {
    $(".wc-projects__items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 900,
        infinite: true,
        centerMode: true,
        centerPadding: "-10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    });

    $(".slick-prev").attr("aria-label", "Anterior");
    $(".slick-next").attr("aria-label", "Próximo");
});
// export function slickSlide() {
// }
