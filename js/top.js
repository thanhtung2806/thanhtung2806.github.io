(function($) {
  $('.about-me__user-list').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.introducing__slider-container').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.core-value .container').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  });


  setTimeout(function() {
    $('.introducing').css({'opacity': 1, 'visibility':'visible'})
  }, 1000)
  var controller = new ScrollMagic.Controller();
  // create a scene
  var introducingScene = new ScrollMagic.Scene({
    triggerElement: "body",
    triggerHook: 0,
    // offset: -$(window).height() / 2,
    duration: $('.introducing-container').height() - $('.introducing').height(),
  })
    .addTo(controller) // assign the scene to the controller
    .setPin('.introducing') // pins the element for the the scene's duration
    // .addIndicators();
  var carScene = new ScrollMagic.Scene({
    triggerElement: "body",
    triggerHook: 0,
    offset: $(window).height() / 2,
    duration: $('.introducing-container').height() - ($('.introducing').height() + $(window).height() / 2),
  })
    .addTo(controller) // assign the scene to the controller
    .on("progress", function (e) {
      // console.log(Math.floor(e.progress.toFixed(2)*car.items.length));
      var carIndex = Math.floor( e.progress.toFixed(2)*car.items.length )
      if (car.items[carIndex] == undefined || car.items[carIndex] == '') return
      $('.introducing__img').css('background-image', 'url('+car.items[carIndex]+')')
    })
    // .addIndicators();
  var carResize = null
  $(window).on('resize', function() {
    clearTimeout(carResize)
    carResize = setTimeout(function() {
      introducingScene.duration($('.introducing-container').height() - $('.introducing').height())
      carScene.duration($('.introducing-container').height() - ($('.introducing').height() + $(window).height() / 2))
    }, 100)
  })

  var bodyController = new ScrollMagic.Controller();
  // banner zoom
  var bannerScrollEffectScene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    duration: '100%',
  })
    .addTo(bodyController) // assign the scene to the controller
    .on("progress", function (e) {
      var scale = 1 + e.progress.toFixed(3) * 0.1
      $('.kv__banner').css('transform', 'scale('+scale+')')
      $('.kv__heading').css('transform', 'translate(0, ' + (-e.progress.toFixed(3) * 50) + 'px)')
      $('.kv__desc').css('transform', 'translate(0, ' + (-e.progress.toFixed(3) * 40) + 'px)')
    })
    // .addIndicators();


  // o mask show
  var clipSize = '48vw'
  var clipPositionY = ($('.o-mask').height()/2 ) + 'px'
  var clipPath = 'circle(' + clipSize + ' at 50% ' + clipPositionY + ')'
  var omaskScrollEffectTranslateScene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    duration: "100%"
  })
    .addTo(bodyController) // assign the scene to the controller
    .on("progress", function (e) {
      var translateTop = e.progress.toFixed(3) * ($(window).height()/2 + $('.o-mask-container').height()/2)
      $('.o-mask-container').css('transform', 'translate(0,'+(-translateTop)+'px)')

      clipPositionY =  ($(window).height() + $('.o-mask').height()/2 - translateTop ) + 'px'
      clipPath = 'circle(' + clipSize + ' at 50% ' + clipPositionY + ')'
      $('.introducing').css('clip-path', clipPath)
    })
    // .addIndicators();
  var omaskScrollEffectRotateScene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0.2,
    offset: $(window).height()/3,
    duration: '100%',
  })
    .addTo(bodyController) // assign the scene to the controller
    .on("progress", function (e) {
      var rotate = e.progress.toFixed(3) * 90
      $('.o-mask').css('transform', 'rotate('+rotate+'deg)')

      clipPath = 'circle(' + clipSize + ' at 50% ' + clipPositionY + ')'
      $('.introducing').css('clip-path', clipPath)
    })
    // .addIndicators();
  var omaskScrollEffectScaleScene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    offset: $(window).height(),
    duration: '100%',
  })
    .addTo(bodyController) // assign the scene to the controller
    .on("progress", function (e) {
      var scale = 1+e.progress.toFixed(3) * ($('.o-mask-container').height() > $(window).height() ? 3 : 10)
      $('.o-mask-img').css('transform', 'scale('+scale+')')

      clipSize = (48*scale) + 'vw'
      clipPath = 'circle(' + clipSize + ' at 50% ' + clipPositionY + ')'
      $('.introducing').css('clip-path', clipPath)
    })
    // .addIndicators();
})(jQuery);

var car = {
  init: function () {
    $('#cars img').each(function() {
      var item = $(this).attr('src')
      car.items.push(item)
    })
  },
  items: [],
}
car.init()
