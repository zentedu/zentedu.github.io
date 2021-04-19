$(document).ready(function(){
   $('.menu-toggle li').hover(function(){
      $(this).find("ul:first").slideDown(500);
      },function(){
      $(this).find("ul:first").hide(300);
   });
    $('.menu-bar').click(function(){
      $('.menu-bar').toggleClass('active');
       $('nav').toggleClass('active');
   });
});