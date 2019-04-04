'use strict';
$('#amountContainer').hide();
$('#quickChoice').hide();




$('#submitSplitType').click(function(){
  $('#splitChoice').hide();
  let selectorValue = document.getElementById('splitDecisionSelect').value;

  if(selectorValue == 'quickSplit'){
    quickSplit();

  } else {
    groupSplit();
  }
});

function quickSplit(){
  $('#quickChoice').show();
  $('#quickCalc').click(function(){
    const quickCost = document.getElementById('quickCost').value;
    const quickPeople = document.getElementById('quickQuantity').value;
    const finalCost = validateCostInput(quickCost/quickPeople);
    $('#quickCostDisplay').text('Cost per person: £ ' + finalCost);
  });
}

function groupSplit(){
  //Ajax to load the groups into the drop down box:
    $('#amountContainer').show();
    $.ajax({
      type: 'GET',
      url: './JSONstorage/groups.json',
      dataType: 'json',
      success: function(data){
        $.each(data, function(index, item){
            let itemString = JSON.stringify(item);
            itemString = itemString.replace(/\"([^(\")"]+)\":/g,"$1:");
            const option = document.createElement('option');
            option.text = item.Name;
            $('#splitGroupSelect').append(option);
        })
      }
    });

  //Event listener for the button box:
  $('#confirmAmountBtn').click(function(){
    let dropText = document.getElementById('splitGroupSelect').value;
    $.ajax({
      type: 'GET',
      url: './JSONstorage/groups.json',
      dataType: 'json',
      success: function(data){
        $.each(data, function(index, item){
            if(item.Name === dropText){
              let cost = parseFloat(document.getElementById('amountCostInput').value);
              let size = parseFloat(item.Size);
              let finalCostPerPerson = validateCostInput(cost/size);
              $('#groupCostPerPerson').text('Cost per person: £' + finalCostPerPerson);
            }
        })
      }
    });
  });
}




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
