$(document).ready(function () {
  //Main Slider
  $(".main__slide").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  // Products box Slider
  $(".product-box-lists").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Testimonials Box Slider
  $(".testimonials-box__slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });

  // News-Box
  //News box Slider
  $(".news-box__lists").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Brand Slider
  $(".brand-box__lists").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items:5,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
