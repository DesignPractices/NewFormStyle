$(function() {
  var $input = $(".text");
  $input.on("focusin", function() {
    $(this).css({ "border-bottom" : "2px solid #1fa7ba" });
    $(this).siblings("label").css({ "bottom": "50px", "font-size": "16px", "color": "#1fa7ba" });
  });
  $input.on("focusout", function() {
    if(!$(this).val()) {
      $(this).css({ "border-bottom" : "2px solid #c4c4c4" });
      $(this).siblings("label").css({ "bottom": "5px", "font-size": "26px", "color": "#aaaaaa" });
    } else {
      $(this).css({ "border-bottom" : "2px solid #1fa7ba" });
      $(this).siblings("label").css({ "bottom": "50px", "font-size": "16px", "color": "#1fa7ba" });
    }
  });
});
