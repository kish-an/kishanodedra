/* Force scroll to top when refreshing
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
*/

//Navbar slide down on scroll
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
	window.onscroll = function() {
		mobileScrollFunction();
	};
} else {
	window.onscroll = function() {
		scrollFunction();
	};
}

function mobileScrollFunction() {
	if (!document.getElementById('nav').classList.contains('mobileNav')) {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			document.getElementById('nav').style.top = '0';
		} else {
			document.getElementById('nav').style.top = '-50px';
		}
	} else {
		document.getElementById('nav').style.top = '0';
	}
}

function scrollFunction() {
	if (!document.getElementById('nav').classList.contains('mobileNav')) {
		if (
			document.body.scrollTop > 150 ||
			document.documentElement.scrollTop > 150
		) {
			document.getElementById('nav').style.top = '0';
		} else {
			document.getElementById('nav').style.top = '-50px';
		}
	} else {
		document.getElementById('nav').style.top = '0';
	}
}

//Mobile nav hamburger menu
function toggleMobileNav(x) {
	x.classList.toggle('animate');
	document.getElementById('nav').classList.toggle('mobileNav');
	document.querySelector('body').classList.toggle('mobileNav');
}

//Remove mobile nav after clicking link
function navLinks(x) {
	document.querySelector('.about-link').addEventListener('click', function() {
		if (x.matches) {
			toggleMobileNav(document.querySelector('.nav__bars'));
		}
	});
	document
		.querySelector('.projects-link')
		.addEventListener('click', function() {
			if (x.matches) {
				toggleMobileNav(document.querySelector('.nav__bars'));
			}
		});
	document.querySelector('.contact-link').addEventListener('click', function() {
		if (x.matches) {
			toggleMobileNav(document.querySelector('.nav__bars'));
		}
	});
}

var x = window.matchMedia('(max-width: 768px)');
navLinks(x);

// Project card flipping
function projFlipper(num) {
	num = num.toString();
	document.querySelector(`.proj${num}`).addEventListener('click', function() {
		document
			.querySelector(`.proj${num}--front`)
			.classList.toggle('project--front--flip');
		document
			.querySelector(`.proj${num}--back`)
			.classList.toggle('project--back--flip');
	});
}

projFlipper(1);
projFlipper(2);
projFlipper(3);

//Darkmode function
function darkMode() {
	//Toggle darkmode setting - if no setting is stored then default is light
	localStorage.setItem(
		'mode',
		(localStorage.getItem('mode') || 'light') === 'dark' ? 'light' : 'dark'
	);

	//Add or remove dark class depending on setting
	localStorage.getItem('mode') === 'dark'
		? (document.querySelector('body').classList.add('dark'),
		  document.getElementById('nav--bg').classList.add('dark'))
		: (document.querySelector('body').classList.remove('dark'),
		  document.getElementById('nav--bg').classList.remove('dark'));
}

//Darkmode persistence - check setting on load
window.onload = event => {
	localStorage.getItem('mode') === 'dark'
		? (document.querySelector('body').classList.add('dark'),
		  document.getElementById('nav--bg').classList.add('dark'))
		: (document.querySelector('body').classList.remove('dark'),
		  document.getElementById('nav--bg').classList.remove('dark'));
};

//Typed.js options
var options = {
	strings: [
		'^1000https://www.My name is Kishan.^8000',
		"https://www.I'm a self taught web developer.^8000",
		"https://www.I'm a 2nd year BSc Biomedical Science student.^8000",
		'https://www.Get in touch at kishan@kishanodedra.com^8000'
	],
	typeSpeed: 90,
	backSpeed: 40,
	startDelay: 5000,
	backDelay: 700,
	loop: true
};

//Navbar typed.js
var searchbar = new Typed('.nav__searchbar', options);

//Main title typed.js
var title = new Typed('.main-title--name', {
	stringsElement: '.main-title__name',
	typeSpeed: 70,
	startDelay: 600,
	loop: false
});

//AOS settings
AOS.init();
