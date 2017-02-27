$(document).foundation()

//Mobile Overlay Menu
$('#open-btn').on('click', function(){
	$('#overlay-nav').css('width','100%');

});

$('#close-btn').on('click', function(){
	$('#overlay-nav').css('width','0');

});

$('#overlay-nav a').on('click',function(){
	$('#overlay-nav').css('width','0');
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 50 & $(window).width() > 768 ){  
        $('.top-menu').addClass("gray-bg");
    }
    else{
        $('.top-menu').removeClass("gray-bg");
    }
});

//Scroll
$(document).ready(function($) {
	$('a[href^="#"]').bind('click.smoothscroll', function(e) {
		e.preventDefault();
			        
		// Get the current target hash
		var target = this.hash;
			        
		// Animate the scroll bar action so its smooth instead of a hard jump
		if (screen.width < 960) {
			$('html, body').stop().animate({
				            'scrollTop' : $(target).offset().top + -70
			}, 900, 'swing', function() {
				            window.location.hash = target;
			});
		}
		else{
			$('html, body').stop().animate({
				            'scrollTop' : $(target).offset().top + -100
			}, 900, 'swing', function() {
				            window.location.hash = target;
			});
		}

	});
});

//Servicios
$('.servicios--thumb').on("click", function(){
	var toShow = $(this).attr('id');
	$('.servicios--panel--item').hide();
	$('.' + toShow).slideDown( "slow", function() {
  	});
    $('html, body').animate({
        scrollTop: $('.' + toShow).offset().top + -100
    }, 500);
});

$('.close').on("click", function(){
	$(this).parents().eq(2).slideUp();
    $('html, body').animate({
        scrollTop: $('#Servicios').offset().top + -100
    }, 500);
    $('.servicios--panel--item').hide();
});

//Active Menu Item
$('.menu li a').on("click", function(){
	$('.menu li a').removeClass('active');
	$(this).addClass('active');
});


//Infraestructura
$(document).ready(function($) {
	 $( ".infraestructura .item" ).each(function( index ) {
	 	var imgHeight = $('.infraestructura img').height();
	 	$(this).find('.description').css('height',imgHeight);
	});
});

