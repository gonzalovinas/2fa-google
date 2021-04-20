 
var authenticator = require('otplib/authenticator');
 var crypto = require ('crypto');


authenticator.options = { crypto };
const secret = 'HATD4SKIFZTHSLTRM5XHUR3MHNBWEPRDOI3GYZ3MFZBCKXRSMY6A';
// Alternatively: const secret = otplib.authenticator.generateSecret();
 
const token = authenticator.generate(secret); // 556443

console.log(token)