var speakeasy = require("speakeasy");



// Verify a given token
var tokenValidates = speakeasy.totp.verify({
    secret: 'HATD4SKIFZTHSLTRM5XHUR3MHNBWEPRDOI3GYZ3MFZBCKXRSMY6A',
    encoding: 'base32',
    token: '735189',
    window: 0
  });

  console.log(tokenValidates)