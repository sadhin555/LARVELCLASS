(function($) {
	///=============  Background Image  =============\\\
	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	///=============  Search Icon  =============\\\
	$('.header__area-menubar-right-box-search-icon.open').on('click', function() {
		$('.header__area-menubar-right-box-search-box').fadeIn().addClass('active');
	});
	$('.header__area-menubar-right-box-search-box-icon').on('click', function() {
		$(this).fadeIn().removeClass('active');
	});
	$('.header__area-menubar-right-box-search-box-icon i').on('click', function() {
		$('.header__area-menubar-right-box-search-box').fadeOut().removeClass('active');
	});
	$('.header__area-menubar-right-box-search-box form').on('click', function(e) {
		e.stopPropagation();
	});
	///=============  Sidebar Popup  =============\\\
	$('.header__area-menubar-right-sidebar-popup-icon').on("click", function() {
		$('.header__area-menubar-right-sidebar-popup').addClass('active');
	});
	$('.header__area-menubar-right-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.header__area-menubar-right-sidebar-popup').removeClass('active');
	});
	$('.header__area-menubar-right-sidebar-popup-icon').on("click", function() {
		$('.sidebar-overlay').addClass('show');
	});
	$('.header__area-menubar-right-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.sidebar-overlay').removeClass('show');
	});
	///=============  Responsive Menu  =============\\\
	$('.menu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	///=============  Header Sticky  =============\\\
	$(window).on('scroll', function() {
		var scrollDown = $(window).scrollTop();
		if(scrollDown < 135) {
			$(".header__sticky").removeClass("header__sticky-sticky-menu");
		} else {
			$(".header__sticky").addClass("header__sticky-sticky-menu");
		}
	});
    ///=============  Banner One Slider  =============\\\
    let bannerOne = ".banner-one-slider";
    let sliderOne = new Swiper(bannerOne, {
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        autoplay: {
            delay: 5000,
			reverseDirection: true,
			disableOnInteraction: false,			
        },
        pagination: {
            el: ".banner-four-pagination",
            clickable: true,
        },
    });
	///=============  Banner Two Slider  =============\\\
	let bannerTwo = '.banner-two-slider';
	let sliderTwo = new Swiper(bannerTwo, {
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},		
		pagination: {
			el: ".banner-pagination",
			clickable: true,
		},
	});	
    function animated_swiper(selector, init) {
        let animated = function animated() {
            $(selector + " [data-animation]").each(function () {
                let anim = $(this).data("animation");
                let delay = $(this).data("delay");
                let duration = $(this).data("duration");
                $(this)
                .removeClass("anim" + anim)
                .addClass(anim + " animated")
                .css({
                    webkitAnimationDelay: delay,
                    animationDelay: delay,
                    webkitAnimationDuration: duration,
                    animationDuration: duration,
                })
                .one("animationend", function () {
                    $(this).removeClass(anim + " animated");
                });
            });
        };
        animated();
        init.on("slideChange", function () {
            $(bannerOne + " [data-animation]").removeClass("animated");
        });
        init.on("slideChange", animated);
    }
    animated_swiper(bannerOne, sliderOne);
    animated_swiper(bannerTwo, sliderTwo);
	///=============  Banner Three Slider  =============\\\
	var swiper = new Swiper(".banner__three__slider", {
		loop: true,	
		slidesPerView: 2,
		spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
        },
    });	
	///=============  Team Details Skill Bar  =============\\\
	if($('.team__details-skills-item-bar').length) {
		$('.team__details-skills-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	///=============  Experience Skill Bar  =============\\\
	if($('.experience__area-right-skill-item-bar').length) {
		$('.experience__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	///=============  Portfolio One  =============\\\
	var swiper = new Swiper(".portfolio__area-slider", {
		loop: true,
		speed: 2000,
		spaceBetween: 30,
		autoplay: {
			delay: 4500,
			reverseDirection: true,
			disableOnInteraction: false,			
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			750: {
				spaceBetween: 30,
				slidesPerView: 2
			},
			1138: {
				slidesPerView: 3
			},
			1600: {
				slidesPerView: 4
			},
		}
	});	
	///=============  Features Active Hover  =============\\\
	$(".features-area-item").hover(function() {
		$(".features-area-item").removeClass("features-area-item-hover");
		$(this).addClass("features-area-item-hover");
	});
	///=============  Testimonial  =============\\\
	var swiper = new Swiper(".testimonial__area-slider", {
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	///=============  Services Two  =============\\\
	var swiper = new Swiper(".services__two-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		}
	});
	///=============  Services Three  =============\\\
	var swiper = new Swiper(".services__three-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
			},
		}
	});
	///=============  Blog Active Hover  =============\\\
	$(".blog__three-item").hover(function() {
		$(".blog__three-item").removeClass("blog__three-item-hover");
		$(this).addClass("blog__three-item-hover");
	});	
	///=============  Portfolio Active Hover  =============\\\
	const portfolioItems = document.querySelectorAll(".portfolio-item");
	portfolioItems.forEach((portfolioItem) => {
		portfolioItem.addEventListener("mouseenter", () => {
			removeActiveClasses();
			portfolioItem.classList.add("active");
		});
	});
	function removeActiveClasses() {
		portfolioItems.forEach((portfolioItem) => {
			portfolioItem.classList.remove("active");
		});
	}
	///=============  CounterUp  =============\\\
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	///=============  Video Popup  =============\\\
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	///=============  Image Popup  =============\\\
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	///=============  FAQ One =============\\\
	$(".faq-collapse-item-card-header").click(function() {
		if ($(this).next(".faq-collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq-collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq-collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq-collapse-item-card-header i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq-collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});
	///=============  FAQ Two =============\\\
	$(".faq-accordion-item-card-header").click(function() {
		if ($(this).next(".faq-accordion-item-card-header-content").hasClass("active")) {
			$(this).next(".faq-accordion-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq-accordion-item-card-header-content").removeClass("active").slideUp()
			$(".faq-accordion-item-card-header i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq-accordion-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});
	///=============  FAQ Three =============\\\
	$(".faq__collapse-item-card-header").click(function() {
		if ($(this).next(".faq__collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq__collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq__collapse-item-card-header i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq__collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});
	///=============  Theme Loader  =============\\\
	$(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});
	///============= Scroll To Top =============\\\
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
	///=============  Isotope  =============\\\
	$(window).on('load', function(){
		var $grid = $('.conbix__filter-active').isotope();
		$('.conbix__filter-button').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		$('.conbix__filter-button').on('click', 'button', function () {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});
   });		
})(jQuery);
///=============  Theme Dark Light  =============\\\
function darkLight(){
	var setTheme = document.body;
	setTheme.classList.toggle("dark-mode")
	var theme;
	if(setTheme.classList.contains("dark-mode")){
		theme = "dark";
	}else{
		theme = "light";
	}
	localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
if(getTheme === "dark"){
	document.body.classList = "dark-mode";
}