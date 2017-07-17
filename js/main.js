jQuery.fn.exists = function() {
    return $(this).length;
}
$(function() {
    $("#accordion").accordion({heightStyle: "content" });

});
$(document).ready(function() {
    $("a.fancybox1").fancybox({
        'width': 590,
        'height': 332,
        'autoSize': false,
    });
    if ($(window).width() < 1200) {
        $("a.fancybox1").fancybox({
            'width': 590,
            'height': 412,
            'autoSize': false,
        });
    }
    if ($(window).width() < 400) {
        $("a.fancybox1").fancybox({
            'width': 590,
            'height': 420,
            'autoSize': false
        });
        $(".fancybox-close").css({ "top": "1px", "right": "0px" });
    };
});

$(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

});