$(document).ready(function(){

	var landing = 0;
	var main = 1;
	var about = 2;
	var port = 3;
	var resume = 4;
	
	var currentState = 0;


	function openMainView () {
		$('#grey-background').delay(600).animate({height:'250px'}, 600);
		$('#content').delay(600).animate({
					  marginTop:'-250px', 
					  height:'500px'
					 }, 600);
		$("#main-container").delay(1200).fadeIn("slow");
		$("#main-about").delay(1400).fadeIn(700);
		$("#main-port").delay(1800).fadeIn(700);
		$("#main-resume").delay(2200).fadeIn(700);
		$("#mainpagenav-container").delay(2200).fadeIn(700);
		currentState = main;
	}

	function closeMainView() {
		$('#tagline').fadeOut(500);
		$('#main-container').fadeOut(300);
		$("#main-container").fadeOut(300);
		$("#main-about").fadeOut(300);
		$("#main-port").fadeOut(300);
		$("#main-resume").fadeOut(300);
		$('#mainpagenav-container').fadeOut(300);
	}

	function openAboutView () {
		$('#about-container').delay(400).show(50);	
		$('#about-img').delay(650).fadeIn(500);
		$('#name').delay(300).animate({marginLeft: $(window).width()/12}, 600);
		$('#about-header').delay(200).fadeIn(400);
		$('#grey-background').animate({height: '300px'},300);	
		$('#about-tagline').delay(1200).fadeIn(300);
		$('#about-info').delay(1850).fadeIn(400);
		$('#about-blurb').delay(2500).fadeIn(400);
		$('#about-blurb-contact').delay(3000).fadeIn(400);
		$('#main').delay(300).animate({color: '#966363'},300);
		addExtraBlurb();	
		setTimeout(changeBlurb, 1500);
		currentState = about;

	}

	function closeAboutView () {
		$('#about-container').delay(200).fadeOut(300);
		$('#about-img').delay(200).fadeOut("fast");
		$('#about-tagline').delay(300).fadeOut("fast");
		$('#about-info').delay(400).fadeOut("fast");
		$('#about-header').delay(100).fadeOut("fast");
		$('#name').delay(300).animate({marginLeft: -$('#name').width()/2 }, 300);
	}

	function addExtraBlurb() {
		$('#about-info').append("<div id='about-blurb-contact'></div>");
	}

	function changeBlurb() {
		$('#about-blurb-contact').css("display", "none");
		$('#about-blurb-contact').css("margin-top", "11px");
		$('#about-blurb-contact').css("font-size", "17.5px");
		$('#about-blurb-contact').css("font-family", "'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif");
		$('#about-blurb-contact').html("I'm always interested in new opportunities. <a href='mailto:linda.he@berkeley.edu'>Contact me</a>!");
		$('#about-blurb-contact').css("color", $('#about-info').parent().children().first().css("color"));
	}	

	function openPortView() {
		/*alert("Sorry, still in progress!")*/
		$('#portfolio-container').delay(400).show(50);
		$('#portfolio-header').delay(500).fadeIn(400);
		$('#grey-background').animate({height: '300px'}, 600);
		$('#construction').delay(800).fadeIn(400);
		currentState = port;
		
	}

	function closePortView() {
		$('#construction').delay(50).fadeOut(200);
		$('#portfolio-header').delay(50).fadeOut(200);
		$('#portfolio-container').delay(200).fadeOut(200);
	}

	function openResumeView () {
		$('#resume-container').show("fast");	
		$('#resume-header').delay(500).fadeIn(400);
		$('#grey-background').animate({height: '300px'},600);	
		$('#resume-download').delay(2400).fadeIn(600);
		setTimeout(fadeInResumeInfo, 800);
		currentState = resume;
	}
	
	function fadeInResumeInfo() {
		var children = [];
		$('#resume-info').children().each(function () {
			children.push(this);
		});
		fadeInCascade(children);
	}

	function fadeInCascade(children) {
		if (children.length > 0) {
			var currentChild = children.shift();
			$(currentChild).fadeIn("slow", function() {
				fadeInCascade(children);
			});
		}
	}
	
	function fadeOutResumeInfo() {
		var listItems = $('#resume-info').children();
		var listLen = listItems.length;
		for (var i = 0; i < listLen; i++) {
			listItems.eq(i).fadeOut(200);
		}
	
	}
	
	function closeResumeView () {
		$('#resume-container').delay(200).fadeOut(200);
		$('#resume-download').delay(50).fadeOut(200);
		$('#resume-header').delay(50).fadeOut(200);
		fadeOutResumeInfo();
	}	

	/* Name, tagline, and "enter" fade in one after each other. */
	$(window).load(function() {
		$('#name').delay(400).fadeIn(500);
		$('#tagline').delay(900).fadeIn(1000);
		$('#grey-background').delay(1100).fadeIn(2000);
		$('#landing-content').delay(3000).fadeIn(1800);
		$('#contact').delay(3400).fadeIn(600);
	});

	/* Clicking on the "enter" changes from landing page to main page. */	
	$('#landing-container').click(function() {
		$('#landing-content').fadeOut("fast");
		/*$('#grey-background').delay(600).animate({height:'250px'}, 600);
		$('#content').delay(600).animate({
					  marginTop:'-250px', 
					  height:'500px'
					 }, 600);*/
		openMainView();
		currentState = landing;
	});

	$('#main-about-link').hover(
		function() {
			$('#main-about-img').animate({backgroundColor: '#ffdae3'}, 100);
			$('#main-about-text').animate( { color: '#4d3a63' }, 100);
		}, 	
		function() {
			$('#main-about-text').animate({ color: '#6a6471' }, "fast");
			$('#main-about-img').animate({ backgroundColor: 'white'}, "fast");
		}
	);

	$('#main-port-link').hover(
		function() {
			$('#main-port-img').animate({backgroundColor: '#d0ffd8'}, 100);
			$('#main-port-text').animate( { color: '#4d3a63' }, 100);
		}, 	
		function() {
			$('#main-port-text').animate({ color: '#6a6471' }, "fast");
			$('#main-port-img').animate({ backgroundColor: 'white'}, "fast");
		}
	);

	$('#main-resume-link').hover(
		function() {
			$('#main-resume-img').animate({backgroundColor: '#c0e9ff'}, 100);
			$('#main-resume-text').animate( { color: '#4d3a63' }, 100);
		}, 	
		function() {
			$('#main-resume-text').animate({ color: '#6a6471' }, "fast");
			$('#main-resume-img').animate({ backgroundColor: 'white'}, "fast");
		}
	);

	/* main menu - about page */
	$('#main-about-link').click(function() {
		$('.nav-container').delay(400).fadeIn(400);	
		closeMainView();
		openAboutView();
		currentState = about;	
	});


	/* opening the resume page */	
	$('#main-resume-link').click(function() {
		$('.nav-container').delay(200).fadeIn(400);
		closeMainView();
		openResumeView();
	});

	$('#main-port-link').click(function() {
		$('.nav-container').delay(200).fadeIn(400);
		closeMainView();
		openPortView();
		currentState = port;
	});

	$("#resume-download").hover(
		function(){
			$('#resume-download').animate ({color:"white"}, 100);
		}, function (){
			$('#resume-download').animate ({color:"#6a6471"}, 100);
	});

	/* end opening the resume page */

	$('.main-nav-link').hover(
		function() {
			$('.main-nav-link').animate( {color:"#cdcbd0"}, 100);
		},
		function() {
			$('.main-nav-link').animate( {color:"#6a6471"}, 100);

		}
	);
	$('.main-nav-link').click(function() {
		if (currentState == about) {
			closeAboutView();
		} else if (currentState == port) {
			closePortView();
		} else if (currentState == resume) {
			closeResumeView();
		}
		$('.nav-container').delay(200).fadeOut(400);
		$("#tagline").delay(1000).fadeIn(400);
		openMainView();
		currentState = main;
		
	});


	$('.about-nav-link').hover(
		function() {
			$('.about-nav-link').animate( {color:"#f59292"}, 100);
		},
		function() {
			$('.about-nav-link').animate( {color:"#6a6471"}, 100);

		}
	);

	$('.about-nav-link').click(function() {
		if (currentState == about) {
			return;
		}
		else if (currentState == resume) {
			closeResumeView();
		} else {
			closePortView();
		}
		openAboutView();
		currentState = about;
	});

	$('.port-nav-link').hover(
		function() {
			$('.port-nav-link').animate( {color:"#89db97"}, 100);
		},
		function() {
			$('.port-nav-link').animate( {color:"#6a6471"}, 100);

		}
	);

	$('.port-nav-link').click(function() {
		if (currentState == port) {
			return;
		} else if (currentState == about) {
			closeAboutView();	
		} else if (currentState == resume) {
			closeResumeView();
		} else {
			closeMainView();
			$('.nav-container').delay(200).fadeIn(1000);	
		}
		openPortView();
		currentState = port;
	});

	$('.resume-nav-link').hover(
		function() {
			$('.resume-nav-link').animate( {color:"#86ccf1"}, 100);
		},
		function() {
			$('.resume-nav-link').animate( {color:"#6a6471"}, 100);

		}
	);

	$('.resume-nav-link').click(function() {
		if (currentState == resume) {
			return;
		} else if (currentState == about) {
			closeAboutView();	
		} else if (currentState == port) {
			closePortView();
		} else {
			closeMainView();
			$('.nav-container').delay(200).fadeIn(1000);	
		}
		openResumeView();
		currentState = resume;
	});

	$('#mainpagenav-text').click(function() {
		currentState = landing;	
		$('#grey-background').delay(500).animate({height:'50px'}, 500);
		$('#main-container').fadeOut(300);
		$('#main-about').fadeOut(300);
		$('#main-port').fadeOut(300);
		$('#main-resume').fadeOut(300);
		$('#content').delay(500).animate({
					  marginTop: '-150px',
					  height: '300px'
			 		 }, 500);
		$('#landing-content').delay(1000).fadeIn(1600);
		$('#mainpagenav-container').fadeOut(300);

	});
	

	

});


