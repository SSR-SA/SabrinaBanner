$(document).ready(function () {
  $(".carousel-item").hover(
    function () {
      $(".mask").removeClass("animate-up");
    },
    function () {
      $(".mask").addClass("animate-up");
    }
  );

  $(".carousel-item").mouseleave(function () {
    $(".mask").addClass("animate-up");
  });
});
