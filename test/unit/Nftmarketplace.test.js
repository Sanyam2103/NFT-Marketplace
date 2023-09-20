const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Nft Marketplace Unit Tests", function () {
          let nftMarketplace,
              nftMarketplaceContract,
              basicNft,
              basicNftContract,
              deployer,
              user
          const PRICE = ethers.utils.parseEther("0.1")
          const TOKEN_ID = 0

          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              const accounts = await ethers.getSigners() // could also do with getNamedAccounts
              //deployer = accounts[0]
              user = accounts[1]
              await deployments.fixture(["all"])
              nftMarketplace = await ethers.getContract("NftMarketPlace")
              // connects with default as deployer
              //nftMarketplace = nftMarketplace.connect(deployer)
              basicNft = await ethers.getContract("BasicNft")
              //basicNft = basicNftContract.connect(deployer)
              await basicNft.mintNft()
              await basicNft.approve(nftMarketplace.address, TOKEN_ID)
          })
          it("it lists and can be bought", async function () {
              await nftMarketplace.listItem(basicNft.address, TOKEN_ID, PRICE)
              const playerConnectedNftMarketPlace = nftMarketplace.connect(user)
              await playerConnectedNftMarketPlace.buyItem(basicNft.address, TOKEN_ID, {
                  value: PRICE,
              })
              const newOwner = await basicNft.ownerOf(TOKEN_ID)
              const deployerProceeds = await nftMarketplace.getProceeds(deployer)
              assert(newOwner.toString() == user.address)
              assert(deployerProceeds.toString() == PRICE.toString())
          })
      })
