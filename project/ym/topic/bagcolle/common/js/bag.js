// JavaScript Document

$(function(){

 
	//----------------------スマホ時はhover無効		
		
	var linkTouchStart = function(){
		thisAnchor = $(this);
		touchPos = thisAnchor.offset().top;
		moveCheck = function(){
		nowPos = thisAnchor.offset().top;
			if(touchPos == nowPos){
				 thisAnchor.addClass("hover");
			}
    }
    setTimeout(moveCheck,100);
　　}
	var linkTouchEnd = function(){
		thisAnchor = $(this);
		hoverRemove = function(){
			thisAnchor.removeClass("hover");
    	}
    setTimeout(hoverRemove,500);
	}
	$(document).on('touchstart mousedown','a',linkTouchStart);
	$(document).on('touchend mouseup','a',linkTouchEnd);
	
});



