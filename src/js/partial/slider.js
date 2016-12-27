var slider1 = $('.js-slider-1');
var slider2 = $('.js-slider-2');

function initSlider(slider, options) {
	slider.on('init', function() {
		setTimeout(function() {
			slider.addClass('is-ready');
		}, 200);
	});
	slider.not('.slick-initialized').slick(options);
}

function destroySlider(slider) {
	if(slider.hasClass('slick-initialized')) {
		slider.slick('unslick');
	}
}

function showSlider() {
	var tablet = $(window).width() <= 900;

	if(tablet) {
		initSlider(slider1, {
			speed: 1500,
			prevArrow: '.js-slider-1-prev',
			nextArrow: '.js-slider-1-next'
		});
		initSlider(slider2, {
			slideToShow: 1,
			speed: 1500,
			prevArrow: '.js-slider-2-prev',
			nextArrow: '.js-slider-2-next'
		});
	} else {
		destroySlider(slider1);
		destroySlider(slider2);
	}
}

showSlider();
$(window).on('resize', showSlider);