/*
 * ===================================================================
 *	jquery.layerBoard.js
 *	@auther:kiyoty
 *	@URI:https://www.idea-clippin.com
 *	@create:2012/12/30
 * 	@License:MIT License(X11 License��X License)
 * ===================================================================
 *	
 * -------------------------------------------------------------------
 *	opition
 * -------------------------------------------------------------------
 * delayTime		//ɽ���ޤǤ��Ԥ�����
 * fadeTime			//ɽ���Υե����ɻ���
 * alpha				//�쥤�䡼��Ʃ����
 * limitMin			//��ʬ�в��˺���ɽ�����뤫
 * easing				//��������
 * limitCookie	//cookie��¸����
 *	
 * -------------------------------------------------------------------
 *	Example
 *	$('#layer_board_area').layerBoard({alpha:0.5});
 * -------------------------------------------------------------------
*/

(function($) {
	
  $.fn.layerBoard = function(option) {
  	
		var elements = this;
		
		elements.each(function(){
			
			option = $.extend({
				delayTime: 200,						//ɽ���ޤǤ��Ԥ�����
				fadeTime : 500,						//ɽ���Υե����ɻ���
				alpha : 0.5,							//�쥤�䡼��Ʃ����
				
				limitMin : 1,							//��ʬ�в��˺���ɽ�����뤫
				
				easing: 'linear',					//��������
				
				limitCookie : 1	 					//cookie��¸����
			}, option);
							
				
			var limitSec = option.limitMin * 60; //�ÿ����Ѵ�
						
						
			if ($.cookie('layerBoardTime') == null) {
				
				/*----------------------------------------
					cookie���ʤ����
				 ----------------------------------------*/
				LayerBoardFunc ();
				
				//cookie�˸��ߤλ��֤򥻥å�
				var start = new Date();
				$.cookie('layerBoardTime', start.getTime(), { expires: option.limitCookie,path: '/' });
				
				
			} else {
				
				/*----------------------------------------
					cookie��������
				 ----------------------------------------*/
				
				//���ߤΥߥ��ä���������ÿ����Ѵ�
				var now = new Date();
				secDiff = now.getTime() - $.cookie('layerBoardTime');
				secTime = Math.floor( secDiff / 1000);
				
				
				//������֤�вᤷ�Ƥ������ϡ�LayerBoard��ɽ��
				//cookie�����塢����cookie�˸��ߤΥߥ��ä򥻥å�
				if (secTime >= limitSec) {
					
					LayerBoardFunc ();
					
					$.cookie('layerBoardTime', null, { expires:-1,path: '/' });
					
					var start = new Date();
					$.cookie('layerBoardTime', start.getTime(), { expires:option.limitCookie,path: '/' });
					
				}
				
			}
			
			
			/*----------------------------------------
				ɽ������
			 ----------------------------------------*/
			function LayerBoardFunc () {
				
				
				$('.layer_board_bg', elements).show().animate({opacity: 0},0).delay(option.delayTime).animate({opacity: option.alpha},option.fadeTime,function(){
					$('.layer_board', elements).fadeIn(option.fadeTime);																																					
				})
					
			}
			
			
			/*----------------------------------------
				��ɽ������
			 ----------------------------------------*/
			$('.layer_board_bg', elements).click(function() {
				
				$('.layer_board', elements).fadeOut(option.fadeTime);
				$(this).fadeOut(option.fadeTime);
				
				
			});
			
			
			//close�ܥ���ξ��
			$('.btn_close', elements).click(function() {
				
				$('.layer_board', elements).fadeOut(option.fadeTime);
				$('.layer_board_bg', elements).fadeOut(option.fadeTime);
				
				
			});
			
			//���̵���ξ��
			$('.pop_close', elements).click(function() {
				
				$('.layer_board', elements).fadeOut(option.fadeTime);
				$('.layer_board_bg', elements).fadeOut(option.fadeTime);
				
				
			});

			
			
			/*----------------------------------------
				�ܥ���ˤ��ɽ������
			 ----------------------------------------*/
			$('.layer_board_btn').click(function() {
				
				$('.layer_board_bg', elements).show().animate({opacity: 0},0).delay(option.delayTime).animate({opacity: option.alpha},option.fadeTime,function(){
					$('.layer_board', elements).fadeIn(option.fadeTime);																																					
				});
				
			});
	
		});
		
		return this;		
		
	};
	
})( jQuery );


