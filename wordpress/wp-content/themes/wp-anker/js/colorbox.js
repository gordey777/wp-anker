!function(o){Drupal.behaviors.initColorbox={attach:function(t,i){if(o.isFunction(o.colorbox)&&"undefined"!=typeof i.colorbox){if(i.colorbox.mobiledetect&&window.matchMedia){var c=window.matchMedia("(max-device-width: "+i.colorbox.mobiledevicewidth+")");if(c.matches)return}i.colorbox.rel=function(){return o(this).data("colorbox-gallery")?o(this).data("colorbox-gallery"):o(this).attr("rel")},o(".colorbox",t).once("init-colorbox").colorbox(i.colorbox),o(t).bind("cbox_complete",function(){Drupal.attachBehaviors("#cboxLoadedContent")})}}}}(jQuery);
//# sourceMappingURL=maps/colorbox.js.map
