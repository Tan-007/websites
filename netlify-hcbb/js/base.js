window.onscroll = function () {
	myFunction()
};

var primaryColor = '#34495e';
var colorsSet = false;

var navbar = document.querySelector('#top-wrap .navbar');
var sticky = navbar.offsetTop;
var modifyScrollClasses = document.getElementsByClassName("modifyScroll");
var iconBars = document.getElementsByClassName("icon-bar");
var changeActive = document.getElementsByClassName("changeActive");


var products = document.getElementById("products").offsetTop - 100; // 90 is the height of navbar
// var contactUs = document.getElementById("contact-us").offsetTop + 90;
// var services = document.getElementById("services").offsetTop + 90;
var hrefs = document.getElementsByClassName('modifyScroll');

function myFunction() {
	modifyScrollBar();
}

function modifyScrollBar() {
	if(window.pageYOffset > products) { 
		navbar.classList.add('sticky2');
	}
	else {
		for(var i=0; i<hrefs.length; i++) {
			hrefs[i].classList.remove('active');
		}
		navbar.classList.remove('sticky2');
	}

	// if (window.pageYOffset > sticky) {
	// 	navbar.classList.add("sticky");
	// 	for (i = 0; i < modifyScrollClasses.length; i++) {
	// 		modifyScrollClasses[i].classList.add("modifyCSS");
	// 	}

	// 	for (i = 0; i < iconBars.length; i++) {
	// 		iconBars[i].classList.add("new-icon-bar");
	// 	}

	// 	if(!colorsSet) {
	// 		var navbarBrand = document.querySelectorAll(".navbar-brand b,i");
	// 		navbarBrand[0].style.color = '#fff';
	// 		navbarBrand[1].style.color = '#fff';
	// 		colorsSet = true;
	// 	}
	// }
	// else {
	// 	navbar.classList.remove("sticky");

	// 	for (i = 0; i < modifyScrollClasses.length; i++) {
	// 		modifyScrollClasses[i].classList.remove("modifyCSS");
	// 	}

	// 	for (i = 0; i < iconBars.length; i++) {
	// 		iconBars[i].classList.remove("new-icon-bar");
	// 	}

	// 	var navbarBrand = document.querySelectorAll(".navbar-brand b,i");
	// 	navbarBrand[0].style.color = '#FFF';
	// 	navbarBrand[1].style.color = '#FFF';
	// 	colorsSet = false;
	// }
}


// fadding in content on scroll
$(document).ready(function () {
	$(window).scroll(function() {
		$('.animate-fade').each(function () {
			var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/3);
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var top_of_object = $(this).offset().top;

			if(bottom_of_window > bottom_of_object) {
				// $(this).animate({'opacity':'1'}, 500);
				$(this).addClass('animate');
			}
			if(bottom_of_window < top_of_object) {
				$(this).removeClass('animate');
			}
		});
	});
});

// fadding in content on scroll
$(document).ready(function () {
	$(window).scroll(function() {
		$('.animate-title').each(function () {
			var bottom_of_object = $(this).offset().top + ($(this).outerHeight());
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var top_of_object = $(this).offset().top;

			if(bottom_of_window > bottom_of_object) {
				$(this).addClass('t-animate');
			}
			if(bottom_of_window < top_of_object) {
				$(this).removeClass('t-animate');
			}
		});
	});
});


// Plus button JS

$('.thumbnail .plus').on('click', function(e) {
	$(this).toggleClass('clicked');
	$(this).parent().toggleClass('clicked');
})