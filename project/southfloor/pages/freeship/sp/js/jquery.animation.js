// JavaScript Document
jQuery(function() {

    jQuery('.list-mv01_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv01_');
		}
		else{
			jQuery(this).stop().removeClass('mv01_');
		}
	});

    jQuery('.list-mv02_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv02_');
		}
		else{
			jQuery(this).stop().removeClass('mv02_');
		}
	});
	
	jQuery('.list-mv03_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv03_');
		}
		else{
			jQuery(this).stop().removeClass('mv03_');
		}
	});
	
	jQuery('.list-mv04_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv04_');
		}
		else{
			jQuery(this).stop().removeClass('mv04_');
		}
	});
	
	jQuery('.list-mv05_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv05_');
		}
		else{
			jQuery(this).stop().removeClass('mv05_');
		}
	});
	
	jQuery('.list-mv06_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv06_');
		}
		else{
			jQuery(this).stop().removeClass('mv06_');
		}
	});
	
	jQuery('.list-mv07_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv07_');
		}
		else{
			jQuery(this).stop().removeClass('mv07_');
		}
	});
	
	jQuery('.list-mv08_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv08_');
		}
		else{
			jQuery(this).stop().removeClass('mv08_');
		}
	});
	
	jQuery('.list-mv09_').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			jQuery(this).stop().addClass('mv09_');
		}
		else{
			jQuery(this).stop().removeClass('mv09_');
		}
	});

});