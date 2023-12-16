$(function() {
    // Затримка виклику fadeToggle через 1.5 секунди
    setTimeout(() => $('.loader_bg').fadeToggle(), 1500);

    // Ініціалізація meanmenu для навігаційного меню
    $('header nav, [data-toggle="tooltip"]').meanmenu();

    // Налаштування класу "sticky" для фіксованого блоку
    $(".sticky-wrapper-header").sticky({ topSpacing: 0 });

    // Взаємодія з боковим меню при наведенні
    $(".main-menu ul li.megamenu").hover(
        () => $("#wrapper").toggleClass('overlay', !$(this).parent().is("#wrapper")),
        () => $("#wrapper").removeClass('overlay')
    );

    // Налаштування скролу для елементів з класами "brand-box" та "select"
    $(".brand-box, select").niceScroll({ cursorcolor: "#9b9b9c" });

    // Ініціалізація каруселі Owl
    $('.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        merge: true,
        responsive: { 678: { mergeFit: true }, 1000: { mergeFit: false } }
    });

    // Динамічні зміни класу "b-show_scrollBut" при прокрутці сторінки
    $(window).scroll(() => $("#back-to-top").toggleClass('b-show_scrollBut', $(window).scrollTop() >= 100));

    // Плавна прокрутка до верху сторінки при кліку на кнопку
    $("#back-to-top").on("click", () => $('body,html').animate({ scrollTop: 0 }, 1000));

    // Налаштування валідації форми за допомогою jQuery Validation Plugin
    $.validator.setDefaults({
        submitHandler: () => alert("submitted!")
    });

    $("#contact-form").validate({
        rules: {
            firstname: "required",
            email: { required: true, email: true },
            lastname: "required",
            message: "required",
            agree: "required"
        },
        messages: {
            // Повідомлення про помилки для валідації
            firstname: "Please enter your firstname",
            email: "Please enter a valid email address",
            lastname: "Please enter your lastname",
            message: "Please enter your Message",
            agree: "Please accept our policy"
        },
        errorElement: "div",
        errorPlacement: (error, element) => {
            // Позначення помилки
            error.addClass("help-block");
            element.prop("type") === "checkbox" ? error.insertAfter(element.parent("input")) : error.insertAfter(element);
        },
        highlight: (element) => $(element).parents(".col-md-4, .col-md-12").toggleClass("has-error has-success"),
        unhighlight: (element) => $(element).parents(".col-md-4, .col-md-12").toggleClass("has-success has-error")
    });

    // Ініціалізація слайдера Swiper для головного слайдера
    new Swiper('.heroslider', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        paginationClickable: true,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true }
    });

    // Ініціалізація слайдера Swiper для фільтрів продуктів
    new Swiper('.swiper-product-filters', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 30, slidesPerColumn: 1 },
            640: { slidesPerView: 2, spaceBetween: 20, slidesPerColumn: 1 },
            480: { slidesPerView: 1, spaceBetween: 10, slidesPerColumn: 1 }
        },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true }
    });

    // Запуск таймера зворотного відліку для кожного елемента з атрибутом "data-countdown"
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $this.data('countdown');
        $this.countdown(finalDate, function (event) {
            // Оновлення таймера зворотного відліку
            $this.html(event.strftime(''
                + '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
                + '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
                + '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
                + '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
                + '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
        });
    });

    // Ініціалізація каруселі Slick для блоку з пропозиціями
    $('.deal-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous-deal',
        nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: false } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });

})
