module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy('NFT', {
    from: deployer,
    args: ['NFT Token', 'NFT', 'ipfs://nft/tokenURI', 'ipfs://nft/storeMetaData'],
    log: true,
    deterministicDeployment: false,
  })
}

module.exports.tags = ['NFT']
