$(function () {
    const MVS = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: true,
    });

    const MCS = new Swiper('.main_content_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        },

    });
});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
})

$(function () {
    $('#main_menu .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('#main_menu .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('#main_menu .tab_content .itm').removeClass('on')
        $('#main_menu .tab_content .itm').eq(idx).addClass('on')
    });

    const main_menu_slide01 = new Swiper('.main_menu_slide01', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '#main_menu .itm01 .arrows .next',
            prevEl: '#main_menu .itm01 .arrows .prev',
        },
    })
    const main_menu_slide02 = new Swiper('.main_menu_slide02', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '#main_menu .itm02 .arrows .next',
            prevEl: '#main_menu .itm02 .arrows .prev',
        },
    })
    const main_menu_slide03 = new Swiper('.main_menu_slide03', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '#main_menu .itm03 .arrows .next',
            prevEl: '#main_menu .itm03 .arrows .prev',
        },
    })
    const main_menu_slide04 = new Swiper('.main_menu_slide04', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '#main_menu .itm04 .arrows .next',
            prevEl: '#main_menu .itm04 .arrows .prev',
        },
    })
});

$(function () {
    const MMS = new Swiper('.main_story_slide', {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,

        },
        loop: true,
    });

    $(function () {
        $('.to_top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            })
        });
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop(); console.log(sct)

            if (sct > 400) {
                $('.to_top').addClass('on')
            } else {
                $('.to_top').removeClass('on')
            }
        });
    });
});




$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on');
        $('#header h1').toggleClass('on')
    })
});


$(function () {

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
})


