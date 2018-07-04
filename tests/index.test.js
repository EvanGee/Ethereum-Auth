const Web3 = require("web3")
const web3 = new Web3("http://localhost:8500")


const path = require("path")
const accounts = require("./accounts")
const ethAuth = require (path.join(__dirname, "..", "index.js"))
const auth = new ethAuth(web3)

accounts.getAccounts()
.then((accounts)=>{
        
        web3.eth.defaultAccount = accounts[0]
        auth.sign("Hello", "pass").then(console.log).catch(console.error)
    })



/*
accounts.getAccounts().then((res)=>{
    accounts.decryptPrivateKey(web3, res[0], "pass")
    .then((privateKey)=>{
        const signedObject = privateKey.sign("stuff")
        const recoverd = web3.eth.accounts.recover(signedObject)
        console.log(recoverd)
    })
    .catch(console.error)
    ///auth.sign()

})

.catch(console.error)
*/