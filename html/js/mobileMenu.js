!function(e){noScroll=function(o){e("html").hasClass("mob-menu-opened")&&o.preventDefault()},e.fn.isScrollActive=function(){if(0==e(this).length)return!1;var o=e(this).get(0);return o.clientHeight<o.scrollHeight||o.clientWith<o.scrollWith},e.fn.swipeLeft=function(){return this.each(function(o){var n=e(this);n.on("touchstart",function(e){var o=e.originalEvent;if(1==o.touches.length){var t=n.data("swipe-touchData")||{};t.startTouches=e.originalEvent.touches,n.data("swipe-touchData",t)}}),n.on("touchend touchcancel",function(o){var t=n.data("swipe-touchData");e("#block-menu-menu-mobile-menu").css("transition","all"),void 0!=Math.abs(t.swiped)&&Math.abs(t.swiped)>100&&togleMobileMenu(),e("#block-menu-menu-mobile-menu").css("transform",""),n.data("swipe-touchData",null)}),n.on("touchmove",function(o){var t=n.data("swipe-touchData");void 0!=t.startTouches&&1==t.startTouches.length&&1==o.originalEvent.touches.length&&(delta=o.originalEvent.touches[0].screenX-t.startTouches[0].screenX,t.swiped=delta,n.data("swipe-touchData",t),delta<1&&e("#block-menu-menu-mobile-menu").css("transform","translate("+delta+"px, 0)"))})})},e.fn.preventParentScrollTouchMove=function(){return this.each(function(o){var n=e(this);n.on("touchstart",function(o){var t=n.data("touchData")||{};t.startTouches=o.originalEvent.touches,n.data("touchData",t),e("html").css("overflow","hidden")}),n.on("touchend touchcancel",function(o){e("html").css("overflow","")}),n.on("mousewheel touchmove",function(e){var o=n.get(0);if(!n.isScrollActive())return void e.preventDefault();var t=e.originalEvent.wheelDelta;if("touchmove"==e.type){var a=n.data("touchData");void 0!=a.startTouches&&1==a.startTouches.length&&1==e.originalEvent.touches.length&&(t=e.originalEvent.touches[0].screenY-a.startTouches[0].screenY)}return t>0&&0==o.scrollTop?void e.preventDefault():t<0&&o.scrollTop+o.clientHeight>=o.scrollHeight?void e.preventDefault():void e.stopPropagation()})})},togleMobileMenu=function(){e("html").toggleClass("mob-menu-opened"),e("html").hasClass("mob-menu-opened")?(e("#block-menu-menu-mobile-menu").css("transition",""),window.location.hash="mmenu-active"):"#mmenu-active"==window.location.hash&&(window.location.hash="#mm-closed")},e(window).bind("hashchange",function(){""==window.location.hash&&e("html").removeClass("mob-menu-opened")}),addCloseMMenuLink=function(){var o=e('<a href="#" class="mmenu-close-link"></a>'),n=e('<a href="/" class="mmenu-home-link"></a>');$menuControlsPanel=e('<div class="mmenu-controls-panel"></div>'),o.click(function(){return togleMobileMenu(),!1}),o.appendTo($menuControlsPanel),n.appendTo($menuControlsPanel),$menuControlsPanel.prependTo(e("#block-menu-menu-mobile-menu .content")),e(window,document).on("mousewheel DOMMouseScroll touchmove",noScroll),e("#block-menu-menu-mobile-menu nav").preventParentScrollTouchMove(),e("#block-menu-menu-mobile-menu nav").scroll(function(){})},e(document).ready(function(){addCloseMMenuLink(),e("a.mobile-menu-toggle-button, .mobile-menu-overlay").click(function(){return togleMobileMenu(),!1}),e(".mobile-menu-overlay, #block-menu-menu-mobile-menu").swipeLeft()}),jQuery(window).scroll(function(){jQuery(window).scrollTop()>=95?e("a.mobile-menu-toggle--bottom-button").addClass("active"):e("a.mobile-menu-toggle--bottom-button").removeClass("active")})}(jQuery);
//# sourceMappingURL=maps/mobileMenu.js.map