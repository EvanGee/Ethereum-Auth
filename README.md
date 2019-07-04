# Ethereum-Auth
This is an authentication library for verifying an identity using ethereum public and private keys.
IT IS SUPER SIMPLE!


Pass in a web3 instance, this could be meta mask or nodejs, or whatever. Keep in mind,
when not using https passwords sent are unencrypted, so use keys that are local.
like a ethereum  

Get your web3 instance

Make sure that the web3 default account is set, otherwise it won't work

```js
const Web3 = require("web3")
const web3 = new Web3("http://127.0.0.1:8555")

const path = require("path")
const ethAuth = require (path.join(__dirname, "..", "Ethereum-Auth"))

const auth = new ethAuth(web3)

//client side 
let data = "this is a secret message that will be signed by the private key"
//password for the private key

auth.sign(data, "password1234").then((signature)=>{
    //send signature to server
})

//server side the publicAccount is the public address for the coresponding private key
auth.validate(data, signature, publicAddress)
.then(()=>{
    console.log("you're real!!")
})
.catch(()=>{
    console.log("you're a liar!")
})
```