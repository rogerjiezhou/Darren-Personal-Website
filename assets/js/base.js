$("#b0").click(function() {
	$('html, body').animate({
		scrollTop: $("#profile").offset().top
	}, 850);
});

$("#b00").click(function() {
	$('html, body').animate({
		scrollTop: $("body").offset().top
	}, 850);
});

$("#b1").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 850);
});

$("#b2").click(function() {
	$('html, body').animate({
		scrollTop: $("#technicalSkills").offset().top
	}, 850);
});

$("#b2a").click(function() {
	$('html, body').animate({
		scrollTop: $("#technicalExperience").offset().top
	}, 850);
});
$("#b3").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 850);
});

$("#b4").click(function() {
	$('html, body').animate({
		scrollTop: $("#contact").offset().top
	}, 850);
});

$("#b4a").click(function() {
	window.open("http://www.github.com/drrnyip");
});

$("#b4b").click(function() {
	window.location.href = "mailto:drrnyip@gmail.com";
});

$("#b4c").click(function() {
	window.open("https://www.facebook.com/drrnyip");
});
		
$("#b4d").click(function() {
	window.open("assets/Resume-Yip.pdf");
});

$('.nav a').click(function(){
	$('#navvy').collapse('hide');
});