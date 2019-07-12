$(function() {
	$(".header-bottom__list-cat").hover(function() {
		$(".h-category__list").first().addClass("active")}
		, function() {
		$(this).removeClass('active');		
	});
	$(".h-category__list").hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');		
	});
    });
jQuery(window).load(function(){$(function(){$("#s-category .answer").hide();$("#s-category .question").on("click",function(){$(this).next().slideToggle();$(this).toggleClass("highlight")})})});$(function(){$("#modal-commnents").on("click",function(){$("iframe#header-iframe",parent.document).addClass("iframe-height")})});$(function(){$(".remodal-close").on("click",function(){$("iframe#header-iframe",parent.document).removeClass("iframe-height")})});$(function(){$(".remodal-close").on("click",function(){$("iframe#header-iframe",parent.document).removeClass("iframe-height")})});$(function(){$("nav#header-bottom,#header-guide").hover(function(){$("iframe#header-iframe",parent.document).addClass("iframe-hover")},function(){$("iframe#header-iframe",parent.document).removeClass("iframe-hover")})});jQuery(window).load(function(){$("#dropmenu").mnmenu({responsiveMenuEnabled:false});$("#dropmenu").show()});jQuery(window).load(function(){$("#header-guide").mnmenu({responsiveMenuEnabled:false});$("#header-guide").show()});$(function(){var a=$(".pageTop");a.hide();$(window).scroll(function(){if($(this).scrollTop()>100){a.fadeIn()}else{a.fadeOut()}});a.click(function(){$("body,html").animate({scrollTop:0},1000);return false})});