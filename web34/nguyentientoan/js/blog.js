$(document).ready(function(){
	$('.menu-popup').on('mouseenter', function(){
		$('.popup-item').eq(0).fadeIn(500);

	})
	$('.menu-popup').on('mouseleave', function(){
		$('.popup-item').eq(0).fadeOut(300);
	})



	$('#detailall3 .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:false,
		autoplay:true,
		autoplayTimeout:1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			}
		}
	})


	$("#wrapcomall3").validate({
		rules: {
			fname: "required",
			tarea: "required",
			femail: {
				required: true,
				email: true,
			}
		}
	});
})