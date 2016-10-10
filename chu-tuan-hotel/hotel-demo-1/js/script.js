jQuery(document).ready(function(){
"use strict";


/*=================== Search Form Popup =============*/
$(".search-btn").click(function(){
    $(".popup").fadeIn();
    return false;
});
$(".parallax-reservation > span").click(function(){
    $(".popup").fadeOut();
});


/*=================== Blog Hover ===================*/
$(".blog").mouseenter(function(){
	$(this).find("p").delay(400).slideDown(200);
});
$(".blog").mouseleave(function(){
	$(this).find("p").slideUp(200);
});



/*=================== Room Feature Hover ===================*/
var feature = $(".deal-features li");
$(".deal-features li").mouseenter(function(){
	$(this).parent().find(feature).removeClass("active");
	$(this).addClass("active");
    var string = $("span", this).html();
    $(this).parent().parent().find("p").html(string);
});


/*=================== STICKY HEADER ===================*/
var stick = $("header.header2.stick").height();
$("header.header2.stick").parent().css({
    "padding-top": stick
});
var stick = $("header.header3.stick").height();
$("header.header3.stick").parent().css({
    "padding-top": stick
});

$("header").parent().find(".page-top").addClass("extra-gap");
$(".header2").parent().find(".page-top").removeClass("extra-gap");
$(".header3").parent().find(".page-top").removeClass("extra-gap");
$(".header4").parent().find(".page-top").addClass("extra-gap");


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".stick").addClass("sticky");
    }
    else{
        $(".stick").removeClass("sticky");
    }
});






/*=================== Dropdown Anmiation ===================*/
var drop = $('nav > ul > li > ul > li')
$('nav > ul > li').each(function(){
    var delay = 0;
    $(this).find(drop).each(function(){
    $(this).css({transitionDelay: delay+'ms'});
    delay += 50;
    });
});
var drop2 = $('nav  > ul > li > ul > li >  ul > li')
$('nav > ul > li > ul > li').each(function(){
    var delay2 = 0;
    $(this).find(drop2).each(function(){
    $(this).css({transitionDelay: delay2+'ms'});
    delay2 += 50;
    });
});

/*=================== Accordion ===================*/
$(function() {
$('.toggle .content').hide();
$('.toggle h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
$('.toggle h2').click(function() {
    if($(this).next().is(':hidden')) {
        $('.toggle h2').removeClass('active').next().slideUp(500).removeClass('animated zoomIn').parent().removeClass("activate");
        $(this).toggleClass('active').next().slideDown(500).addClass('animated zoomIn').parent().toggleClass("activate");
    }
});
});


/*================== Map =====================*/
function initialize() {
  var myLatlng = new google.maps.LatLng(11.938367, 108.434103);
  var mapOptions = {
    zoom: 19,
    disableDefaultUI: true,
    scrollwheel:false,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = 'images/icon.png';
  var myLatLng = new google.maps.LatLng(11.938367, 108.434103);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });

}
google.maps.event.addDomListener(window, 'load', initialize);


/*=================== Pretty Photo ===================*/
jQuery("body a[data-rel^='prettyPhoto']").prettyPhoto({
    theme: "facebook",
});

/*=================== Ajax Contact Form ===================*/
$('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
        $('#submit')
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');
    $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        comments: $('#comments').val(),
        verify: $('#verify').val()
    },
        function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
            $('#submit').removeAttr('disabled');
            if(data.match('success') != null) $('#contactform').slideUp('slow');

        }
    );
    });
    return false;
});



/*=================== Responsive Header ===================*/
$(".responsive-header > span").on("click",function(){
    $(this).next('ul').slideToggle();
    $(".responsive-header > ul > li > ul").slideUp();
    $(".responsive-header > ul > li > ul > li > ul").slideUp();
    $(".responsive-header > ul > li").removeClass('opened');
    $(".responsive-header > ul > li > ul > li").removeClass('opened');
});

$('.responsive-header ul li a').next('ul').parent().addClass('no-link')
$('.no-link > a').on("click",function(){
    return false;
});

$(".responsive-header > ul > li > a").on("click",function(){
    $(".responsive-header > ul > li > ul").slideUp();
    $(".responsive-header > ul > li").removeClass('opened');
    $(this).next('ul').slideDown();
    $(this).next('ul').parent().toggleClass('opened');
});
$(".responsive-header > ul > li > ul > li a").on("click",function(){
    $(".responsive-header > ul > li > ul > li > ul").slideUp();
    $(".responsive-header > ul > li > ul > li").removeClass('opened');
    $(this).next('ul').slideDown();
    $(this).next('ul').parent().toggleClass('opened');
});

});/*=== Document.Ready Ends Here ===*/

jQuery(window).load(function(){
"use strict";

$('.parallax').scrolly({bgParallax: true});



/*=================== Offer Intro Centralization ===================*/
var offerintro = $(".offer-intro").height();
var offerhalf = offerintro/2;
$(".offer-intro").css({
	"margin-top":-offerhalf
});




/*=================== Icon Box Centralization ===================*/
var iconbox = $(".icon-box").height();
var iconboxhalf = iconbox/2;
$(".icon-box").css({
	"margin-top":-iconboxhalf
});


/*=================== One Page Pagination ===================*/
var pagi = $(".onepage-pagination").height();
var pagihalf = pagi/2;
$(".onepage-pagination").css({
	"margin-top":-pagihalf
});



/*=================== Portfolio Hover ===================*/
var portfoliohover = $(".portfolio-hover").height();
var hoverhalf = portfoliohover/2;
$(".portfolio-hover").css({
	"margin-top":-hoverhalf
});


var center = $(".center").height();
var centerhalf = center/2;
$(".center").css({
	"margin-top":-centerhalf
});


});/*=== Window.Load Ends Here ===*/
