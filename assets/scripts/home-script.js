$(document).ready(function() {
  $('.popup').hide()
  $('.box:nth-of-type(3)').hover(
    function() {$('.popup').show()},
    function() {$('.popup').hide()}
  )
})
