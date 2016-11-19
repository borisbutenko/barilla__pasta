'use strict';

(function ($) {

    $(function () {

        /**
         * Tooltips
         */
        $('[data-tooltip]').tooltip({
            delay: {
                'show': 200,
                'hide': 200
            },
            trigger: 'hover'
        });

        /**
         * Image animation => section main__test
         */
        $('.main__test-image2').animate({
            opacity: 1,
            left: '-1.8rem'
        }, 800, function () {
            $('.main__test-image1, .main__test-image3').animate({
                opacity: 1
            }, 300);
        });

        $('.main__test-image5').animate({
            opacity: 1,
            right: 0
        }, 800, function () {
            $('.main__test-image4').animate({
                opacity: 1
            }, 300);
        });

        /**
         * Timeline with swiper
         */
        var timeline = new Swiper('.main__timeline .swiper-container', {
            slidesPerView: 3.5,
            paginationClickable: true,
            // keyboardControl: true,
            mousewheelControl: true
        });

        /**
         * Timeline hover
         */
        $('.timeline .timeline__item').hover(function () {
            $(this).find('img').toggleClass('timeline__hover').end().find('span').toggleClass('timeline__text-hover');
        });
    });
})(jQuery);