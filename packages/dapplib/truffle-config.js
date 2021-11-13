require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain history idea knife flee spare'; 
let testAccounts = [
"0xf2608e51d44a4394637c4a72ba1c14ca482edcb0c681ffce9add777e00f55c20",
"0x626a78d016c4dc0696faed2aa6db98df6602bb46965478fb44c186240de06a45",
"0xc53a6a2b8757c1e049d525eafb551235abacdb408891555b2eca5d101aaf6711",
"0xfc641b09902835dfd32305271395e13ccdc519ca9a46813081a4752fe835ba26",
"0x3476644b763bc93e2e283a20e8fc32d3b6bbb590d090a7d9bb0b3f9525245324",
"0x307607d8eb6a753b133846f3a6bc34ff73959888c2b73a1fc257aed556feebcf",
"0x46dae95173d2b6b9558d5c21f89f91bf3da95d1147937d43f03eb2488ba9fd9f",
"0x11ff1f4c3527a7080726e0b32a39f64b07b18d8428cd649c9d714a598c80bd58",
"0xd58d6432b4db3e042b9e48beaf7e34a4b5712839396dd4d800c423a97ee1d5d0",
"0xd14330e9225e5dfc40f880f47cdd7241d6b0fb5edb51836466e1093f76fc0825"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


