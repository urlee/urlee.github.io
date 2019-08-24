// JavaScript Document

$.extend({  
        manualScroll:function(opt,callback){  
            //alert("suc");  
            this.defaults = {  
                objId:"", // 滚动区域id  
                showArea:"", // 大图显示区域id，如果没有就不显示  
                showWidth:650, // 大图宽度  
                showHeight:650, // 大图高度  
                showTitle: false, // 是否在大图下方显示标题  
                width:300,  // 每行的宽度  
                height:100, // div的高度  
                picTimer:0,  // 间隔句柄，不需要设置，只是作为标识使用  
				interval:5500 
            };  
              
            //参数初始化  
            var opts = $.extend(this.defaults,opt); 
			
			var $objId = opts.objId;
			var $showArea = opts.showArea;
			var $showWidth = opts.showWidth;
			var $showHeight = opts.showHeight;
			var $showTitle = opts.showTitle;
			var $width = opts.width;
			var $height = opts.height;
			var $titleopacity = opts.titleopacity;
			var $picTimer = opts.picTimer;
			var index=0;
			var $len = $("#"+$objId).find("ul li").length;
			
			/*设置显示图片大小*/
			$("#"+$showArea).find("img").css({"height":$showHeight,"width":$showWidth});
			
			
            /*鼠标移动事件*/
			$("#"+$objId).find("ul li").hover(function(){
			  index = $(this).index();
			  showimg(index);
			});
			
	        /*自动切换*/
			$(".slider-scroll").hover(function(){  
                clearInterval($picTimer);
                },function(){  
                    $picTimer = setInterval(function() {
					   if(index==$len-1)
			            {
				         index=0;
			            }
						else
						{
					     index+=1;
						}
                        $("#"+$objId).find("ul li").removeClass("on");
				         $("#"+$objId).find("ul li").eq(index).addClass("on");
						 $("#"+$objId).find("ul li img").css("border-color","#fff").hover(function(){
							 $(this).css("border-color","#f0f");
					     },function(){
							 $(this).css("border-color","#fff");
					     });
						 $("#"+$objId).find("ul li img").eq(index).css("border-color","#f0f");
						 $("#"+$objId).find("ul p").hide();
						 $("#"+$objId).find("ul p").eq(index).show();
						 
						 $("#"+$showArea).find("img").css({"display":"none"});
						 $("#"+$showArea).find("img").eq(index).css({"display":"block"}).stop(true,false);
                    },opts.interval); // 自动播放的间隔，单位：毫秒  
            }).trigger("mouseleave");
			function showimg(index)
			{
				if(index==$len)
			    {
				   index=0;
			    }
				  $("#"+$objId).find("ul li").removeClass("on");
				  $("#"+$objId).find("ul li").eq(index).addClass("on");
				  $("#"+$showArea).find("img").css({"display":"none"});
				  $("#"+$showArea).find("img").eq(index).css({"display":"block"}).stop(true,false).animate({"opacity":"1"},500);
				  index+=1;
			}
			
		}
});