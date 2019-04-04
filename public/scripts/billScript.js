'use strict';

//Hides quick split and group split elements by default:
$('#amountContainer').hide();
$('#quickChoice').hide();
$('#dutchContainer').hide();

//Event listeners to toggle between standard or dutch split:
$('#dutchRadio').click(function(){
  if($('#dutchRadio').is(':checked') == true){
    $('#dutchContainer').show();
  }
});
$('#standardRadio').click(function(){
  if($('#standardRadio').is(':checked') == true){
    $('#dutchContainer').hide();
  }
});

//Event listener + function for the back buttons:
//Also clears the drop down box values so there are no duplicates...
$('.billSplitBackButton').click(function(){
  $('#amountContainer').hide();
  $('#quickChoice').hide();
  $('#splitGroupSelect').empty();
  $('#dutchContainer').empty();
  $('#splitChoice').show();
});

//Event listener + function for deciding between quick split or group split:
$('#submitSplitType').click(function(){
  $('#splitChoice').hide();
  let selectorValue = document.getElementById('splitDecisionSelect').value;
  if(selectorValue == 'quickSplit'){
    quickSplit();

  } else {
    groupSplit();
  }
});

//Function for quick split:
function quickSplit(){
  $('#quickChoice').show();
  $('#quickCalc').click(function(){
    const quickCost = document.getElementById('quickCost').value;
    const quickPeople = document.getElementById('quickQuantity').value;
    const finalCost = validateCostInput(quickCost/quickPeople);
    $('#quickCostDisplay').text('Cost per person: £ ' + finalCost);
  });
}

//Function for group split:
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
            let dutchContainer = document.getElementById('dutchContainer');
            let percentInput = document.createElement('input');
            let personName = document.createElement('p');

            percentInput.type = 'text';
            percentInput.className = 'dutchPercentInput';
            dutchContainer.appendChild(personName);
            dutchContainer.appendChild(percentInput);
        })
      }
    });

  //Event listener for the confirmation button:
  $('#confirmAmountBtn').click(function(){
    let dropText = document.getElementById('splitGroupSelect').value;
    $.ajax({
      type: 'GET',
      url: './JSONstorage/groups.json',
      dataType: 'json',
      success: function(data){
        $.each(data, function(index, item){
          if($('#standardRadio').is(':checked') == true){
            if(item.Name === dropText){
              let cost = parseFloat(document.getElementById('amountCostInput').value);
              let size = parseFloat(item.Size);
              let finalCostPerPerson = validateCostInput(cost/size);
              $('#groupCostPerPerson').text('Cost per person: £' + finalCostPerPerson);
            }
          } else if($('#dutchRadio').is(':checked') == true){
            let cost = parseFloat(document.getElementById('amountCostInput').value);
            let inputPercent = document.getElementsByClassName('dutchPercentInput');
            $('#groupCostPerPerson').text('Cost per person: ' );
            for(let i = 0; i < inputPercent.length; i++){
              let finalPercentCost = (cost * (parseFloat(inputPercent[i].value)/100));

              $('#groupCostPerPerson').append('£' + finalPercentCost + ' ');
            }
          }

        })
      }
    });
  });
}




//Function to ensure that all the user input is valid:
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
