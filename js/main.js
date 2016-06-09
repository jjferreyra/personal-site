
$(document).ready(function() {
    $('main').hide()
    
    setTimeout(function() {
        $('#main').fadeIn(3000)
        $('#top').hide().slideDown(3000).fadeIn(3000)
    }, 10000)


});
