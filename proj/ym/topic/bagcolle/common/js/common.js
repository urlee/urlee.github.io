
/* rollover */

(function($){
    $(function() {
    $('.item_search a img').mouseover(function() {
      $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
      $(this).mouseout(function() {
        $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
      });
    });
    });
})(jQuery);


/* 画像フェード */

$(document).ready(
  function(){
    $(".slides a, ul.ranking a, .blineup a,.blineup_head a,.blineup_min a") .hover(function(){
       $(this).fadeTo("1000",0.7); // マウスオーバーで透明度を30%にする
    },function(){
       $(this).fadeTo("1000",1.0); // マウスアウトで透明度を100%に戻す
    });
});

/* 文字数制限 */

$(function(){
  if($('.detail').length > 0){
    var count = 20; // デフォルトで表示する文字数
    $('.detail').each(function(){
      var target = $(this),
          fullTxt = target.text();
      if(fullTxt.length > count){
        target.text(fullTxt.substr(0,count) + ' … ');
      }
    });
  }
});
$(function(){
  if($('.brand_detail').length > 0){
    var count = 20; // デフォルトで表示する文字数
    $('.brand_detail').each(function(){
      var target = $(this),
          fullTxt = target.text();
      if(fullTxt.length > count){
        target.text(fullTxt.substr(0,count) + ' … ');
      }
    });
  }
});

$(function(){
  if($('.detail_l').length > 0){
    var count = 35; // デフォルトで表示する文字数
    $('.detail_l').each(function(){
      var target = $(this),
          fullTxt = target.text();
      if(fullTxt.length > count){
        target.text(fullTxt.substr(0,count) + ' … ');
      }
    });
  }
});

$(function(){
  if($('.flexslider02 .detail').length > 0){
    var count = 12; // デフォルトで表示する文字数
    $('.detail').each(function(){
      var target = $(this),
          fullTxt = target.text();
      if(fullTxt.length > count){
        target.text(fullTxt.substr(0,count) + ' … ');
      }
    });
  }
});

/* 親フレーム頭出し */

$(function() {
  var topBtn = $('.item_search a');
  topBtn.click(function() {
    var targetOffset = $(this.hash,parent.document).offset().top;
    $('html,body',parent.document).animate({
    scrollTop: targetOffset
    }, 1000);
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
/* pagetop */

$(function() {
  var topBtn = $('.pageTop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
    topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
    });
});
/* tabret viewport switch */

$(document).ready(function() {
    // setViewport
    spView = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0';
    tbView = 'width=1024';
 
    if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="' + spView + '" id="viewport">');
    } else if(navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0){
        $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
    } 
});