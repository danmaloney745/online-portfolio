(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').click(function (e) {
      let linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - 50
      }, 1000);
      e.preventDefault(); //removes section name from url
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space