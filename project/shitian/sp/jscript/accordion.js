$(function(){var a=new Array();a[1]=1;a[2]=1;a[3]=1;a[4]=1;a[5]=1;a[5]=1;a[6]=1;a[7]=1;a[8]=1;a[9]=1;a[10]=1;a[11]=1;a[12]=1;a[13]=1;a[14]=1;a[15]=1;$("#gNavi .accordion dt").click(function(){$(this).next("dd").slideToggle();$(this).next("dd").siblings("dd").slideUp();$(this).toggleClass("open");$(this).siblings("dt").removeClass("open")});$(".categoryList .accordion2 dt").click(function(){var e=$(".accordion2 dt").index(this);var f=$(this).outerHeight();var c=e+1;$(".accordion2 dt:not(:eq(idx))").removeClass("openabsolute");if((e%2)==0){if(a[e]==0){b(e);$(".accordion2 dt").eq(e).css("top",(c-1)/2*f);for(var d=1;d<=15;d++){a[d]=1}a[e]=1}else{b(e);$(".accordion2 dt").eq(e+1).addClass("openabsolute");$(".accordion2 dt:not(:eq(idx))").removeClass("openrelative");$(".accordion2 dt").eq(e+1).css("top",(c-1)/2*f);for(var d=1;d<=15;d++){a[d]=1}a[e]=0}}else{b(e);for(var d=1;d<=15;d++){a[d]=1}}});function b(c){$(".accordion2 dt").eq(c).next("dd").slideToggle();$(".accordion2 dt").eq(c).next("dd").siblings("dd").slideUp();$(".accordion2 dt").eq(c).toggleClass("open");$(".accordion2 dt").eq(c).siblings("dt").removeClass("open")}});


$(".accordion li.open2").click(function(){
		
	$(this).next("div").slideToggle();
	$(this).next("div").siblings("div").slideUp();
	$(this).toggleClass("open");	
	$(this).siblings("li").removeClass("open");
});