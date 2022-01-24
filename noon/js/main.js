(function($){
  // default variables
  var prevPageYOffset = window.pageYOffset
  var menuOpen = false

  // show/hide menu
  $('.header-menu-menu').click(function(e) {
    e.preventDefault()
    if (!$(this).hasClass('open')) {
      menuOpen = true
      $(this).addClass('open')
      $('.menu').slideDown()
      $('.menu-item').addClass('show')
    } else {
      menuOpen = false
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
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        // emailjs.sendForm('service_olhmp4d', 'template_lk84a6e', this, 'user_v7eglAybV0XbQ1XmQOOIZ')
        //   .then(function(response) {
        //     console.log('SUCCESS!', response.status, response.text);
        //   }, function(error) {
        //     console.log('FAILED...', error);
        //   });
        alert('valid')
        clearContactForm()
      } else {
        alert('invalid')
      }
    });
  }

  // end contact form
})(jQuery);