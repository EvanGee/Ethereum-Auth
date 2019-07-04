
const axios = require("axios")
module.exports = class Auth {

    constructor(web3) {
        this.web3 = web3
    }

    sign(data, pass) {
        return new Promise((resolve, reject) => {
            if (this.web3.eth.defaultAccount == null) {
                reject("default account is not set")
            }
            
            this.web3.eth.personal.sign(data, this.web3.eth.defaultAccount, pass, (err, data) => {
                if (err)
                    reject(err)
                resolve(data)
            })
        
        })
    }

    validate(data, signature, address) {

        return new Promise((resolve, reject) => {
            const recovered = this.web3.eth.accounts.recover(data, signature)
            console.log(recovered)
            if (recovered !== address) {
                reject(false)
            }
            resolve(address)
        })
    }
}