var speakeasy = require("speakeasy");
var QRCode = require('qrcode');


// Generate a secret key.
var secret = speakeasy.generateSecret();
//console.log(secret)
// Access using secret.ascii, secret.hex, or secret.base32.


// Use otpauthURL() to get a custom authentication URL for SHA512
var url = speakeasy.otpauthURL({ secret: secret.ascii, label: 'MAE21', algorithm: 'sha512' });

console.log(url)

QRCode.toDataURL(url, function(err, data_url) {
  //console.log(data_url);

  // Display this data URL to the user in an <img> tag
  // Example:
  console.log('<img src="' + data_url + '">');
});
