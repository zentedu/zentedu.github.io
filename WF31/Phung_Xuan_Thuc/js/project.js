new WOW().init();
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

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});



$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});

	$(document).ready(function(){
    $('.content').isotope({
      itemSelector: '.all'
   });
   $('.menu1').children().click(function(event) {
       if($(this).css('backgroundColor')=='rgba(0, 0, 0, 0)'){
        var type = $(this).data('type');
        type = '.'+type;
        $('.content').isotope({
           filter:type
        });
      }else {
        var type = $(this).data('type');
      type = '.'+type;
      $('.content').isotope({
         filter:type
      });
      }
   });
 })



	$(document).ready(function(){
       	 $('#summernote').summernote({
       	 		height: 155,
			    minHeight: 100,
      			maxHeight: 300,
       	 });
       	});

    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });

  $(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.isot').click(function(){
    $('.isot').removeClass('active-iso');
    $(this).addClass('active-iso');
  })

})



