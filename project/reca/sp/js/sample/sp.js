// JavaScript Document

//読み込みの崩れ防止
$(function() {
		$('#drawer_menu').fadeIn(1000);
		$('#banner').fadeIn(1000);
	  $('#key_visual').fadeIn(1000);
		$('#key_visual_mini').fadeIn(1000);
		$('#key_visual').fadeIn(1000);
		$('#point').fadeIn(1000);
		$('#event_banner').fadeIn(1000);
		$('#style').fadeIn(1000);
		$('#sale_pick').fadeIn(1000);
		$('.more01').fadeIn(0);
		$('.more02').fadeIn(0);
					 });



//スライダー（キービジュアル）
$(document).ready(function(){
	$('#key_visual_mini').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
	centerMode: true
	});
});

//スライダー（コーディネイト）
$(document).ready(function(){
	$('#key_visual').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
	centerMode: true
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


$(function(){
	$("[randomdisplay]").each(function() {
	$(this).randomdisplay($(this).attr("randomdisplay"));
	});
});