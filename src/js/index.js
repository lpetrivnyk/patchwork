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

$(document).on('click', '.mobile-menu li.menu-item-has-children', function (event) {
  event.preventDefault();
  $('.mobile-menu li.menu-item-has-children .sub-menu').slideUp();
  $(this).find('.sub-menu').slideDown();
})


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
