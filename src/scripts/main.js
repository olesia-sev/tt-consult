(function ($) {
    'use strict';

    var clickHandler = function (event) {
        event.preventDefault();
        $('.sidebar').toggleClass('sidebar--opened');
        $('.sidebar-toggle__img').toggleClass('sidebar-toggle__img--back');
        $(this).toggleClass('sidebar-toggle--back');
        $('html, body').toggleClass('no-scroll');
    };

    $(document).ready(function () {
        $('.sidebar-toggle').on('click', clickHandler);
    });
})(jQuery);