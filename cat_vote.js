$(window).load(function() {
    var sound_cat = $("#vote_cat_sound").get(0)
      , is_audio_load = false;
    if (!isNaN(sound_cat.duration)) {
        is_audio_load = true;
        sound_cat.volume = 1.0;
    }
    $('.vote_cat > a').hover(function() {
        if (is_audio_load) {
            sound_cat.currentTime = 0;
            sound_cat.play();
        }
        $(this).find(".layer1").stop(true, true).fadeOut(300);
        $(this).find(".layer2").stop(true, true).fadeIn(100);
    }
    , function() {
        $(this).find(".layer2").stop(true, true).fadeOut(300);
        $(this).find(".layer1").stop(true, true).fadeIn(100);
    }
    ).find(".layer2").css({
        'display': 'block'
    }).hide()
}
);