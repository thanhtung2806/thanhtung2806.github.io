(function($){
  // default variables
  var prevPageYOffset = window.pageYOffset
  var menuOpen = false

  // show/hide menu
  $('.header-menu-menu').click(function(e) {
    e.preventDefault()
    if (!$(this).hasClass('open')) {
      menuOpen = true
      $('.header').addClass('open')
      $(this).addClass('open')
      $('.menu').slideDown()
      $('.menu-item').addClass('show')
    } else {
      menuOpen = false
      $('.header').removeClass('open')
      $(this).removeClass('open')
      $('.menu').slideUp()
      $('.menu-item').removeClass('show')
    }
  })

  // detect scroll
  $(window).on('scroll', function(e) {
    if (window.pageYOffset > prevPageYOffset) {
      onScrollDown()
    } else {
      onScrollUp()
    }
    prevPageYOffset = window.pageYOffset
  })

  function onScrollDown() {
    // console.log('down')
    if (!menuOpen) {
      hideMenu()
    }
  }
  function onScrollUp() {
    // console.log('up')
    if (!menuOpen) {
      showMenu()
    }
  }

  function hideMenu() {
    $('.header').addClass('hide')
  }
  function showMenu() {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('header--grey')
    } else {
      $('.header').removeClass('header--grey')
    }
    $('.header').removeClass('hide')
  }
  
  // init nice select
  $('select.header-menu-lang, select.footer-menu-lang, select.sp-menu-lang').niceSelect();

  //video youtube img cover
  var i, c, y, v, s, n;
  var im = new Array();
  v = document.getElementsByClassName("youtube");

  for (n = 0; n < v.length; n++) {
    im[n] = v[n].hasAttribute("src") ? v[n].getAttribute("src") : "http://i.ytimg.com/vi/" + v[n].id + "/hqdefault.jpg";
  }

  if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.youtube{background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("https://lh3.ggpht.com/vo4W82YNfpJDsttqn-22YsLtEJjmOtIB-54yIxR5wQA0Ucs5leNIu-W8iEmyY8-Pf7RWHk4=w64") no-repeat}';
    document.body.appendChild(s);
  }

  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", im[n]);
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
      var t = document.createElement("iframe");
      t.setAttribute("src", "https://www.youtube.com/embed/" + this.id + param(this));
      t.style.width = this.style.width;
      t.style.height = this.style.height;
      this.parentNode.replaceChild(t, this);
    }
  };
  function param(x){
    if (x.getAttribute("data-params") !== null) {
        return x.getAttribute("data-params");
      } else {
        return "?autoplay=1";

      }
  }

})(jQuery);
