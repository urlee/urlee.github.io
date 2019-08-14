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
