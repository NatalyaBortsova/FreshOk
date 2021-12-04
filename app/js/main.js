$(function () {

    $('.slider__wrapper').slick({
        infinite: false,
        prevArrow: '<button class="slider-top__arrow slider-top__arrow--left" type="button"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
        nextArrow: '<button class="slider-top__arrow slider-top__arrow--right" type="button"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',

        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
                dots: true,
            }
        }]

    });


    $('.catalog__btn').on('click', function () {
        $('.catalog__btn, .catalog__list').toggleClass('active');
        $('body').toggleClass('lock');
    });


    $('.burger__btn, .burger__dropdown').on('click', function () {
        $('.burger__btn, .burger__dropdown').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.burger__dropdown-btn').on('click', function(event){
        event.stopPropagation();
    });

    $('.user-nav__link--search').on('click', function () {
        $('.form-search--header, ').toggleClass('active')
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

    $('.cart__product-input').styler();

    $('.user-nav__link--cart, .cart__top-btn').on('click', function(){
        $('.cart, .cart__top-btn').toggleClass('active')
    });
    
    // $(".promo-products__star").rateYo({
    //     starWidth: "16px",
    //     numStars: 1,
    //     "starSvg": '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229654 6.16432C0.0780897 5.9946 0.224746 5.87091 0.401307 5.84529L5.36138 5.12451L7.57965 0.629933C7.65859 0.469933 7.82156 0.368652 7.99996 0.368652C8.1784 0.368652 8.34134 0.469933 8.42031 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4364 15.5776L8 13.2451L3.56373 15.5775C3.40576 15.6606 3.21442 15.6467 3.07008 15.5419C2.92574 15.437 2.85339 15.2593 2.88355 15.0834L3.73095 10.1434L0.141559 6.64478C0.0138092 6.52028 -0.0322227 6.334 0.0229654 6.16432Z" fill="#FFB800"/></svg>',
    // });

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        onChange: function (data) {
           $('.filter-price__from').text(data.from);
           $('.filter-price__to').text(data.to);
        },
    });


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