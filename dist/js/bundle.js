!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){$(document).on("click",".burger-open",(function(e){$(this).hasClass("active")?$(".mobile-menu").fadeOut():$(".mobile-menu").fadeIn()})),$(document).on("click",".burger",(function(e){$(this).hasClass("active")?($(".burger").removeClass("active"),$(".mobile-menu").fadeOut()):($(".burger").addClass("active"),$(".mobile-menu").fadeIn())})),$(document).on("click",".mobile-menu li.menu-item-has-children>a",(function(e){e.preventDefault(),$(".mobile-menu li.menu-item-has-children .sub-menu").slideUp(),$(this).closest("li.menu-item-has-children").find(".sub-menu").slideDown()})),$(document).on("click",".btn-more",(function(e){e.preventDefault(),$(this).closest(".wp-text").find(".more-txt").slideDown(),$(this).hide(),$(this).closest(".wp-text").find(".btn-less").show()})),$(document).on("click",".btn-less",(function(e){e.preventDefault(),$(this).closest(".wp-text").find(".more-txt").slideUp(),$(this).hide(),$(this).closest(".wp-text").find(".btn-more").show()})),AOS.init({disable:"mobile",startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!0,disableMutationObserver:!1,once:!0}),$("[data-fancybox]").fancybox({buttons:["close"],wheel:!1,transitionEffect:"slide",loop:!0,toolbar:!1,clickContent:!1});new Swiper(".gallerySwiper",{slidesPerView:1,spaceBetween:0,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,navigation:{nextEl:".page-gallery .swiper-button-next",prevEl:".page-gallery .swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}}}),new Swiper(".reviewsSwiper",{slidesPerView:1,spaceBetween:40,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".page-reviews .swiper-pagination",clickable:!0},navigation:{nextEl:".page-reviews .swiper-button-next",prevEl:".page-reviews .swiper-button-prev"},breakpoints:{1024:{slidesPerView:2,spaceBetween:30}}})},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map