(function($){

	//Loading
	$(window).load(function() {
		$('#status').fadeOut();
		$('#loading').delay(300).fadeOut('slow');
	});

	//Home Section
	$(".home").height($(window).height());

	$(window).resize(function(){
		$(".home").height($(window).height());
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('.home').css({'background-attachment': 'scroll'});
	} else {
		$('.home').parallax('50%', 0.1);
	}

	//Contact Section
	$(".contact").height($(window).height());

	$(window).resize(function(){
		$(".contact").height($(window).height());
	});

	$('.js-submit').on('click', function(){
		var name = $('.js-name').val(),
			email = $('.js-email').val(),
			message = $('.js-message').val(),
			$errorMsg = $('.error-msg');

		if(name === ''){
			$errorMsg.show().text('The name must be required!');
			$('.js-name').focus();
			return false;
		}
		if(email === ''){
			$errorMsg.show().text('The email must be required!');
			$('.js-email').focus();
			return false;
		}
		if(message === ''){
			$errorMsg.show().text('The message must be required!');
			$('.js-message').focus();
			return false;
		}
		else{
			$errorMsg.hide();
			//Ajax codes...
		}
	});

	//Navbar
	$('body').scrollspy({
		target: '.custom-navbar',
		offset: 70
	});

	var navbar = $('.custom-navbar');
	var navHeight = navbar.height();

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() <= 768) {
		navbar.addClass('sticky');
	}

	$(window).scroll(function() {
		if($(this).scrollTop() >= navHeight) {
			navbar.addClass('sticky');
		}
		else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() <= 768){
			navbar.addClass('sticky');
		}
		else {
			navbar.removeClass('sticky');
		}
	});

	$(window).resize(function(){
		if($(window).width() <= 768 || $(window).scrollTop() >= navHeight){
			navbar.addClass('sticky');
		}else{
			navbar.removeClass('sticky');
		}
	});

	//WOW Animation
	wow = new WOW({
		mobile: false
	});
	wow.init();

	//Smooth scroll
	$('a[href*=#]').bind("click", function(e){ 
		var ele = $(this);

		$('html, body').stop().animate({
			scrollTop: $(ele.attr('href')).offset().top
		}, 600);

		e.preventDefault();
	});

	//Portfolio
	 $('.portfolio-con').mixitup({
        filterSelector: '.portfolio-nav li',
        targetSelector: '.portfolio-item',
        effects: ['fade', 'scale']
    });

	//Skills
	$('.skills').waypoint(function(){
        $('.chart').each(function(){
	        $(this).easyPieChart({
                size:140,
                animate: 2000,
                lineCap:'butt',
                scaleColor: false,
                barColor: '#3299CC',
                trackColor: 'transparent',
                lineWidth: 3
            });
	    });
    },{offset:'80%'});
    
})(jQuery);