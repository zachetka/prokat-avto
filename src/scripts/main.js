$(function(){
    $('.slider__inner').slick({        
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '<button class="slick-arrow slick-arrow--prev"><img src="assets/images/icons/left-arrow.svg" alt="icon: arrow-left"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next"><img src="assets/images/icons/right-arrow.svg" alt="icon: arrow-right"></button>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]        
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});