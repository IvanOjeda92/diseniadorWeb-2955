$(document).ready(function () {
    console.log('Init de la app')

    var services = $('.servicios-destacados img')

    // $(window).keydown(function(){
    //     $('.contenedor-inicial').css('background-color', 'red')
    // })

        services.dblclick(function () {
        var image = $(this)

        var color = image.css("background-color")

        var src = image.attr('src')

        $('#selectedImg').attr('src',src)

        console.log(src)

        $('.contenedor-inicial').css('background-color', color)
    })

    // services.click(function () {
    //     var image = $(this)

    //     var color = image.css("background-color")

    //     var src = image.attr('src')

    //     $('#selectedImg').attr('src',src)

    //     console.log(src)

    //     $('.contenedor-inicial').css('background-color', color)
    // })

    // var logo = $('#logo')

    // logo.click(function () {
    //     var background3 = $('.contenedor-inicial')
    //     console.log(background3)
    //     background3.css('background-image', 'url(./img/giphy.gif)')
    // })

    // var services = $('.servicios-destacados')
    // console.log(services)

    // services.hover(function () {
    //     console.log('Hover')
    //     var servicesImages = $('.servicios-destacados article img')
    //     console.log(servicesImages)
    //     servicesImages.addClass('show-services')

    // })

    // var logo = $('#logo')

    // logo.click(function(){
    //     $('#monito').addClass('monito')
    // })

    // var services = $('.servicios-destacados article')

    // services.click(function(){
    //     var myService = $(this)

    //     services.addClass('background-color-red')

    //     myService.removeClass('background-color-red')
    // })

    // var logo = $('#logo')

    // logo.hover(function () {
    //     var services = $('.servicios-destacados article')

    //     services.addClass('background-color-red')
    // },function () {
    //     var services = $('.servicios-destacados article')

    //     services.removeClass('background-color-red')
    // })

    //     var logo = $('#logo')

    // logo.click(function(){
    //     var services = $('.servicios-destacados article')

    //     services.css('background-color','red')
    // })

    // var logo = $('#logo')

    // logo.click(function(){
    //     var services = $('.servicios-destacados article')

    //     services.addClass('background-color-red')
    // })

    // var services = $('.servicios-destacados article')

    // services.click(function(){
    //     var myService = $(this)

    //     myService.addClass('background-color-red')
    // })

    // setTimeout(function () {
    //     var services = $('.servicios-destacados article')

    //     services.addClass('background-color-red')

    // }, 2000)
})


// Forma CSS

// .servicios-destacados img{

// }