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
          infinite: true,
          // adaptiveHeight: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          // speed: 100,
          arrows: true,
          // autoplay: false,
          // autoplaySpeed: 1500,
          // variableWidth: true,
      
          // enterPadding: '10px',

          prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/advantages/previous.png" alt=""></button>',
          nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/advantages/next_1.png" alt=""></button>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 2,
                arrows: false
              }
            },
           
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            }
          ]
        
        });
        

        $('.partners-page__items').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-btn slick-prev__partners"><img src="img/advantages/previous.png" alt=""></button>',
          nextArrow: '<button type="button" class="slick-btn slick-next__partners"><img src="img/advantages/next_1.png" alt=""></button>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                arrows: false
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                arrows: false
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
