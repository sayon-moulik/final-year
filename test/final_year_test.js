const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledChangeOwnership = require('../build/changeOwnership.json');
const compiledProductManagement = require('../build/ProductManagement.json');
const compiledMigration = require('../build/Migration.json');
let accounts;
let changeOwnership;
let productManagment;
console.log(compiledProductManagement);
console.log(compiledProductManagement.bytecode);
 async function a() {
  accounts =  await web3.eth.getAccounts();

  productManagement = await new web3.eth.Contract(JSON.parse(compiledProductManagement.interface))
    .deploy({ data: compiledProductManagement.bytecode })
    .send({ from: accounts[0], gas: '1000000' });
   // assert.ok(productManagment.options.address);

 // changeOwnership = await new web3.eth.Contract(JSON.parse(compiledChangeOwnership.interface))
   // .deploy({ data: compiledChangeOwnership.bytecode, arguments: [productManagment.options.address] })
    //.send({ from: accounts[0], gas: '1000000' });

 }

//describe('Contracts', () => {
    //it('deployed the contract product mansgment and changeownership', () => {
    //  assert.ok(productManagment.options.address);
      //assert.ok(changeOwnership.options.address);
   // });
//});