
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

module.exports = class Auth {

    constructor(web3) {
        this.web3 = web3
    }

    sign(data, pass) {
        return new Promise((resolve, reject) => {
            if (this.web3.eth.defaultAccount == null) {
                reject("default account is not set")
            }

            this.web3.personal.sign(web3.toHex(data), this.web3.eth.defaultAccount, (err, data) => {
                resolve(data)
                reject(err)
            })


        })
    }

    recover(msg, address) {
        const recovered = web3.eth.accounts.reverse(msg)
        if (recovered[0] !== address) {
            return false
        }
        return true
    }
}