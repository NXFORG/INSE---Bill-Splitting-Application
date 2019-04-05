
# INSE---Bill-Splitting-Application

Coursework Bill Split App: The purpose of our application is to allow for groups of people to be able to split a bill that they have via a couple of different methods. There is also functionality for redeeming vouchers, viewing outstanding debt and creating new groups in the program.

# Running The Application

To test the application using node.js:
1) Download the files from github.
2) Ensure node.js is installed.
3) Open command prompt.
4) Path to the program folder.
5) Type "node server".
6) Open localhost:8080 or ipv4:8080 in an internet browser.

To run application without node.js:
1) sliceyourbill.co.uk

# Program Functionality

Bill Splitting
--------------

The Application a couple of different methods for splitting a bill. The first method is simply known as 'quick split'. This method is for when a user just wants to divide a cost quickly by a certain number of people to see how much each person pays.

The second and more complex form of bill splitting which we have in our application is the 'group split' method. This method allows the user to split a bill between a specific group which they have stored in our database. The user can enter the total cost and then select the group. From here they can either select a standard split or enter to split based on percentages. If the user decides to do a split based on percentage then a textbox will appear for each person in the group and the user can enter the amount they would like to split per person.

Adding Contacts/Groups
----------------------

The user can view their existing contacts and groups in the same page of the application. When the user opens the contacts/group page of the application the contacts they already have are shown to the left and the groups they are a part of are stored to the right. 

If the user decides to click on a contact then the information (name, phone, description) of the specific contact will be shown to the user. Similarly, if the user decides to click on a group they are a part of then information about that group will be shown to the user (name, description, members).

The user can also add contacts and groups by clicking the relevant buttons above the contact/group lists. From here they will be presented with a form which they can fill out to submit a new contact or group to the application.

Viewing/Redeeming Vouchers
--------------------------

The user can view a series of vouchers for particular restaurants and other companies which they can redeem by clicking on the voucher its self. The vouchers are loaded via the database and can be updated as such. Obviously, we are not really partnered with these companies so the vouchers do not redeem anything however, if we were then the real codes would work.

Viewing/Sorting Outstanding Debt
---------------------------------

The user can view the outstanding debt that is either owed to them or that they owe to someone else. The users previous outstanding debts are loaded when the page is opened from the database. There are links which when pessed will direct the user to paypal which if they have a registered account they can settle their debts. Each individual debt also has the option to be deleted if the user desires. 

The user can choose to add new debts whenever they want by simply clicking "Add Debt" and entering the relevant information about their debt into the form provided.


# Other Information
