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

$first = $('#first');
$second = $('#second');
$third = $('#third');
$fourth = $('#fourth');
$fifth = $('#fifth');

var tlFirst = new TimelineMax({repeat:100, delay: 0});
var tlSecond = new TimelineMax({repeat:100, delay: 0});
var tlThird = new TimelineMax({repeat:100, delay: 0});
var tlFourth = new TimelineMax({repeat:100, delay: 0});
var tlFifth = new TimelineMax({repeat:100, delay: 0});


tlFirst.to($first, 4, {
	x: -10,
	y: -10,
	ease: Power2.easeInOut
});
tlFirst.to($first, 3, {
	x: 0,
	y: 10,
	scale: 0.95,
	ease: Power2.easeIn
});
tlFirst.to($first, 2, {
	x: 0,
	y: 0,
	scale: 1,
	ease: Power2.easeInOut
});

tlSecond.to($second, 4, {
	x: -10,
	ease: Power2.easeInOut
});
tlSecond.to($second, 3, {
	x: 0,
	ease: Power2.easeIn
});

tlThird.to($third, 4, {
	y: -10,
	ease: Power2.easeInOut
});
tlThird.to($third, 3, {
	y: 0,
	ease: Power2.easeIn
});

tlFourth.to($fourth, 4, {
	x: 10,
	y: 10,
	ease: Power2.easeInOut
});
tlFourth.to($fourth, 5, {
	x: 0,
	y: 0,
	ease: Power2.easeIn
});

tlFifth.to($fifth, 4, {
	x: 10,
	ease: Power2.easeInOut
});
tlFifth.to($fifth, 5, {
	x: 0,
	ease: Power2.easeIn
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



var uri = new URI();

var firebaseRef = new Firebase( 'https://slotenmakerbrabant.firebaseio.com/' );
var uid = new Date().getTime();
var usersRef = firebaseRef.child( uid );

var userStats = {
  ref: document.referrer,
  width: window.innerWidth,
  platform: window.navigator.platform,
  browser: window.navigator.userAgent
};

usersRef.set( userStats );

if (uri.hasQuery("_trafsource", "adwords") === true) {
	userStats.adwords = true;
	usersRef.set( userStats );
}

if (uri.hasQuery("_geo", "tilburg") === true) {
	userStats.geo = 'Tilburg';
	usersRef.set( userStats );
}

function getIP(json) {
	userStats.ip = json.ip;  
	usersRef.set( userStats );	
}

