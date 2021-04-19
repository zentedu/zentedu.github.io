$(document).ready(function(){
    $('a[href*="#"]')
      .click(function(e) {
        var data_id = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(data_id).offset().top
        }, '5000');
      });


    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $('#frm').validate({
        rules:{
            name:{
                required: true,
                minlength:5,
                maxlength:100
            },
            number_phone:{
                required: true,
                "matches":true,
                minlength:10,
                maxlength:12
            },
            mail:{
                required: true,
                email:true
            }
        },
        messages:{
            name:{
                required: "Please enter the name!",
                minlength: "The name is too short!"
            },
            number_phone:{
                required: "Please enter your phone number!",
                minlength:"Incorrect telephone number!",
                maxlength:"Incorrect telephone number!"
            },
            mail:{
                required: "Please enter your email!",
                email:"The email you entered is incorrect!"
            }
        }
    })


    $('#submitBtn').on('click', function(){
        if (!$('#frm').valid()) return false;
        else {
            let name = $('#name').val();
            Swal.fire({
              position: 'center-center',
              icon: 'success',
              title: 'Thanks '+name+' send feedback successfully.',
              showConfirmButton: false,
              timer: 3000
            })
        };
    })

    var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
});



jQuery.validator.addMethod("matches", function(value, element){
    if (/^[0-9]{9}[vVxX]$/.test(value)) {
        return false;  // FAIL validation when REGEX matches
    } else {
        return true;   // PASS validation otherwise
    };
}, "wrong nic number");