// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
var HelloWorld = artifacts.require("./HelloWorld.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
