'use strict';

//Script for the bill split:
$('#confirmAmountBtn').click(function(){
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
});