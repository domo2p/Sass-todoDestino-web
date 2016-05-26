$(document).ready(function(){

	$('.arrow-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.arrow-up').slideDown(300);
		} else {
			$('.arrow-up').slideUp(300);
		}
	});
});