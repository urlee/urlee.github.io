  $(function () {
  $('iframe#footer_frame_sp').load(function(){
    // iframeの高さを取得 
    var iframe_height = $(this).contents().find('body').height();
    // iframeに高さを設定
    $(this).css('height', iframe_height + 20 + 'px');
  });
});
  /*$(function(){
    $("#loadheader").load("/gold/culture/smp/tmp/header-new.html");
  })*/
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
