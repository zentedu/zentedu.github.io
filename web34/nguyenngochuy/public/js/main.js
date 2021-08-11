$(function() {
    var owl = $('.owl-carousel');
        owl.owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        navText: false,
        items: 1,
    });
  
    // Custom Button
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    
    $('.toggle-question').click(function() {
        var checkClassDown = $(this).find('i').hasClass('fa-angle-double-down');
        var checkClassUp = $(this).find('i').hasClass('fa-angle-double-up');
        if (checkClassDown) {
            $(this).find('i').removeClass('fa-angle-double-down');
            $(this).find('i').addClass('fa-angle-double-up');
        }

        if (checkClassUp) {
            $(this).find('i').removeClass('fa-angle-double-up');
            $(this).find('i').addClass('fa-angle-double-down');
        }
    }) 
})