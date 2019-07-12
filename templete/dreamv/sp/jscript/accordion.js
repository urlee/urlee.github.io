
$(function(){
	

$(".accordion2 dt").click(function(){
		
	$(this).next("dd").slideToggle();
	$(this).next("dd").siblings("dd").slideUp();
	$(this).toggleClass("open");	
	$(this).siblings("dt").removeClass("open");
});

$(".accordion p").click(function(){
    $(this).next("ul").slideToggle();
    $(this).children("span").toggleClass("open");
});	


$(".accordion dt").click(function(){
	$(this).next("dd").slideToggle();
	$(this).next("dd").siblings("dd").slideUp();
	$(this).toggleClass("open");	
	$(this).siblings("dt").removeClass("open");
});


}); 

$(".accordion li.open2").click(function(){
		
	$(this).next("div").slideToggle();
	$(this).next("div").siblings("div").slideUp();
	$(this).toggleClass("open");	
	$(this).siblings("li").removeClass("open");
});
