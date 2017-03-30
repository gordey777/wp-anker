/**
 * 
 */
(function($) {

  noScroll = function (event) {
    if ($('html').hasClass('mob-menu-opened')) {
      event.preventDefault();
    }
  };
  
  $.fn.isScrollActive = function () {

    if ($(this).length == 0) return false;

    var element = $(this).get(0);

    if (element.clientHeight < element.scrollHeight) return true;

    if (element.clientWith < element.scrollWith) return true;

    return false;
  }
  
  $.fn.swipeLeft = function () {
    return this.each(function(index){
      var $element = $(this);

      $element.on('touchstart', function (event) {
        //event.preventDefault();
        var oEvent = event.originalEvent;

        if (oEvent.touches.length != 1) return;

        var touchData = $element.data('swipe-touchData') || {};
        touchData.startTouches = event.originalEvent.touches;
        $element.data('swipe-touchData', touchData);

        //touches
//
      });

      $element.on('touchend touchcancel', function(event) {
        var touchData = $element.data('swipe-touchData');
        $('#block-menu-menu-mobile-menu').css('transition', 'all');
        if (Math.abs(touchData.swiped) != undefined
            && Math.abs(touchData.swiped) > 100) {
          togleMobileMenu();
        }
        $('#block-menu-menu-mobile-menu').css('transform', '');
        $element.data('swipe-touchData', null);
      });

      $element.on('touchmove', function(event) {
        var touchData = $element.data('swipe-touchData');
        if (touchData.startTouches != undefined
            && touchData.startTouches.length == 1
            && event.originalEvent.touches.length == 1) {
          delta = event.originalEvent.touches[0].screenX - touchData.startTouches[0].screenX;

          touchData.swiped = delta;

          $element.data('swipe-touchData', touchData);

          if (delta < 1) {
            $('#block-menu-menu-mobile-menu').css('transform', 'translate(' + delta + 'px, 0)');
          }
        }
      });

    });
  };
  
  $.fn.preventParentScrollTouchMove = function () {
    return this.each(function(index){
      var $element = $(this);

      $element.on('touchstart', function (event) {
        var touchData = $element.data('touchData') || {};
        touchData.startTouches = event.originalEvent.touches;
        $element.data('touchData', touchData);
        $('html').css('overflow', 'hidden');
      });

      $element.on('touchend touchcancel', function(event) {
        $('html').css('overflow', '');
      });

      $element.on('mousewheel touchmove', function(event) {

        var element = $element.get(0);

        if (!$element.isScrollActive()) {
          // prevent default for mouseweel touchmove if modal element
          // does't have scrollable objects
          event.preventDefault();
          return;
        }

        // need to detect scroll/move direction and detect
        // end of element scroll/move

        var delta = event.originalEvent.wheelDelta;

        if (event.type == 'touchmove') {
          var touchData = $element.data('touchData');
          if (touchData.startTouches != undefined
              && touchData.startTouches.length == 1
              && event.originalEvent.touches.length == 1) {
            delta = event.originalEvent.touches[0].screenY - touchData.startTouches[0].screenY;
          }
        }

        if (delta > 0 && element.scrollTop == 0) {
          event.preventDefault();
          return;
        }
        if (delta < 0 && element.scrollTop + element.clientHeight >= element.scrollHeight) {
          event.preventDefault();
          return;
        }

        event.stopPropagation();
      })
    });
  }

  togleMobileMenu = function() {
    $('html').toggleClass('mob-menu-opened');
    if ($('html').hasClass('mob-menu-opened')) {
      $('#block-menu-menu-mobile-menu').css('transition', '');
      window.location.hash = 'mmenu-active';
    }
    else if (window.location.hash == '#mmenu-active') {
      window.location.hash = '#mm-closed';
    }
  };

  $(window).bind('hashchange', function() {
    if (window.location.hash == '') {
      $('html').removeClass('mob-menu-opened');
    }
  });
  
  addCloseMMenuLink = function () {
    var $mMenuCloceLink = $('<a href="#" class="mmenu-close-link"></a>'),
        $mMenuHomeLink = $('<a href="/" class="mmenu-home-link"></a>');
        $menuControlsPanel = $('<div class="mmenu-controls-panel"></div>');
    $mMenuCloceLink.click(function () {
      togleMobileMenu();
      return false;
    });
    $mMenuCloceLink.appendTo($menuControlsPanel);
    $mMenuHomeLink.appendTo($menuControlsPanel);
    $menuControlsPanel.prependTo($('#block-menu-menu-mobile-menu .content'));

    //document.body.addEventListener('touchmove', noScroll, false);
//    $('body').on('touchmove', function(e)
//      {
//      noTouchMove(e)
//      });
//    document.body.addEventListener('DOMMouseScroll', noScroll, false);
//
//    var a = document.getElementById('block-menu-menu-mobile-menu');
//    a.addEventListener('mousewheel', function(e) {
//      event.stopPropagation();
//    }, false);
//
//    document.body.addEventListener('mousewheel', noScroll, false);
//    window.addEventListener('mousewheel', noScroll, false);
    $(window, document).on('mousewheel DOMMouseScroll touchmove', noScroll);

    $('#block-menu-menu-mobile-menu nav').preventParentScrollTouchMove();
    $('#block-menu-menu-mobile-menu nav').scroll(function() {
      
    });

  };
  
  $(document).ready(function () {
    addCloseMMenuLink();
    $('a.mobile-menu-toggle-button, .mobile-menu-overlay').click(function () {
      togleMobileMenu();
      return false;
    });
    $('.mobile-menu-overlay, #block-menu-menu-mobile-menu').swipeLeft();

  });
  
  jQuery(window).scroll(function () {
    if(jQuery(window).scrollTop() >= 95){
      $('a.mobile-menu-toggle--bottom-button').addClass('active');
    } else {
      $('a.mobile-menu-toggle--bottom-button').removeClass('active');
    }
  });
  
})(jQuery);