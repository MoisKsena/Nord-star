  $(document).ready(function(){
  //   $("#sticker").sticky({
  //     topSpacing: 500,
  //     bottomSpacing: 0,
  //     widthFromWrapper: true,
  //   }); window.pageYOffset

  $(window).scroll(function() {
        if($(this).scrollTop() >= 5300 && $(this).scrollTop() <= 5900) {
            $('#sticker').addClass('fixed');
            $('#sticker').removeClass('bottom');
        }
        else{
            $('#sticker').removeClass('fixed');
             $('#sticker').addClass('bottom');
        }
    });

    
  $('.feedback__text').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  });

  //sticky block

  $('#aboutImage').stickySidebar({
    topSpacing: 100,
    bottomSpacing: 0
});  

});


AOS.init();

