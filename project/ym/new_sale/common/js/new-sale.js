// $(document).ready(function() {
//     var a = $(window).width();
//     if (a < 767) {
//         $(".flexslider").flexslider({
//             animation: "slide",
//             itemWidth: 100,
//             maxItems: 1,
//             move: 1,
//             controlNav: false,
//             itemMargin: 0
//         })
//     } else {
//         $(".flexslider").flexslider({
//             animation: "slide",
//             itemWidth: 100,
//             maxItems: 3,
//             move: 1,
//             controlNav: false,
//             itemMargin: 0
//         })
//     }
// });
$(function() {
    var b = $(".backtop");
    var a = $(".topicon");
    b.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            b.fadeIn()
        } else {
            b.fadeOut()
        }
    });
    b.click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false
    });
    a.click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false
    })
});
$(function() {
    $("a[href^=#]").click(function() {
        var c = 400;
        var b = $(this).attr("href");
        var d = $(b == "#" || b == "" ? "html" : b);
        var a = d.offset().top;
        $("body,html").animate({
            scrollTop: a
        }, c, "swing");
        return false
    })
});
$(function() {
    $("iframe#footer_frame_sp").load(function() {
        var a = $(this).contents().find("body").height();
        $(this).css("height", a + "px")
    })
});
// $("img.lazy").tada();
$(function() {
    $('#menu-button').click(function(event) {
        if ($('#menu-button').prop('checked')) {
            $("body,html").addClass("flow");
            //         $(window).on('touchmove.noScroll', function(e) {
            //      e.preventDefault();
            // });

        } else {
            $("body,html").removeClass("flow");
            // スクロール無効を解除する
            $(window).off('.noScroll');
        }
    });
});
$(function() {
    $("#header-inner ul li a").click(function(event) {
        $('#menu-button').prop('checked', false);
        $("body,html").removeClass("flow");
        // スクロール無効を解除する
        $(window).off('.noScroll');
    });
})
$(function() {
    $("#sp_sale_close").click(function(event) {
        $('#menu-button').prop('checked', false);
        $("body,html").removeClass("flow");
        // スクロール無効を解除する
        $(window).off('.noScroll');
    });
})
$(function() {
    $("#loadheader").load("../smp/tmp/header-new.html");
    // $("#header-wrap").load("../tmp/header.html");
})

// ヘッダー部分の読み込み
jQuery(function() {
    jQuery.ajax({
        type: 'GET',
        url: '/gold/culture/tmp/header.html',
        dataType: 'html',
        success: function(data) {
            var header = jQuery(data).filter('#header');
            console.log(header);
            jQuery("#header-wrap").append(header);
            $(function() {
                $(".header-bottom__list-cat").hover(function() {
                    $(".h-category__list").first().addClass("active")
                }, function() {
                    $(this).removeClass('active');
                });
                $(".h-category__list").hover(function() {
                    $(this).addClass('active');
                }, function() {
                    $(this).removeClass('active');
                });
            });

                $("#dropmenu").mnmenu({
                    responsiveMenuEnabled: false
                });
                $("#dropmenu").show();
                $("#header-guide").mnmenu({
                    responsiveMenuEnabled: false
                });
                $("#header-guide").show();
        },
        error: function() {
            console.log('問題がありました。');
        }
    });
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',

    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
        767: {
            slidesPerView: 1,
            slidesPerGroup: 1
        }
    }
});

$(function() {
    $(".sale-header__button").on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active');
        $(".sale-header__inner").addClass('active');
    });
    $(".sale-header__close,.sale-header__link").on('click', function(event) {
        $(".sale-header__button").removeClass('active');
        $(".sale-header__inner").removeClass('active');
    });
});



window.addEventListener('load', function() {
    var layzr = new Layzr();
}, false);


$(function() {
    var w = $(window).width();
    var x = 768;
    if (w >= x) {
        $('.sale-header__inner').addClass('active');
        $(".sale-header__button").addClass('active');
    }
});