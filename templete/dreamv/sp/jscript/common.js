// JavaScript Document

//ドロワー
    var menu_left = SpSlidemenu({
      main : '#main, #header, #footer',
      button: '.menu-button-left',
      slidemenu : '.slidemenu-left',
      direction: 'left'
    });

 
//ヘッダー固定 
   $(function() {
	
	$(window).on('load scroll', function(){
		
		if ($(window).scrollTop() > 30) {
			$('div.headerText').addClass('delete');
			$('nav.header-gNavi').addClass('delete');
			$('header').addClass('fixed');
			$('#howto').addClass('idou');
			
		} else {
			//30px以下だとdeleteクラスを削除
			$('div.headerText').removeClass('delete');
			$('nav.header-gNavi').removeClass('delete');
			$('header').removeClass('fixed');
			$('#howto').removeClass('idou');
		}
		
	});
	
  });


//カート/ページトップボタン固定
    $(function() {
        var topBtn = $('#fixBtn');	
        topBtn.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
    });









