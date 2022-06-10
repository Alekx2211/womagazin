try {
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
} catch (err) {
    console.log(err);
}

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
$(document).ready(function () {
    // $(' .nav__link[href^=""]').click(function () {
    //     $(' .nav__link[href^=""]').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });
    let links = document.querySelectorAll('li.cont__item');
    for (let link of links) {
        link.addEventListener('click', () => {
            for (let link of links) {
                if (link.classList.contains("selected")) {
                    link.classList.remove("selected");
                }
            }
            link.classList.toggle("selected");
        })
    }
});
$(document).ready(function () {
    // $(' .nav__link[href^=""]').click(function () {
    //     $(' .nav__link[href^=""]').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });
    let links = document.querySelectorAll('.s');
    for (let link of links) {
        link.addEventListener('click', () => {
            for (let link of links) {
                if (link.classList.contains("select")) {
                    link.classList.remove("select");
                }
            }
            link.classList.toggle("select");
        })
    }
});
$(document).ready(function () {
    // $(' .nav__link[href^=""]').click(function () {
    //     $(' .nav__link[href^=""]').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });
    let links = document.querySelectorAll('.col');
    for (let link of links) {
        link.addEventListener('click', () => {
            for (let link of links) {
                if (link.classList.contains("border")) {
                    link.classList.remove("border");
                }
            }
            link.classList.toggle("border");
        })
    }
});
$(document).ready(function () {
    // $(' .nav__link[href^=""]').click(function () {
    //     $(' .nav__link[href^=""]').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });
    let links = document.querySelectorAll('.mag__link');
    for (let link of links) {
        link.addEventListener('click', () => {
            for (let link of links) {
                if (link.classList.contains("text")) {
                    link.classList.remove("text");
                }
            }
            link.classList.toggle("text");
        })
    }
});
$(document).ready(function () {
    // $(' .nav__link[href^=""]').click(function () {
    //     $(' .nav__link[href^=""]').removeClass('active');
    //     $(this).addClass('active');
    //     return false;
    // });
    let links = document.querySelectorAll('.nav__link');
    for (let link of links) {
        link.addEventListener('click', () => {
            for (let link of links) {
                if (link.classList.contains("active")) {
                    link.classList.remove("active");
                }
            }
            link.classList.toggle("active");
        })
    }
});

