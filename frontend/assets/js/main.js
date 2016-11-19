'use strict';

(($) => {

    $(() => {

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
        });

        /**
         * Left menu click
         */
        $('nav.menu-left, .map').on('click', '[data-scroll]', function(event) {

            event.preventDefault();

            let target = $(this).attr('href'),
                top = $(target).offset().top,
                func = $(this).data('scroll');

            if ( target == '#main__test' ) top -= 50;

            $('body,html').animate({
                scrollTop: top
            }, 1500, function() {
                eval(func);
            });
        });

        window.onscroll = function () {
            parallaxScroll();
        };

        function parallaxScroll(){
            let scrolled = $(window).scrollTop();

            $('.parallax__left-item1').css(
                'top', (0 + (scrolled*.25)) + 'px'
            );

            $('.parallax__left-item2').css(
                'top', (0 + (scrolled*.15)) + 'px'
            );

            if ( scrolled > 600 ) {
                $('.parallax__left-item3').css(
                    'top', (0 - (scrolled * .45)) + 'px'
                );
                $('.parallax__left-item4').css(
                    'top', (0 - (scrolled * .65)) + 'px'
                );
            }
        }

        /**
         * Image animation => section main__test
         */
        function animateSectionTest() {
            if ($(window).scrollTop() > 1450) {
                $('.main__test-image2').animate({
                    opacity: 1,
                    left: '-1.8rem'
                }, 800, function () {
                    $('.main__test-image1, .main__test-image3').animate({
                        opacity: 1
                    }, 300)
                });

                $('.main__test-image5').animate({
                    opacity: 1,
                    right: 0
                }, 800, function () {
                    $('.main__test-image4').animate({
                        opacity: 1
                    }, 300)
                });
            } else if ($(window).scrollTop() > 2200 || $(window).scrollTop() < 930) {
                $('.main__test-image2').animate({
                    opacity: 1,
                    left: '-52.5rem'
                }, 800, function () {
                    $('.main__test-image1, .main__test-image3').animate({
                        opacity: 0
                    }, 300)
                });

                $('.main__test-image5').animate({
                    opacity: 0,
                    right: '-38rem'
                }, 800, function () {
                    $('.main__test-image4').animate({
                        opacity: 0
                    }, 300)
                });
            }
        }

        /**
         * Image animation => section main__timeline
         */
        function animateSectionPromo() {
            $('.main__timeline-image1').animate({
                opacity: 1,
                left: '3rem'
            }, 800);

            $('.main__timeline-image2').animate({
                opacity: 1,
                right: '2.5rem'
            }, 800);
        }

    });

})(jQuery);