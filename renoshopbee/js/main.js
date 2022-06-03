var lowerVar = 100;
var upperVar = 3500;
$('#upper').val(upperVar);
$('#lower').val(lowerVar);
$('#one').val("$" + lowerVar);
$('#two').val("$" + upperVar);





$(function() {
  "use strict";

  //------- Active Nice Select --------//
  $('select').niceSelect();




  
  // Decrease and increase the products number by buyer
  var productNumberChange = 0;
  $( "#productNumber" ).val( productNumberChange );

  $( "#decreasedNumber" ).click(function decreasedNumber() {
    if(productNumberChange > 0) {
      productNumberChange = productNumberChange - 1;
      $( "#productNumber" ).val( productNumberChange );
    }
    else {
      $( "#productNumber" ).val( productNumberChange );
    }
    
  });

  $( "#increasedNumber" ).click(function increasedNumber() {
    if(productNumberChange < 100) {
      productNumberChange = productNumberChange + 1;
      $( "#productNumber" ).val( productNumberChange );
    }
    else {
      $( "#productNumber" ).val( productNumberChange );
    }
    
  });





  // How many is reviews? Count the ul element's children (li) 
  window.getCount = function(parent, getChildrensChildren) {
    var relevantChilden = 0;
    var children = parent.childNodes.length;
    for(var i = 0; i < children; i++) {
      if(parent.childNodes[i].nodeType != 3) {
        if(getChildrensChildren) {
          relevantChilden += getCount(parent.childNodes[i], true);
        }
        relevantChilden++;
      }
    }
    return relevantChilden;
  }

  var re_number = getCount(document.getElementById('reviews-count'), false);
  document.getElementById("reset-reviews-number_2").innerHTML = re_number;
  document.getElementById("reset-reviews-number_1").innerHTML = re_number;
  
}); 





// Total price calculation
var quantityValue = 1;
var priceValue = document.getElementById("oneProductPrice_1").innerHTML;
var subtotal;
var total;
var validCoupon = false;


$( "#quantityNumber_1" ).val(quantityValue);
$( "#quantityNumber_2" ).val(quantityValue);
$( "#quantityNumber_3" ).val(quantityValue);

$( "#totalPrice_1" ).text(quantityValue * priceValue);
var element_1 = quantityValue * priceValue;
$( "#totalPrice_2" ).text(quantityValue * priceValue);
var element_2 = quantityValue * priceValue;
$( "#totalPrice_3" ).text(quantityValue * priceValue);
var element_3 = quantityValue * priceValue;

subtotal = element_3 + element_2 + element_1;
$( "#subTotal" ).text( subtotal );

$( "#couponMinus" ).text( 0 );
$( "#totalPrice" ).text( subtotal );
$( "#couponCode" ).val("");


window.onkeyup = keyup;
function keyup() {
  // The products' price
  quantityValue = $( "#quantityNumber_1" ).val();
  priceValue = document.getElementById( "oneProductPrice_1" ).innerHTML;
  $( "#totalPrice_1" ).text(quantityValue * priceValue);
  element_1 = quantityValue * priceValue;

  quantityValue = $( "#quantityNumber_2" ).val();
  priceValue = document.getElementById( "oneProductPrice_2" ).innerHTML;
  $( "#totalPrice_2" ).text(quantityValue * priceValue);
  element_2 = quantityValue * priceValue;

  quantityValue = $( "#quantityNumber_3" ).val();
  priceValue = document.getElementById( "oneProductPrice_3" ).innerHTML;
  $( "#totalPrice_3" ).text(quantityValue * priceValue);
  element_3 = quantityValue * priceValue;


  // The products' subtotal
  subtotal = element_3 + element_2 + element_1;
  $( "#subTotal" ).text( subtotal );


  // The coupon code using when validCoupon is true
  if(validCoupon) {
    var sale = subtotal * 0.2;
    $( "#couponMinus" ).text( sale );
    total = subtotal - sale;
    $( "#totalPrice" ).text ( total );
  }
}


function applyCoupon() {
  var code = $( "#couponCode" ).val();
  if(code == "RENOSHOPBEE2020") {
    validCoupon = true;
    var sale = subtotal * 0.2;
    $( "#couponMinus" ).text( sale );
    total = subtotal - sale;
    $( "#totalPrice" ).text ( total );
    document.getElementById("notvalid").style.display = "none";
  }
  else {
    document.getElementById("notvalid").style.display = "inline";
  }
}





// Move from description to reviews and back
function openReviews() {
  document.getElementById('description-section').style.display="none";
  document.getElementById('reviews-section').style.display="inline";
  document.getElementById('open-reviews').style.background="#f5f6f9";
  document.getElementById('open-description').style.background="white";
}

function openDescription() {
  document.getElementById('description-section').style.display="inline";
  document.getElementById('reviews-section').style.display="none";
  document.getElementById('open-reviews').style.background="white";
  document.getElementById('open-description').style.background="#f5f6f9";
}





// When we use the range inputs
function getLowerSliderValue(val) {
  lowerVar = parseInt(val);
  if(lowerVar >= upperVar - 200) {
    lowerVar = upperVar - 200;
    $('#lower').val(lowerVar);
    $('#one').val("$" + lowerVar);
  }
  else {
    $('#one').val("$" + lowerVar);
  }

}

function getUpperSliderValue(val) {
  upperVar = parseInt(val);
  if(upperVar <= lowerVar + 200) {
    upperVar = lowerVar + 200;
    $('#upper').val(upperVar);
    $('#two').val("$" + upperVar);
  }
  else {
    $('#two').val("$" + upperVar);
  }
}



var active = false;
function displaySearch() {

  if(!active) {
    document.getElementById('searchdisplay').style.display="block";
    console.log(active);
    active = true;
    console.log(active);
  }
  else {
    document.getElementById('searchdisplay').style.display="none";
    active = false;
  }
}