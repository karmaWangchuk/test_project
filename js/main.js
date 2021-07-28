var html = document.documentElement;
var body = document.body;
$('.notSupported').css('display','none')
setTimeout(() => {

    var height = Math.max(html.clientHeight, 
        html.scrollHeight, html.offsetHeight, 
        body.scrollHeight, body.offsetHeight)+ 200;
    
    var width = html.clientWidth

    $('#navId').height(height+'px')
    $('.main-container').width(width+'px')
    
}, 2000);



$(window).resize(function() {

    // var height = body.scrollHeight; 

    var width = $('html').width()

    $('#navId').width('230px')
    $('.main-container').width(width+'px')

    if (window.matchMedia('(max-width: 800px)').matches) {
        // $('#rmG').removeClass("uk-grid")
        // $('#navId').css('height',height+'px')
        $('#navId').width('20px')
        // $('.main-container').width(width+'px')
        // $('html').css('width','min-content')
    } 
    // else{
    //     $('#rmG').addClass("uk-grid")
    // // }
    if (window.matchMedia('(max-width: 399px)').matches) {
        $('.uk-container').css('display','none')
        $('.notSupported').css('display','')
    }
    else{
        $('.uk-container').css('display','')
        $('.notSupported').css('display','none')
    }
});
  