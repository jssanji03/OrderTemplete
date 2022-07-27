/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-outline-secondary');
      $(this).removeClass('btn-outline-secondary');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});

const plus = document.querySelector(".js-add");
const minus = document.querySelector(".js-minus");
const display = document.querySelector(".js-num");
let counterVal = 1;

plus.addEventListener("click", () => {
	if (counterVal >= 10) {
		return false;
	} else {
		displayMode((counterVal += 1));
	}
});
minus.addEventListener("click", () => {
	if (counterVal <= 0) {
		return false;
	} else {
		displayMode((counterVal -= 1));
	}
});
function displayMode(Val) {
	btnDisplay();
	display.value = Val;
}
function btnDisplay() {
	if (counterVal >= 10) {
		plus.disabled = true;
	} else if (counterVal <= 0) {
		minus.disabled = true;
	} else {
		plus.disabled = false;
		minus.disabled = false;
	}
}
displayMode(counterVal);
