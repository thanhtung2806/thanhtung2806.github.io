// zoom effect
(function($) {
  var controller = new ScrollMagic.Controller();
  // create a scene
  var scrollEffectScenes = []
  $('.scroll-scale-up').each(function() {
    var el = this
    var scrollEffectScene = new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 1,
      duration: $(window).height() + $('.scroll-scale-up').parent().height(),
    })
      .addTo(controller) // assign the scene to the controller
      .on("progress", function (e) {
        var scale = 1 + e.progress.toFixed(3)* 0.2
        $(el).css('transform', 'scale('+scale+')')
      })

    scrollEffectScenes.push(scrollEffectScene)
  })

  var windowResizeTimer = null
  $(window).on('resize', function() {
    clearTimeout(windowResizeTimer)
    windowResizeTimer = setTimeout(function() {
      for(var i = 0; i < scrollEffectScenes.length; i++) {
        scrollEffectScenes[i].duration($(window).height() + $($('.scroll-scale-up')[i]).parent().height())
      }
    }, 100)
  })
})(jQuery);

// fade in effect
(function($) {
  var controller = new ScrollMagic.Controller();
  // create a scene
  var scrollEffectScenes = []
  $('.scroll-fade-in').each(function() {
    var el = this
    var scrollEffectScene = new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 0.9,
      duration: '40%',
    })
      .addTo(controller) // assign the scene to the controller
      .on("progress", function (e) {
        var opacity = e.progress.toFixed(3)
        $(el).css('opacity', opacity)
      })

    scrollEffectScenes.push(scrollEffectScene)
  })

  var windowResizeTimer = null
  $(window).on('resize', function() {
    clearTimeout(windowResizeTimer)
    windowResizeTimer = setTimeout(function() {
      for(var i = 0; i < scrollEffectScenes.length; i++) {
        scrollEffectScenes[i].duration('40%')
      }
    }, 100)
  })
})(jQuery);