if(document.getElementsByClassName("swiper-screenshots")){

const swiper = new Swiper('.swiper-screenshots', {
    loop: true,
  
    pagination: {

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
  //Heart button
if(document.getElementById("heart")){
  const heart = document.getElementById("heart");

  heart.addEventListener("click", function(){
    heart.innerHTML = '<i style="color:red;"class="bi bi-chat-heart-fill"></i>';
  })}

  //App filter swiper

  const swiperApp = new Swiper('.swiper-filters', {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 10,
  });

  const swiperArt = new Swiper('.swiper-featured-artworks',{
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 20,
  })


