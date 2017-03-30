/**
 * 
 */
(function($) {

  favoritsProductsIDsController = function(pids) {
    this.pids = pids;
  }
  
  favoritsProductsIDsController.prototype.updatePids = function(pids) {
    this.pids = pids;
    
    this.processPids();
  }
  
  favoritsProductsIDsController.prototype.addPid = function(pid) {
    
    this.pids.push(pid);
    
    this.processPids();
  }
  
  favoritsProductsIDsController.prototype.removePid = function(pid) {
    
    var pidKey = $.inArray(pid, this.pids);
    
    if (pidKey > -1) {
      delete(this.pids[pidKey]);
    }
    
    this.processPids();
  }
  
  favoritsProductsIDsController.prototype.processPids = function() {
    
    var pids = this.pids,
        controller = this;
    
    $('.favorits-toggle-link[data-pid], .in-favorits-marker[data-pid]').each(function () {
      var element = $(this),
          pid = element.data('pid'),
          inFavorits = $.inArray(pid, pids) > -1 ? true : false;
      
      controller.setElementProps(element, inFavorits);
      
    });
    
    if (this.pids.length > 0) {
      $('ul.menu a[href="/shop/favorits-products"]').attr('data-favorits-count', this.pids.length);
    }
    else {
      $('ul.menu a[href="/shop/favorits-products"]').removeAttr('data-favorits-count');
    }
    
    
  }
  
  favoritsProductsIDsController.prototype.setElementProps = function (element, inFavorins) {
    
    var text, title;
    
    if (inFavorins) {
      element.addClass('in-favorits');
      text = element.data('inFavText'),
      title = element.data('inFavTitle');
    }
    else {
      element.removeClass('in-favorits');
      text = element.data('notInFavText'),
      title = element.data('notInFavTitle');
    }
    
    if (text) {
      element.text(text);
    }
    
    if (title) {
      element.attr('title', title);
    }
  }
  
  Drupal.favoritsProductsIDs = Drupal.favoritsProductsIDs || new favoritsProductsIDsController([]); 
  
  Drupal.behaviors.beeshop_cart = {
    attach: function (context) {
      
      $('a.clear-favorits').once().click(function () {
        swal({
          title: Drupal.t('Are you sure?'),
          text: Drupal.t('To clear favorites products list'),
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: Drupal.t('Yes, clear it!'),
          cancelButtonText: Drupal.t('No!'),
          preConfirm: function() {
            return new Promise(function(resolve, reject) {
              $.get('/shop/ajax/product-favorits-clear')
              .fail(function() {
                swal.insertQueueStep(
                  "Error."
                );
              })
              .always(function() {
                resolve();
              });
            });
          },
        }).then(function() {
          swal({
            type: 'success',
            title: Drupal.t('Clear favorits'),
            html: Drupal.t('Your favorits list cleared!'),
          }).then(function(email) {
            window.location = '/shop';
          });
        });
      });
      
      $('a.favorits-toggle-link').once().click(function () {
        var linkElement = $(this),
            pid = linkElement.data('pid'),
            needConfirm = linkElement.data('needConfirmForRemove');
        
        requestFuntion = function (resolve){
          
          resolve = resolve || function(){};
          
          $.ajax({
            url: linkElement.attr('href'),
            dataType: 'json',
            statusCode: {
              200: function(data) {
                if (data.resultCode) {
                  switch (data.resultCode) {
                    case 'added':
                      Drupal.favoritsProductsIDs.addPid(pid);
                      break;
                    case 'removed':
                      Drupal.favoritsProductsIDs.removePid(pid);
                      if (linkElement.parents('.fav-product-item').length > 0) {
                        linkElement.parents('.fav-product-item').remove();
                        if ($('.fav-product-item').length == 0) {
                          window.location.reload();
                        }
                      }
                      break;
                  }
                }
              },
              403: function(jqXHR, textStatus, errorThrown) {
                if (typeof swal != 'undefined') {
                  
                  if (Drupal.settings.BeeShop.favorits && Drupal.settings.BeeShop.favorits.onAccessDenideMessage) {
                    
                    var alertOptions = {
                        type: 'error',
                        html: Drupal.t('Please <a href="/user">login</a> or <a href="/user/register">register</a> for using favorits functions'),
                        title: Drupal.t('Favorits products'),
                      };
                    
                    $.extend(true, alertOptions, Drupal.settings.BeeShop.favorits.onAccessDenideMessage);
                    
                    swal(alertOptions);
                  }
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              //alert('****');
            },
          })
          .always(function() {
            resolve();
          });
        };
        
        if (needConfirm && needConfirm == 1) {
          swal({
            title: Drupal.t('Are you sure?'),
            text: Drupal.t('To remove this product from your favorites products list'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: Drupal.t('Yes'),
            cancelButtonText: Drupal.t('No'),
            preConfirm: function() {
              return new Promise(function(resolve, reject) {
                requestFuntion(resolve);
              });
            },
          });
        }
        else {
          requestFuntion();
        }
        
        return false;
      });
      
      $.ajax({
        url: '/shop/ajax/get_user_favorits_data',
        dataType: 'json',
        statusCode: {
          200: function(data) {
            if (data.length && data.length > 0) {
              // favorits-toggle-link
              Drupal.favoritsProductsIDs.updatePids(data);
            }
          }
        }
      })
    }
  };
  
})(jQuery);