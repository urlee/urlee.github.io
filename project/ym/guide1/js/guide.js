$(window).load(function() {
        var WWidth = $(window).width();
    var windowCheck = 768;
    if (WWidth <= windowCheck) {
      $(".guide__subhead").click(function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });
      $(".gleft").appendTo(".header__nav");
      $(".guide__subhead-link").each(function(){
    $(this).attr('href', "javascript:void(0);");
  });

    } else {

    }
});
// iframeの高さを取得
$(function() {
    $('iframe#footer-sp').load(function() {
        // iframeの高さを取得 
        var iframe_height = $(this).contents().find('body').height();
        // iframeに高さを設定
        $(this).css('height', iframe_height + 20 + 'px');
    });
});

// トップへ戻る
$(function() {
    var topBtn = $('.totop');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
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

// viewportchange
$(function() {
    // setViewport
    spView = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0';
    tbView = 'width=1024px,maximum-scale=1.0,user-scalable=0';

    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) {
        $('head').prepend('<meta name="viewport" content="' + spView + '" id="viewport">');
    } else if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0) {
        $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
    }
});
