///////////////////////////////////////////////////////////////
//
// ターゲットの座標からヘッダの高さ分を抜く
//
///////////////////////////////////////////////////////////////
jQuery(function($){
	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr('href');
		var target = $(href == "#" || href == "" ? 'html' : href);
		//固定ヘッダーの高さ
		var headerHeight = 46;
		if( $(window).innerWidth() >= 769 ) {
			headerHeight = 0;
		} else if ( $(window).scrollTop() <= 75 ) {
			// 追従がない状態のときのヘッダーの高さ
			headerHeight = 75;
		}

		// aタグに.noscrollがなければスクロールする
		if( $(this).hasClass('noscroll') != true ) {
			//ターゲットの座標からヘッダの高さ分引いた数値の場所にスクロールする
			$('body,html').animate({
				scrollTop: target.offset().top - headerHeight
			}, speed, 'swing');
			return false;
		}
	});
});


///////////////////////////////////////////////////////////////
//
// Lazyload Setting
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	var lazy = $( '.lazy' );
	if( lazy[0] ) {
		lazy.lazyload({
			effect : 'fadeIn'
		});
	}
});

///////////////////////////////////////////////////////////////
//
// get today function
//
///////////////////////////////////////////////////////////////
function getToday() {
	// getToday を呼び出せば今日の日付が返ってくる
	var dateArray = [];
	var getDate = new Date();

	// 年
	dateArray['year'] = getDate.getFullYear();
	// 月
	dateArray['month'] = getDate.getMonth() + 1;
	// 日
	dateArray['date'] = getDate.getDate();
	// 曜日
	dateArray['day'] = getDate.getDay();
	// 時
	dateArray['hour'] = getDate.getHours();
	// 分
	dateArray['minute'] = getDate.getMinutes();
	// 時間
	dateArray['time'] = dateArray['hour']+':'+dateArray['minute'];

	return dateArray;
}

///////////////////////////////////////////////////////////////
//
// Set Today in title
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	var today = getToday();
	// .title-todayの中に今日の月日を出力
	$('.title-today').html( today['month'] + '/' + today['date'] );
});

///////////////////////////////////////////////////////////////
//
// Only view weekday lunch time
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	$(window).on('load', function() {
		// 平日10:00-16:00の間だけバナーを表示する
		var today = getToday();
		if( today['day'] != 0 && today['day'] != 6 ) {
			// 土日以外の場合のみ動作
			if( today['time'] >= '10:00' && today['time'] <= '15:59' ) {
				// 10:00-16:00の間のみ
				$('.c-header-lunch').show();
			}
		}
	});
});

///////////////////////////////////////////////////////////////
//
// View 'UP!' icon newitem come
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	$(window).on('load', function() {
		// 新着商品がある日にUP!を表示する
		var newitemDate = getToday();
		if( newitemDate['day'] == 0 || newitemDate['day'] == 2 || newitemDate['day'] == 4 ) {
			// 火曜・木曜・日曜のみ動作
			$('.coming-icon').show();
		}
	});
});

///////////////////////////////////////////////////////////////
//
// Replace text（こちらTOP用）
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	$(".p-timesale__ship:contains('P10倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P10倍","<span class=\"p-timesale__shipfee u-mark--bg-orange\">P10倍</span>") );
	});

	$(".p-timesale__ship:contains('P5倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P5倍","<span class=\"p-timesale__shipfee u-mark--bg-orange\">P5倍</span>") );
	});

	$(".p-timesale__ship:contains('P11倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P11倍","<span class=\"p-timesale__shipfee u-mark--bg-orange\">P11倍</span>") );
	});
    
	$(".p-timesale__ship:contains('P2倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P2倍","<span class=\"p-timesale__shipfee u-mark--bg-orange\">P2倍</span>") );
	});

	$(".p-timesale__ship:contains('送料無料')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("送料無料","<span class=\"p-timesale__shipfee u-mark--bg-pink\">送料無料</span>") );
	});
});

///////////////////////////////////////////////////////////////
//
// Replace text　両方残す（こちらSALEページ用）
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	$(".icon:contains('P5倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P5倍","<span class=\"point\">P5倍</span>") );
	});

	$(".icon:contains('送料無料')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("送料無料","<span class=\"shipfee\">送料無料</span>") );
	});
	
	$(".icon:contains('P10倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P10倍","<span class=\"point\">P10倍</span>") );
	});
	
	$(".icon:contains('P15倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P15倍","<span class=\"point\">P15倍</span>") );
	});
	
	$(".icon:contains('P2倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P2倍","<span class=\"point\">P2倍</span>") );
	});
	
	$(".icon:contains('P11倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P11倍","<span class=\"point\">P11倍</span>") );
	});
	
	$(".icon:contains('P12倍')").each(function() {
		var txt = $(this).html();
		$(this).html( txt.replace("P12倍","<span class=\"point\">P12倍</span>") );
	});
});


///////////////////////////////////////////////////////////////
//
// Slider
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	var banners = $('.banners-slider');
	if( banners[0] ) {
		banners.slick({
			autoplay:true
		});
	}
});

