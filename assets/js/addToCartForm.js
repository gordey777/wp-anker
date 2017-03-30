/**
 * 
 */
(function($) {

  $(document).ready(function () {
    $(document).on('BeeShop:productAddedToCart', function() {
      if (typeof swal != 'undefined') {
        swal({
          title: Drupal.t('Cart'),
          text: Drupal.t('Product added to cart!'),
          type: "success",
          timer: 4000,
          showConfirmButton: true,
        });
      }
      else {
        alert(Drupal.t('Product added to cart!'));
      }
    });
  })
  
})(jQuery);