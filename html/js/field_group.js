!function(e){Drupal.FieldGroup=Drupal.FieldGroup||{},Drupal.FieldGroup.Effects=Drupal.FieldGroup.Effects||{},Drupal.FieldGroup.groupWithfocus=null,Drupal.FieldGroup.setGroupWithfocus=function(e){e.css({display:"block"}),Drupal.FieldGroup.groupWithfocus=e},Drupal.FieldGroup.Effects.processFieldset={execute:function(i,r,t){"form"==t&&e("fieldset.fieldset",i).once("fieldgroup-effects",function(i){e(this).is(".required-fields")&&e(this).find(".form-required").length>0&&e("legend span.fieldset-legend",e(this)).eq(0).append(" ").append(e(".form-required").eq(0).clone()),e(".error",e(this)).length&&(e("legend span.fieldset-legend",e(this)).eq(0).addClass("error"),Drupal.FieldGroup.setGroupWithfocus(e(this)))})}},Drupal.FieldGroup.Effects.processAccordion={execute:function(i,r,t){e("div.field-group-accordion-wrapper",i).once("fieldgroup-effects",function(){var i=e(this);if(i.accordion({autoHeight:!1,active:".field-group-accordion-active",collapsible:!0,changestart:function(i,r){e(this).hasClass("effect-none")?r.options.animated=!1:r.options.animated="slide"}}),"form"==t){var r=!1;i.find("div.field-group-accordion-item").each(function(i){e(this).is(".required-fields")&&e(this).find(".form-required").length>0&&e("h3.ui-accordion-header a").eq(i).append(" ").append(e(".form-required").eq(0).clone()),e(".error",e(this)).length&&(r||(r=e(this).parent().accordion("activate",i)),e("h3.ui-accordion-header").eq(i).addClass("error"))}),r||e(".ui-accordion-content-active",r).css({height:"auto",width:"auto",display:"block"})}})}},Drupal.FieldGroup.Effects.processHtabs={execute:function(i,r,t){"form"==t&&e("fieldset.horizontal-tabs-pane",i).once("fieldgroup-effects",function(i){e(this).is(".required-fields")&&e(this).find(".form-required").length>0&&e(this).data("horizontalTab").link.find("strong:first").after(e(".form-required").eq(0).clone()).after(" "),e(".error",e(this)).length&&(e(this).data("horizontalTab").link.parent().addClass("error"),Drupal.FieldGroup.setGroupWithfocus(e(this)),e(this).data("horizontalTab").focus())})}},Drupal.FieldGroup.Effects.processTabs={execute:function(i,r,t){"form"==t&&e("fieldset.vertical-tabs-pane",i).once("fieldgroup-effects",function(i){e(this).is(".required-fields")&&e(this).find(".form-required").length>0&&e(this).data("verticalTab").link.find("strong:first").after(e(".form-required").eq(0).clone()).after(" "),e(".error",e(this)).length&&(e(this).data("verticalTab").link.parent().addClass("error"),Drupal.FieldGroup.setGroupWithfocus(e(this)),e(this).data("verticalTab").focus())})}},Drupal.FieldGroup.Effects.processDiv={execute:function(i,r,t){e("div.collapsible",i).once("fieldgroup-effects",function(){var i=e(this),r=e("span.field-group-format-toggler:first",i),t=e('<a class="field-group-format-title" href="#"></a>');t.prepend(r.contents()),e(this).is(".required-fields")&&e(this).find(".form-required").length>0&&t.append(" ").append(e(".form-required").eq(0).clone()),t.appendTo(r),t.click(function(){var r=i.get(0);if(!r.animating){r.animating=!0;var t=i.hasClass("speed-fast")?300:1e3;i.hasClass("effect-none")&&i.hasClass("speed-none")?e("> .field-group-format-wrapper",r).toggle():i.hasClass("effect-blind")?e("> .field-group-format-wrapper",r).toggle("blind",{},t):e("> .field-group-format-wrapper",r).toggle(t),r.animating=!1}return i.toggleClass("collapsed"),!1})})}},Drupal.behaviors.fieldGroup={attach:function(i,r){r.field_group=r.field_group||Drupal.settings.field_group,void 0!=r.field_group&&(e.each(Drupal.FieldGroup.Effects,function(t){var o=t.toLowerCase().replace("process","");void 0!=r.field_group[o]&&e.isFunction(this.execute)&&this.execute(i,r,r.field_group[o])}),e(".fieldset-wrapper .fieldset > legend").css({display:"block"}),e(".vertical-tabs fieldset.fieldset").addClass("default-fallback"),e(".group-wrapper fieldset").each(function(){var i="field_group-"+e(this).attr("id")+" "+e(this).attr("id");e(this).attr("id",i)}),e(".group-wrapper ul li").each(function(){var i=e(this).index();e(this).children("a").click(function(){var r=e(".group-wrapper fieldset").get(i),t=e(r).attr("id").replace(/^field_group-/,"").split(" ")[0];window.location.hash=t})}))}}}(jQuery);
//# sourceMappingURL=maps/field_group.js.map
