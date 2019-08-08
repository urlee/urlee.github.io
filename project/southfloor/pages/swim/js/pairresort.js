
$(function(){
  function smoothScroll(target){
			var button = [];
    	var scrollObj = [];
      var selectorName = [];

		function windowMove(e){
			var scrollHeight = $(scrollObj[e]).offset().top;
			var windowW = $(window).width();
			if(windowW > 1100){
						var adjustH = scrollHeight - 80;
				}else{
						var adjustH = scrollHeight - 80;
				}
				$("html, body").animate({scrollTop: adjustH}, 500);
				return false;
		}

		function init(){
			  $.each(target.find('a'),function(index){
							button[index] = $(this);
							scrollObj[index] = $(this).attr("jump");
							$(this).on({
								'click': function(){
									windowMove(index);
								}
							});
      	});
		}

		init();

    };

        smoothScroll($('#styleList'));

});
