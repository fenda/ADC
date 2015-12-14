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

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    scrollwheel: false
  });
}

$.fn.teachersBox = function(){
	setTimeout(function(){
		$('#theTeachers .row').each(function(index, element){
			var imgHeight = $(element).parent().find('img').height();
			$(element).find('.info').css('height', imgHeight);
		});
	}, 1000);
	
};

// active item
$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});

$(document).ready(function(){
	$.fn.sliderHeight();
	$.fn.equalHeight();
	$.fn.teachersBox();
	
	if($('#slider').length > 0) {
		$('#slider .owl-carousel').owlCarousel({
			singleItem: true,
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			//nav:true,
			pagination: false,
			rewindNav: false
		});
	}

	if($('#testimonials').length > 0) {
		$('#testimonials .container').owlCarousel({
			singleItem: true,
			pagination: true,
			autoPlay: 8000
		});
	}

	if($('#ourStudio').length > 0) {
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
	}

	if($('#ourTeachers').length > 0) {
		$('#ourTeachers .carousel').owlCarousel({
			items: 4,
			itemsDesktop: false,
			itemsDesktopSmall: 3,
			itemsTablet: 3,
			itemsTabletSmall: 2,
			itemsMobile:1,
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			//nav:true,
			pagination: false,
			rewindNav: false
		});
	}

	//instagram feed
	/*var feed = new Instafeed({
		get: 'tagged',
		tagName: 'awesome',
		clientId: 'YOUR_CLIENT_ID'
	});
	feed.run();*/
});

$(window).resize(function() {
	$.fn.sliderHeight();
	$.fn.equalHeight();
	$.fn.teachersBox();
});


$(window).load(function(){
	if($('#theTeachers').length > 0) {
		$("#theTeachers .info").mCustomScrollbar({
			 theme:"light-thick",
			 scrollButtons: true
		});

	}
});
