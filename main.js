jQuery(document).ready(function($) {
	$('#img2').mouseover(function(event) {
		$('#img2').addClass('animated zoomOut');
		$('#img1').css({
			background: 'black',
			opacity: '0.6'
		});
		$('#textSobre').css('display', 'block').addClass('animated bounce');
	});
	$('#textSobre').mouseout(function(event) {
		$('#textSobre').css('display', 'none');
		$('#img2').removeClass('animated zoomOut');
		$('#img2').css('display', 'block').addClass('animated zoomIn');
		$('#img1').css({
			opacity: '1'
		});
	});
});