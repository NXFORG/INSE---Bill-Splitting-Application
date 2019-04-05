'use strict';
//Boolean to determine button actions:
let addGroupBtnCheck = new Boolean(false);

//Functions to update each listing:
loadContacts();
loadGroups();

//Script for contacts:
$('#addContact').click(function addContactFunction(){
  $('#contactList').hide();
  $('#displayContact').hide();
  $('#addContactContainer').show();
});

//Function for loading existing contacts into the application:
function loadContacts(){
  $.ajax({
    type: 'GET',
    url: './JSONstorage/contacts.json',
    dataType: 'json',
    success: function(data){
      $.each(data, function(index, item){
          //Creates a new contact element:
          let loadedContact = document.createElement('div');
          loadedContact.className = 'contact';
          let contactTag = document.createElement('p');
          contactTag.textContent = item.Name;
          loadedContact.appendChild(contactTag);
          document.getElementById('contactList').appendChild(loadedContact);
          if(index % 2){
            loadedContact.style.backgroundColor = 'lightgrey';
          } else {
            loadedContact.style.backgroundColor = 'white';
          }
          loadedContact.addEventListener('click', function(){
            $('#contactList').hide();
            $('#displayContact').show();
            $('#displayContactName').text('Contact Name: ' + item.Name);
            $('#displayContactPhone').text('Contact Phone: ' + item.Phone);
            $('#displayContactDescription').text('Contact Description ' + item.Description);
          });
      })
    }
  });
}

//Function for loading existing groups into the application:
function loadGroups(){
  $.ajax({
    type: 'GET',
    url: './JSONstorage/groups.json',
    dataType: 'json',
    success: function(data){
      $.each(data, function(index, item){
        //Creates a new group element:
        let loadedGroup = document.createElement('div');
        let groupTag = document.createElement('p');
        groupTag.textContent = item.Name;
        loadedGroup.className = 'group';
        loadedGroup.appendChild(groupTag);
        document.getElementById('groupList').appendChild(loadedGroup);
        if(index % 2){
          loadedGroup.style.backgroundColor = 'lightgrey';
        } else {
          loadedGroup.style.backgroundColor = 'white';
        }
        loadedGroup.addEventListener('click', function(){
          $('#groupList').hide();
          $('#displayGroup').show();
          $('#displayGroupName').text('Group Name: ' + item.Name);
          $('#displayGroupDescription').text('Group Description: ' + item.Description);
          $('#displayGroupMembers').text('Group Members ' + item.Members);
        });
      })
    }
  });

}

//Function for submitting a new contact:
$('#submitContactInformation').click(function submitContactFunction(){
    let contactName = document.getElementById('contactNameInput').value;
    let contactPhone = document.getElementById('contactPhoneInput').value;
    let contactDescription = document.getElementById('contactDescriptionInput').value;

    //Validation:
    if(contactName.length > 30){
      alert('Names cannot exceed 30 characters in length.');
    } else if(isNaN(contactPhone)){
      alert('Phone number must be a series of numbers. (no spaces/letters/symbols)');
    } else if(contactPhone.length > 11){
        alert('Phone number cannot exceed 11 characters in length.');
    } else if(contactDescription.length > 140){
      alert('Contact Descriptions cannot exceed 140 characters in length.');
    } else if(contactName === '' || contactPhone === '' || contactDescription === ''){
      alert('Cannot have an empty field.');
    } else {
      let newContact = document.createElement('div');
      let contactTag = document.createElement('p');
      contactTag.textContent = contactName;
      newContact.className = 'contact';
      newContact.appendChild(contactTag);
      document.getElementById('contactList').appendChild(newContact);
      $('#addContactContainer').hide();
      $('#contactList').show();
      updateContactList();
      getContactDetails();
    }
});

//Function for returning to list of contacts after viewing info about a single contact:
$('#displayContactBackBtn').click(function(){
  $('#displayContact').hide();
  $('#contactList').show();
});


//Function for add group button:
$('#addGroup').click(function addGroupFunction(){
  addGroupBtnCheck = true;
  $('#groupList').hide();
  $('#addContactContainer').hide();
  $('#addGroupContainer').show();
  $('#contactList').show();
});

//Function for submitting a new group:
$('#submitGroupInformation').click(function submitGroupFunction(){
  addGroupBtnCheck = false;
  let groupName = document.getElementById('groupNameInput').value;
  let groupDescription = document.getElementById('groupDescriptionInput').value;
  let groupMembers = document.getElementById('groupMembersInput').value;

  //Validation:
  if(groupName.length > 30){
    alert('Group names cannot exceed 30 characters in length.');
  } else if(groupDescription.length > 140){
    alert('Group descriptions cannot exceed 140 characters in length.');
  } else if(groupName === '' || groupDescription === '' || groupMembers === ''){
        alert('Cannot have an empty field.');
  } else {
        //Adjusts visibility of elements:
        $('#addGroupContainer').hide();
        $('#groupList').show();

        let newGroup = {
          Name: groupName,
          Description: groupDescription,
          Members: groupMembers
        }

        let newGroupString = JSON.stringify(newGroup);


        $.ajax({
          type: 'POST',
          url: './JSONstorage/groups.json',
          dataType: 'json',
          data: newGroupString,
          success: function(data){
            alert(newGroupString);
            url.html(data);

          }
        });


        //call update

  }
});

//Function for returning to list of groups after viewing info about a single group:
$('#displayGroupBackBtn').click(function backToGroupList(){
  $('#displayGroup').hide();
  $('#groupList').show();
});
