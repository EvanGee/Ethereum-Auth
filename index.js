
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

module.exports = class Auth {

    constructor (web3) {
        this.web3 = web3
    }

}