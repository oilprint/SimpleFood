$(function () {
  var mixer = mixitup('.products__grid');

  $('.review__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="imades/decor/prev-arrow.svg" alt="Предыдущий"></button>',
    nextArrow: '<button type="button" class="slick-"><img src="../imades/decor/next-arrow.svg" alt="Следующий"></button>'

  });
  
});next