'use strict';

$.ajax({
  type: 'GET',
  url: 'vouchers.json',
  dataType: 'json',
  success: function(data){
    $.each(data, function(index, item){
        let itemString = JSON.stringify(item);
        itemString = itemString.replace(/\"([^(\")"]+)\":/g,"$1:");
        let newVoucher = document.createElement('div');
        newVoucher.className = 'voucher';
        $(newVoucher).append($('<p>').text(itemString));
        $('#voucherContainer').append(newVoucher);
    })
  }
});
