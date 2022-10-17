$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Lifesteal Smp", "Survival Smp", "Hypixel Facilities"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Lifesteal Smp", "Survival Smp", "Hypixel Facilities"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

var swiper = new Swiper(".team-1-swiper", {
  navigation: {
    nextEl: ".swiper-button-nexts",
    prevEl: ".swiper-button-prevs",
  },
  loop: true,
  breakpoints: {

    100: {
      slidesPerView: 1.2,
      spaceBetween: 40
    },

    340: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },

    500: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },

    630: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    769: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },

    890: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1090: {
      slidesPerView: 2.5,
      spaceBetween: 40
    },
  }
});


var swiper2 = new Swiper(".team-2-swiper", {
  navigation: {
    nextEl: ".swiper-button-nexts2",
    prevEl: ".swiper-button-prevs2",
  },
  loop: true,
  breakpoints: {

    300: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },

    500: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },

    630: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    769: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },

    890: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1090: {
      slidesPerView: 2.5,
      spaceBetween: 40
    },
  }
});  