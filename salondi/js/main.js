$(function() {
	bootstrap_equalizer();
	$('.owl-carousel').owlCarousel({
		items: 5,
		loop: true,
		margin: 12,
		responsive:{
			0: {
				items: 1
			},

			480: {
				items: 2
			},

			992: {
				items: 3
			},

			1200: {
				items: 5
			}
		}
	});

	$('select').fancySelect();
	// $('#datePicker').datetimepicker({
 //        locale: 'vi',
 //        format: 'dd/MM/YYYY'
 //    });
  $( "#datePicker" ).datepicker({
    numberOfMonths: [1, 2],
    showButtonPanel: true,
    minDate: 0
  });

    $('#timePicker').datetimepicker({
        locale: 'vi',
        format: 'LT'
    });
})

$(window).scroll(function(e) {
	var scrollPos = $(window).scrollTop();
	var navMini = $('.nav-mini');
	if (scrollPos > $('.navbar').height()) {
		navMini.addClass('shown');
	} else {
		navMini.removeClass('shown');
	}
})

$(window).load(function() {

})

$(window).resize(function() {
  bootstrap_equalizer();
});

$('.func-scroll').click(function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop: $($(this).attr('data-to')).position().top}, 1000);
})

function bootstrap_equalizer() {
  $(".equalizer").each(function() {
  	if ($(this).hasClass('equalizer-xs') && $(window).width() < 768) {
  		return;
  	} else {
  		var heights = $(this).find(".watch").map(function() {
	      return $(this).height();
	    }).get(),

	    maxHeight = Math.max.apply(null, heights);
	    $(this).find(".watch").height(maxHeight);
	    console.log(heights);
  	}
  });
}
