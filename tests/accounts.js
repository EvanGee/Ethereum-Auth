
const fs = require("fs")
const path = require("path")
module.exports = {

     unlockAccount : (web3, web3account, password) => {
        return new Promise((resolve, reject) => {
            let path = __dirname + "/Accounts/" + account
            fs.readFile(path, (err, data) => {
                if (err) {
                    console.error("could not open file")
                    console.error(err)
                    reject(err)
                }
                resolve(web3.eth.accounts.decrypt(JSON.parse(data), password))
            })
        })
    },

    getAccounts : () => {

        return new Promise((resolve, reject) => {
            let path = __dirname + "/Accounts/"
            let accounts = []
            fs.readdir(path, (err, files) => {
                if (err) {
                    console.error("could not open directory")
                    console.error(err)
                    reject(err)
                }

                files.forEach(file => {
                    accounts.push(file)
                })
                resolve(accounts)
            })
        })
    },

    createAccount: (web3, password) => {
        return new Promise((resolve, reject) => {
            let account = web3.eth.accounts.create()
            let encryptedAccount = account.encrypt(password)
            let dir = __dirname + "/Accounts/"

            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }

            fs.writeFile(path.join(dir, account.address), JSON.stringify(encryptedAccount), (err) => {
                if (err) {
                    console.error("couldn't save account");
                    console.error(err);
                    reject(err)
                }
                resolve(encryptedAccount)
            })
        })
    }

}