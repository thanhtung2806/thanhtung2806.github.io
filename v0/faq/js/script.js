// accordion
(function ($) {
  $(".accordion").click(function() {
    var elm = $(this);
    
    if (elm.next(".accordion-box").is(":visible")) {
      elm.removeClass("is-open")
          .next(".accordion-box")
          .slideUp(400);
    } else {
      elm.addClass("is-open")
          .next(".accordion-box")
          .slideDown(400)
          .siblings(".accordion-box");
    }
  });
}(jQuery));