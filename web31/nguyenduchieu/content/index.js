
new WOW().init();

function isNullOrEmpty(str){
    return !str||!str.trim();
}
function checkGamil(str){
	if(str.includes('@gmail.com') == false)
	return 1;
}
function checkArc(str){
  if(str.includes('changeBg') == true)
  return 1;
}

$(document).ready(function(){
// Isotop product
$('.counter').counterUp({
            delay: 10,
            time: 5000
        })
$('.menu_con a').on('click',function(){
  var stone=$(this).attr('href');
  var z= $(stone).position().top;
  if (stone == "#home"){
     $('body,html').animate({scrollTop:0},1000);
   }
  else{
    $('body,html').animate({scrollTop:z},1000);
  }
})

//Scroll Body 
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

 $('body').scrollspy({target:'#menu'});

var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
});
// bind sort button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  sortValue = '.'+sortValue;
  $grid.isotope({ filter: sortValue });
});
// //change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

   $('.car p').on('click', function(){
      var x = $(this).parent().parent().parent().attr('class');
      if(checkArc(x) == 1)
        $(this).parent().parent().parent().removeClass('changeBg');
      else{
        $('.changeBg').removeClass('changeBg');
        $(this).parent().parent().parent().addClass('changeBg');
      }
   })
      $('.original a').fancybox({openEffect: 'elastic',
         closeEffect : 'elastic', openSpeed  : 1000, closeSpeed  : 200,
 });
   // Xu li form
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});
$('.sen').click(function(){
 var nd_name = $('#name').val();
 var nd_mail = $('#email').val();
 var nd_desc = $('#msg').val();
 if(isNullOrEmpty(nd_name) || isNullOrEmpty(nd_mail) || isNullOrEmpty(nd_desc)){
   $('.modal-header h5').text('Warning');
   $('.modal-header h5').css('color','#ffc107');
   $('.modal-header .close').css('color','#ffc107');
   $('.modal-body p').text('Do not leave the name, email, message fields blank');
 }
        
 if(!isNullOrEmpty(nd_name)  &&!isNullOrEmpty(nd_mail) && !isNullOrEmpty(nd_desc))
 {
   if(checkGamil(nd_mail) == 1){
   $('.modal-header h5').text('Warning');
   $('.modal-header h5').css('color','#ffc107');
   $('.btn-warning').css('background-color','#ffc107');
   $('.modal-header .close').css('color','#ffc107');
   $('.modal-body p').text("Enter the correct format @ gmail.com");
 }
   else{
   $('.modal-header h5').text('Succes');
   $('.modal-header h5').css('color','#28a745');
   $('.modal-header .close').css('color','rgb(40, 167, 69)');
   $('.btn-warning').css('background-color','rgb(40, 167, 69)');
   $('.modal-body p').text('Your opinion has been received');
   } 
 }
})

$('#menu_bar #ct_menu .show a').on('click',function(){
 $('.menu_con').toggleClass('show');
})
  
$('.toggle_bts').on('click',function(){
  $('.theme_panel').toggleClass('active');
  })

$('.segment a').on('click',function(){
  var x = $(this).css('background-color');
  $('.initColor').css('color',x);
  $('.bgColor').css('background-color',x);
  $('#menu a').css('border-color',x);
  $('.oneuser').css('border-color',x);
  $('.chuyenSlide').css('background-color',x);
  $('.icon').css('border-color',x);
  $('.icon svg').css('fill',x);
  $('.fast_up').css('border-color',x);
  $('.wrapper a:nth-child(1)').on('mouseover',function(){
    $(this).css('background-color','transparent');
    $(this).css('border-color',x);
    $(this).css('color',x);
  })
  $('.wrapper a:nth-child(1)').on('mouseout',function(){
    $(this).css('background-color',x);
    $(this).css('border-color','white');
    $(this).css('color','white');
  })
});

$('.main_demo img').on('click',function(){
  if ($(this).parent().parent().attr('id')=='origin'){
      $('#home .slides').css('display','block');
      $('#home .chuyenSlide').css('display','block');
      $('.newBg').css('display','none');
  }
  else{
  $('#home .slides').css('display','none');
  $('#home .chuyenSlide').css('display','none');
  $('.newBg').css('display','block');
  $('.newBg img').attr('src', $(this).attr('src'));
  }
});

$('.link_wrapper').on('click',function(){
  var y = $('#product').position().top;
  $('body,html').animate({scrollTop:y},1000);
})        
$('.bubbly-button').on('click',function(){
  var y = $('#product').position().top;
  $('body,html').animate({scrollTop:y},1000);
})
$('.fast_up a').on('click',function(){
  $('body,html').animate({scrollTop:0},1000);
});
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('mouseover', animateButton, false);
}

   const slides=document.querySelector(".slider").children;
   const indicatorImages=document.querySelector(".slider-indicator").children;

    for(let i=0; i<indicatorImages.length; i++){
      indicatorImages[i].addEventListener("mouseover",function(){
         
           for(let j=0; j<indicatorImages.length; j++){
             indicatorImages[j].classList.remove("active");
           }
            this.classList.add("active");
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

      })}
   // $('.xuong').on('click',function(){
   //    $('#product').css('height','auto');
   //    $('#product').css('overflow-y','none');
   // })   
});