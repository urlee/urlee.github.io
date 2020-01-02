// Topへ戻るボタン
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



// スムーススクロール
$(function() {
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 60;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
// iframe高さ
$(function() {
    $('iframe#footer-sp').load(function() {
        // iframeの高さを取得 
        var iframe_height = $(this).contents().find('body').height();
        // iframeに高さを設定
        $(this).css('height', iframe_height + 20 + 'px');
    });
});



$(function() {
    $(".header__button").on("change", function() {
        if ($(this).prop("checked")) {
            $(".header__nav").css("left", "0")
        } else {
            $(".header__nav").css("left", "-100%")
        }
    })
});