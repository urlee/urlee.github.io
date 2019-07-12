$(function() {
	var w = $(window).width();
	var x = 750;
	if (w <= x) {
$(function(){
	$(".price_b").each(function(){
	var pricetxt = $(this).text();
		$(this).text(
			pricetxt.replace("(税込)","")
		);
	})
});

$(function(){
	$(".price").each(function(){
	var pricetxt = $(this).text();
		$(this).text(
			pricetxt.replace("（税込）","")
		);
	})
});
	}
});