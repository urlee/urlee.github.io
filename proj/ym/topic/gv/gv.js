$(document).ready(function() {
    // slider
    $(function() {
        $('#my-slider').sliderPro({
            reachVideoAction: "playVideo",
            width: "100%",
            // aspectRatio: 2,//縦横比の設定
            imageScaleMode: "contain",
            autoHeight: true,
            arrows: true, //矢印の有無
            buttons: true, //ページャーの有無
            autoplay: true, //自動スライドか否か
            loop: true
        });
    });
    // tab
    $(function() {
        $("#tabs ul li a").on("click", function() {
            $(".item_box").hide();
            $($(this).attr("href")).fadeToggle();
            $("#tabs ul li a").removeClass("active"); //追加部分
            $(this).addClass("active");
        });
        return false;
    });
    // sp_header
    $(function() {
        $(".sb-toggle-left").on("click", function() {
            $("body").toggleClass('sb-active');
        });
        return false;
    });
    $(function() {
        $(".sb-active #sb-site").on("click", function() {
            $("body").removeClass('sb-active');
        });
        return false;
    });
    // a[href] smoothscroll
    $(function() {
        $('a[href^=#]').click(function() {
            var speed = 500;
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - 120;
            $("html, body").animate({ scrollTop: position }, speed, "swing");
            return false;
        });
    });
    // iframe height
    $(function() {
        $('iframe#footer_frame_sp').load(function() {
            // iframeの高さを取得 
            var iframe_height = $(this).contents().find('body').height();
            console.log(iframe_height);
            // iframeに高さを設定
            $(this).css('height', iframe_height + 'px');
        });
    });
    // backtop coming for underside
    $(function() {
        var showFlag = false;
        var topBtn = $('#pagetop');
        topBtn.css('bottom', '-100px');
        var showFlag = false;
        //スクロールが100に達したらボタン表示
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                if (showFlag == false) {
                    showFlag = true;
                    topBtn.stop().animate({ 'bottom': '20px' }, 200);
                }
            } else {
                if (showFlag) {
                    showFlag = false;
                    topBtn.stop().animate({ 'bottom': '-100px' }, 200);
                }
            }
        });
        //スクロールしてトップ
        topBtn.click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});

$(window).load(function() {
    // use tab fix
    $(function() {
        var nav = $('#tab-fix');
        var search = $('div#tabs ul li a h3');

        // メニューのtop座標を取得する
        var offsetTop = search.offset().top;
        console.log(offsetTop);
        var floatMenu = function() {
            // スクロール位置がメニューのtop座標を超えたら固定にする
            if ($(window).scrollTop() > offsetTop) {
                nav.addClass('fixed');
            } else {
                nav.removeClass('fixed');
            }
        }
        $(window).scroll(floatMenu);
        $('body').bind('touchmove', floatMenu);
    });
    // tabheight
    $(function() {
        // iframeの高さを取得 
        var tabfix_pad = $(this).contents().find('#tab-fix ul').height();
        // iframeに高さを設定
        $("#tab-fix").css('padding-top', tabfix_pad + 20 + 'px');
    });
});
