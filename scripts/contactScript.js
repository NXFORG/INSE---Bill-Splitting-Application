'use strict';

//Script for contacts:
let contactBtn = document.getElementById('addContact');
contactBtn.addEventListener('click', addContactFunction);

function addContactFunction(){
  document.getElementById('contactsOverview').style.display = 'none';
  document.getElementById('addContactContainer').style.display = 'block';
}

let submitContactButton = document.getElementById('submitContactInformation');
submitContactButton.addEventListener('click', submitContactFunction);

function submitContactFunction(){
  let contactName = document.getElementById('contactNameInput').value;
  let contactPhone = document.getElementById('contactPhoneInput').value;
  let contactDescription = document.getElementById('contactDescriptionInput').value;

  //Validation prevents too long names:
  if(contactName.length > 30){
    alert('Names cannot exceed 30 characters in length.');
  }

  //Phone Number Validation:
  if(isNaN(contactPhone)){
    alert('Phone number must be a series of numbers. (no spaces/letters/symbols)');
  } else if(contactPhone.length > 11){
      alert('Phone number cannot exceed 11 characters in length.');
  }

  //Validation prevents too long descriptions:
  if(contactDescription.length > 140){
    alert('Contact Descriptions cannot exceed 140 characters in length.');
  }

}