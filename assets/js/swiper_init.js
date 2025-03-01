export function swiperInit() {
  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.wc-projects__items', {
      loop: true,
      effect: "coverflow",
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 20,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  });

}