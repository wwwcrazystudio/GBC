$(window).on('load', function () {



});


$(function() {

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
        speed: 400,
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


    $(".become-member-item").on('click', function (event) {

        var th = $(this),
            thisText = th.find('.become-member-item__title').text(),
            target = $(".join-us-form__checkbox-title:contains("+ thisText +")");

        if ( th.is('.become-member-item--sponsoren') && !$(event.target).closest('.become-member-item__btn').length) {
            return false;
        }

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

        $("body").toggleClass('menu-shown')

    });


    //выбор языка

    $(".language__toggler").on('click', function () {

        $(this).closest(".language").toggleClass('is-active');

    });

    $(".language__drop").on('click', 'li', function () {

       var thisText = $(this).text();

       $(this).closest('.language').find('.language__toggler').text(thisText);

        $(this).closest('.language').removeClass('is-active');


    });


    $(document).on('click', function (event) {

        if ( !$(event.target).closest('.language').length) {
            $(".language").removeClass('is-active');
        }

    });

});