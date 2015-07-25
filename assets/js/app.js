$(function() {
  var $input = $(".text");
  $input.on("focusin", function() {
    $(this).siblings("label").css({ "bottom": "50px", "font-size": "16px", "color": "#1fa7ba" })
  });
  $input.on("focusout", function() {
    if(!$(this).val()) {
      $(this).siblings("label").css({ "bottom": "5px", "font-size": "26px", "color": "#aaaaaa" })
    } else {
      $(this).siblings("label").css({ "bottom": "50px", "font-size": "16px", "color": "#1fa7ba" })
    }
  });
});
