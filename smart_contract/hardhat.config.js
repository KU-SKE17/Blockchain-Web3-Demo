require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hj-rnBNaKIqB8gwoQ7kCxE1tZ11ogmZf',
      accounts: ['374adb0e70ac3cc28e592ec3381bc15840a3969a0d60f34984be115b1df48652'],
    },
  },
};