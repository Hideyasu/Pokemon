$(window).on('scroll', function() {
    // 現在のスクロール位置
    var scrollPos = $(this).scrollTop();
    $('#posy').html('スクロール値: ' + scrollPos + 'px');
});