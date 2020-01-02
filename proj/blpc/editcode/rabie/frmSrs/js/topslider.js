$(function() {
        
    var cocomatch_images = $('#cocomatch_images').html();
    var cocomatch_thumbs = $('#cocomatch_thumbs').html();
    if(cocomatch_images && cocomatch_thumbs){
        $('#images').html(cocomatch_images);
        $('#thumbs').html(cocomatch_thumbs);
    }
    
    $('#thumbs').carouFredSel({
        synchronise: ['#images', false, true ,0],
        width: 753,
        items: {
            minimum: 2,
            visible: 3,
            start: -1
        },
        scroll: {
            items			: 1,
            pauseDuration   : 3000
        },
        prev: '#prev',
        next: '#next'
    });

    $('#images').carouFredSel({
        items: 1,
        scroll: {
            fx: 'crossfade',
            pauseDuration   : 5000
        }
    });

    $('#thumbs img').click(function() {
        $('#thumbs').trigger( 'slideTo', [this, -1] );
    });
});
