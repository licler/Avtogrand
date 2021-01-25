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
            slidesToShow: 3,
            slidesToScroll: 3
          });
	
	
	
	
});