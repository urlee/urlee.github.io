// JavaScript Document

//読み込みの崩れ防止
$(function() {
		$('#drawer_menu').fadeIn(1000);
		$('#banner').fadeIn(1000);
	  $('#key_visual').fadeIn(1000);
		$('#key_visual_mini').fadeIn(1000);
		$('#point').fadeIn(1000);
		$('#event_banner').fadeIn(1000);
		$('#style').fadeIn(1000);
		$('#sale_pick').fadeIn(1000);
		$('.more01').fadeIn(0);
		$('.more02').fadeIn(0);
					 });

//スムーズスクロール部分の記述
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#newitem],a[href^=#rearrival],a[href^=#category],a[href^=#rank],a[href^=#main_nav],a[href^=#event],a[href^=#sp_event],a[href^=#sale],a[href^=#info]').click(function() {
      var speed = 400; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

//ドロワーメニュー
jQuery(document).ready(function( $ ) {
	$("#drawer_menu").mmenu({
		 "extensions": [
				"border-full",
				"theme-dark"
		 ],
		 "offCanvas": {
				"position": "top"
		 },
		 "navbar": {
				"title": "商品カテゴリ"
		 },
		 "navbars": [
				{
					 "position": "top",
					 "content": [
							"close",
							"title",
							"prev"
							
					 ]
				},
				{
					 "position": "bottom",
					 "content": [
							"<a id='drw_close'><img src='img/batsu.gif'>閉じる</a>"
					 ]
				}
		 ]
	});
	var API = $("#drawer_menu").data( "mmenu" );
	$("#drw_close").click(function() {
		 API.close();
	});
});


jQuery(function() {
    var nav = jQuery('#main_nav');
		var soryo = jQuery('#soryo');
		
    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;

    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if (jQuery(window).scrollTop() > offsetTop) {
            nav.addClass('nav_fixed');
						soryo.css('margin-top','40px');
        } else {
            nav.removeClass('nav_fixed');
						soryo.css('margin-top','');
        }
    }
					
    jQuery(window).scroll(floatMenu);
    jQuery('body').bind('touchmove', floatMenu);
		
});


//スライダー（キービジュアル）

$(document).ready(function(){
	$('#key_visual').slick({
		autoplay: true,
		dots:true
	});
});

$(document).ready(function(){
	$('#key_visual_mini').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 6000,
	centerMode: true
	});
});



//スライダー（SALEピックアップ）

$(document).ready(function(){
	$('#sale_pick').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});


//スライダー（スタイリングリスト）

$(document).ready(function(){
	$('#styling_list').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots:true
	});
});


//新着タブ切り替え
$(function() {
    $(".date").click(function() {
        var num = $(".date").index(this);
        $(".yokoku_content").addClass('hide');
        $(".yokoku_content").eq(num).removeClass('hide');
        $(".date").removeClass('select');
        $(this).addClass('select')
    });
});

//ランキングタブ切り替え
$(function() {
    $("#ranking li").click(function() {
        var num = $("#ranking li").index(this);
        $(".ranking_content").addClass('hide');
        $(".ranking_content").eq(num).removeClass('hide');
        $("#ranking li").removeClass('select');
        $(this).addClass('select')
    });
});

//カテゴリ別検索
$(function(){
	$(".accordion dt").click(function(){
			$(this).next("dd").slideToggle();
			$(this).next("dd").siblings("dd").slideUp();
			$(this).toggleClass("open");    
			$(this).siblings("dt").removeClass("open");
	});
	$(".accordion_sub p").click(function(){
			$(this).next("ul").slideToggle();
			$(this).children("span").toggleClass("open");
	}); 
});


//イベントランダム表示
jQuery(function($) {
$.fn.extend({
	randomdisplay : function(num) {
		return this.each(function() {
			var chn = $(this).children().hide().length;
			for(var i = 0; i < num && i < chn; i++) {
				var r = parseInt(Math.random() * (chn - i)) + i;
			$(this).children().eq(r).show().prependTo($(this));
			}
		});
	}
});

$(function(){
	$("[randomdisplay]").each(function() {
	$(this).randomdisplay($(this).attr("randomdisplay"));
	});
});
});

