const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const changeOwnerPath = path.resolve(__dirname, 'contracts', 'ChangeOwnership.sol');
let source = fs.readFileSync(changeOwnerPath, 'utf8');
let contract = solc.compile(source, 1).contracts;
//console.log(contract)
fs.ensureDirSync(buildPath);

  fs.outputJsonSync(
    path.resolve(buildPath, 'changeOwnership'+'.json'),
    contract);
///////////////////////////////////////////////////////////////////////////////
    const productManagementPath = path.resolve(__dirname, 'contracts', 'ProductManagement.sol');
     source = fs.readFileSync(productManagementPath, 'utf8');
     contract = solc.compile(source, 1).contracts;
    //console.log(contract)
      fs.outputJsonSync(
        path.resolve(buildPath, 'ProductManagement'+'.json'),
        contract);
////////////////////////////////////////////////////////////////////////////////////
const MigrationPath = path.resolve(__dirname, 'contracts', 'Migrations.sol');
 source = fs.readFileSync(MigrationPath, 'utf8');
 contract = solc.compile(source, 1).contracts;
//console.log(contract)
fs.ensureDirSync(buildPath);

  fs.outputJsonSync(
    path.resolve(buildPath, 'Migration'+'.json'),
    contract);

