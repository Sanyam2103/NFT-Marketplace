const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    // const waitBlockConfirmations = developmentChains.includes(network.name)
    //     ? 1
    //     : VERIFICATION_BLOCK_CONFIRMATIONS
    args = []
    const chainId = network.config.chainId
    const nftmarketplace = await deploy("NftMarketPlace", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (chainId != 31337 && process.env.ETHERSCAN_API_KEY) {
        console.log("verifying................")
        await verify(nftmarketplace.address, args)
    }
    console.log("------------------------")
}
module.exports.tags = ["all", "nftmarketplace"]
