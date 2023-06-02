// hardhat.config.ts

require('dotenv/config')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-solhint')
require('@nomiclabs/hardhat-waffle')
require('@tenderly/hardhat-tenderly')
// require('@typechain/hardhat')
require('hardhat-abi-exporter')
require('hardhat-deploy')
require('hardhat-deploy-ethers')
require('hardhat-gas-reporter')
require('hardhat-spdx-license-identifier')
require('hardhat-typechain')
require('hardhat-watcher')
require('solidity-coverage')

// require('dotenv').config()

require('hardhat/types').HardhatUserConfig
require('hardhat-preprocessor').removeConsoleLog()


const accounts = {
  mnemonic: process.env.MNEMONIC || 'test test test test test test test test test test test junk',
  // accountsBalance: "990000000000000000000",
}

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require('./tasks/faucet')
require('./tasks/accounts')

// const INFURA_URL = '';
// const PRIVATE_KEY = '';

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     rinkeby: {
//       url: INFURA_URL,
//       accounts: [`0x${PRIVATE_KEY}`]
//     }
//   }
// };

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // solidity: '0.8.3',

  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: 'USD',
    enabled: process.env.REPORT_GAS === 'true',
    excludeContracts: ['contracts/mocks/', 'contracts/libraries/'],
  },
  paths: {
    artifacts: 'artifacts',
    cache: 'cache',
    deploy: 'deploy',
    deployments: 'deployments',
    imports: 'imports',
    sources: 'contracts',
    tests: 'test',
  },
	namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      // Default to 1
      default: 1,
      // dev address mainnet
      // 1: "",
		},
	},
  // preprocess: {
  //   eachLine: removeConsoleLog((bre) => bre.network.name !== 'hardhat' && bre.network.name !== 'localhost'),
  // },
  solidity: {
    compilers: [
      {
        version: '0.8.3',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
	typechain: {
    outDir: '../frontend/src/contracts/types',
    target: 'ethers-v5',
  },
  watcher: {
    compile: {
      tasks: ['compile'],
      files: ['./contracts'],
      verbose: true,
    },
  },

  networks: {
    localhost: {
      live: false,
      saveDeployments: true,
      tags: ['local'],
    },
    hardhat: {
      chainId: 1337,
      live: false,
      saveDeployments: true,
      tags: ['test', 'local'],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
  }
}
