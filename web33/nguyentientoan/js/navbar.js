$(document).ready(function(){
	$('#close-qc').on('click', function(){
		$('#qc').slideUp();
	})


	$('#bar2').fadeOut(0);
	$('#bar1').on('click', function(){
		$(this).fadeOut(300, function(){
			$('#bar2').fadeIn();
			$('#bar2').css({
				'color':'white',
			});
		});
		$('.menu-small').removeClass('animate__fadeOutRightBig');
		$('.menu-small').removeClass('d-none');
		$('.menu-small').addClass('animate__zoomInDown');
	})
	$('#bar2').on('click', function(){
		$(this).fadeOut(300, function(){
			$('#bar1').fadeIn();
		});
		$('.menu-small').removeClass('animate__zoomInDown');
		$('.menu-small').addClass('animate__fadeOutRightBig');

		$(this).hide(5000, function(){
			$('.menu-small').removeClass('animate__fadeOutRightBig');
			$('.menu-small').addClass('d-none');
		});
	})



	$('#popup-list').css({
		'opacity':'1',
	});
	$('.popup-item').fadeOut(0);
	$('.menu-popup').on('mouseenter', function(){
		$('.dot').css({
			'transform':'rotate(135deg)',
			'transition':'1s',
		})

	})
	$('.menu-popup').on('mouseleave', function(){
		$('.dot').css({
			'transform':'rotate(0deg)',
			'transition':'1s',
		})
	})


	$('#slideall .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay: true,
		autoplayTimeout: 3000,
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



	$('#playall-2').on('click', function(){
		$('#trailer-video').addClass('animate__zoomIn');
		$('#trailer-video').css({
			'display':'flex',
		})
		$('#videoall-2').get(0).play();
	})
	$('#closall-2').on('click', function(){
		$('#trailer-video').removeClass('animate__zoomIn')
		$('#videoall-2').get(0).load();
		$('#trailer-video').css({
			'display':'none',
		})
	})


	$('#suball3').validate({
		rules: {
			emailall3: {
				required: true,
				email: true,
			}
		}
	});
})