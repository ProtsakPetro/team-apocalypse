  const swiper = new Swiper(".mySwiper", {
        slidesPerViev: 1,
        spaseBetween: 10,
        
        loop: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });