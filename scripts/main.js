$circle = $('.slotenmaker-image__circle');
$kader = $('.slotenmaker-image__kader');
$map = $('.slotenmaker-image__map');
$phone = $('.slotenmaker-image__telefoonnummer');
$key = $('.slotenmaker-image__sleutel');

/* Initial load animatie */
TweenMax.from($kader, 2, {
	x: -50,
	opacity: 0,
	ease: Power1.easeOut,
	delay: 0
});
TweenMax.from($map, 1.5, {
	y: 20,
	opacity: .5,
	ease: Power1.easeOut
});
TweenMax.from($phone, 1.5, {
	y: 20,
	opacity: 0,
	ease: Power1.easeOut,
	delay: .5
});
TweenMax.from($key, 1, {
	y: -20,
	opacity: 0,
	ease: Power1.easeOut,
	delay: .5
});

/* Expanding circle */
var tl = new TimelineMax({repeat:100, delay: 0});
tl.to($circle, 1, {
	scale: 4,
	opacity: 0,
	ease: Power1.easeInOut,
	delay: 0
});
tl.to($circle, 0, {
	opacity: 0,
	scale: 1,
	ease: Power1.easeInOut,
	delay: .5
});
tl.to($circle, .5, {
	opacity: 1,
	scale: 1,
	ease: Power1.easeInOut,
	delay: 1
});

/* Analytics */
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-24843696-5']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

