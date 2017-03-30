
(function($) {


  Drupal.behaviors.fullWidthSliderInit = {
    attach: function (context) {

      if (typeof($.fn.owlCarousel) != 'undefined') {
        $(".view-id-sliders .view-content").owlCarousel({
          items : 1,
          nav: false,
          pagination: false,
          margin: 0,
          responsiveClass: true,
          loop: $(".view-id-sliders .view-content .views-row").length > 1 ? true : false,
          autoWidth: false,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 450,
          autoplayHoverPause: true,
        });
      }
    }
  };



})(jQuery);