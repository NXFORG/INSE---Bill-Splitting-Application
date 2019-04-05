'use strict';

//Function to retrieve data from JSON file and create the vouchers:
$.ajax({
  type: 'GET',
  url: './JSONstorage/vouchers.json',
  dataType: 'json',
  success: function(data){
    $.each(data, function(index, item){

        //For each item in the JSON array, create a voucher and assign corrosponding values:
        let newVoucher = document.createElement('div');
        newVoucher.className = 'voucher';
        let voucherText = document.createElement('p');
        voucherText.textContent = 'Voucher for ' + item.Name; + '. Value: ' + item.Discount;
        let voucherText2 = document.createElement('p');
        voucherText2.textContent = 'Voucher Code: ' + item.Code; + '. Valid till:' + item.Valid;
        let Click = 'Click To Redeem!';

        //Appends the information above to our new voucher and adds to voucher container:
        newVoucher.append(voucherText);
        newVoucher.append(voucherText2);
        newVoucher.append(Click);
        let voucherLink = document.createElement('a');
        voucherLink.href = item.Link;
        voucherLink.append(newVoucher);
        $('#voucherContainer').append(voucherLink);
    })
  }
});
