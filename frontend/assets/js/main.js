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

            $('body,html')
                .stop(true)
                .animate({
                    scrollTop: top
                }, 1500, function () {
                    if ( func != '' ) eval(func);
                });

            return false;
        });

        class Scroller {
            constructor(value) {
                this.count = value;
            }

            updateScrollOptions(value, className) {
                if ( ~className.indexOf('timeline__img') ) return false;

                let position = $(window).scrollTop();

                if (value > 0 && this.count >= value * 3
                    || value < 0 && this.count <= value * 3) {

                    if ( position >= 0 && value > 0 )
                        $('a[href*=main__article]').trigger('click');

                    if ( position >= 950 && value < 0 )
                        $('a[href*=main__head]').trigger('click');

                    if ( position >= 950 && value > 0)
                        $('a[href*=main__test]').trigger('click');

                    if ( position >= 1480 && value < 0 )
                        $('a[href*=main__article]').trigger('click');

                    if ( position >= 1480 && value > 0 )
                        $('a[href*=main__timeline]').trigger('click');

                    if ( position >= 1990 && value < 0 )
                        $('a[href*=main__test]').trigger('click');

                    this.count = 0;

                    return false;
                }

                this.count += value;
            }
        }

        function scroll(top, func) {
            if ( func )
                $('body,html')
                    .animate({
                        scrollTop: top
                    }, 1500, func);
            else
                $('body,html')
                    .animate({
                        scrollTop: top
                    }, 1500);
        }

        let scroller = new Scroller(0);

        window.onwheel = function (e) {
            scroller.updateScrollOptions(e.deltaY, e.target.className)
        };

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

        window.onscroll = function () {
            parallaxScroll();
        };

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
         * Image animation => section main__test
         */
        function animateSectionTest() {
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

            return false;
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

            return false;
        }

    });

})(jQuery);