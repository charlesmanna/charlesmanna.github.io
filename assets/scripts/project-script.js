$(document).ready(function() {
  $('.overlay').hide();

  $('.project').mouseenter(function() {
    $(this).find('.overlay').slideDown('fast');
  });

  $('.project').mouseleave(function() {
    $(this).find('.overlay').slideUp('fast');
  });
})
