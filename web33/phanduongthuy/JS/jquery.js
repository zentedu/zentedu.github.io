$(document).ready(function ($) {

	// $('.banner .changeTitle').click(function() {
	// 	$(this).parent().parent().prev().html('<h1 class="card-title wow slideInRight">WE ARE DEVELOPMENT</h1>');
	// })
	
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

    // Lightbox
    
    // $('img').on('click', function(){
    //   $('#zoom').css({
    //     'display':'block',
    //   });
    //   $('.imgzoom').attr('src', $(this).attr('src'))
    //   $('.alt').text($(this).attr('alt'))
    // })
    // $('.close').on('click', function(){
    //   $(this).parent().css({
    //     'display':'none',
    //   })
    // }); 

    // validate form
    
    $('#contact_form').validate({
      rules: {
        name:"required",

        email: {
          required: true,
          email: true
        },

        subject:"required",

        message:"required"
      },

      messages: {
      name: "Please specify your name",

      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },

      subject: "Please specify subject for message",
      
      message: "Please specify message"
    }
    });


    // $('.donors-carousel').owlCarousel();
  
})