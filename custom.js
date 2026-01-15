
  (function ($) {

  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        smartSpeed: 500,
        responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
            margin: 100,
          },
          1280:{
            items:2,
            margin: 100,
          }
        }
    });

    // Banner Carousel
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2500,
    })

    // REVIEWS NAVIGATION
    function ReviewsNavResize(){
      $(".navbar").scrollspy({ offset: -94 });

      var ReviewsOwlItem = $('.reviews-carousel .owl-item').width();

      $('.reviews-carousel .owl-nav').css({'width' : (ReviewsOwlItem) + 'px'});
    }

    $(window).on("resize", ReviewsNavResize);
    $(document).on("ready", ReviewsNavResize);

    // HREF LINKS
    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        console.log(target);
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Više";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Smanji";
      moreText.style.display = "inline";
    }
  } 

  function  prikaziServise() {
    var moreServices = document.getElementById("moreservices");
    var lastOne = document.getElementById("lastone");
    var lastP = document.getElementById("lastp");
    var lastH = document.getElementById("lasth");
    var jos = document.getElementById("jos");
  
    if (moreServices.style.display === "inline") {
      moreServices.style.display = "none";
      moreServices.style.opacity= "0";
      lastOne.style.visibility = "hidden";
      lastP.style.height = "0";
      lastH.style.height = "0";
      jos.src = "dole.png";
      jos.classList.toggle("gore-dole");

    } else {
      moreServices.style.display = "inline";
      moreServices.style.opacity= "1";
      lastOne.style.visibility = "visible";
      lastP.style.height = "auto";
      lastH.style.height = "auto";
      jos.src = "emoint.png";
      jos.classList.remove("gore-dole");
    }
  } 

 
