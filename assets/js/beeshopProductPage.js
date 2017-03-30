/**
 * 
 */
(function ($) {
  
  /**
   * Modify form values prior to form submission.
   */
  Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
    var pidElement = $('[name="pid"]'),
        reqMessage = pidElement.data('requiredMessage');
    
    if ($(element).hasClass('beeshop-cart-product-to-cart-form') &&
        this.url == '/shop/ajax/cart/add_to_cart') {
      
      if (pidElement.val() == "") {
        this.ajaxing = false;
        
        if (reqMessage) {
          pidElement.triggerHandler("focus");
          pidElement.addClass('error');
          
          if (typeof $.fn.notify != 'undefined') {
            pidElement.parent().notify(reqMessage, {
              globalPosition: 'bottom center',
              className: 'error',
            });
          }
          else {
            alert(reqMessage);
          }
        }
        else {
          alert('Error: choose roduct option to buy.');
        }
        
        return false;
      }
      else {
        pidElement.removeClass('error');
      }
    }
    
    
  };
  
  $(document).ready(function () {
    if (typeof $.fn.notify != 'undefined') {
      $.notify.addStyle("metro", {
        html:
            "<div>" +
                "<div class='image' data-notify-html='image'/>" +
                "<div class='text-wrapper'>" +
                    "<div class='title' data-notify-html='title'/>" +
                    "<div class='text' data-notify-html='text'/>" +
                "</div>" +
            "</div>",
        classes: {
            error: {
                "color": "#fafafa !important",
                "background-color": "#F71919",
                "border": "1px solid #FF0026"
            },
            success: {
                "background-color": "#32CD32",
                "border": "1px solid #4DB149"
            },
            info: {
                "color": "#fafafa !important",
                "background-color": "#1E90FF",
                "border": "1px solid #1E90FF"
            },
            warning: {
                "background-color": "#FAFA47",
                "border": "1px solid #EEEE45"
            },
            black: {
                "color": "#fafafa !important",
                "background-color": "#333",
                "border": "1px solid #000"
            },
            white: {
                "background-color": "#f1f1f1",
                "border": "1px solid #ddd"
            }
        }
     });
    }
    
    $('input.standalone-add-to-cart-button').click(function() {
      var pid = $(this).data('pid'),
          formId = '#beeshop_cart_product_to_cart_form-';
      if (pid) {
        formId = formId + pid;
        $('input.add-to-cart-button',$(formId)).trigger('click');
      } 
    });
  });
  
  Drupal.behaviors.hmProductPage = {
    attach: function (context) {
      $('select.redirect-on-cahnge').change(function () {
        var redirectURl = Drupal.settings.basePath + 'shop/product/' + $(this).val();
        window.location.href = redirectURl;
      });
      
      
      $('.beeshop-product .yashare-block .share-block-label').once().click(function() {
        var $parent = $(this).parent();
        
        $('.yashare', $parent).toggle('slow');
      });
      
    }
  };
  
})(jQuery);