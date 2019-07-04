const Web3 = require("web3")
const web3 = new Web3("http://127.0.0.1:8555")

const path = require("path")
const ethAuth = require (path.join(__dirname, "..", "index.js"))

const auth = new ethAuth(web3)

web3.eth.getAccounts()
.then((accounts)=>{
        console.log("signing", accounts)
        web3.eth.defaultAccount = accounts[1]
        auth.sign("Hello", "pass1234").then((sig)=>{
            console.log(sig)

            auth.validate("Hello", sig, web3.eth.defaultAccount)
            .then(console.log)
            .catch(console.error)
        })

    }).catch(console.error)
