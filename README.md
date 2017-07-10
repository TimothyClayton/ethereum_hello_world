## Notes From Rocky Mountain Blockchain Workshop

### Handy Commands Tools
[Solidity dev browser](https://ethereum.github.io/browser-solidity/#version=soljson-v0.4.13+commit.fb4cb1a.js)  
`truffle migrate --reset` (change code, freshly migrate)

### Steps/Commands
`mkdir <some dir>`  
`cd <some dir>`  
`truffle init`  

----------------------------------------------------------------------  

Add HelloWorld.sol to `/contracts`  
To /migrations/2_deploy_contracts.js add (see file for context):  
* `var HelloWorld = artifacts.require("./HelloWorld.sol");`
* `deployer.deploy(HelloWorld);`
* see file for what can be commented out  

----------------------------------------------------------------------  

`truffle migrate`  
`truffle deploy`  

----------------------------------------------------------------------  

### Console
`truffle console`  
```  
   - Commands in console:
   var hw = HelloWorld.deployed()  
   hw  // print hw object
   hw.then( instance => instance.balance.call() ) // show balance  
   hw.then( instance => instance.balance.call() ).then( bal => console.log(bal.valueOf())) // human readable bal
   hw.then( instance => instance.deposit() ) // call the contract function
```
