// JavaScript Document
//include slider


jQuery.ajaxSetup({cache:false});


jQuery(function ($) {
    $(".slider-include").each(function () {
        var parts_name = $(this).data("parts-file");
        if (parts_name) {
            parts = "https://www.rakuten.ne.jp/gold/junglejungle/parts/" + parts_name + ".html ul.slick-box5";
            $(this).load(parts, function () {
                $(this).find('ul.slick-box5').slick({
                    centerMode: true,
                    centerPadding: '60px',
                    autoplay: true, 
                    autoplaySpeed: 2000, 
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 700,
                        settings: {
                            arrows: false, 
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '40px',
                            infinite: true,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    }]
                });

            });
        }
    });
});
