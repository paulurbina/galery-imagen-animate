jQuery(document).ready(function($) {

	$('#img2').mouseover(function(event) {
		$('#img2').addClass('animated zoomOut');
		$('#textSobre').css('display', 'block').addClass('animated zoomIn');
		});

	$('#textSobre').mouseout(function(event) {
		$('#img2, #textSobre').removeClass('animated zoomOut zoomIn');
		$('#textSobre').addClass('animated zoomOut');
		$('#img2').addClass('animated zoomIn');
		/*$('#textSobre').addClass('animated zoomOut');
		$('#img2').addClass('animated zoomIn');*/
	});

});







/*jQuery(document).ready(function($) {
	$('#img2').mouseover(function(event) {
		$('#img2').css(
			{
				'display': 'none',
			});
		$('#img1').css({
			background: 'black',
			opacity: '0.6'
		});
		$('#textSobre').css('display', 'block').addClass('animated bounce');
	});
	$('#textSobre').mouseout(function(event) {
		$('#textSobre').css('display', 'none');
		$('#img2').css('display', 'block');
		$('#img1').css({
			opacity: '1'
		});
	});
});*/