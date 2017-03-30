/**
 * 
 */
(function($) {

  Drupal.ajax.prototype.commands.product_added_to_cart = function(ajax, response, status){
    var pid = (typeof(response.pid) != 'undefined') ? response.pid * 1 : false;

    var CookieDate = new Date;
    CookieDate.setMonth(CookieDate.getMonth() + 1);

    $(document).trigger('BeeShop:productAddedToCart', response);
  };
  
	Drupal.behaviors.beeshop_cart_add_to_cart = {
		attach: function (context) {
		
		}
	};
	
})(jQuery);