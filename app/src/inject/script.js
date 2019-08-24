var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';

startvol = false;
if (document.cookie.indexOf('jwplayer.volume') < 0) {
    startvol = 30;
}

function waitForPlayer() {
    if (typeof jwplayer() !== 'undefined' && (jwplayer().getState() == 'PLAYING')) {
        if (startvol)
            jwplayer().setVolume(startvol);

        $slider = jQuery('<input>', {
            id: 'ttbs-slider',
            type: 'range',
            min: '0',
            max: '100',
            value: jwplayer().getVolume()
        });
		
        $indicator = jQuery('<p>', {
            id: 'ttbs-slider-value'
        });
		
        $indicator.text(jwplayer().getVolume() + ' %')

        $('#video-bottom-section').prepend($slider);
        $('#video-bottom-section').prepend($indicator);

        $slider.on('change input', function(event) {
            jwplayer().setVolume(parseInt($(this).val()));
            $indicator.text($(this).val() + ' %')
        })

        $slider.bind(mousewheelevt, function(e) {
            if (e.originalEvent.wheelDelta < 0) {
                $(this).val(parseInt($(this).val()) - 1);
            } else {
                $(this).val(parseInt($(this).val()) + 1);
            }
            $(this).trigger('change');
            return false;
        });

        if (jwplayer().getVolume() == 0) {
            jwplayer().setVolume(1);
            $('#ttbs-slider').val(1);
        } else {
            jwplayer().setVolume(jwplayer().getVolume());
            $('#ttbs-slider').val(jwplayer().getVolume());
        }
    } else {
        setTimeout(waitForPlayer, 250);
    }
}

waitForPlayer();