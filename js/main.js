var swiper = new Swiper(".shop", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".teams", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 850) {
            $(".menu-top").css('box-shadow', '0px 4px 15px 0px rgba(0, 0, 0, 0.5)');
            $(".menu-top").css('height', '95');
            $(".menu-top").css('background-color', '#fff');
        } else {
            $(".menu-top").css('background-color', '');
        }
    });
});
// $(document).ready(function () {

//     $(' .nav__link[href^=""]').click(function () {
//         $(' .nav__link[href^=""]').removeClass('active');
//         $(this).addClass('active');
//         return false;
//     });

// });