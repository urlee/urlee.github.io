menulist = new Array();
acdlist = new Array();

$(function(){
	/* Index Menu */
	$(".guideMenu p").click(function(){
		var idx = $(".guideMenu p").index(this);
		if(menulist[idx]!=1){
			$(this).next("div").slideToggle(300);
		    $(this).removeClass("ico_open");
		    $(this).addClass("ico_close");
		    menulist[idx]=1;
		    console.log(idx);
		}
		else{
			$(this).next("div").slideToggle(300);
		    $(this).removeClass("ico_close");
		    $(this).addClass("ico_open");
		    menulist[idx]=0;
		    console.log(idx);
		}
	});

	/* Common Menu */
	$(".accordionMenu p").click(function(){
		var idx = $(".accordionMenu p").index(this);
		if(acdlist[idx]!=1){
			$(this).next("div").slideToggle(300);
		    $(this).removeClass("ico_open");
		    $(this).addClass("ico_close");
		    acdlist[idx]=1;
		    console.log(idx);
		}
		else{
			$(this).next("div").slideToggle(300);
		    $(this).removeClass("ico_close");
		    $(this).addClass("ico_open");
		    acdlist[idx]=0;
		    console.log(idx);
		}
	});

	/* Q&A */
	$(".QAanchor").click(function(){
		var idx = $(this).attr("value");
		console.log(idx);
		timer = setTimeout(function(){
		    if(acdlist[idx]!=1){
				$(".accordionMenu p").eq(idx).next("div").slideToggle(300);
			    $(".accordionMenu p").eq(idx).removeClass("ico_open");
			    $(".accordionMenu p").eq(idx).addClass("ico_close");
			    acdlist[idx]=1;    
			}
			else{
				$(".accordionMenu p").eq(idx).next("div").slideToggle(300);
			    $(".accordionMenu p").eq(idx).removeClass("ico_close");
			    $(".accordionMenu p").eq(idx).addClass("ico_open");
			    acdlist[idx]=0;
			    console.log(idx);
			}
			clearTimeout(timer);
		}, 500);
	});
});