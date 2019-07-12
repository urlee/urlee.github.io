window.onload = function(){
	var btn_Open = document.getElementById("nav_open");
	var btn_Close = document.getElementById("btnClose");
	var oNavArea = document.getElementById("navArea");
	/*var btn_ttl1 = document.getElementById("ttl1");
	var btn_ttl2 = document.getElementById("ttl2");
	var btn_ttl3 = document.getElementById("ttl3");
	var section1 = document.getElementById("section_container1");
	var section2 = document.getElementById("section_container2");
	var section3 = document.getElementById("section_container3");
	var cfxftr1 = document.getElementById("cfxfoot1");
	var cfxftr2 = document.getElementById("cfxfoot2");
	var cfxftx3 = document.getElementById("cfxfoot3");*/
	var mainView = document.getElementById("mainview_container");
	var viewItem = document.getElementById("mainview_itemwrap");
	var fdsGrpnews = document.getElementById("feeds_groupnews");
	var fdsContent = document.getElementById("feeds_contents");
	
	//mainView的高度
	//mainView.style.height = viewItem.offsetHeight+"px";
	//alert(mainView.offsetHeight)
	//当浏览器宽度小于768时的导航事件
	btn_Open.onclick = function (){
		oNavArea.style.left = 0;
	};
	btn_Close.onclick = function (){
		oNavArea.style.left = 100+"%";
	};
	
	
	//feeds部分的点击事件
	/*if (document.body.offsetWidth > 768) {//页面宽度大于768  #feeds部分的js事件
		btn_ttl1.onclick = function(){
			section1.style.display = "block";
			section2.style.display = "none";
			cfxftr1.style.display = "block";
			cfxftr2.style.display = "none";
			fdsContent.style.zIndex = 1;
			fdsGrpnews.style.zIndex = 2;
			btn_ttl1.style.backgroundColor = "#FFFFFF";
			btn_ttl2.style.backgroundColor = "#666666";
			btn_ttl1.style.cursor = "default";
			btn_ttl2.onmouseover = function(){
				btn_ttl2.style.cursor = 'pointer';
			}
		};
		btn_ttl2.onclick = function(){
			section2.style.display = "block";
			section1.style.display = "none";
			cfxftr1.style.display = "none";
			cfxftr2.style.display = "block";
			fdsGrpnews.style.zIndex = 1;
			fdsContent.style.zIndex = 2;
			btn_ttl2.style.backgroundColor = "#FFFFFF";
			btn_ttl1.style.backgroundColor = "#666666";
			btn_ttl2.style.cursor = "default";
			btn_ttl1.onmouseover = function(){
				btn_ttl1.style.cursor = 'pointer';
			}
		};
	} else if(document.body.offsetWidth <= 768){
		btn_ttl1.onclick = function(){
			if(section1.style.display == "none"){
				section1.style.display = "block";
				cfxftr1.style.display = "block";
			}else{
				section1.style.display = "none";
				cfxftr1.style.display = "none";
			}
		};
		btn_ttl2.onclick = function(){
			if(section2.style.display == "none"){
				section2.style.display = "block";
				cfxftr2.style.display = "block";
			}else{
				section2.style.display = "none";
				cfxftr2.style.display = "none";
			}
		};
		btn_ttl3.onclick = function(){
			if(section3.style.display == "none"){
				section3.style.display = "block";
				cfxftx3.style.display = "block";
			}else{
				section3.style.display = "none";
				cfxftx3.style.display = "none";
			}
		};
	};*/
	
};
