if($(document.body).height() < $(window).height()) {
    $("footer").addClass("fixed-bottom");
}

$(function() {
    $(".navbar-toggler").blur(function() {
        $("#nav-bar").collapse('hide');
    });
});