'use strict';
$('#amountContainer').hide();
$('#quickChoice').hide();



$('#submitSplitType').click(function(){
  $('#splitChoice').hide();
  let selectorValue = document.getElementById('splitDecisionSelect').value;

  if(selectorValue == 'quickSplit'){
    $('#quickChoice').show();
    $('#quickCalc').click(function(){
      let quickCost = document.getElementById('quickCost').value;
      let quickPeople = document.getElementById('quickQuantity').value;
      let finalCost = validateCostInput(quickCost/quickPeople);
      $('#quickCostDisplay').text('Cost per person: £ ' + finalCost);
    });
  } else {
    $('#amountContainer').show();
  }
});



function validateCostInput(costInput){
  if(isNaN(costInput)){
    alert('Error must enter a valid number.');
  } else if(costInput <= 0 || costInput > 5000){
      alert('Error must enter a in range 1-5000.');
    } else {
       costInput = Math.round(costInput * 100) / 100;
       return costInput;
    }
  }
