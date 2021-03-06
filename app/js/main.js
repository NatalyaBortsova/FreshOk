$(function () {

    // -------------------sliders -----------------------

    $('.slider__wrapper').slick({
        infinite: false,
        prevArrow: '<button class="slider-top__arrow slider-top__arrow--left" type="button"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
        nextArrow: '<button class="slider-top__arrow slider-top__arrow--right" type="button"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',

        responsive: [{
            breakpoint: 993,
            settings: {
                arrows: false,
                dots: true,
            }
        }]

    });


    $('.brands__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,

        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    centerMode: true,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '30px',
                }
            }
        ]
    });

    // --------------------------------------------------

    // -------------------burger -----------------------

    $('.catalog__btn, .burger__dropdown-btn').on('click', function () {
        $('.catalog__list').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.burger__btn').on('click', function () {
        $('.burger__dropdown').toggleClass('active');
        $('.shop__content-filters, .badges, .catalog-card__star, .catalog-card__favourite').toggleClass('none')
        $('body').toggleClass('lock');
    });

    $('.burger__dropdown-button').on('click', function (event) {
        $('.burger__dropdown').removeClass('active');
        $('.shop__content-filters, .badges, .catalog-card__star, .catalog-card__favourite').removeClass('none')
        $('body').removeClass('lock');
    });
    // --------------------------------------------------


    // -------------------overlay -----------------------

    var $overlay = $('.overlay'),
        $overlayTrigger = $('.burger__btn, .user-nav__link--cart, .shop__sort-btn--filter'),
        $overlayClose = $('.burger__dropdown-button, .cart__top-btn, .sidebar-block__btn'),
        openClass = 'is-open';

    $overlayTrigger.on('click', function () {
        var num = ('0' + ($(this).index() + 1)).slice(-2);
        $('.overlay').addClass(openClass);
        $overlayClose.addClass(openClass);
    });

    $overlayClose.on('click', function () {
        $overlayClose.removeClass(openClass);
        $overlay.removeClass(openClass);
    });

    // --------------------------------------------------


    // -------------------cart, search ------------------

    $('.user-nav__link--search').on('click', function () {
        $('.form-search--header').toggleClass('active')
    });


    $('.user-nav__link--cart, .cart__top-btn').on('click', function () {
        $('.cart, .cart__top-btn').toggleClass('active')
        $('.shop__content-filters, .badges, .catalog-card__star, .catalog-card__favourite').toggleClass('none')
        $('body').addClass('lock');
    });

    $('.cart__top-btn').on('click', function () {
        $('.shop__content-filters, .badges, .catalog-card__star, .catalog-card__favourite').removeClass('none')
        $('body').removeClass('lock');
    });

    // --------------------------------------------------


    // -------------------styler ------------------------
    $('.cart__product-input, .catalog-card__input').styler();

    $('.shop__sort').styler();
    // ------------------------------------------------


    // ----------------range-slider---------------------
    var $range = $('#range-slider');
    var $inputFrom = $('#input-from');
    var $inputTo = $('#input-to');
    var instance;
    var min = 0;
    var max = 1000;
    var from = 0;
    var to = 0;

    $('.filter-price__range').ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });

    instance = $range.data('ionRangeSlider');

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop('value', from);
        $inputTo.prop('value', to);
    }

    $inputFrom.on('change', function () {
        var val = $(this).prop('value');

        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop('value', val);

    });

    $inputTo.on('change', function () {
        var val = $(this).prop('value');

        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop('value', val);
    });

    // --------------------------------------------------

    // --------------------shop-page----------------------

    $('.filter-category__toggle').on('click', function () {
        $('.filter-category__toggle, .filter-category__list').toggleClass('close');
    });

    $('.filter-proposal__toggle').on('click', function () {
        $('.filter-proposal__toggle, .filter-proposal__list').toggleClass('close');
    });

    $('.filter-brand__toggle').on('click', function () {
        $('.filter-brand__toggle, .filter-brand__list').toggleClass('close');
    });

    $('.filter-price__toggle').on('click', function () {
        $('.filter-price__toggle, .filter-price__form').toggleClass('close');
    });

    $('.shop__sort-btn--filter').on('click', function () {
        $('.sidebar-block, sidebar-block__wrapper').toggleClass('active');
        $('.shop__content-filters, .badges').toggleClass('none')
        $('body').addClass('lock');
    });

    $('.sidebar-block__btn').on('click', function (event) {
        $('.sidebar-block').removeClass('active');
        $('.shop__content-filters, .badges').removeClass('none')
        $('body').removeClass('lock');
    });



    $('.shop__sort-btn--list').on('click', function () {
        $('.shop__sort-btn--group').removeClass('active');
        $('.shop__sort-btn--list').toggleClass('active');
    });


    $('.shop__sort-btn--group').on('click', function () {
        $('.shop__sort-btn--list').removeClass('active');
        $('.shop__sort-btn--group').toggleClass('active');
    });


    $('.shop__sort-btn--group').on('click', function () {
        $('.shop__content-products').toggleClass('group');
    });

    $('.shop__sort-btn--list').on('click', function () {
        $('.shop__content-products').removeClass('group');
    });


    $('.shop__sort-btn--list').on('click', function () {
        $('.shop__content-products').toggleClass('list');
    });

    $('.shop__sort-btn--group').on('click', function () {
        $('.shop__content-products').removeClass('list');
    });


    $('.pagination__link').on('click', function (e) {
        $('.pagination__link').removeClass('pagination__link--active');
        $(this).addClass('pagination__link--active');
    });

    // -----------------------------------------------
    // --------------------mixit-up---------------------


    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

});
// --------------------------------------------------

$(".catalog-card__star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
});

// --------------------slider-top, catalog--------------------

const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    preload: 1,
    infinite: false,
    Navigation: {
        prevTpl: '<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg>',
        nextTpl: '<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg>',
    },
});

Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,
    slidesPerPage: 1,
    closeButton: "top",

    Carousel: {
        Dots: true,
        on: {
            change: (that) => {
                myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
                    friction: 0.9,
                });
            },
        },
    },
});



$('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');

});

$('.catalog-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-top__arrow catalog-slider__btn--left" type="button"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
    nextArrow: '<button class="slider-top__arrow catalog-slider__btn--right" type="button"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',

    responsive: [{
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        },
    ]

});
