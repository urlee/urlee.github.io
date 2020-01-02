// tablet
$(function(){
    // setViewport
    spView = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0';
    tbView = 'width=1080px';
 
    if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="' + spView + '" id="viewport">');
    } else if(navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0){
    	$('html').css("width","1080px");
        $('body').css({
            width: '1080px'
        });
        $("#slider2").css('overflow', 'hidden');
        $('#header-wrap,#footer').css("width","1080px");
    	$('#header-wrap iframe').css("width","1080px");
        $('#pc_header iframe').css("width","1080px");
        $('head').prepend('<meta name="viewport" content="' + tbView + '" id="viewport">');
    }
});