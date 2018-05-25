$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()
        $('#background1').css('top',-(scrollTop * 0.25) +'px')
        $('#background2').css('top',-(scrollTop * 0.5) +'px')
        $('#background3').css('top',-(scrollTop * 2) +'px')
        console.log(scrollTop)
    })
})