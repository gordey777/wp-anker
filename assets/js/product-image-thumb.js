
  jQuery(document).ready(function() {

    jQuery('#bigpic').elevateZoom({
          zoomType: 'window',
          cursor: 'default',
          zoomWindowFadeIn: 400,
          zoomWindowFadeOut: 550,
          zoomWindowPosition: 1,
          scrollZoom: true,
          easing: true,
          tint: true,
          tintColour: '#000',
          tintOpacity: 0.4,
          lensShape: 'round',
          lensSize: 400,
          //zoomImage: bigimage,
          borderSize: 1,
          borderColour: '#e2dfdf',
          zoomWindowWidth: 400,
          zoomWindowHeight: 400,
          zoomLevel: 0.7,
          lensBorderSize: 0
        });

      function applyElevateZoom() {
        var src = jQuery('.thickbox.shown').attr('href');
        var bigimage = jQuery('.fancybox.shown').attr('href');
        jQuery('#bigpic').elevateZoom({
          zoomType: 'window',
          cursor: 'default',
          zoomWindowFadeIn: 400,
          zoomWindowFadeOut: 550,
          zoomWindowPosition: 1,
          scrollZoom: true,
          easing: true,
          tint: true,
          tintColour: '#000',
          tintOpacity: 0.4,
          lensShape: 'round',
          lensSize: 400,
          zoomImage: bigimage,
          borderSize: 1,
          borderColour: '#e2dfdf',
          zoomWindowWidth: 400,
          zoomWindowHeight: 400,
          zoomLevel: 0.7,
          lensBorderSize: 0
        });
      }
      jQuery(document).on('mouseover', '#views_block a', function() {
        displayImage(jQuery(this));
      });

      jQuery('#views_block a').hover(function() {
        restartElevateZoom();
      });

      function restartElevateZoom() {
        jQuery(".zoomContainer").remove();
        applyElevateZoom();
      };

      function displayImage(domAAroundImgThumb, no_animation) {
        if (typeof(no_animation) == 'undefined')
          no_animation = false;
        if (domAAroundImgThumb.attr('href')) {
          var new_src = domAAroundImgThumb.attr('href').replace('thickbox', 'large');
          var new_title = domAAroundImgThumb.attr('title');
          var new_href = domAAroundImgThumb.attr('href');
          if (jQuery('#bigpic').attr('src') != new_src) {
            jQuery('#bigpic').attr({
              'src': new_src,
              'alt': new_title,
              'title': new_title
            }).load(function() {
              if (typeof(jqZoomEnabled) !== 'undefined' && jqZoomEnabled)
                jQuery(this).attr('rel', new_href);
            });
          }
          jQuery('#views_block a').removeClass('shown');
          jQuery(domAAroundImgThumb).addClass('shown');
        }
      }


      jQuery(function(){
      var countLi = jQuery('.carousel_lite>ul>li').size();

      if (countLi >4) {

        jQuery('.thumbs_nav').removeClass('thumbs_nav_hide');

        jQuery(".carousel_lite").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            vertical: true,

            visible: 4,
            start: 0,
          });
        }
      });

  });
