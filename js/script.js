$(function () {
    "use strict";

    var windo = $(window);
    var htmlBody = $('html, body');

    // data-offset
    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //animation scroll js
    $('.scroll-animation a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 65
                }, 1000);
                return false;
            }
        }
    });

    // navbar sticky menu and back to top.
    windo.on('scroll', function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".top-up");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 100) {
            stickytop.addClass('navbar-scroll');
        } else {
            stickytop.removeClass('navbar-scroll');
        }
        if ($scrolling > 150) {
            bc2top.fadeIn();
        } else {
            bc2top.fadeOut(1000);
        }
    });

    //banner
    $('.slide-banner').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 5000,
        autoplay: false,
        prevArrow: '<span class="slick-prev"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fas fa-arrow-right"></i></span>',
        centerMode: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //portfollio
    $('.all-portfolio').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 5000,
        autoplay: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
    }
            , {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //service
    $('.all-services').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="slick-prev"><i class="fas fa-arrow-up"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fas fa-arrow-down"></i></span>',
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: '0px',
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //testimonial img
    $('.testimonial-img-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="slick-prev"><i class="fas fa-arrow-up"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fas fa-arrow-down"></i></span>',
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        centerPadding: '0px',
        focusOnSelect: true,
        centerMode: true,
        asNavFor: '.all-testimonial-text',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    horizontal: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    horizontal: true,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    horizontal: true,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //textimonial-text
    $('.all-testimonial-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-img-slider',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //team
    $('.all-team-img').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //team
    $('.all-sponsor').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: false
                }
    }
            , {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //venobox
    $('.venobox').venobox();

    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //back top animation
    var bc2top = $(".top-up");
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });
    //end
});