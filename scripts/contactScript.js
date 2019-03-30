'use strict';
//Boolean to determine button actions:
let addGroupBtnCheck = new Boolean(false);
//Functions to update each listing:
 updateContactList();
 updateGroupList();
//Script for contacts:
const contactBtn = document.getElementById('addContact');
contactBtn.addEventListener('click', addContactFunction);

function addContactFunction(){
  document.getElementById('contactList').style.display = 'none';
  document.getElementById('displayContact').style.display = 'none';
  document.getElementById('addContactContainer').style.display = 'block';
}

const submitContactButton = document.getElementById('submitContactInformation');
submitContactButton.addEventListener('click', submitContactFunction);

//Function for submitting a new contact:
function submitContactFunction(){
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
    document.getElementById('contactList').style.display = 'block';
    document.getElementById('addContactContainer').style.display = 'none';

    updateContactList();
    getContactDetails();
  }
}

//Updates the contents of contacts when a new element is added:
function updateContactList(){
    let contactElements = document.getElementsByClassName('contact');
    for(let i = 0; i < contactElements.length;  i++){
      if(i % 2){
        contactElements[i].style.backgroundColor = 'lightgrey';
      } else {
        contactElements[i].style.backgroundColor = 'white';
      }

      //Adds event listener to the new element:
      let contact = document.getElementsByClassName('contact');
        for(let i = 0; i < contact.length; i++){
          contact[i].addEventListener('click', function getContactDetails(){
            document.getElementById('contactList').style.display = 'none';
            document.getElementById('displayContact').style.display = 'block';
            document.getElementById('displayContactName').textContent = 'Contact Name: '+ contact[i].textContent;
          });
        }
    }
}

//Function for returning to list of contacts after viewing info about a single contact:
let displayBackBtn = document.getElementById('displayContactBackBtn');
displayBackBtn.addEventListener('click', function backToContactList(){
  document.getElementById('contactList').style.display = 'block';
  document.getElementById('displayContact').style.display = 'none';
});

//GROUP JAVASCRIPT

const addGroupButton = document.getElementById('addGroup');
addGroupButton.addEventListener('click', addGroupFunction)
const submitGroupButton = document.getElementById('submitGroupInformation');
submitGroupButton.addEventListener('click', submitGroupFunction)

//Function for add group button:
function addGroupFunction(){
  addGroupBtnCheck = true;
  document.getElementById('addGroupContainer').style.display = 'block';
  document.getElementById('groupList').style.display = 'none';
  document.getElementById('contactList').style.display = 'block';
  document.getElementById('addContactContainer').style.display = 'none';
}

//Updates the contents of groups when a new element is added:
function updateGroupList(){
    let groupElements = document.getElementsByClassName('group');
    for(let i = 0; i < groupElements.length;  i++){
      if(i % 2){
        groupElements[i].style.backgroundColor = 'lightgrey';
      } else {
        groupElements[i].style.backgroundColor = 'white';
      }
    }
    //Adds event listener to the new element:
    let group = document.getElementsByClassName('group');
      for(let i = 0; i < group.length; i++){
        group[i].addEventListener('click', function getContactDetails(){
          document.getElementById('groupList').style.display = 'none';
          document.getElementById('displayGroup').style.display = 'block';
          document.getElementById('displayGroupName').textContent = 'Group Name: '+ group[i].textContent;
        });
      }
}

//Function for adding contacts to a new group:

//Function for submitting a new group:
function submitGroupFunction(){
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
        document.getElementById('addGroupContainer').style.display = 'none';
        document.getElementById('groupList').style.display = 'block';

        //Creates a new group element:
        let newGroup = document.createElement('div');
        let groupTag = document.createElement('p');
        groupTag.textContent = groupName;
        newGroup.className = 'group';
        newGroup.appendChild(groupTag);
        document.getElementById('groupList').appendChild(newGroup);
        updateGroupList();
  }
}

//Function for returning to list of groups after viewing info about a single group:
let displayBackBtnGroup = document.getElementById('displayGroupBackBtn');
displayBackBtnGroup.addEventListener('click', function backToGroupList(){
  document.getElementById('groupList').style.display = 'block';
  document.getElementById('displayGroup').style.display = 'none';
});
