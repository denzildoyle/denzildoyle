$(document).ready(function() {

	//get instagram photos from my account
	var userFeed = new Instafeed({
	    get: 'user',
	    userId: 14494070,
	    accessToken: '14494070.943f96e.dfd4a9148f9e412381530f8fde6dc29f',
	    template: '<a href="{{link}}" class="col-3"><img src="{{image}}" /></a>',
	    limit: 6,
	    resolution: 'standard_resolution'
	});
	userFeed.run();

	// animation
    // $(".bg-img").addClass("enlarged");
    // $('#title').addClass('animated fadeInDown');
    // $('#bio').addClass('animated fadeInUp');
    // $('#line').addClass('animate');

    // display greeting
    var today = new Date();
	var hour = today.getHours();

	if(hour < 12){
		$('#greetings').html('morning');
	} else if (hour >= 12 && hour <= 17){
		$('#greetings').html('afternoon');
	} else if (hour === 18){
		$('#greetings').html('evening');
	} else if (hour >= 19 && hour <= 24){
		$('#greetings').html('night');
	} else{
		$('#greetings').html('greetings');
	}

	// get copyright year
	$('#year').html(today.getFullYear());

	// scroll to section
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});