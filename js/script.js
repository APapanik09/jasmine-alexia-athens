if(document.getElementById("heart")){
  const heart = document.getElementById("heart");

  heart.addEventListener("click", function(){
    heart.classList.toggle('aimerCouleur');
  })}

if(document.getElementsByClassName("swiper-screenshots")){

const swiperLP = new Swiper('.swiper-screenshots', {
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
}
  //Heart button

  //App filter swiper

  const swiperApp = new Swiper('.swiper-filters', {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 10,
  });

  const swiperArt = new Swiper('.swiper-featured-artworks',{
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 10,
  })


