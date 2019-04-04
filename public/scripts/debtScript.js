'use strict';

//AJAX request, requests data from json file and creates HTML div elements based on information:
$.ajax({
  type: 'GET',
  url: './JSONstorage/outstandingDebt.json',
  dataType: 'json',
  success: function(data){
    $.each(data, function(index, item){
        let container = document.createElement('div');
        container.className = 'individualDebtElement';
        let firstInfo = document.createElement('p');
        firstInfo.textContent = 'Name: ' + item.Name + ' ' + item.Type + ' £' + item.Amount;
        let secondInfo = document.createElement('p');
        secondInfo.textContent = 'Debt created: ' + item.Date + ' Description: ' + item.Description;
        container.appendChild(firstInfo);
        container.appendChild(secondInfo);
        $('#overallContainer').append(container);
    })
  }
});
