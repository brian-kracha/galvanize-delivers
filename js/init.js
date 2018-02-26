$(document).ready(function(){
  'use strict';
var $card = $('#left');
var $subtotal =$('#subtotal');
var $tax = $('#tax');
var $total = $('#total');
var tax = 0;
var total = 0



$card.on('click',function(event){

  event.preventDefault();
  console.log(event.target);
// let target= $(event.target).parent("a");

let closestCard= $(event.target).closest(".card");
let item = closestCard.find('.card-title');
let price = closestCard.find('p')[0].innerText.slice(1);
let newPrice = parseFloat(price++);
console.log(price);
console.log(typeof newPrice)

let subtotal=0;
var newSubtotal = $subtotal.text(`$${subtotal += newPrice }`);
var newSubtotal = subtotal.toFixed(2);
tax =newSubtotal;
console.log(tax)

tax = Number(newSubtotal * 0.09)
total+= (subtotal + tax);
console.log(typeof total)

// $subtotal.html(newSubtotal);
$tax.text("$"+tax);
$total.html("$"+total.toFixed(2));

return;



// $('#subtotal').append(newPrice);
// $subtotal.innerText.slice(1)= parseInt(price);
})
})
