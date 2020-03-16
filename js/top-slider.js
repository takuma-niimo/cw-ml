$(document).ready(function(){
  $('.top-slider').slick({
    autoplay: true,
    autoplayspeed: 5000,
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    cssEase: 'linear',
    arrows: false,
    responsive: [{
      breakpoint: 576
    }]
  });
});
