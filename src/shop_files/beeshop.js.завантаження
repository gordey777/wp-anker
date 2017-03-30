/**
 * 
 */
(function ($) {

  Beeshop = function() {
    
  };
  
  Beeshop.prototype.behavors = {};
  
  Drupal.BeeShop = new Beeshop();
  
	Drupal.beeshop_furmat_number = function($value){
		$value = $value.toFixed(2);
		var separeted_summ = $value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		separeted_summ = separeted_summ.replace(/\.00/g, '');
		var parts = separeted_summ.split(' ');
		
		var sum_value_out = '';
		
		var count = 0;
		$.each(parts, function(key, value) {
			//alert(key + ': ' + value);
			count++;
			sum_value_out += '<span class="price-part-' + count + '">' + value + ' </span>';
		});
		
		return sum_value_out;
		
	};
	
	$.fn.numberMask = function(options) {
		var settings = {type:'int',beforePoint:10,afterPoint:2,defaultValueInput:0,decimalMark:'.',pattern:''},
			onKeyPress = function(e){
				var k = e.which;

				if (e.ctrlKey || e.altKey || e.metaKey || k<32) {//Ignore
					return true;
				} else if (k) {
						var c = String.fromCharCode(k);
						var value = e.target.value;
						var selectionParam = getSelection(e.target);
					    if(selectionParam.statusSelection) {
							value = value.substring(0,selectionParam.start) + c + value.substring(selectionParam.end);
						} else {
							value += c;
						}

						if((typeof settings.pattern == "object") && (settings.pattern instanceof RegExp)) {
							var re = settings.pattern;
						} else {
							if(settings.type == 'int') {
								var re = new RegExp("^\\d{1,"+settings.beforePoint+"}$", "ig");
							} else if(settings.type == 'float') {
								var re = new RegExp("^\\d{1,"+settings.beforePoint+"}$|^\\d{1,"+settings.beforePoint+"}\\"+settings.decimalMark+"\\d{0,"+settings.afterPoint+"}$", "ig");
							} else if(settings.type == 'pos-int'){
								var re = new RegExp("^\[123456789]+[0-9]*$", "ig");
							}
						}
						return	re.test(value);
				}
			},
			onKeyUp = function(e) {
				var input = $(e.target);
				if(e.which == 13 ||e.which == 86) {
					 input.val(formattedNumber(input));
				}
			},
			getSelection = function(el) {
				 var start = 0, end = 0, normalizedValue, range,
					textInputRange, len, endRange,statusSelection = false;

				if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
					start = el.selectionStart;
					end = el.selectionEnd;
				} else {
					range = document.selection.createRange();

					if (range && range.parentElement() == el) {
						len = el.value.length;
						normalizedValue = el.value.replace(/\r\n/g, "\n");

						// Create a working TextRange that lives only in the input
						textInputRange = el.createTextRange();
						textInputRange.moveToBookmark(range.getBookmark());

						// Check if the start and end of the selection are at the very end
						// of the input, since moveStart/moveEnd doesn't return what we want
						// in those cases
						endRange = el.createTextRange();
						endRange.collapse(false);

						if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
							start = end = len;
						} else {
							start = -textInputRange.moveStart("character", -len);
							start += normalizedValue.slice(0, start).split("\n").length - 1;

							if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
								end = len;
							} else {
								end = -textInputRange.moveEnd("character", -len);
								end += normalizedValue.slice(0, end).split("\n").length - 1;
							}
						}
					}
				}
				if((start-end)!=0) {
					statusSelection = true;
				}
				return {
					start: start,
					end: end,
					statusSelection :statusSelection
				};
			},
			onBlur = function(e) {
				var input = $(e.target);
				if(input.val() != '') {
					input.val(formattedNumber(input));
				}
			},
			formattedNumber = function($input) {
				var val = $input.val();
				if((typeof settings.pattern == "object") && (settings.pattern instanceof RegExp)) {
							var re = settings.pattern;
							if(re.test(val)) {
								return val;
							} else {
								return settings.defaultValueInput;
							}
				} else {
					if(settings.type == 'int') {
						var re = new RegExp("^\\d{1,"+settings.beforePoint+"}$", "ig");
						if(re.test(val)) {
								return val;
							} else {
								return settings.defaultValueInput;
						}
					} else {
						var re = new RegExp("^\\d{1,"+settings.beforePoint+"}$|^\\d{1,"+settings.beforePoint+"}\\"+settings.decimalMark+"\\d{1,"+settings.afterPoint+"}$", "ig");
						if(re.test(val)) {
								return val;
							} else {
								return settings.defaultValueInput;
						}
					}
				}
			}
		this.bind('keypress',onKeyPress).bind('keyup',onKeyUp).bind('blur',onBlur);
		if (options) {
			$.extend(settings, options);
		}
		return this;
	};

})(jQuery);