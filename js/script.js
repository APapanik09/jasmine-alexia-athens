
const swiper = new Swiper('.swiper-screenshots', {
    loop: true,
  
  slidesPerView:1,
  centeredSlides:true,  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      1200:{
        slidesPerView:3,
        spaceBetween:30,
      }
    }
  });
