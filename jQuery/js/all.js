$(document).ready(function(){
    $('.back-top').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},'slow');
    });
    $(".togglebtn").click(function(event){
        event.preventDefault();
        $(this).parent().find('.toggle').slideToggle();
        $(this).parent().siblings().find('.toggle').slideUp();
    })


});

