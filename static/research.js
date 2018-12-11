$(".logo--wrapper").click(function() {
  window.open("index.html", "_self", false);
})
$(".res-project-wrapper a:not(.res-project-more-links a)").click(function() {
  var dataLink = $(this).attr("data-link");
  $(this)
    .closest(".res-project-wrapper")
    .find("a, p, div, h5, h3")
    .slideUp(50);
  $(this)
    .closest(".res-project-wrapper")
    .find("." + dataLink)
    .css("display", "block");
  $(".res-project-wrapper p").css("width", "90%");
  var elem = $(this)
    .closest(".res-project-wrapper")
    .find("." + dataLink + " h5");
  elem.slideDown(100);
  var elem2 = $(this)
    .closest(".res-project-wrapper")
    .find("." + dataLink + " p");
  elem2.slideDown(100);
  var elem3 = $(this)
    .closest(".res-project-wrapper")
    .find("." + dataLink + " div");
  elem3.slideDown(100);
})
$(".res-hidden-text-close").click(function() {
  $(this).parent().css("display", "none");
  $(".res-project-wrapper p").css("width", "55%");
  $(this)
    .parent().parent()
    .find("a, p, div:not(.res-hidden-text-1, .res-hidden-text-2), h5, h3")
    .slideDown(50);
})
