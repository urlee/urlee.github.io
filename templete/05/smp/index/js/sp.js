// JavaScript Document

//�ɤ߹��ߤ������ɻ�
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

//���ࡼ������������ʬ�ε���
$(function(){
   // #�ǻϤޤ륢�󥫡��򥯥�å��������˽���
   $('a[href^=#newitem],a[href^=#rearrival],a[href^=#category],a[href^=#rank],a[href^=#main_nav],a[href^=#event],a[href^=#sp_event],a[href^=#sale],a[href^=#info]').click(function() {
      var speed = 400; // �ߥ���
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

//�ɥ���˥塼
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
				"title": "���ʥ��ƥ���"
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
							"<a id='drw_close'><img src='img/batsu.gif'>�Ĥ���</a>"
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
		
    // ��˥塼��top��ɸ���������
    var offsetTop = nav.offset().top;

    var floatMenu = function() {
        // ����������֤���˥塼��top��ɸ��Ķ���������ˤ���
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


//���饤�����ʥ����ӥ��奢���

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



//���饤������SALE�ԥå����åס�

$(document).ready(function(){
	$('#sale_pick').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});


//���饤�����ʥ�������󥰥ꥹ�ȡ�

$(document).ready(function(){
	$('#styling_list').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots:true
	});
});


//���奿���ڤ��ؤ�
$(function() {
    $(".date").click(function() {
        var num = $(".date").index(this);
        $(".yokoku_content").addClass('hide');
        $(".yokoku_content").eq(num).removeClass('hide');
        $(".date").removeClass('select');
        $(this).addClass('select')
    });
});

//��󥭥󥰥����ڤ��ؤ�
$(function() {
    $("#ranking li").click(function() {
        var num = $("#ranking li").index(this);
        $(".ranking_content").addClass('hide');
        $(".ranking_content").eq(num).removeClass('hide');
        $("#ranking li").removeClass('select');
        $(this).addClass('select')
    });
});

//���ƥ����̸���
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


//���٥�ȥ�����ɽ��
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

