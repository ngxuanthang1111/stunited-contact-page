$(document).ready(function() {
    // let $window = $(window);

    $(window).on('scroll', function () {
        $topOffset =  $(this).scrollTop();
        if ($topOffset > 150 || $topOffset === 150) {
            $('#btn-back-to-top').addClass(".back-to-top");
            $('#btn-back-to-top').fadeIn();
        } else {
            $('#btn-back-to-top').fadeOut();
        }
    });
    $('#btn-back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop : 0}, 1000);
    });
    $(".navbar-toggler").on("click", function(){

    });

});