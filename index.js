
const axios = require("axios")
module.exports = class Auth {

    constructor(web3, metamask) {
        this.web3 = web3
        this.metamask = metamask
    }

    sign(data) {
        return new Promise((resolve, reject) => {
            if (this.web3.eth.defaultAccount == null) {
                reject("default account is not set")
            }

            if (this.metamask === true) {
                this.web3.personal.sign(web3.toHex(JSON.stringify(data)), this.web3.eth.defaultAccount, (err, data) => {
                    if (err)
                        reject(err)
                    resolve(data)
                })
            }

        })
    }

    validate(token, msg, address) {
        const recovered = web3.eth.accounts.reverse(msg)
        if (recovered[0] !== address) {
            return false
        }
        return true
    }


    requestPermission(url) {
        const token = "Requesting Access to " + url
        sign(token).then((signature)=>{
            axios.post(url, signature)
        })
    }
}