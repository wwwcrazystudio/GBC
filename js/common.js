
$(function() {


    ticketsMenuItem();

    function ticketsMenuItem() {

        var ticketsMenuItem = $(".main-nav__list").find('a[href*="#shop"]').closest('li'),
        eventsMenuItem = $(".main-nav__list").find('a[href*="events"]').closest('li');


        ticketsMenuItem.on('click', function () {

            setCookie('ticketsMenuItem','toggled');

        });

        var ticketsCookieVal = getCookie('ticketsMenuItem');

        if(window.location.href.indexOf("events") > -1) {

            $(window).on('beforeunload', function () {

                deleteCookie('ticketsMenuItem');

            });

            if(ticketsCookieVal){

                ticketsMenuItem.addClass('current-menu-item').siblings().removeClass('current-menu-item');

            }

            else{

                eventsMenuItem.addClass('current-menu-item').siblings().removeClass('current-menu-item');

            }

        };


        $(".page-footer").find('a[href*="#shop"]').on('click', function () {

            $(".page-header").find('a[href*="#shop"]').closest('li').addClass('current-menu-item').siblings().removeClass('current-menu-item');

        });


    };



    AOS.init({
        startEvent: 'load',
        once: true,
        duration: 450,
        disable:'mobile',
    });

    $("#js-main-slider").slick({
        arrows: false,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="main-slider__dot"></a>';
        },
        autoplay: true,
        dots: true,
        fade: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplaySpeed: 5000,
    }).slickAnimation();


    autosize($('textarea'));


    $(".video-preview__control").on('click', function () {

        $(this).closest('.video-preview').fadeOut();

        var $video = $('#video'),
            src = $video.attr('src');

        $video.attr('src', src + '?rel=0&showinfo=0&autoplay=1');

    });


    stickyHeader();
    function stickyHeader() {

      var header = $(".page-header"),
          headerHeight = header.outerHeight();

      $(window).on('scroll', function () {

          if ( $(this).scrollTop() > headerHeight ) {
              header.addClass('is-sticky');
          }

          else{
              header.removeClass('is-sticky');
          }

      });


    };



    setPaddingForBody();
    function setPaddingForBody() {

        var headerHeight = $(".page-header").outerHeight();

        $(".page-inner").not('.page-inner--index').css('padding-top',headerHeight);

    };


    $(".js-testimonials-slider--1").slick({
        arrows: false,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="testimonials-slider__dot"></a>';
        },
        dots: true,
        appendDots: '.testimonials-slider__dots',
    });

    $(".js-testimonials-slider--2").slick({
        arrows: false,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="testimonials-slider__dot"></a>';
        },
        dots: true,
        appendDots: '.testimonials-slider__dots--mobile',
    });


    $(".events-page-item__stars-list li").on('click', function () {

        $(this).prevAll().addBack().addClass('is-active');

        $(this).nextAll().removeClass('is-active');

    });


    $(".mitglied-tabs-item__toggler").on('click', function () {

        $(this).closest('.mitglied-tabs-item').toggleClass('is-active');

        $(this).next('.mitglied-tabs-item__content').slideToggle('fast');

    });


    // https://stackoverflow.com/questions/44899008/how-to-navigate-to-another-page-with-a-smooth-scroll-on-a-specific-id


//     // direct browser to top right away
    if (window.location.hash)
        scroll(0,0);
// takes care of some browsers issue
    setTimeout(function(){scroll(0,0);},1000);


    $(window).on('resize', smoothScroll);

    smoothScroll();
    function smoothScroll() {

        var headerHeight;

        if ( $(window).width() < 993 ) {
            headerHeight = 98;
        }

        else{
            headerHeight = 111;
        }

        //your current click function
        $('.scroll').on('click',function(e){
            e.preventDefault();

            $('html,body').animate({
                scrollTop:$($(this).attr('href')).offset().top - headerHeight
            },2000,'swing');
        });

// if we have anchor on the url (calling from other page)
        if(window.location.hash){
            // smooth scroll to the anchor id
            $('html,body').animate({
                scrollTop:$(window.location.hash).offset().top - headerHeight
            },1000,'swing');
        }

    }


    $(".become-member-item-wrapper").on('click', function (event) {

        var th = $(this),
            thisText = th.find('.become-member-item__title').text(),
            target = $(".join-us-form__checkbox-title:contains("+ thisText +")");

        if ( !$(event.target).closest('.city').length) {
            $(".city-drop,.city-toggler").removeClass('is-active');
        }

        target.closest('.join-us-form__checkbox-wrapper').find(':checkbox').prop('checked', true);


    });


    $(".aside-menu li").on('click', function () {

        $(this).addClass('is-active').siblings().removeClass('is-active');

    });


    $(".burger").on('click', function () {

        $(this).toggleClass('burger--close');

        $(".main-nav__list-wrapper").toggleClass('is-shown');

        $("body").toggleClass('menu-shown');

        $(".page-blur").toggleClass('is-active');

    });

    //выбор языка

    $(".language__toggler").on('click', function () {

        $(this).closest(".language").toggleClass('is-active');

    });

    $(".language__drop-item").on('click', '', function () {

       var thisText = $(this).text();

       $(this).closest('.language').find('.language__toggler').text(thisText);

        $(this).closest('.language').removeClass('is-active');

    });


    $(document).on('click', function (event) {

        if ( !$(event.target).closest('.language').length) {
            $(".language").removeClass('is-active');
        }

    });

    $(".main-nav__list").on('click', 'li', function (event) {

        $(this).addClass('is-active').siblings().removeClass('is-active');

    });


    gallerySlider();
    function gallerySlider() {

        $().fancybox({
            selector : '.slick-slide:not(.slick-cloned)',
            hash     : false,
            loop: true
        });


        $("#gallery-slider").slick({
            slidesToShow:4,
            slidesToScroll:1,
            prevArrow: ".gallery__slider-control--prev",
            nextArrow: ".gallery__slider-control--next",
            dots: true,
            customPaging : function(slider, i) {
                return '<a href="#" class="gallery__slider-dot"></a>';
            },
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

    }

});