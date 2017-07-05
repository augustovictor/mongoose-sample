const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

const hashedPassword = '$2a$10$l4W5LSr8ivRZQ6Wyt8C.ze7oqVww287ir07jx5lgrzqGU9aqL39RW';

bcrypt.compare(password, hashedPassword, (err, didMatch) => {
    console.log(didMatch);
});

// jwt.sign: Takes the object (data) and secret then creates a hash for it.
// jwt.verify: Takes the token and secret and make sure the data was not manipulated.

// const data = {
//     id: 10
// };

// const token = jwt.sign(data, '123abc');

/*The result has three parts:
- Header: Algorithm and the type

- Payload: id and iat (issued at)
- Verify signature*/
// console.log(token);
// try {
//     const decoded = jwt.verify(token + '1', '123abc');
//     console.log(decoded);
// } catch(err) {
//     console.log('Does not match: ', err);
// }


// Simulating token 
// const message = "I am user 3";
// const hash = SHA256(message).toString();
// console.log(`Message: ${message}. Hash: ${hash}`);
// 
// const data = {
//     id: 4
// };
// 
// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
// 
// token.data.id = 5;
// 
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// 
// if(resultHash === token.hash) {
//     console.log('Data was not changed.');
// } else {
//     console.log('Data was changed!!!!');
// }