slick = require('slick-carousel');
inview = require('jquery-inview');

jQuery(function($) {
	// inview
	$('[data-inview]').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).addClass('is-inview');
		}
	});

	// 共通変数
	var $pcViewPort = 768;

	// トップの追従メニューの変数
	var $followNav = $('[data-nav="follow"]');
	var $followWrap = $('[data-wrap="follow"]');
	var $followNavPosTop = 0;
	var $followNavHeight = 0;
	if( $followNav.length > 0 || $followWrap.length > 0 ) {
		$followNavPosTop = $followWrap.offset().top;
		$followNavHeight = $followNav.outerHeight();
	}
	var $followStartPos = ($followNavPosTop + $followNavHeight) * 1.3;
	$followWrap.attr('style', 'height: ' + $followNavHeight + 'px' );
	var startPos = 0;
	var scrollTimer = false;

	// ハンバーガーメニューの変数
	var $hamburger = $('[data-toggle="hamburger"]');
	var $hamburgerHiddenItem = $('[data-hidden="hamburger"]');
	var $hamburgerWrap = $('[data-wrap="hamburger"]');

	// ヘッダーのサーチ部分の変数
	var $headerSearch = $('[data-toggle="header-search"]');

	// フッターやハンバーガーメニュー内のアコーディオンの変数
	var $accordionNav = '[data-accordion-toggle="menu"]';
	var $accordionArrow = '[data-accordion-toggle="arrow"]';
	var $accordionTarget = $('[data-accordion-toggle="target"]');

	// ページトップの変数
	var $pagetop = '[data-nav="pagetop"]';

	// ヘッダー追従ナビ
	$(window).on('scroll', function() {
		$scrollPos = $(window).scrollTop();
		if (scrollTimer !== false) {
			clearTimeout(scrollTimer);
		}

		// 追従ナビの表示位置より下に来たかどうかの判定
		var outerHeight = $followNav.outerHeight();
		if( $scrollPos > $followStartPos ) {
			$followNav.attr('style', 'top: -' + outerHeight + 'px' );

			if( !$followNav.hasClass('is-following') ) {
				// .is-following がついていないときだけis-followingを付与
				$followNav.addClass('is-following');
			}

			// 下方向へのスクロールのとき.is-hidden を付与
			if( $scrollPos > startPos ) {
				$followNav.addClass('is-hidden');
				$followNav.attr('style', 'top: -' + outerHeight + 'px' );
			} else {
				// 上方向へのスクロールのとき.is-hidden をremove
				$followNav.removeClass('is-hidden');
				$followNav.removeAttr('style');
			}
		} else {
			// 追従ナビのヘッダー表示位置に戻ったら.is-following をremove
			$followNav.removeClass('is-following is-hidden');
			$followNav.removeAttr('style');
		}

		scrollTimer = setTimeout(function() {
			// 停止中は.is-hidden をremove
			$followNav.removeClass('is-hidden');
			$followNav.removeAttr('style');
		}, 200);

		startPos = $scrollPos;
	});

	// ハンバーガーメニューのクリック時にis-activeをつけたり消したりする
	$hamburger.click(function() {
		$(this).stop().toggleClass('is-active');
		$hamburgerHiddenItem.stop().toggleClass('is-hidden');
		$hamburgerWrap.stop().toggleClass('is-opened');
		$headerSearch.stop().removeClass('is-opened');
	});

	$('[data-accordion="header-search"]').click(function() {
		$headerSearch.stop().toggleClass('is-opened');
	});

	// 追従のスクロール位置の調整
	$('a[href^="#"]').click(function(e) {
		e.preventDefault();
		var $href = $(this).attr('href');
		var $target = $($href == '#' || $href == '' ? 'html' : $href);

		// 固定ヘッダーの高さを取得
		var gvHeaderHeight = $followNav.outerHeight();

		// aタグにdata-scroll="false"がついていないときだけ動作させる
		if( $(this).data('scroll') != false ) {
			// ターゲットの座標からヘッダーの高さ分を引いた数値の場所にスクロール
			var scrollTo = 0;
			if( $href != '#top') {
				scrollTo = $target.offset().top - gvHeaderHeight;
			}
			$('body, html').animate({
				scrollTop: scrollTo
			}, 400, 'swing');
		}
	});

	// PCとスマホのリサイズを横幅が変わったときだけ検知する
	var resizeTimer = false;
	var $windowWidth = $(window).width();
	var windowWidthResized = '';
	$(window).on('resize', function() {
		if (resizeTimer !== false) {
			clearTimeout(resizeTimer);
		}

		resizeTimer = setTimeout(function() {
			windowWidthResized = $(window).width();

			// リサイズが終わったとき
			if( $windowWidth != windowWidthResized ) {
				// 追従ナビの高さとoffsetを再取得する
				$followWrap.attr('style', 'height: ' + $followNav.outerHeight() + 'px' );

				// PCサイズになったとき
				if( windowWidthResized > $pcViewPort ) {
					$hamburger.removeClass('is-active');

					// サーチのアコーディオンを初期化する
					$hamburgerHiddenItem.removeClass('is-hidden');
					$hamburgerWrap.removeClass('is-opened');
					$headerSearch.removeClass('is-opened');

					// アコーディオンナビを初期化する
					$($accordionNav).removeAttr('style');
					$accordionTarget.removeClass('is-opened');
					$($accordionArrow).removeClass('u-icon--arrow-up').addClass('u-icon--arrow-bottom');
				} else {
					// スマホサイズになったとき
					$($pagetop).removeAttr('style');
				}
			}
		}, 200);
	});

	// ヒーローイメージのスライダー
	$mainvisual = $('[data-slider="main"]').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><span class="u-icon--arrow-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="u-icon--arrow-right"></span></button>'
	});

	// ページトップ時にフェードインさせる
	$(window).on('scroll', function() {
		if( $(window).scrollTop() > 100 ) {
			// PCサイズのときだけ動作
			if( $(window).width() > $pcViewPort ) {
				$($pagetop).fadeIn(200);
			}
		} else {
			// PCサイズのときだけ動作
			if( $(window).width() > $pcViewPort ) {
				$($pagetop).fadeOut(200);
			}
		}
	});

	// ナビゲーションをアコーディオンさせる
	$accordionTarget.each(function() {
		$(this).click(function() {
			// スマホサイズのときだけ
			if( $(window).width() < $pcViewPort ) {
				// 自身に.is-openedをつけたり消したりする
				$(this).toggleClass('is-opened');
				$(this).next($accordionNav).slideToggle(300);
				$($accordionArrow, this).toggleClass('u-icon--arrow-bottom u-icon--arrow-up');
			}
		});
	});

	// 汎用タブ - タブに data-tabs-tab="hoge"を持たせて、パネル側に data-tabs-panel="hoge"をつける
	var $multiTab = $('[data-tabs-block]');
	var $tabsTab = $('[data-tabs-tab]');
	var $tabsPanel = $('[data-tabs-panel]');
	if( $tabsTab.length > 0 ) {
		// 複数の場合も想定する
		$multiTab.each(function() {
			var $tab = $(this).find('[data-tabs-tab]');
			var $panel = $(this).find('[data-tabs-panel]');
			$tab.each(function() {
				$(this).click(function() {
					// タブのカレントを移動
					$tab.removeClass('is-current');
					$(this).addClass('is-current');

					// 表示させるパネルを設定
					$panel.removeClass('is-visible');
					$('[data-tabs-panel="'+ $(this).data('tabs-tab') +'"]').addClass('is-visible');
				});
			});
		});
	}
});
