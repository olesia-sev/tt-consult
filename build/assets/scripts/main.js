$(document).ready(function() {
    $('.sidebar-toggle').click(function(e) {
        e.preventDefault();

        $('.sidebar').addClass("open");
        $(this).addClass('display-none');
        $('html, body').addClass('no-scroll');
    });

    $('.sidebar').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase == "move" && direction == "left") {
                $(this).removeClass("open");
                $('.sidebar-toggle').removeClass('display-none');
                $('html, body').removeClass('no-scroll');
            }
        }
    });
});