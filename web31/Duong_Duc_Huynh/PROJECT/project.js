jQuery(document).ready(function ($) {
    		 $('.counter').counterUp({
         delay: 10,
         time: 5000
		     })
		 });
	(function($) {
   	 function headerStyle() {
        if($('body').length){
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-top');
            if (windowpos >= 250) {
                scrollLink.addClass('open');
            } else {
                scrollLink.removeClass('open');
            }
        }
    	} 
    	headerStyle(); 
    	 if($('.scroll-to-target').length){
    	 	    		  $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
           // animate
           $('html, body').animate({
               scrollTop: $(target).offset().top
             }, 1000);
    
        });
    	 }
	    $(window).on('scroll', function() {
	        headerStyle();
	    }); 
	})(window.jQuery);

	if (window.innerWidth > 1000) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >=123) {
                $('.navbar-custom').addClass('fixed_bn');
                
            }   
            else {
                $('.navbar-custom').removeClass('fixed_bn');
                
            }
        });
   	 }  







   	 
   
$('a[href*="#"]')
  // Remove links that don't actually link to anything
			  .not('[href="#"]')
			  .not('[href="#0"]')
			  .click(function(event) {
			    // On-page links
			    if (
			      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			      && 
			      location.hostname == this.hostname
			    ) {
			      // Figure out element to scroll to
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			      // Does a scroll target exist?
			      if (target.length) {
			        // Only prevent default if animation is actually gonna happen
			        event.preventDefault();
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000, function() {
			          // Callback after animation
			          // Must change focus!
			         // var $target = $(target);
			         // $target.focus();
			         //  if ($target.is(":focus")) { // Checking if the target was focused
			         //    return false;
			         //  } else {
			         //    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			         //    $target.focus(); // Set focus again
			         //  };
			        });
			      }
			    }
			  });

