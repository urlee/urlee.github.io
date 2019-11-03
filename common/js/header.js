document.writeln("    <link rel=\'stylesheet\' href=\'./common/css/reset.css\'>");
document.writeln("    <link rel=\'stylesheet\' href=\'./common/font-awesome/css/font-awesome.min.css\'>");
document.writeln("    <link rel=\'stylesheet\' href=\'./common/css/style.css\'>");
document.writeln("<div id=\'header\'>");
document.writeln("    <div class=\'w\'>");
document.writeln("        <div id=\'logo\'><a href=\'index.html\'><img src=\'./common/img/logo.png\' alt=\'榆畔\'></a></div>");
document.writeln("        <ul id=\'g_icon\'>");
document.writeln("            <li><a href=\'javascript:;\'><i class=\'fa fa-qq\'></i></a></li>");
document.writeln("            <li><a href=\'javascript:;\'><i class=\'fa fa-wechat\'></i></a></li>");
document.writeln("            <li><a href=\'javascript:;\'><i class=\'fa fa-weibo\'></i></a></li>");
document.writeln("        </ul>");
document.writeln("        <ul id=\'g_main\'>");
document.writeln("            <li class=\'active\'><a href=\'./index.html\' target=\'_top\'>首页</a></li>");
document.writeln("            <li><a href=\'./i_product.html\' target=\'_top\'>作品</a></li>");
document.writeln("            <li><a href=\'./i_daily.html\' target=\'_top\'>日志</a></li>");
document.writeln("            <li><a href=\'./i_about.html\' target=\'_top\'>关于</a></li>");
document.writeln("            <li><a href=\'./i_contact.html\' target=\'_top\'>联系</a></li>");
document.writeln("        </ul>");
document.writeln("        ");
document.writeln("    </div>");
document.writeln("</div>");


document.writeln("<script src=\'./common/js/jquery-3.2.1.min.js\'></script>");
$(function () {
    $("#g_main li").click(function () {
        var pathName = window.location.pathname;
        var urlMainLi = $(this).children("a").attr("href");
        alert(pathName);
        $(this).addClass("active").siblings().removeClass("active");
    })
})
