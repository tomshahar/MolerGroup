$(document).ready(function() {
  $(".logo--wrapper").click(function() {
    window.open("index.html", "_self", false);
  })
  $(".logo--wrapper-scroll").click(function() {
    window.open("index.html", "_self", false);
  })
  $(window).scroll(function() {
    if (window.innerWidth > 800) {
      if (window.pageYOffset > $(".header").offset().top + $(".header").height() + 100) {
        headerReplaceDown();
      } else {
        headerReplaceUp();
      }
    }
  })
  if (window.innerWidth < 801) {
    headerReplaceDown();
  }
})
function headerReplaceDown() {
  $(".header-scroll").slideDown(100);
}
function headerReplaceUp() {
  $(".header-scroll").slideUp(50);

}
/*
Smooth scroll on click instead of instant jump
*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 65
    }, 500);
})
