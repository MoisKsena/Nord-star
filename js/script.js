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
  });


AOS.init();
