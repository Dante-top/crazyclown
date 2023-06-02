module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy('NFTMarket', {
    from: deployer,
    log: true,
    deterministicDeployment: false,
  })
}

module.exports.tags = ['NFTMarket']
