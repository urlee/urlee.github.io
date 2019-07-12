// JavaScript Document


//page top btn----------------------------------------------------------

$(function() {
    var pageTop = $('.page-top');
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body, html').animate({scrollTop:0}, 500, 'swing');
        return false;
    });
});

//フローティングヘッダー----------------------------------------------------------

$(window).on('load', function () {
	var nav    = $('#menu'),
    offset = nav.offset();

$(window).scroll(function () {
    if(offset && $(window).scrollTop() > offset.top) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
	});
});

//メニュー----------------------------------------------------------

$(document).ready(function() {
  $('.simple-menu').sidr();
});

$(function(){
var fadeSpeed = 3000;
$('#sidr_wrap').animate({opacity: '1'}, fadeSpeed);

$(".acc-menu p").click(function(){
    $(this).next("ul").slideToggle();
    $(this).children("span").toggleClass("open");
}); 
});

//carousel----------------------------------------------------------

$(document).ready(function() {
 
  $("#owl_itemlist,#owl_itemlist2").owlCarousel2();
 
});

//lazyload----------------------------------------------------------

$(function() {
    $('img.lazy').lazyload({
		//200px先読み
		threshold : 200,
		//エフェクト
		effect : 'fadeIn'
    });
});


