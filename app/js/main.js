$(function(){
  
  
    $('.reviews-page__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.reviews-page__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.reviews-page__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });

        $('.tab-box__items').slick({
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            // speed: 100,
            arrows: true,
            // autoplay: false,
            // autoplaySpeed: 1500,
            // variableWidth: true,

            prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/advantages/previous.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/advantages/next_1.png" alt=""></button>',
            responsive: [
              // {
              //   breakpoint: 1273,
              //   settings: {
              //     slidesToShow: 3,
              //     // slidesToScroll: 2,
              //     arrows: false
              //   }
              // },
              {
                breakpoint: 1090,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 860,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            ],
          
          });
          

          $('.partners-page__items').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/advantages/previous.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/advantages/next_1.png" alt=""></button>',
            responsive: [
              {
                breakpoint: 925,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  arrows: false
                }
              },
              {
                breakpoint: 735,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 525,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

          $('.tarif__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.tarif__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.tarif__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });
    
    
    
      new WOW().init();

      // wow = new WOW(
      //   {
      //   boxClass:     'wow',      // default
      //   animateClass: 'animated', // default
      //   offset:       0,          // default
      //   mobile:       false       // default
      //   }
      //                   )
      //   wow.init();

   

     
      $('.menu__big-btn').on('click', function() {
        $('.menu__list').slideToggle();
      });
   
         
	
	
});
