'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {

    $(function () {

        /**
         * Show main title
         */
        $('.main__title').addClass('main__title-active');

        /**
         * Left menu click && Page scroller
         */
        $('nav.menu-left, .map').on('click', '[data-scroll]', function (event) {

            event.preventDefault();

            var target = $(this).attr('href'),
                top = $(target).offset().top,
                func = $(this).data('scroll');

            if (target == '#main__test' || target == '#main__article') top -= 50;
            if (target == '#main__timeline') top += 50;

            $('body').stop(true).animate({
                scrollTop: top
            }, 5000, function () {
                if (func != '') eval(func);
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

            return false;
        });

        /**
         * Parallax scrool
         */
        parallaxScroll();

        window.onscroll = function () {
            parallaxScroll();
            if ($(window).scrollTop() >= 1950) animateSectionPromo();
            if ($(window).scrollTop() >= 1450 && $(window).scrollTop() <= 1550) animateSectionTest();
        };

        var Scrolled = function () {
            function Scrolled(value) {
                _classCallCheck(this, Scrolled);

                this.top = value;
            }

            _createClass(Scrolled, [{
                key: 'scrolled',
                value: function scrolled(move, target) {
                    if ($(target).parents('.timeline').length) return false;
                    if (this.top <= 0) this.top = 0;

                    this.top += move > 0 ? 100 : -100;

                    $('html, body').stop().animate({
                        scrollTop: this.top
                    }, 300);
                }
            }]);

            return Scrolled;
        }();

        window.onwheel = function (e) {
            $('html, body').stop();
            /*
             new Scrolled( $(window).scrollTop() ).scrolled(e.deltaY, e.target);
             return false;
             */
        };

        function parallaxScroll() {
            var scrolled = $(window).scrollTop();

            $('.parallax__left-item1').css('top', 0 - scrolled * .15 + 'px');

            $('.parallax__left-item2').css('top', 0 - scrolled * .50 + 'px');

            if (scrolled > 600) {
                $('.parallax__left-item3').css('top', 0 - scrolled * .45 + 'px');
                $('.parallax__left-item4').css('top', 0 - scrolled * .65 + 'px');
            }

            $('.parallax__right-item1').css('top', 0 - scrolled * .35 + 'px');

            $('.parallax__right-item2').css('top', 0 - scrolled * .80 + 'px');

            $('.parallax__right-item3').css('top', 0 - scrolled * .30 + 'px');

            $('.parallax__right-item4').css('top', 0 - scrolled * .5 + 'px');

            $('.parallax__right-item5').css('top', scrolled * .28 + 'px');

            return false;
        }

        /**
         * Image animation => section main__test
         */
        setTimeout(function () {
            if ($(window).scrollTop() >= 1450 && $(window).scrollTop() <= 1550) animateSectionTest();
        }, 200);

        function animateSectionTest() {
            var w = $(window).width(),
                left = w < 2000 ? '-35.8rem' : '-0.3rem',
                right = w < 2000 ? '-48rem' : '0';

            $('.main__test-image2').animate({
                opacity: 1,
                left: left
            }, 800, function () {
                $('.main__test-image1, .main__test-image3').animate({
                    opacity: 1
                }, 300);
            });

            $('.main__test-image5').animate({
                opacity: 1,
                right: right
            }, 800, function () {
                $('.main__test-image4').animate({
                    opacity: 1
                }, 300);
            });

            return false;
        }

        /**
         * Image animation => section main__timeline
         */
        setTimeout(function () {
            if ($(window).scrollTop() >= 1950) animateSectionPromo();
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