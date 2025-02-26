$(document).ready(function(){
    //Main Slider
    $(".main__slide").owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    // Products box Slider
    $('.product-box-lists').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
  });

