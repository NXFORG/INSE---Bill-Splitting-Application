<?php


include __DIR__.'/config.php';
include __DIR__.'/db.php';

// functions allowed
$whitelist = [ "vouchers" ];
$path = explode('/', ltrim($_SERVER['REQUEST_URI'], "/"));

// only names in whitelist called, otherwise error
if (in_array($path[1], $whitelist)) {
    call_user_func($path[1], $path);
} else {
    send($path[1] . "not a valid API endpoint", 404, "Not Found");
  }

//calls function for vouchers
function vouchers($path) {
  $result = [];
    $result = listVouchers();
    send( $result );
}

// list all vouchers
function listVouchers() {
    $results = [];
    try {
      $DB = new DB();

      $rows = $DB->query(
        "SELECT voucher.vouchId, restaurant.restaurantName, voucher.description, voucher.valid_until
        FROM voucher, restaurant
        where resturant.restaurantId = voucher.restaurantId and valid_until > NOW()"
      );

      foreach ($rows as $row) {
        $results[] = array(
          'resturant-name' => $row["restaurant.restaurantName"],
          'descr' => $row["vouchers.description"]
          'valid-until' => $row["vouchers.valid_until"]
        );
      }
    }
    return array('vouchers' => $results);
}
?>
