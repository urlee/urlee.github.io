// JavaScript Document
//preload
/*
jQuery.preload = function(){
	for(var i = 0; i<arguments.length; i++){
		jQuery("<img>").attr("src", arguments[i]);
	}
};
jQuery.preload("/images/top/new_item_bg3.gif");
*/

$(document).ready(function(){
	$(".link_over").hover(
		function(){
			$(this).find("img").stop().animate({opacity:0.6}, 200);
		}, 
		function(){
			$(this).find("img").stop().animate({opacity:1}, 200);
		}
	);
});


//main banner
jQuery(function(){
	jQuery("#slideshow li:first").addClass("slctSld");

	var count = function(){
		var len = jQuery("#slideshow").children().length;
		if(dim >= len){
			dim = 1;
			crossFadeF();
		}else{
			dim += 1;
			crossFade();
		}
	}

	for(i=0;i<8;i++){
		jQuery(".slctSld").fadeOut(500).removeClass().next().fadeIn(500).addClass("slctSld");
		if(i>=7){
			var dim=1;
			jQuery("#slideshow li:first").fadeIn(500);
			jQuery("#slideshow li:first").addClass("slctSld");
			var intervalID = setInterval(count, 5000);
		}
	}

	var crossFade = function(){
		jQuery(".slctSld").fadeOut(500).removeClass().next().fadeIn(500).addClass("slctSld");
		var mainareabg = "url(img/renewal/center/main_banner0" + dim + ".jpg) no-repeat 0px 0px";
		$("#mainAreaBg").css("background",mainareabg);
	};
	var crossFadeF = function(){
		jQuery(".slctSld").fadeOut(500).removeClass().siblings("li:first").fadeIn(500).addClass("slctSld");
		var mainareabg = "url(img/renewal/center/main_banner0" + dim + ".jpg) no-repeat 0px 0px";
		$("#mainAreaBg").css("background",mainareabg);
	};
	
	$("#mt01").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner01.jpg) no-repeat 0px 0px");
		},function(){
			dim = 1;
			intervalID = setInterval(count, 4000);
		}
	);
	$("#mt02").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").next().fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner02.jpg) no-repeat 0px 0px");
		},function(){
			dim = 2;
			intervalID = setInterval(count, 4000);
		}
	);
	$("#mt03").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").next().next().fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner03.jpg) no-repeat 0px 0px");
		},function(){
			dim = 3;
			intervalID = setInterval(count, 4000);
		}
	);
	$("#mt04").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").next().next().next().fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner04.jpg) no-repeat 0px 0px");
		},function(){
			dim = 4;
			intervalID = setInterval(count, 4000);
		}
	);
	$("#mt05").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").next().next().next().next().fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner05.jpg) no-repeat 0px 0px");
		},function(){
			dim = 5;
			intervalID = setInterval(count, 4000);
		}
	);
	$("#mt06").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").next().next().next().next().next().fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner06.jpg) no-repeat 0px 0px");
		},function(){
			dim = 6;
			intervalID = setInterval(count, 4000);
		}
	);
	$("#mt07").hover(
		function(){
			clearInterval(intervalID);
			$(".slctSld").fadeOut(300).removeClass();
			$("#slideshow li:first").next().next().next().next().next().next().fadeIn(300).addClass("slctSld");
			$("#mainAreaBg").css("background","url(img/renewal/center/main_banner07.jpg) no-repeat 0px 0px");
		},function(){
			dim = 7;
			intervalID = setInterval(count, 4000);
		}
	);
});


$(function() {
	    $("#tab li").click(function() {
	        var num = $("#tab li").index(this);
	        $(".icon").addClass('dis_non');
	        $(".icon").eq(num).removeClass('dis_non');
			$(".date").addClass('dis_non');
	        $(".date").eq(num).removeClass('dis_non');
			$("#tab li img").removeClass('dis_non');
	        $("#tab li img").eq(num).addClass('dis_non');
			$(".rank_box").addClass('dis_non');
	        $(".rank_box").eq(num).removeClass('dis_non');
	    });
	});



//news slide up
jQuery(function(){
	var liSize = -122;
	var liSize2 = 122;
	var litime = 5000;
	
	var picklist = setInterval(function(){
		$("#pick_btnr").click();		
	},litime);
	
	var picklist2 = setInterval(function(){
		$("#pick_btnr2").click();		
	},litime);
	
	$("#picklist li,#pick_btnl,#pick_btnr").hover(
		function(){
			clearInterval(picklist);
		},
		function(){
			picklist = setInterval(function(){
				$("#pick_btnr").click();		
	},litime);
		}
	);
	
	$("#picklist2 li,#pick_btnl2,#pick_btnr2").hover(
		function(){
			clearInterval(picklist2);
		},
		function(){
			picklist2 = setInterval(function(){
				$("#pick_btnr2").click();		
	},litime);
		}
	);
		
	$("#pick_btnl").click(function(){
			$("#picklist").stop().animate({marginLeft:liSize2},300,function(){
					$("#picklist li:last").prependTo("#picklist");
					$("#picklist").css("margin-left","0");});	
		}
	);
	
	$("#pick_btnr").click(function(){
			$("#picklist").stop().animate({marginLeft:liSize},300,function(){
					$("#picklist li:first").appendTo("#picklist");
					$("#picklist").css("margin-left","0");});
		}
	);
	
	$("#pick_btnl2").click(function(){
			$("#picklist2").stop().animate({marginLeft:liSize2},300,function(){
					$("#picklist2 li:last").prependTo("#picklist2");
					$("#picklist2").css("margin-left","0");});	
		}
	);
	
	$("#pick_btnr2").click(function(){
			$("#picklist2").stop().animate({marginLeft:liSize},300,function(){
					$("#picklist2 li:first").appendTo("#picklist2");
					$("#picklist2").css("margin-left","0");});
		}
	);
	
});

//ドロップダウン
$(function() {
	init_menu();
});

function init_menu(){	
	$('.dropdown_navi li').hover(function(){ 
		var index = $('.dropdown_navi li').index(this)+1;
		$(".dropdown_menu"+index).stop().show();
		},
		function(){
		var index = $('.dropdown_navi li').index(this)+1;
		timerID =setTimeout(function(){$(".dropdown_menu"+index).hide();},30);
		$(".dropdown_menu"+index).hover(function(){ 
		clearTimeout(timerID);
		$(this).stop().show();
		},
		function(){
		$(this).hide();
		}
	);
		}
	);	
}




