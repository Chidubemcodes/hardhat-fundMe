const network = {
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: 0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419,
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: 0xf9680d99d6c9589e2a93a78a04a279e509205945,
    },
    56: {
        name: "binanceSmartChain",
        ethUsdPriceFeed: 0x63d407f32aa72e63c7209ce1c2f5da40b3aae726,
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
    network,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
