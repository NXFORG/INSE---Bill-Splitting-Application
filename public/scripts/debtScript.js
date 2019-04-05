'use strict';
$('#addDebtContainer').hide();

$('#addDebt').click(function(){
  $('#addDebtContainer').show();
    $('#overallContainer').hide();
});

$('#debtBack').click(function(){
  $('#addDebtContainer').hide();
  $('#overallContainer').show();
});

//AJAX request, requests data from json file and creates HTML div elements based on information:
$.ajax({
  type: 'GET',
  url: './JSONstorage/outstandingDebt.json',
  dataType: 'json',
  success: function(data){
    $.each(data, function(index, item){

        //Creates new debt elements and assigns their text values based on JSON file data:
        let container = document.createElement('div');
        container.className = 'individualDebtElement';
        let firstInfo = document.createElement('p');
        firstInfo.textContent = 'Name: ' + item.Name + ' ' + item.Type + ' £' + item.Amount;
        let secondInfo = document.createElement('p');
        secondInfo.textContent = 'Debt created: ' + item.Date + ' Description: ' + item.Description;
        let removeDebt = document.createElement('button');
        removeDebt.textContent = 'Remove';
        removeDebt.className = 'removeDebtBtn';

        //Event listener to delete individual debts:
        $(removeDebt).click(function(){
          container.remove();
        });

        //Appends text to container:
        container.appendChild(firstInfo);
        container.appendChild(secondInfo);

        //Adds the paypal image and assigns a link value to it:
          let payPal = document.createElement('img');
          payPal.className = 'payImg';
          let payLink = document.createElement('a');
          payPal.src = '../images/paypal.png'
          payLink.href = 'https://www.paypal.com/uk/home';

          //Code to alternate the background colouring of the vouchers:
            if(index % 2){
              container.style.backgroundColor = 'lightgrey';
            } else {
              container.style.backgroundColor = 'white';
            }

          //Appends both image link and container to the main debt container:
          payLink.appendChild(payPal);
          container.appendChild(payLink);
          container.appendChild(removeDebt);
        $('#overallContainer').append(container);


    })

  }
});

$('#debtSubmit').click(function(){

  //Gets input from textbox:
  let newDebtName = document.getElementById('debtNameInput').value;
  let newDebtAmount = document.getElementById('debtAmountInput').value;
  let newDebtDescription = document.getElementById('debtDescriptionInput').value;
  let newDebtType = document.getElementById('debtTypeInput').value;
  if(newDebtType === 'owed' || newDebtType === 'owe'){
    //Function to get the current date:
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    let newContainer = document.createElement('div');
    newContainer.className = 'individualDebtElement';
    let newFirstInfo = document.createElement('p');
    newFirstInfo.textContent = 'Name: ' + newDebtName + ' ' + newDebtType + ' £' + newDebtAmount;
    let newSecondInfo = document.createElement('p');
    newSecondInfo.textContent =  'Debt created: ' + today + ' Description: ' + newDebtDescription;

    let newRemoveDebt = document.createElement('button');
    newRemoveDebt.textContent = 'Remove';
    newRemoveDebt.className = 'removeDebtBtn';

    //Event listener to delete individual debts:
    $(newRemoveDebt).click(function(){
      newContainer.remove();
    });

    //Adds the paypal image and assigns a link value to it:
      let newPayPal = document.createElement('img');
      newPayPal.className = 'payImg';
      let newPayLink = document.createElement('a');
      newPayPal.src = '../images/paypal.png'
      newPayLink.href = 'https://www.paypal.com/uk/home';

    //Appends text to container:
    newContainer.appendChild(newFirstInfo);
    newContainer.appendChild(newSecondInfo);

    if(document.getElementById('overallContainer').childElementCount % 2){
      newContainer.style.backgroundColor = 'lightgrey';
    } else {
      newContainer.style.backgroundColor = 'white';
    }

    newPayLink.appendChild(newPayPal);
    newContainer.appendChild(newPayLink);
    newContainer.appendChild(newRemoveDebt);
    $('#overallContainer').append(newContainer);
    $('#addDebtContainer').hide();
    $('#overallContainer').show();
  } else {
      alert('Type must be either owed or owe.');



  }

});
