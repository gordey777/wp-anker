/**
 *
 */
(function ($) {

  Drupal.select2functions = Drupal.select2functions || {};

  Drupal.select2functions.markAsAnavalible = function (item, container, query) {

    if (typeof(Drupal.settings.BeeShop.anavalible_pids) != 'undefined'
       && typeof(Drupal.settings.BeeShop.anavalible_pids['pid-' + item.id]) != 'undefined') {

      container.addClass('anavalible-item');
    }

    return item.text
  };

})(jQuery);