///////////////////////////////////////////////////////////////
//
// Auto height for iframe
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	$(window).on('load', function() {
		resizeIframe();
	});

	var resizeTimer = false;
	$(window).resize(function() {
		if (resizeTimer !== false) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			resizeIframe();
		}, 2000);
	});

	function resizeIframe() {
		$('.iframe-height').each(function() {
			var D = $(this)[0].contentWindow.document;
			if( D.body == null ) {
				$(this).on('load', function() {
					// 初回読み込み時
					$(this).removeAttr('height').css('height', resizeHeight( D.getElementsByTagName('html')[0] ) + 'px');
				});
			} else {
				$(this).removeAttr('style').css('height', resizeHeight( D.getElementsByTagName('html')[0] ) + 'px');
			}
		});
	}

	function resizeHeight( t ) {
		var num = Math.max( t.scrollHeight, t.offsetHeight, t.clientHeight );
		return num;
	}
});
///////////////////////////////////////////////////////////////
//
// PCのみ別窓で開く
//
///////////////////////////////////////////////////////////////
jQuery(function($){
  var w = $(window).width();
  var x = 769;
  if (w <= x ) {
    $('a').attr('target' , '_top');
  }
});
///////////////////////////////////////////////////////////////
//
// Scroll to PageTop
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	var topBtn = $('#page-top');
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});
///////////////////////////////////////////////////////////////
//
// 時間指定
//
///////////////////////////////////////////////////////////////
jQuery(function($){
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
///////////////////////////////////////////////////////////////
//
//  レスポンシブ＿ヘッダやフッタの短縮置き換え
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
//PC環境の場合
if (window.matchMedia( '(min-width: 769px)' ).matches) {　//切り替える画面サイズ
		$.ajax({
			url: 'https://shopping.geocities.jp/kobelettuce/responsive/js/pc_responsive.js',
			dataType: 'script',
			cache: false
	   });
	//スマホ・タブレット環境の場合
	} else {
	    $.ajax({
			url: 'https://shopping.geocities.jp/kobelettuce/responsive/js/sp_responsive.js',
			dataType: 'script',
			cache: false
		});
	};
});



///////////////////////////////////////////////////////////////
//
//  ヘッダースクリプト
//
///////////////////////////////////////////////////////////////
jQuery(function($){
	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr('href');
		var target = $(href == "#" || href == "" ? 'html' : href);
		//固定ヘッダーの高さ
		var headerHeight = 46;
		if( $(window).innerWidth() >= 769 ) {
			headerHeight = 0;
		} else if ( $(window).scrollTop() <= 75 ) {
			// 追従がない状態のときのヘッダーの高さ
			headerHeight = 75;
		}

		// aタグに.noscrollがなければスクロールする
		if( $(this).hasClass('noscroll') != true ) {
			//ターゲットの座標からヘッダの高さ分引いた数値の場所にスクロールする
			$('body,html').animate({
				scrollTop: target.offset().top - headerHeight
			}, speed, 'swing');
			return false;
		}
	});
});


///////////////////////////////////////////////////////////////
//
//  Fit Iframe JavaScript
//
///////////////////////////////////////////////////////////////

