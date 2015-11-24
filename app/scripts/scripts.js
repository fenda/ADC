$.fn.sliderHeight = function(){ 
	setTimeout(function(){
		var height = $('#slider img').first().height();
		$('#slider .owl-controls .owl-buttons').css('height', height);
	}, 2000);
};

$.fn.equalHeight = function(tab){
	var $element = $('#classes .box');
	var height = 0;
	$element.each(function () {
		if ($(this).height() > height) {
			height = $(this).height();
		}
	});
	$element.height(height);
};

$(document).ready(function(){
	$.fn.sliderHeight();
	$.fn.equalHeight();
	

	$('#slider .owl-carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		//nav:true,
		pagination: false,
		rewindNav: false
	});

	$('#testimonials .container').owlCarousel({
		singleItem: true,
		pagination: true,
		autoPlay: 8000
	});

	$('#ourStudio .carousel').owlCarousel({
		items: 3,
		itemsDesktop: false,
		itemsDesktopSmall: 2,
		itemsTablet: 2,
		itemsTabletSmall: 2,
		itemsMobile:1,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		//nav:true,
		pagination: false,
		rewindNav: false
	});
});

$(window).resize(function() {
	$.fn.sliderHeight();
	$.fn.equalHeight();
});