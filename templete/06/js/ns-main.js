// JavaScript Document

/*$(document).ready(function() {
var nav    = $('#footer'),
    offset = nav.offset();

$(window).scroll(function () {
  if($(window).scrollTop() > offset.top - 0) {
    nav.addClass('fixed_b');
  } else {
    nav.removeClass('fixed_b');
  }
});});*/

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
        $('body, html').animate({scrollTop:0}, 1500, 'easeInOutQuad');
        return false;
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



/*$(document).ready(function() {
 
  $("#owl_itemlist,#owl_itemlist2").owlCarousel2();
 
});*/


$(function() {
    $('img.lazy').lazyload({
		//200px先読み
		threshold : 200,
		//エフェクト
		effect : 'fadeIn'
    });
});

$(function(){
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 1500, "easeInOutQuad");
        return false;
    });
});

