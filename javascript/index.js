$(function () {
  // 전체 페이지 넘기기
  var mainSwiper = new Swiper('.sc_swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.sc_swiper .next',
      prevEl: '.sc_swiper .prev',
    },
  });

  // gnb 열고 닫고

  menu = gsap.to('header .over_txt span', {
    y: 0,
    duration: 1.5,
    stagger: 0.1,
  });
  menu.pause();

  intro = gsap.to('.sc_intro', {
    scale: 1.4,
    duration: 1.5,
    ease: 'expo.out',
    onComplete: function () {
      $('.sc_main').addClass('show');
      $('.sc_intro').addClass('hide');
      txtMotion.restart();
    },
  });
  intro.pause();

  $('.sc_intro .btn_work').click(function (e) {
    e.preventDefault();
    intro.restart();
  });

  $('.gnb_area').hide();
  $('.logo_area .btn_menu').click(function (e) {
    e.preventDefault();
    $('.gnb_area').slideToggle();
    menu.restart();
  });

  function txtAni() {
    const activeSlide = document.querySelector('.sc_main .swiper-slide-active');

    const headTxt = new SplitType('.sc_main .swiper-slide-active .title', {
      types: 'words, chars',
    });

    txtMotion = gsap.timeline({});

    txtMotion
      .fromTo(
        headTxt.chars,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.5,
          duration: 1.5,
        }
      )
      .fromTo(
        activeSlide.querySelector('.info_box'),
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        activeSlide.querySelector('.btn_sc'),
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      )
      .to('.sc_main .swiper-slide-active .main_bg', {
        scale: 1.2,
        duration: 0.5,
        delay: 1.5,
        ease: 'expo.out',
      });
    txtMotion.pause();
  }

  txtAni();

  mainSwiper.on('slideChangeTransitionStart', function () {
    txtAni();
    txtMotion.restart();
  });
}); //지우지말것!!
