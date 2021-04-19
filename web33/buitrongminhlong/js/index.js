const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

$('.genre-img').isotope({
    itemSelector: '.music-item',
    layoutMode: 'fitRows'
});

$('.genre').on('click', function(){
    $('.genre').removeClass('active-custom');
    $(this).addClass('active-custom');
    
    var selector = $(this).attr('data-filter');
    $('.genre-img').isotope({
        filter: selector
    });

    return false;
    // $('.genre-img .row div').addClass('hide');
    // $('.genre-img .row .'+eleId).removeClass('hide');
});

$(window).resize(function() {
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('.card').removeClass('p-2');
    }
});

var allow = false;
function validate(field){
    $('#'+field).on('blur', function(){
        if($('#'+field).val()=='')
        {
            $('#empty-'+field).removeClass('hide');
        }
        else
        {
            if(field=='email')
            {
                if(!re.test($('#'+field).val()))
                {
                    $('#invalid-'+field).removeClass('hide');
                }
                else
                {
                    $('#invalid-'+field).addClass('hide');
                }
            }
    
            else{
                $('#empty-'+field).addClass('hide');
            }
        }
    })

}

validate('name');
validate('email');
validate('message');


$('#send-btn').on('click', function()
    {
        if($('#name').val()!='' && $('#message').val()!='' && re.test($('#email').val()))
        {
            console.log($('#message').val()!='')
            allow = true;
        }
        else{
            allow=false;
        }

        if(allow)
        {
            alert('Send successfully');
        }
        else{
            alert('Please check credentials');
        }
    }
    )

$('#toTop').on('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
})