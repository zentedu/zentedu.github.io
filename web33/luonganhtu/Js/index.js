
$('.but-recent').click(function(){
     $('.but-recent').removeClass('active-bt-re');
     $(this).addClass('active-bt-re');
})
;

$('.card-header').click(function(){
    $('.card-header').removeClass('colp');
    $(this).addClass('colp');
});

$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})
// count


$(document).ready(function($) {
    $('.content').isotope({
        itemSelector: 'img'
    });
    $('ul li').click(function(event){
        var type = $(this).data('type');

        var ten_loai = $(this).text();

        $('.title').text(ten_loai);

        type = '.' + type;

        $('.content').isotope({
                    filter: type
        });
    });
});


$('#contact_form').validate({
    rules:{
        name:"required",
        email:{
            required: true,
            email: true
        },
        subject: "required",
        message:"required"
    },

    message:{
        name: "Please specify your name",
        email:{
            required:"We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
        },
        subject: "Please specify subject for message",
        message: "Please specify message"
    }
});



$('.noob').click(function(){
    $('#exampleModalLabel').text($('.kyo').text());
    $('.modal-body').text($('.kyoto').text());
});
$('.noob2').click(function(){
    $('#exampleModalLabel').text($('.hiro').text());
    $('.modal-body').text($('.hiroshima').text());
});
$('.noob3').click(function(){
    $('#exampleModalLabel').text($('.tok').text());
    $('.modal-body').text($('.tokyo').text());
});