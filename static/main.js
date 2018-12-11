$(document).ready(function() {
/*
*
*
*/
  var eyeWidth = $(".eye-container").width() / 2;
  var eyeHeight = $(".eye-container").height();

  var containerWidth = $(".first__page--container").width();
  var containerHeight = $(".first__page--container").height();
  /*Hover detection is deprecated, no current solution*/
  var timer = setTimeout(mouseStopped,3000);
  $(window).mousemove(function(e) {
    console.log(window.innerWidth);
    if (window.innerWidth > 800) {
      var mousePos = {
        x: e.clientX,
        y: e.clientY
      }
      updatePupilPosition(mousePos, containerWidth, containerHeight, eyeWidth, eyeHeight);

      $("#leg-back-right, #leg-front-right").css("animation-name", "noAnim");
      $("#leg-back-left, #leg-front-left").css("animation-name", "noAnim");

      /*Hover detection is deprecated, no current solution*/
      clearTimeout(timer);
      timer = setTimeout(mouseStopped,1000);
      $("a").mouseenter(function() {
        $("#closed-mouth").css("visibility", "hidden");
        $("#open-mouth").css("visibility", "visible");
        $("#leg-back-right").css("transform", "rotate(-20deg)");
        $("#leg-back-left").css("transform", "rotate(25deg)");
        $("#leg-front-right").css("transform", "rotate(-15deg)");
        $("#leg-front-left").css("transform", "rotate(20deg)");
      })
      $("a").mouseleave(function() {
        $("#closed-mouth").css("visibility", "visible");
        $("#open-mouth").css("visibility", "hidden");
        $("#leg-back-right").css("transform", "rotate(0deg)");
        $("#leg-back-left").css("transform", "rotate(0deg)");
        $("#leg-front-right").css("transform", "rotate(0deg)");
        $("#leg-front-left").css("transform", "rotate(0deg)");
      })
    }
  })
})

function updatePupilPosition(mousePos, contWidth, contHeight, eyeWidth, eyeHeight) {

  calcPupil(mousePos, contWidth, contHeight, eyeWidth, eyeHeight, "1");
  calcPupil(mousePos, contWidth, contHeight, eyeWidth, eyeHeight, "2");

}
function calcPupil(mousePos, contWidth, contHeight, eyeWidth, eyeHeight, n) {
  var offset = $("#pupil"+n+"").offset();
  var top = offset.top;
  var left = offset.left;

  var xRel, yRel;
  var xPerRo;

  if (mousePos.x < left) {
    var xDiff = left - mousePos.x;
    var xDiffPer = xDiff / left;
    xRel = -1 * xDiffPer * eyeWidth * .85;
    xPerRo = xDiffPer;

  } else {
    var right = contWidth - left;
    var xDiff = right - (contWidth - mousePos.x);
    var xDiffPer = xDiff / right;
    xRel = xDiffPer * eyeWidth * .85;
    xPerRo = xDiffPer;

  }
  var yDiff = top - mousePos.y;
  var yDiffPer = yDiff / top;

  var yRel = -1 * yDiffPer * eyeHeight * .6;

  $("#pupil"+n+"").css("transform", "translateY("+yRel+"px) translateX("+xRel+"px)");
  $("#body").css("transform", "rotateY("+(xPerRo*5)+"deg)")
}

function mouseStopped() {
  /*Hover detection is deprecated, no current solution*/
  console.log("mouseStopped");
  if ($("a:hover").length == 0) {
    $("#leg-back-right, #leg-front-right").css("animation-name", "legBounceNegative");
    $("#leg-back-left, #leg-front-left").css("animation-name", "legBounce");
  }
}
