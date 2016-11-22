'use strict';

(($) => {

    $(() => {

        /**
         * Left menu click && Page scroller
         */
        $('nav.menu-left, .map').on('click', '[data-scroll]', function (event) {

            event.preventDefault();

            let target = $(this).attr('href'),
                top = $(target).offset().top,
                func = $(this).data('scroll');

            if (target == '#main__test' || target == '#main__article') top -= 50;
            if (target == '#main__timeline') top += 50;

            $('body')
                .stop(true)
                .animate({
                    scrollTop: top
                }, 5000, function () {
                    if ( func != '' ) eval(func);
                });

            return false;
        });

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
         * Timeline with swiper
         */
        let timeline = new Swiper ('.main__timeline .swiper-container', {
            slidesPerView: 3.5,
            paginationClickable: true,
            // keyboardControl: true,
            mousewheelControl: true,
            // freeMode: true
        });

        /**
         * Timeline hover
         */
        $('.timeline .timeline__item').hover(function() {
            $(this)
                .find('img').toggleClass('timeline__hover')
                .end()
                .find('span').toggleClass('timeline__text-hover');

            return false;
        });

        /**
         * Parallax scrool
         */
        parallaxScroll();

        $(window).on('scroll', parallaxScroll);

        function parallaxScroll() {
            let scrolled = $(window).scrollTop();

            $('.parallax__left-item1').css(
                'top', (0 - (scrolled*.15)) + 'px'
            );

            $('.parallax__left-item2').css(
                'top', (0 - (scrolled*.50)) + 'px'
            );

            if ( scrolled > 600 ) {
                $('.parallax__left-item3').css(
                    'top', (0 - (scrolled * .45)) + 'px'
                );
                $('.parallax__left-item4').css(
                    'top', (0 - (scrolled * .65)) + 'px'
                );
            }

            $('.parallax__right-item1').css(
                'top', (0 - (scrolled*.35)) + 'px'
            );

            $('.parallax__right-item2').css(
                'top', (0 - (scrolled*.80)) + 'px'
            );

            $('.parallax__right-item3').css(
                'top', (0 - (scrolled * .30)) + 'px'
            );

            $('.parallax__right-item4').css(
                'top', (0 - (scrolled * .5)) + 'px'
            );

            $('.parallax__right-item5').css(
                'top', ((scrolled * .28)) + 'px'
            );

            return false;
        }

        /**
         * Scroll speed
         */
        class Scrolled {
            constructor(value) {
                this.top = value;
            }

            scrolled(move, target) {
                if ( $(target).parents('.timeline').length ) return false;
                if ( this.top <= 0 ) this.top = 0;

                this.top += ( move > 0 ) ? 100 : -100;

                $('html, body')
                    .stop()
                    .animate({
                        scrollTop: this.top
                    }, 300);
            }
        }

        window.onwheel = function(e) {
            $('html, body').stop();
            /*
             new Scrolled( $(window).scrollTop() ).scrolled(e.deltaY, e.target);
             return false;
             */
        };

        /**
         * Appearance sections on scroll / load
         */
        appearance($(window).scrollTop());

        $(window).on('scroll', () => {
            appearance($(window).scrollTop());
        });

        function appearance(scrolled) {
            let target$ = $('.appearance');

            target$.each(function() {
                let self$ = $(this),
                    top = self$.offset().top - $(window).height();

                if ( scrolled >= top ) self$.addClass('appearance__active');
            });
        }

        /**
         * Image animation => section main__test
         */
        $(window).on('scroll', () => {
            let scrolled = $(window).scrollTop(),
                target$ = $('#main__test'),
                top = target$.offset().top - $(window).height();

            if ( scrolled >= top ) animateSectionTest();
        });

        setTimeout(() => {
            let scrolled = $(window).scrollTop(),
                target$ = $('#main__test'),
                top = target$.offset().top - $(window).height();

            if ( scrolled >= top ) animateSectionTest();
        }, 200);

        function animateSectionTest() {
            let w = $(window).width(),
                left = ( w < 2000 ) ? '-35.8rem' : '-0.3rem',
                right = ( w < 2000 ) ? '-48rem' : '0';

            $('.main__test-image2').animate({
                opacity: 1,
                left: left
            }, 800, function () {
                $('.main__test-image1, .main__test-image3').animate({
                    opacity: 1
                }, 300)
            });

            $('.main__test-image5').animate({
                opacity: 1,
                right: right
            }, 800, function () {
                $('.main__test-image4').animate({
                    opacity: 1
                }, 300)
            });

            return false;
        }

        /**
         * Image animation => section main__timeline
         */
        $(window).on('scroll', () => {
            let scrolled = $(window).scrollTop(),
                target$ = $('#main__timeline'),
                top = target$.offset().top - $(window).height();

            if ( scrolled >= top ) animateSectionPromo();
        });

        setTimeout(() => {
            let scrolled = $(window).scrollTop(),
                target$ = $('#main__timeline'),
                top = target$.offset().top - $(window).height();

            if ( scrolled >= top ) animateSectionPromo();
        }, 200);

        function animateSectionPromo() {

            $('.main__timeline-image1').animate({
                opacity: 1,
                left: '3rem'
            }, 800);

            $('.main__timeline-image2').animate({
                opacity: 1,
                right: '2.5rem'
            }, 800);

            return false;
        }

    });

})(jQuery);