// JavaScript Document
$(function(){
	$("#footerWrap").load("inc_d_footer.html");
	$("#sideColumn").load("inc_d_leftnavi.html");
	$("#sliderWrap").load("inc_d_pctop_slider.html");
	$(".inc_d_pctop_pickitem").load("inc_d_pctop_pickitem.html");
	$("#event_contents").load("inc_d_pctop_topics.html");
	$("#reitem").load("inc_d_pctop_reitem.html");
	$("#newitem").load("inc_d_pctop_newitem.html");
})

$(function(){
	$("#wrapper_top").waypoint({
		handler: function(direction){
			if (direction == 'down'){
				$("#gNaviWrap").toggleClass("fixed");
				$("#gNaviWrap.fixed").hide().slideDown(300);
			}else if(direction == 'up'){				

					$("#gNaviWrap").removeClass("fixed").slideDown(500);
				
			}
		}
	});
 });
 
 $(function() {
	$(window).on('load scroll', function(){
			if ($(window).scrollTop() > 150) {
				$('#header_mini').addClass('fixed');
			} else {
				$('#header_mini').removeClass('fixed');
			}
	});
});




var init_tab = 0;

$(function(){
  $('#tabcontent > div').hide();

  $('#tabnavi a').click(function () {
    $('#tabcontent > div').hide().filter(this.hash).fadeIn();
    
    $('#tabnavi a').removeClass('active');
    $(this).addClass('active');
    
    return false;
  }).filter(':eq(' + init_tab + ')').click();
});


$(function(){
  $('#tabcontent2 > div').hide();

  $('#tabnavi2 a').click(function () {
    $('#tabcontent2 > div').hide().filter(this.hash).fadeIn();
    
    $('#tabnavi2 a').removeClass('active');
    $(this).addClass('active');
    
    return false;
  }).filter(':eq(' + init_tab + ')').click();
});


$(function(){
  $('#tabcontent3 > div').hide();

  $('#tabnavi3 a').click(function () {
    $('#tabcontent3 > div').hide().filter(this.hash).fadeIn();
    
    $('#tabnavi3 a').removeClass('active');
    $(this).addClass('active');
    
    return false;
  }).filter(':eq(' + init_tab + ')').click();
});

$(function(){
    // 「ページトップへ」の要素を隠す
    $('#pagetop').hide();
    // スクロールした場合
    $(window).scroll(function(){
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() > 100) {
            // 「ページトップへ」をフェードイン
            $('#pagetop').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('#pagetop').fadeOut();
        }
    });
 
    // 「ページトップへ」をクリックした場合
    $('#pagetop').click(function(){
        // ページトップにスクロール
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
 
});