require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    localhost: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "2330" // Match any network id
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
