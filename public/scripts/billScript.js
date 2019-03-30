'use strict';

//Script for contacts:
let contactBtn = document.getElementById('addContact');
contactBtn.addEventListener('click', addContactFunction);


function addContactFunction(){
  alert('hello');

}

//Script for the bill split:
let amountInput = document.getElementById('amountInput');
let confirmAmountBtn = document.getElementById('confirmAmountBtn');
confirmAmountBtn.addEventListener('click', amountValidation);

function amountValidation(){
  //Checks data type:
  if(isNaN(amountInput.value)){
    alert('Error must enter a valid number.');
  } else {
    //Checks range:
    if(amountInput.value <= 0 || amountInput.value > 5000){
      alert('Error must enter a in range 1-5000.');
    } else {
      //Rounds to 2dp:
       let finalValue = Math.round(amountInput.value * 100) / 100;
    }
  }
}
