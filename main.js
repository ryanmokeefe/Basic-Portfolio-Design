//   Scroll To Top

$(window).scroll(function() {
    if ($(window).scrollTop() <= 700)
    {
        $(".scrollToTop").removeClass("show");
    } else 
    {
        $(".scrollToTop").addClass("show");
    }
});

$(".scrollToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
      }, 500);
});


// Scroll Down

$(window).scroll(function() {
    if ($(window).scrollTop() < 500)
    {
        $(".scrollDown").addClass("show");
    } else 
    {
        $(".scrollDown").removeClass("show");
    }
});

$(".scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offsetHeight
      }, 500);
});


// Snippet - Chris Coyier
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Portfolio Fullview:

function portfolioListener (attachTo) {
    $(attachTo).click(function () {
        $(".fixed").toggleClass("show")
    })
    $(attachTo).click(function () {
        $(".portfolio-fullview").toggleClass("show")
    })
    $(attachTo).click(function () {
        $(".exit").toggleClass("show")
    })
};

var icon = $(".portfolio-icon");
var seeMore = $(".portfolio-more");
var exit = $(".exit");

$(document).ready(portfolioListener(icon));
$(document).ready(portfolioListener(seeMore));
$(document).ready(portfolioListener(exit));
