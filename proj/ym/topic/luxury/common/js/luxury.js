      $(".lazy").lazyload({
        effect_speed: 2000,
          effect: 'fadeIn'
      });
      $(function() {
          var showFlag = false;
          var topBtn = $('.pagetop');
          topBtn.css('bottom', '-100px');
          //スクロールが100に達したらボタン表示
          $(window).scroll(function() {
              if ($(this).scrollTop() > 100) {
                  if (showFlag === false) {
                      showFlag = true;
                      topBtn.stop().animate({
                          'bottom': '20px'
                      }, 200);
                  }
              } else {
                  if (showFlag) {
                      showFlag = false;
                      topBtn.stop().animate({
                          'bottom': '-100px'
                      }, 200);
                  }
              }
          });
          //スクロールしてトップ
          topBtn.click(function() {
              $('body,html').animate({
                  scrollTop: 0
              }, 500);
              return false;
          });

          var x = 767;
          var w = $(window).width();
          if (w <= x) {
            $(".visual").each(function() {
              var grey = $(this).children('.visual__list-grey');
              $(grey).prependTo(this);
            });

            $(".nav").appendTo('.header__nav');
            $(".nav__link").click(function() {
              $(".header__button").prop('checked', false);
              $(".header__nav").css("left", "-100%");
            });
          } else {
            var s = 730;
              $(window).scroll(function() {
                  if ($(this).scrollTop() > s) {
                      $(".nav").addClass('fixed');
                  } else {
                      $(".nav").removeClass('fixed');
                  }

              });
          }
      });

      // tablet
      $(function() {
          // setViewport
          tbView = 'width=1024px,maximum-scale=1.0,user-scalable=0';
          if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0) {
              $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
              $("html,body").css("width", "1024");
          }
      });
