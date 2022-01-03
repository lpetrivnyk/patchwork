// $(window).on('scroll load', function () {
//   var height = $(window).scrollTop();
//   if (height > 100) {
//     $('header').addClass('header-fixed');
//   } else {
//     $('header').removeClass('header-fixed');
//   }
// });

//Mobile menu
$(document).on('click', '.burger-open', function (event) {
  if ($(this).hasClass('active')) {
    $('.mobile-menu').fadeOut();
  } else {
    $('.mobile-menu').fadeIn();
  }
});
//Mobile menu
$(document).on('click', '.burger', function (event) {
  if ($(this).hasClass('active')) {
    $('.burger').removeClass('active');
    $('.mobile-menu').fadeOut();
  } else {
    $('.burger').addClass('active');
    $('.mobile-menu').fadeIn();
  }
});

$(document).on('click', '.mobile-menu li.menu-item-has-children>a', function (event) {
  event.preventDefault();
  $('.mobile-menu li.menu-item-has-children .sub-menu').slideUp();
  $(this).closest('li.menu-item-has-children').find('.sub-menu').slideDown();
});

$(document).on('click', '.btn-more', function (event) {
  event.preventDefault();
  $(this).closest('.wp-text').find('.more-txt').slideDown();
  $(this).hide();
  $(this).closest('.wp-text').find('.btn-less').show();
});
$(document).on('click', '.btn-less', function (event) {
  event.preventDefault();
  $(this).closest('.wp-text').find('.more-txt').slideUp();
  $(this).hide();
  $(this).closest('.wp-text').find('.btn-more').show();
});


//Menu
// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();
//   if ($('.mobile-menu').hasClass('active')) {
//     $('.burger').removeClass('active');
//     $('.mobile-menu').removeClass('active');
//     $('html').removeClass('hidden');
//   }
// });

// jQuery(function ($) {
//   $(document).mouseup(function (e) {
//     var modalBox = $(".modal .box");
//     if (!modalBox.is(e.target) &&
//         modalBox.has(e.target).length === 0) {
//       $('html').removeClass('hidden');
//       $('.modal').removeClass('active');
//     }
//     var shopHeaderBox = $(".shop-header-box");
//     if (!shopHeaderBox.is(e.target) &&
//       shopHeaderBox.has(e.target).length === 0) {
//       $('.shop-header-box').fadeOut();
//     }
//   });
// });


AOS.init({
  // Global settings:
  disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  // easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  // mirror: true, // whether elements should animate out while scrolling past them
  // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$('[data-fancybox]').fancybox({
  // Options will go here
  buttons : [
    'close'
  ],
  wheel : false,
  transitionEffect: "slide",
  // thumbs          : false,
  // hash            : false,
  loop            : true,
  // keyboard        : true,
  toolbar         : false,
  // animationEffect : false,
  // arrows          : true,
  clickContent    : false
});

var gallerySwiper = new Swiper(".gallerySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".page-gallery .swiper-button-next",
    prevEl: ".page-gallery .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".page-reviews .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".page-reviews .swiper-button-next",
    prevEl: ".page-reviews .swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});