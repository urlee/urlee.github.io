// JavaScript Document
$(window).load(function() {
    $('.flexslider').flexslider({
	animation: "slide",
	animationLoop:true,
	slideshow:true
	});
});

//アンカーリンクのスクリプト
$(document).ready(function(){
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
				},
				400,
				"easeInOutQuart");
			return false;
		});
	});
});
