$(document).ready(function () {
  $(".wc-projects__items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    // autoplay: true,
    // autoplaySpeed: 9000,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
