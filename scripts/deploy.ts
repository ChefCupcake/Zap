import { ethers, network } from "hardhat";
//import config from "../config";
import {parseEther} from "ethers/lib/utils";

const currentNetwork = network.name;

const main = async () => {
    console.log("Deploying to network:", currentNetwork);
    console.log(ethers.BigNumber.from("13").toHexString());
    const ContractObj = await ethers.getContractFactory("EpisodeFactory");
    const obj = await ContractObj.deploy();
    //const obj = await ContractObj.deploy('0x57A07fBf4AE775c3FDB246c79165719F129e1E32');
    await obj.deployed();
    console.log("Contract deployed to:", obj.address);
};
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
