$(function() {
    $("#s-category .answer").hide();
    $("#s-category .question").on("click", function() {
        $(this).next().slideToggle();
        $(this).toggleClass("highlight")
    })
});
$(function() {
    $(".cb-search .closer").hide();
    $(".cb-search .opener").on("click", function() {
        $(this).next().slideToggle();
        $(this).toggleClass("cb-active")
    })
});
$(function() {
    $(".more-11-hide").hide();
    $(".more-11").on("click", function() {
        $(this).next().slideToggle();
        $(this).toggleClass("more-active")
    })
});

$(function() {
    $("a#h-s-btn").on("click touchstart", function() {
        $("#r-camp").toggle(false);
        $("#r-nav-search").toggle(true)
    })
});
$(function() {
    $(".pageTop").on("click touchstart", function() {
        $("#main").toggleClass("sb-absolute")
    })
});
$(function() {
    var a = $(".pageTop");
    a.click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false
    })
});

  $(function(){
  $('input').bind('mousedown', function () {
    $(this).data('scrollTop', $(window).scrollTop());
  }).one('blur', function () {
    $(window).scrollTop($(this).data('scrollTop'));
    setTimeout(function () {
    $('input').blur();
    },100)
  });
  });