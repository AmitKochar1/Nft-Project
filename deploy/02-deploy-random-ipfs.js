const {network} = require("hardhat");
const {developmentChains, networkConfig} = require("../helper-hardhat-config");
const {verify} = require("../utils/verify");
require('dotenv').config();


module.exports = async function ({getNamedAccounts, deployments}){
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    let vrfCoordinatorV2Address, subsciptionId;

    if(developmentChains.includes(network.name)){
        const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock");
        vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address;
        const tx = await vrfCoordinatorV2Mock.createSubscription();
        const txReceipt = await tx.wait(1);
        subsciptionId = txReceipt.events[0].arg 
    } else {
        vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
        subsciptionId = networkConfig[chainId].subsciptionId;
    }

    log("-----------------");

}