jQuery(function($){

var isMSIE = /*@cc_on!@*/false;
var params = {};
var scripts = document.getElementsByTagName( 'script' );
var fn = 'fit_ifr';		//This script file name.

var fitIfr = function() {
	if( !arguments[0] || arguments[0].type === 'load' ) {
		var ifrObjs = document.getElementsByTagName( 'iframe' );
		for( var i=0; i<ifrObjs.length; i++) {
			var ifrObj = ifrObjs[i];
			
			// Yahoo ドメインの時のみ iframe の高さを取得
			if ( ifrObj.src.match(/^https:\/\/shopping\.geocities\.jp\/kobelettuce/)) {
							
				var doc = ifrObj.contentWindow.document.documentElement;
				var body = ifrObj.contentWindow.document.body;
			
				try {
					var fitHeight = 0;
					if( isMSIE ) {
						if( navigator.userAgent.toLowerCase().replace( /\s/g, '' ).indexOf( 'msie6' ) > -1 ) {
							fitHeight = body.scrollHeight;
						} else {
							fitHeight = doc.scrollHeight;
						}
					} else {
						fitHeight = doc.offsetHeight;
					}
					
					ifrObj.style.height = fitHeight + 'px';
				} catch( e ) {
					/* skip process */
				}
			}
		}

	} else if( arguments[0].charAt(0) == '-' ) {
		var ifrObjs = document.getElementsByTagName( 'iframe' );
		var chkFlg;
		for( var i=0; i<ifrObjs.length; i++) {
			var ifrObj = ifrObjs[i];
			var doc = ifrObj.contentWindow.document.documentElement;
			var body = ifrObj.contentWindow.document.body;
			chkFlg = false;
			
			for( var k=0; k<arguments.length; k++ ) {
				if( ifrObj.id == arguments[k].substring( 1, arguments[k].length ) ) {
					if ( arguments[k].charAt( 0 ) == '-' ) {
						chkFlg = true;
					}
				}
			}
			
			if ( !chkFlg ) {
				try {
					var fitHeight = 0;
					if( isMSIE ) {
						if( navigator.userAgent.toLowerCase().replace( /\s/g, '' ).indexOf( 'msie6' ) > -1 ) {
							fitHeight = body.scrollHeight;
						} else {
							fitHeight = doc.scrollHeight;
						}
					} else {
						fitHeight = doc.offsetHeight;
					}
					
					ifrObj.style.height = fitHeight + 'px';
				} catch( e ) {
					/* skip process */
				}
			}
		}
	} else {
		for( var i=0; i<arguments.length; i++ ) {
			var ifrObj;
			if( document.getElementById( arguments[i] ) ) {
				ifrObj = document.getElementById( arguments[i] );
			} else {
				continue;
			}
			
			var doc = ifrObj.contentWindow.document.documentElement;
			var body = ifrObj.contentWindow.document.body;
			
			try {
				var fitHeight = 0;
				if( isMSIE ) {
					if( navigator.userAgent.toLowerCase().replace( /\s/g, '' ).indexOf( 'msie6' ) > -1 ) {
						fitHeight = body.scrollHeight;
					} else {
						fitHeight = doc.scrollHeight;
					}
				} else {
					fitHeight = doc.offsetHeight;
				}
				
				ifrObj.style.height = fitHeight + 'px';
			} catch( e ) {
				/* skip process */
			}
		}
	}
}

//get script URL parameter.
for ( var i=0; i<scripts.length; i++ ) {
	if( scripts[i].src.indexOf( fn ) != -1 ) {
		scripts[i].src.match( /(?:.*)(?:\?)(.*)/ );
		if( RegExp.$1 ) {
			var a = RegExp.$1.split( '&' );
			for( var k=0; k<a.length; k++ ) {
				var p = a[k].split( '=' );
				params[p[0]] = p[1];
			}
		}
		
		break;
	}
}

//set function to window object.
window.fitIfr = fitIfr;
if( !params.hasOwnProperty( 'auto' ) || params.auto == 1 ) {
	if( window.addEventListener ) {
		window.addEventListener( 'load', fitIfr, false );
	} else {
		window.attachEvent( 'onload', fitIfr );
	}
}

});









///////////////////////////////////////////////////////////////
//
// ページ幅で読み込むhtmlを変える
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	$(window).on( 'load', responsiveContent() );

	var resizeTimer = false;
	$(window).resize(function() {
		if (resizeTimer !== false) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			responsiveContent();
		}, 200);
	});

	function responsiveContent() {
		var url = 'https://shopping.geocities.jp/kobelettuce';
		// var url = '';
		if( $(window).innerWidth() >= 769 ) {
			// SPのフッターを削除する
			$( '#sp_footer' ).html( '' );

			if( $( '#pc_header' ).html() == '' ) {
				// #pc-headerの中身が空のときのみコンテンツをロードする
				$( '#pc_header' ).load( url + '/responsive/pc_header.html' );
			}
			if( $( '#pc_header_higawari' ).html() == '' ) {
				// #pc-headerの中身が空のときのみコンテンツをロードする
				$( '#pc_header_higawari' ).load( url + '/responsive/pc_header_higawari.html' );
			}			
			
			if( $( '#pc_side' ).html() == '' ) {
				// #pc-sideの中身が空のときのみコンテンツをロードする
				$( '#pc_side' ).load( url + '/responsive/pc_side.html' );
			}
			if( $( '#pc_footer' ).html() == '' ) {
				// #pc-footerの中身が空のときのみコンテンツをロードする
				$( '#pc_footer' ).load( url + '/responsive/pc_footer.html' );
			}
			if( $( '#pc_footer_link' ).html() == '' ) {
				// #pc-footer_linkの中身が空のときのみコンテンツをロードする
				$( '#pc_footer_link' ).load( url + '/responsive/pc_footer_link.html' );
			}
		} else {
			// PCコンテンツを削除する
			$( '#pc_header, #pc_header_higawari, #pc_side, #pc_footer, #pc_footer_link' ).html( '' );
			// SPのフッターを読み込む
			if( $( '#sp_footer' ).html() == '' ) {
				// #sp-footerの中身が空のときのみコンテンツをロードする
				$( '#sp_footer' ).load( url + '/responsive/sp_footer.html' );
			}
			if( $( '#sp_footer_link' ).html() == '' ) {
				// #sp-footerの中身が空のときのみコンテンツをロードする
				$( '#sp_footer_link' ).load( url + '/responsive/sp_footer_link.html' );
			}
		}
	}
});

///////////////////////////////////////////////////////////////
//
// gmenuのtop値の変更
//
///////////////////////////////////////////////////////////////
jQuery(function($) {
	// スマホヘッダーの高さを取得
	navOffset = $('#searchframe').innerHeight();
	$(window).on('load resize', function () {
		navOffset = $('#searchframe').innerHeight();
	});
	$(window).scroll(function () {
		if( $(window).scrollTop() > navOffset ) {
			$('#gmenu').addClass('fixed');
		} else {
			$('#gmenu').removeClass('fixed');
		}
	});
});
