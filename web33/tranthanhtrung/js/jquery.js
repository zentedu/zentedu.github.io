$(document).ready(function ($) {

	$('.banner .changeTitle').click(function() {
		$(this).parent().parent().prev().html('<h1 class="card-title wow slideInRight">COMPANY OF THANH TRUNG</h1>');
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
    // Lightbox
    
    $('img').on('click', function(){
      $('#zoom').css({
        'display':'block',
      });
      $('.imgzoom').attr('src', $(this).attr('src'))
      $('.alt').text($(this).attr('alt'))
    })
    $('.close').on('click', function(){
      $(this).parent().css({
        'display':'none',
      })
    }); 

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
      name: "Please enter your name",

      email: {
        required: "Please enter your email",
        email: "Incorrect email format, please re-enter"
      },

      subject: "Please enter your subject",
      
      message: "Please enter your message"
    }
    });


    // $('.donors-carousel').owlCarousel();
  
})
