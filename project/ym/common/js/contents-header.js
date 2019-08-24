// ヘッダー部分の読み込み
$(function() {
    $.ajax({
        type: 'GET',
        url: '/gold/culture/tmp/contents-header.html',
        dataType: 'text',
        success: function(data) {
            $("body").prepend(data);
            $(function() {
                $(".header__button").on("change", function() {
                    if ($(this).prop("checked")) {
                        $(".header__nav").css("left", "0")
                    } else {
                        $(".header__nav").css("left", "-100%")
                    }
                })
            });
        },
        error: function() {
            console.log("問題あり");
        }
    });
});
