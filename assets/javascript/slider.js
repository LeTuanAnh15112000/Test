$(document).ready(function(){
    $('#slider1').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
    $('#slider2').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      arrows: false,
      adaptiveHeight: true,
    });
    $('#slider3').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4
    });
});