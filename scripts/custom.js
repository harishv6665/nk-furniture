$(function() {
    $('#m-nav-trigger').click(function() {
        $('#m-nav').toggleClass('expand');
    });

    $(window).scroll(function() {
        $('#m-nav').removeClass('expand');
    })
});