/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "CakeVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CakeVault__factory>;
    getContractFactory(
      name: "CakeVaultV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CakeVaultV2__factory>;
    getContractFactory(
      name: "IMasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMasterChef__factory>;
    getContractFactory(
      name: "CakeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CakeToken__factory>;
    getContractFactory(
      name: "IMigratorChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMigratorChef__factory>;
    getContractFactory(
      name: "MasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterChef__factory>;
    getContractFactory(
      name: "SyrupBar",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SyrupBar__factory>;
    getContractFactory(
      name: "VeCakeToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VeCakeToken__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "CakeVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CakeVault>;
    getContractAt(
      name: "CakeVaultV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CakeVaultV2>;
    getContractAt(
      name: "IMasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMasterChef>;
    getContractAt(
      name: "CakeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CakeToken>;
    getContractAt(
      name: "IMigratorChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMigratorChef>;
    getContractAt(
      name: "MasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterChef>;
    getContractAt(
      name: "SyrupBar",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SyrupBar>;
    getContractAt(
      name: "VeCakeToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VeCakeToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}