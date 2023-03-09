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

  // contact form
  function showError(input) {
    $(input).addClass('input-text--error')
    $(input).closest('.form-control').addClass('error')
    $(input).closest('.form-control').find('.error-message').show()
  }
  function hideError(input) {
    $(input).removeClass('input-text--error')
    $(input).closest('.form-control').removeClass('error')
    $(input).closest('.form-control').find('.error-message').hide()
  }
  function clearContactForm() {
    $('[name="user_name"]').val('')
    $('[name="phone"]').val('')
    $('[name="email"]').val('')
    $('[name="subject"]').val('')
  }
  var formValidate = {
    username: function() {
      var input = $('[name="user_name"]')
      var checked = input.val() !== '' ? true : false
      if (!checked) {
        showError(input)
      } else {
        hideError(input)
      }
      return checked
    },
    phone: function() {
      var input = $('[name="phone"]')
      var numberRegix = /^[0-9]*$/;
      var checked = input.val() !== '' && numberRegix.test(input.val()) ? true : false
      if (!checked) {
        showError(input)
      } else {
        hideError(input)
      }
      return checked
    },
    email: function() {
      var input = $('[name="email"]')
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var checked = input.val() !== '' && emailRegex.test(input.val()) ? true : false
      if (!checked) {
        showError(input)
      } else {
        hideError(input)
      }
      return checked
    },
    subject: function() {
      var input = $('[name="subject"]')
      var checked = input.val() !== '' ? true : false
      if (!checked) {
        showError(input)
      } else {
        hideError(input)
      }
      return checked
    },
    validate: function() {
      this.username()
      this.phone()
      this.email()
      this.subject()
      return this.username() && this.phone() && this.email() && this.subject()
    }
  }

  emailjs.init("service_olhmp4d");
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      if (formValidate.validate()) {
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_olhmp4d', 'template_lk84a6e', this, 'user_v7eglAybV0XbQ1XmQOOIZ')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
        console.log('valid')
        clearContactForm()
      } else {
        console.log('invalid')
      }
    });
  }

  // end contact form

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
