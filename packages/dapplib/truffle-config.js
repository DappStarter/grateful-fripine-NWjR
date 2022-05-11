require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess narrow fringe skull guard render remain soft harvest local fortune slight'; 
let testAccounts = [
"0xcaf60e7840b885308724750c56d040ed2aa824fc8bef3f7f7c506bd95b133c8c",
"0x71cba3bde5ac36795853e9d19a895054d27b88baaec2d663e05a4fd77c8f04fc",
"0x0b7fba6118aef4f798c050d437a6e1c321f147ac18f9e6d3b295a5ab1ae5785f",
"0x56a214c72e9a9955e688f7ff6ddce7e85c2bc3dcaaf7f01d70cdad36bba38f62",
"0xbfe1ad483971cf4792d34d7aa28cb9a52202c25e182088b730f95b011fbd8e44",
"0x0bcad3faabe89411d382a320241df122f386c3128c152cf46b9cbd476d628319",
"0x10bcde5f7f24fdd7f5c2b0d80bd421cfa20dc9e0650b3ed0840e472fedeebd90",
"0x607722e6ba2f14b7987a42ac99cbe878dc3820c23396d45cb9c804fed6e5a550",
"0xc1aefca9bfc6c22c0eedda01c1c751fada648209135cea093aca9c07ea7383e8",
"0xdb02323eb9da05b4d2696d23b29c383e4b088aec577d8ea9f8dd80e7c0016231"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


