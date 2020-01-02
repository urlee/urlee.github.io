// iframeの高さを取得
$(function () {
  $('iframe#footer_frame_sp').load(function(){
    // iframeの高さを取得 
    var iframe_height = $(this).contents().find('body').height();
    // iframeに高さを設定
    $(this).css('height', iframe_height + 20 + 'px');
  });
});

// トップへ戻る
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
// ページ内リンク
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
// viewportchange
$(function(){
    // setViewport
    spView = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0';
    tbView = 'width=1024px,maximum-scale=1.0,user-scalable=0';
 
    if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="' + spView + '" id="viewport">');
    } else if(navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0){
        $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
    } 
});
// SP用レフトスライド
      (function($) {
        $(document).ready(function() {
            $.slidebars();
        });
    }) (jQuery);