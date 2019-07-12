/*--------------------------------------------------------------------------*
 *  20120404ADD
 *--------------------------------------------------------------------------*/	function changeDisp (no) {
		
		if(no == 1) {
			var width = $(document).width()
			var height = $(document).height()
			var menuwidth = (width * 0.9);
			var herfmwidth = -(menuwidth / 2);
			$("#link-back").css("display","block");
			$("#link-menu").css("display","block");
			$("#link-back").css("background-color","black");
			$("#link-back").css("filter","alpha(opacity=60)");
			$("#link-back").css("-moz-opacity","0.6");
			$("#link-back").css("opacity", "0.6");
			$("#link-back").css("width", width);
			$("#link-back").css("height", height);
			$("#link-back").css("z-index", '9999999');
			$("#link-back").css("position","absolute");
			$("#link-back").css("top","0");
			$("#link-back").css("left","0");
			$(document).css("position","absolute");
			$(document).css("top","0");
			$(document).css("left","0");
			$(document).css("z-index", "0");
			$("#link-menu").css("background-color","white");
			$("#link-menu").css("width", menuwidth );
			//$("#link-menu").css("height","636" );
			//メルマガ追加時のサイズ↓
			$("#link-menu").css("height","679" );
			$("#link-menu").css("z-index", '10000000');
			$("#link-menu").css("position","absolute");
			$("#link-menu").css("top","15%");
			$("#link-menu").css("left","50%");
			$("#link-menu").css("margin-left", herfmwidth);
			$("body").scrollTop(0);
		}
		else if (no == 2){
			$("#link-back").css("display","none");
			$("#link-menu").css("display","none");
			$("body").scrollTop(0);
		}
}