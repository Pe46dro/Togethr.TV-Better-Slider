function waitForPlayer(){				
	if(typeof jwplayer() !== 'undefined' && jwplayer().getState() == 'PLAYING'){
		
		$slider = jQuery('<input>', {id: 'ttbs-slider', type: 'range', min:'0', max:'100',value: jwplayer().getVolume()});

		$('#video-bottom-section').prepend($slider);
		
		$slider.on('change input',function(event){
			jwplayer().setVolume(parseInt($(this).val()));
		})
		
		if(jwplayer().getVolume() == 0){								
			jwplayer().setVolume(1);
			$('#ttbs-slider').val(1);
		}else{
			jwplayer().setVolume(jwplayer().getVolume());
			$('#ttbs-slider').val(jwplayer().getVolume());
		}							
		
	}else{
		setTimeout(waitForPlayer, 250);
	}
}


waitForPlayer();