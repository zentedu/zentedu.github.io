$(document).ready(function ($) {

	$('.banner .changeTitle').click(function() {
		$(this).parent().parent().prev().html('<h1 class="card-title wow slideInRight">WE ARE DEVELOPMENT</h1>');
	})
	
	// counter
	$('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  $('.btn-choose').click(function() {
    $('.btn-choose').removeClass('btn-active');

    $(this).addClass('btn-active');

  });

	// isotope
  	$('.box_img').isotope({
          itemSelector: 'img'
    });

    $('ul li').click(function(event){
        var type = $(this).data('type');

        type = '.' + type;

        $('.box_img').isotope({
            filter: type
        });
    });

    // owl carousel
  
})