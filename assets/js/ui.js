// This code was never meant to be read, please go away.

$(document).ready(function(){
	var banner = $('#banner-top');
	var overlay = $('#banner-overlay');
	var position = 0;
	var offset = 500;
	var bannerOpacity;
	var overlayOpacity;

	// https://gist.github.com/Warry/4254579
	var scroll = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             // IE Fallback, you can even fallback to onscroll
             function(callback){ window.setTimeout(callback, 1000/60) };

	function animateBanner(){
		bannerOpacity = (offset - position) / 500;
		banner.css('opacity', bannerOpacity);
		banner.css('padding-top', position / 4);
	}

	function animateOverlay(){
		overlayOpacity = (position) / 500;
		if (overlayOpacity < 0.35){
			overlay.css('opacity', overlayOpacity);
		}
	}

	function updatePosition(){
		position = $(window).scrollTop();
	}

	setInterval(updatePosition, 10);


	$(window).on('scroll', function() {
		scroll(animateBanner);
		scroll(animateOverlay);

	});

});