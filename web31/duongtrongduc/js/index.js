$(document).ready(function(){

    	var lightbox = $('#lightbox');
        var img = $('.myImg');
        var lbimg = $(".lightbox-img");
        var altText = $("#altText");
        
        $('.myImg').click(function(){
        	var anh = $(this).attr('src');
			$('#lightbox').css({'display':'block'});
            lbimg.attr('src',anh);
            altText.html(this.alt); 
        }) ;

        $(".close").click(function(){
        	$('#lightbox').css({'display':'none'});
        });

    });