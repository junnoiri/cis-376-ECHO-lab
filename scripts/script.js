// headerTop change color function
var mvh = $(".mv").height();
console.log(mvh);

$(window).scroll(function () {
  var top = $(window).scrollTop();
  console.log(top);
  if (mvh < top) {
    $(".headerTop").css("background-color", "#282F35");
  } else {
    $(".headerTop").css("background-color", "rgba(0,0,0,0)");
  }
});

var i = 1;
setInterval(function () {
  if (i > 3) i = 1;
  $(".mv").css("background", "url('./img/fv-bgi_0" + i + "@2x.jpg')");
  $(".mv").css("background-repeat", "no-repeat");
  $(".mv").css("background-size", "cover");
  $(".mv").css("background-position", "center");
  i++;
}, 4000);

// burgerFunction
$(".burger-btn").on("click", function () {
  $(".burger-btn").toggleClass("close");
  $(".nav-wrapper").fadeToggle(500);
  $("body").toggleClass("noScroll");
});

if ($(window).width() < 768) {
  $(".nav-item>a").on("click", function () {
    $(".nav-wrapper").fadeOut(500);
    $(".burger-btn").removeClass("close");
    $("body").removeClass("noScroll");
  });
}
