require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    altcoinchain: {
      url: "https://rpc0.altcoinchain.org/rpc",
      accounts: process.env.privateKey,
    }	    
},
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
