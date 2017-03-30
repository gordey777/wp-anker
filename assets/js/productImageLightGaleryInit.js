/**
 * 
 */
(function($) {

  $(document).ready(function() {
    if (typeof $.fn.lightGallery != 'undefined') {
      $('.beeshop-product .field-name-beeshop-product-image .field-items').lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        selector: '.field-item a',
        hash: false,
      }); 
    }
    
    if (typeof $.fn.owlCarousel != 'undefined') {
      $('.beeshop-product .field-name-beeshop-product-image .field-items').owlCarousel({
        slideBy: 1,
        items: 1,
        //autoHeight:true,
        animateOut: 'fadeOut',
//        animateIn: 'fadeOut',
        thumbs: true,
        thumbImage: true,
      });
    }
  });
  
})(jQuery);