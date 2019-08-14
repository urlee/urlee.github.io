
//タイマー設定
$(document).ready(function() {
  $(".view_timer").each(function(index, target) {
    var startDate = $(this).attr("data-start-date");
    var endDate = $(this).attr("data-end-date");
    var nowDate = new Date();

    if (startDate) {
      startDate = new Date(startDate);
    }
    else {
      startDate = nowDate;
    }
    if (endDate) {
      endDate = new Date(endDate);
    }

    if (startDate <= nowDate && (!endDate || nowDate <= endDate)) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  });
});


jQuery(function($) {
  var $mainNavi = $('#mainnavi').offset();
	$(window).on('scroll resize load', function() {
		// トップのアンカーボタンより下にいったときに、スマホで追従ボタンを出す
		if( ($(window).scrollTop() > $mainNavi) && ($(window).innerWidth() < 769) ) {
			$('#footernavi').addClass('is-scroll');
		} else {
			$('#footernavi').removeClass('is-scroll');
		}
	});
});
