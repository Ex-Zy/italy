//btn-to
$('.js-btn-to').click(function(e) {
	e.preventDefault();

	var section = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(section).offset().top + 100
	}, 500);
	return false;
});