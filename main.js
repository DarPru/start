var introH = window.screen.height;
var intro = document.getElementById("intro");
var btn = document.getElementById("btn");
var begginer = document.getElementById("Services");
var menuItems = document.querySelectorAll(".menu_item");
var burger = document.getElementById("burger");


// fixed menu
window.addEventListener('scroll', function() {
let scrollPosition = window.scrollY;

if (scrollPosition >= introH) {
	intro.classList.add('menu_tomove');
}
else {
	intro.classList.remove('menu_tomove');
}
});


// smooth button to start
btn.addEventListener('click', function() {
	 begginer.scrollIntoView({ behavior: "smooth"});
});

// smoth menu scroll
$('[data-scroll').on('click', function(e){
	e.preventDefault();

	let elementId = $(this).data('scroll')
	let elemOffset = $(elementId).offset().top

	$('html, body').animate({
		scrollTop: elemOffset
	})
})

//burger
burger.addEventListener('click', function() {
	 this.classList.toggle('active');
	 document.getElementById('nav').classList.toggle('menu_active');
	 document.getElementById('intro').classList.toggle('menu_active_intro');

});

