$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	/***************** Flickity ******************/

	$('#featuresSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});

	$('#showcaseSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
		imagesLoaded: true
	});

	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

});

$(document).ready(function() {

	$("a.single_image").fancybox({
		padding: 4,
	});

/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 2000);
			return false;
		}
	}
	
});


/***************** Change Page on section ******************/


function pagechange(frompage, topage) {
  var page=document.getElementById('formpage_'+frompage);
  if (!page) return false;
  page.style.visibility='hidden';
  page.style.display='none';

  page=document.getElementById('formpage_'+topage);
  if (!page) return false;
  page.style.display='block';
  page.style.visibility='visible';

  return true;
};

/***************** Sentence ******************/



var count=0;

$('.shuffle-btn').click(function(){

if (count>4) { count=0; };

sentence=[
			["les belles italiennes","classiques","sportives"],
			["les fougeuses allemandes","modernes","citadines"],
			["les fougueuses allemandes","familiales","puissantes"],
			["la classe anglaise","moderne","baroudeuse"],
			["le style français","classique","confortable"]
		];

	//var rands=Math.floor((Math.random() * 5) + 1);

	$(".ng-binding").each(function(index){

		$(this).text(sentence[count][index]);
	//console.log(sentence[rands][index]);
});

count+=1;

});

/*
	text={
			"classic":{"sportive":{"content step 1","imge path"},"step2":"content step 2","step3":"content step 3"},
			"moderne":{"step1":"content step 1","step2":"content step 2","step3":"content step 3"}
		};
		*/

	$(".pagechange").click(function(){

		$("#formpage_"+$(this).attr("data-section")).hide();
		$("#formpage_"+$(this).attr("data-section-next")).show();

	});

});
