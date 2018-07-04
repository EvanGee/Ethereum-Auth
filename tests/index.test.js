const Web3 = require("web3")
const web3 = new Web3("http://localhost:8500")


const path = require("path")
const accounts = require("./accounts")
const ethAuth = require (path.join(__dirname, "..", "index.js"))
const auth = new ethAuth(web3)

