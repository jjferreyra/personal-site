
$(document).ready(function() {
    $('#top').hide().fadeIn(2000)
    $('#top-text').hide().show(2000)

     $('#overlay').animate({
       opacity: 1,
     }, 5000, function() {
        // Animation complete.
     });
});
