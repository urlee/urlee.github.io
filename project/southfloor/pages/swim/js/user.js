/* ===============================================================
  190318_リニューアル用JS
=============================================================== */

$(function(){
  //ヘッダー【PC】：ハンバーガーメニュー内の開閉
  if($(".header_top_menu").length > 0){
    $(this).find('.menu').on("click", function() {
      $(this).toggleClass("active");
    });
  }

  //ヘッダー【共通】：ハンバーガーメニュー内の開閉
  if($(".sp_menu_open").length > 0){
    $(this).find('p').each(function(){
      $(this).on("click", function() {
        $(this).toggleClass("active");
        $(this).next('nav').find('ul').slideToggle(300);
      });
    });
  }

  //ヘッダー【水着】：メガメニュー表示
  if($(".header_swim_nav_190318_wrap").length > 0){
    $(this).find('.nav_blk').each(function(){
      $(this).hover(function() {
        var pos01 = $('.header_swim_nav_190318_wrap').offset();

        $(this).find('.nav_blk_content').css( "top" , pos01 + 'px' );
        $(this).find('.nav_blk_content').stop().slideToggle(300);
      });
    });
  }

  //ヘッダー【下着】：メガメニュー表示
  if($(".header_lingerie_nav_190318_wrap").length > 0){
    $(this).find('.nav_blk').each(function(){
      $(this).hover(function() {
        var pos02 = $('.header_lingerie_nav_190318_wrap').offset();

        $(this).find('.nav_blk_content').css( "top" , pos02 + 'px' );
        $(this).find('.nav_blk_content').stop().slideToggle(300);
      });
    });
  }

  //ヘッダー【水着】：検索窓表示・非表示
  if($(".ec_header_190318").length > 0){
    $(".ec_header_190318").find('.search').on("click", function() {
      $(this).toggleClass('active');
      $(this).parents('#ec_header').next('.search_box').toggleClass('active');
    });
    $('#sysWrap').on("click", function() {
      $(this).prev('#sysHeader').find('.ec_header_190318 .search').removeClass('active');
      $(this).prev('#sysHeader').find('.ec_header_190318 .search_box').removeClass('active');
    });
  }
  if($(".ec_header_sp_190318").length > 0){
    $(".ec_header_sp_190318").find('.search').on("click", function() {
      $(this).toggleClass('active');
      $(this).parents('#ec_header_sp').find('.search_box').toggleClass('active');
    });
    $('#sysWrap').on("click", function() {
      $(this).prev('#sysHeader').find('.ec_header_sp_190318 .search').removeClass('active');
      $(this).prev('#sysHeader').find('.ec_header_sp_190318 .search_box').removeClass('active');
    });
  }

  //ヘッダー【下着】：検索窓表示・非表示
  if($(".lingerie_header_190318").length > 0){
    $(".lingerie_header_190318").find('.search').on("click", function() {
      $(this).toggleClass('active');
      $(this).parents('#ec_header').next('.search_box').toggleClass('active');
    });
    $('#sysWrap').on("click", function() {
      $(this).prev('#sysHeader').find('.lingerie_header_190318 .search').removeClass('active');
      $(this).prev('#sysHeader').find('.lingerie_header_190318 .search_box').removeClass('active');
    });
  }
  if($(".lingerie_header_sp_190318").length > 0){
    $(".lingerie_header_sp_190318").find('.search').on("click", function() {
      $(this).toggleClass('active');
      $(this).parents('#ec_header_sp').find('.search_box').toggleClass('active');
    });
    $('#sysWrap').on("click", function() {
      $(this).prev('#sysHeader').find('.lingerie_header_sp_190318 .search').removeClass('active');
      $(this).prev('#sysHeader').find('.lingerie_header_sp_190318 .search_box').removeClass('active');
    });
  }


  //フッター【コーポレート】：サイトマップをラップ
  if($(".corporate_sitemap_190318").length > 0){
    $("#sysFooter").children('.sitemap_shop_190318, .sitemap_swim_style_190318').wrapAll('<div class="sitemap_blk">');
    $("#sysFooter").children('.sitemap_swim_cat_190318').wrap('<div class="sitemap_blk">');
    $("#sysFooter").children('.sitemap_swim_pickup_190318, .sitemap_yoga_wear_190318, .sitemap_northerly_style_190318').wrapAll('<div class="sitemap_blk">');
    $("#sysFooter").children('.sitemap_northerly_cat_190318, .sitemap_northerly_pickup_190318').wrapAll('<div class="sitemap_blk">');
    $("#sysFooter").children('.sitemap_members_club_190318, .sitemap_about_us_190318').wrapAll('<div class="sitemap_blk">');
  }
  if($(".sitemap_blk").length > 0){
    $('.sitemap_blk').wrapAll('<div class="sitemap_wrap">');
  }

  //フッター【水着】：サイトマップをラップ
  if($(".ec_sitemap_190318").length > 0){
    $('.ec_sitemap_190318').wrapAll('<div class="ec_sitemap_wrap">');
  }
});


//ウインドウサイズの横幅によって条件分岐する
var windowWidth = $(window).width();
var windowSm = 980;
if (windowWidth <= windowSm) {
    //横幅980px以下のとき（スマホサイズ）の処理を書く
    $(function(){
      //フッター【コーポレート】：サイトマップSP時の開閉
      if($(".corporate_sitemap_190318").length > 0){
          $(".corporate_sitemap_190318 h3").each(function(){
            $(this).on("click", function() {
              $(this).toggleClass("active");
              $(this).parent(".sysHeadline").next(".sysContent").find('ul').slideToggle(300);
            });
          });
        }

      //フッター【水着・下着】：サイトマップSP時の開閉
      if($(".ec_sitemap_190318").length > 0){
          $(".ec_sitemap_190318 h3").each(function(){
            $(this).on("click", function() {
              $(this).toggleClass("active");
              $(this).parent(".sysHeadline").next(".sysContent").find('ul').slideToggle(300);
            });
          });
        }

      //トップ【水着・下着】：サーチSP時の開閉
      if($(".ec_top_search_190318_wrap").length > 0){
          $(".ec_top_search_190318_wrap h3").each(function(){
            $(this).on("click", function() {
              $(this).toggleClass("active");
              $(this).next("ul").slideToggle(300);
            });
          });
        }
  });
} else {
    //横幅980px以上のとき（タブレット・PCサイズ）の処理を書く
}
