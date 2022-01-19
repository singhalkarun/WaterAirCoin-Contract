const hre = require('hardhat')

async function main() {
  const [owner] = await hre.ethers.getSigners()
  const contractFactory = await hre.ethers.getContractFactory('WaterAirCoin')
  const contract = await contractFactory.deploy()
  await contract.deployed()

  console.log('WaterAirCoin Contract deployed to:', contract.address)
  console.log('WaterAirCoin Contract owner address:', owner.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
