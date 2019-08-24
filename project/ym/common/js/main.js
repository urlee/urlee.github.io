jQuery(window).load(function() {
  $(function() {
    var e = $("ul.tabs02 li a");
    var f = "active";
    var d = $("div#tabContents02");
    $("div", d).not(":first").hide();
    $(e).click(function(a) {
      a.preventDefault();
      $("div", d).hide();
      $($(this).attr("href")).fadeIn(300);
      $(e).removeClass(f);
      $(this).addClass(f);
      $.cookie("contents02", $(this).attr("href"), {
        expires: 7
      })
    })
  })
});
jQuery(window).load(function() {
  var a = $("ul.tabs li a");
  var b = "active";
  var c = $("div#tabContents");
  $("div", c).not(":first").hide();
  $(a).click(function(d) {
    d.preventDefault();
    $("div", c).hide();
    $($(this).attr("href")).fadeIn(300);
    $(a).removeClass(b);
    $(this).addClass(b);
    $.cookie("contents", $(this).attr("href"), {
      expires: 7
    })
  })
});