/**
 * 
 */
(function($) {

  Drupal.currentTheme = Drupal.currentTheme || {};
  
  Drupal.currentTheme.alert = function(messageTitle, message, messageType, extraOptions) {
    messageType = messageType || 'success';
    messageTitle = messageTitle || '';
    extraOptions = extraOptions || {};
    
    if (typeof swal != 'undefined') {
      var alertOptions = {
        title: messageTitle,
        text: message,
        type: messageType,
      };
      
      $.extend(true, alertOptions, extraOptions);
      
      swal(alertOptions);
    }
    else {
      alert(message);
    }
  }
  
  Drupal.behaviors.html5base2 = {
    attach: function (context, settings) {
      setCBFrameSize = function(){
        var frameWidth = jQuery('.colorbox-page').width();
        var frameHeight = jQuery('body').outerHeight();
        console.log('width: %s, height: %s', frameWidth, frameHeight);

        frameHeight = frameHeight == 506 ? 488 : frameHeight;

        parent.jQuery.fn.colorbox.iframeResizeCallback(frameWidth, frameHeight);
      };

      if($('body').hasClass('cbox-body')){
        $('html').css('overflow', 'hidden');
        jQuery(window).bind("load", function () {
          setCBFrameSize();
        });
      }
      
      if (typeof($.fn.colorbox) != 'undefined') {

        $('a.colorbox-iframe-for-page').once('iframe-page-colorbox', function(){
          var $anhor_element = $(this);

          $anhor_element.colorbox({
            iframe: true,
            width: typeof($anhor_element.data('colorboxWidth')) != 'undefined' ? $anhor_element.data('colorboxWidth') : 720,
            height: typeof($anhor_element.data('colorboxHeight')) != 'undefined' ? $anhor_element.data('colorboxHeigth') : 405,
            className: 'colorbox-iframe colorbox-iframe-internal-page'
          });
        });
      }
      
      if (settings && settings.BeeShop && settings.BeeShop.cartInfo &&
          settings.BeeShop.cartInfo.productsCount) {
        $('a[href="/shop/cart"]').attr('data-cart-items-count', settings.BeeShop.cartInfo.productsCount);
      }
      
      $('a.newsmail-subscribe-link').once().click(function () {
        
        var resultType = 'error',
            message = Drupal.t('Error while processing Your data. Please try again later.'),
            title = Drupal.t('JOIN THE ANKER FAMILY');
        
        swal({
          title: Drupal.t('JOIN THE ANKER FAMILY'),
          confirmButtonText: Drupal.t('Subscribe'),
          text:
            Drupal.t('For sign up to our newsletter of exclusive updates and new products, team, and more, please provide Your email address in field below.'),
          input: 'email',
          //type: 'info',
          showLoaderOnConfirm: true,
          preConfirm: function(email) {
            return new Promise(function(resolve) {
              $.ajax({
                type: "POST",
                url: '/sitenewsletter/ajax/subscribe',
                data: {
                  email: email,
                },
                dataType: 'json',
              })
              .done(function(data) {
//                  swal.insertQueueStep(data.ip);
                if (data && data.code && data.message) {
                  if (data.code == 'success') {
                    resultType = 'success';
                    title = Drupal.t('THANKS!');
                  }
                  message = data.message;
                }
                
                resolve();
              });
            });
          }
        })
        .then(function(result) {
          swal({
            type: resultType,
            text: message,
            title: title,
          });
        });
        
        return false;
      });
      
      //
      $('input.cart-spin-up-down').once('dec-inc-value-controll', function() {
        var $input = $(this),
            $decValueControll = $('<a href="#" class="dec-inc-value-controll dec-value-controll" title="Remove one">-</a>'),
            $incValueControll = $('<a href="#" class="dec-inc-value-controll inc-value-controll" title="Add another">+</a>'),
            step = $input.attr('step') ? $input.attr('step') * 1 : 1;
        
        $decValueControll.data('step', step * -1);
        $incValueControll.data('step', step);
        $decValueControll.data('inputElement', $input);
        $incValueControll.data('inputElement', $input);
            
        $decValueControll.insertBefore($input);
        $incValueControll.insertAfter($input);
        
        stepControllClickProcessor = function (controll) {
          var input = controll.data('inputElement'),
              currentVal = input.val() * 1;
              step = controll.data('step'),
              result = currentVal + step,
              min = input.attr('min') ? input.attr('min') * 1 : false;
              
          if (min && result < min) {
            input.val(min);
            $decValueControll.addClass('disabled');
            return;
          }
          
          if ($decValueControll.hasClass('disabled')) {
            $decValueControll.removeClass('disabled')
          }
          input.val(result);
          input.change();
        };
        
        $incValueControll.click(function () {
          stepControllClickProcessor($(this));
          return false;
        });
        
        $decValueControll.click(function () {
          stepControllClickProcessor($(this));
          return false;
        });
        
      })
      //
    }
  }
  
})(jQuery);
