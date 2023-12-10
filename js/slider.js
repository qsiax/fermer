const commentsSwiper = new Swiper('.comments__content', {
    speed: 600,
    spaceBetween: 50,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.comments__arrow-next',
      prevEl: '.comments__arrow-prev',
    },
});