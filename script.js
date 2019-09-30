// event pada saat  link di klik 
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);





    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeOutBack');

    e.preventDefault();
});



// paralax
// about
$(window).on('load', function () {
    $('.pLeft').addClass('pAppear');
    $('.pRight').addClass('pAppear');

});







$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'

    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'

    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'

    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 500) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('appear');
            }, 300 * (i + 1));





        });
    }
})



// $(window).scroll(function () {
//     // var wScroll = $(this).scrollTop();

//     if (wScroll > $('.portfolio').offset().top - 500) {
//         $('.portfolio .thumbnail').each(function (i) {
//             setTimeout(function () {
//                 $('.portfolio .thumbnail').eq(i).addClass('appear');
//             }, 300 * (i + 1));



//         });
//     }

// });