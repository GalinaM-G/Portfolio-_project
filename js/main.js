

$(".menu a, .logo, .header__icon").on("click", function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

$('.burger, .menu__item').on('click', function(){
    $('.menu__list, .burger').toggleClass('active');
    $('body').toggleClass('lock');
});



$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".header__top").addClass("header__top--active");
    }
    else{
        $(".header__top").removeClass("header__top--active");
    }
})

var mixer = mixitup('.portfolio__galery');