$(document).ready(function(){
	$('#hea .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 4000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})


	$('.menu-popup').on('mouseenter', function(){
		$('.popup-item').eq(0).fadeIn(2500);
		$('.popup-item').eq(1).fadeIn(2000);
		$('.popup-item').eq(2).fadeIn(1500);
		$('.popup-item').eq(3).fadeIn(1000);
		$('.popup-item').eq(4).fadeIn(500);

	})
	$('.menu-popup').on('mouseleave', function(){
		$('.popup-item').eq(0).fadeOut(1500);
		$('.popup-item').eq(1).fadeOut(1200);
		$('.popup-item').eq(2).fadeOut(900);
		$('.popup-item').eq(3).fadeOut(600);
		$('.popup-item').eq(4).fadeOut(300);
	})


	$('.img-fl1').on('mouseenter', function(){
		$(this).children('a').css({
			'display':'flex',
		})
		$(this).children('a').removeClass('animate__zoomOut');
		$(this).children('a').addClass('animate__zoomIn');
	})
	$('.img-fl1').on('mouseleave', function(){
		$(this).children('a').removeClass('animate__zoomIn');
		$(this).children('a').addClass('animate__zoomOut');
	})


	
	$('#pause-intro').fadeOut();
	$('#play-intro').on('click', function(){
		$('#ain').get(0).play();
		$(this).fadeOut(1000);
		$('#pause-intro').fadeIn(2000);
	})
	$('#pause-intro').on('click', function(){
		$('#ain').get(0).pause();
		$(this).fadeOut(1000);
		$('#play-intro').fadeIn(2000);
	})


	$('.more-fl5').hide();
	$('.close-fl5').hide();
	$('.open-fl5').on('click', function(){
		$(this).parent().next().show();
		$(this).hide();
		$(this).next().show(500);
		$(this).parent().next().removeClass('animate__zoomOut');
		$(this).parent().next().addClass('animate__jackInTheBox');
	})
	$('.close-fl5').on('click', function(){
		$(this).hide();
		$(this).prev().show(500);
		$(this).parent().next().removeClass('animate__jackInTheBox');
		$(this).parent().next().addClass('animate__zoomOut');
	})


	$('.detail-fl6').hide();
	$('.up-icon-fl6').hide();
	$('.down-icon-fl6').on('click', function(){
		$('.down-icon-fl6').show();
		$('.up-icon-fl6').hide();
		$(this).hide();
		$(this).siblings().show();
		$('.detail-fl6').slideUp(500);
		$(this).parent().next().next().slideDown(500);
	})
	$('.up-icon-fl6').on('click', function(){
		$(this).hide();
		$(this).siblings().show();
		$(this).parent().next().next().slideUp(500);
	})



	$("#formsubmit").validate({
		rules: {
			name: {
				required: true,
				number: false,
			},
			phone: {
				required: true,
				minlength: 10,
				maxlength: 11,
				number: true,
			},
			email: {
				required: true,
				email: true,
			},
			address: "required",
		}
	});


	$('#box-fl9 .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay: true,
		autoplayTimeout: 2000,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:3
			}
		}
	})
})