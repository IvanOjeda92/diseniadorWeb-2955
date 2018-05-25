$(document).ready(function () {
    console.log('Init app')

    // var cellphoneImg = $('#cellphone')

    // var showButton = $('#show')

    // showButton.click(function(){
    //     cellphoneImg.show(2000)
    // })

    // var hideButton = $('#hide')

    // hideButton.click(function(){
    //     cellphoneImg.hide(2000)
    // })

    // var toggleButton = $('#toggle')

    // toggleButton.click(function(){
    //     cellphoneImg.toggle(2000)
    // })

    // var hoverButton = $('#hover')

    // hoverButton.hover(function(){
    //     cellphoneImg.show(300)
    // },function(){
    //     cellphoneImg.hide(300) 
    // })

    // var cellphoneImg = $('#cellphone')

    // cellphoneImg.click(function () {
    //     cellphoneImg.toggle(2000, function () {
    //         cellphoneImg.toggle(2000)
    //     })
    // })
    // var cellphoneImg = $('#cellphone')
    // cellphoneImg.toggle(2000,function(){
    //     cellphoneImg.toggle(2000)
    // })

    // $('#small-package button').click(function(){
    //     $('#small-package').fadeOut(5000) 
    // })

    // $('.cuadros button').click(function(){
    //     var myElement = $(this).parent().parent()

    //     myElement.fadeOut() 
    // })

    // var logoButton = $('#logo')

    // logoButton.click(function(){
    //     $('#services').slideToggle(2000)
    // })

    // var logoButton = $('#logo')

    // logoButton.click(function(){
    //     $('#services').animate({
    //         opacity: 0.25,
    //         width: '50%',
    //         display: 'none'
    //       },2000)
    // })

    

    var servicesScrollTop = $('#services').position()

    var servicesTop = servicesScrollTop.top

    $('#services').slideUp(0)

console.log(servicesTop)

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()



        if (scrollTop > servicesTop -223) {
            $('#services').slideDown(500)
        }

        console.log(scrollTop)
        // var scrollTop = $('#services').scrollTop()
    })
})