(function($){
  $(function(){
    //navbar change color on scroll
    var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});


    // update scrollbars
    $('.side-nav').perfectScrollbar('update');
    $('.card-reveal').perfectScrollbar('update');
    $('.side-nav').perfectScrollbar();
    $('.card-reveal').perfectScrollbar();
    
    $('.button-collapse').sideNav({
      closeOnCLick: true
    });
    $('.parallax').parallax();

    //Smooth Scroll
    $('.scrollspy').click(function (e) {
      let linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - 50
      }, 1000);
      e.preventDefault(); //removes section name from url
    });
  });

  //Scroll Fire function - animates when the user scrolls within a certain range (200)
  $(function(){
    var options = [
      {selector: '#profile', offset: 200, callback: '$("#profile").addClass("animated fadeInLeft").css("visibility", "visible")'},
      {selector: '#profile', offset: 200, callback: '$("#contact").addClass("animated fadeIn").css("visibility", "visible")'},
      {selector: '#email-contact', offset: 200, callback: '$("#email-contact").addClass("animated fadeInLeft").css("visibility", "visible")'},
      {selector: '#phone-contact', offset: 200, callback: '$("#phone-contact").addClass("animated fadeInUp").css("visibility", "visible")'},
      {selector: '#location', offset: 200, callback: '$("#location").addClass("animated fadeInRight").css("visibility", "visible")'},
      {selector: '#skills', offset: 200, callback: '$("#skills").addClass("animated fadeIn").css("visibility", "visible")'},
      {selector: '#services', offset: 200, callback: '$("#services").addClass("animated fadeIn").css("visibility", "visible")'},
      {selector: '#projects', offset: 200, callback: '$("#projects").addClass("animated fadeIn").css("visibility", "visible")'},
      {selector: '#email', offset: 200, callback: '$("#email").addClass("animated fadeIn").css("visibility", "visible")'},
      {selector: '.social-icon', offset: 200, callback: '$(".social-icon").addClass("animated rubberBand").css("visibility", "visible")'}
    ];

    Materialize.scrollFire(options);
  }); //end scroll fire

  $(window).load(function() { 
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow'); 
	}); 
    
})(jQuery); // end of jQuery name space