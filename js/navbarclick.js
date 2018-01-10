$(function () {
        $("[href^='#']").on("click", function (e)  {
             var target = $(this).attr('href');

              var scrollTop = $( target ).offset().top-$('.header').height()-$('.header').outerHeight();

              if ( target =='#home'){
                 scrollTop = 0;
              }
               
              $("body, html").animate({
                      scrollTop: scrollTop
                  }, 500);

              e.preventDefault();
        });
    });