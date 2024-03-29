/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NFTMarket } from "../NFTMarket";

export class NFTMarket__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NFTMarket> {
    return super.deploy(overrides || {}) as Promise<NFTMarket>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createMarketItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "createMarketSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "fetchMarketItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct NFTMarket.MarketItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMarketItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMyNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketItemId",
        type: "uint256",
      },
    ],
    name: "getMarketItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct NFTMarket.MarketItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405267016345785d8a000060045534801561001c57600080fd5b506001600055600380546001600160a01b03191633179055610b97806100436000396000f3fe6080604052600436106100555760003560e01c80630f08efe01461005a578063202e3740146100855780632a45b2501461009a57806358eb2df5146100c7578063c23b139e146100dc578063c7be7a491461009a575b600080fd5b34801561006657600080fd5b5061006f6100ef565b60405161007c9190610a9f565b60405180910390f35b34801561009157600080fd5b5061006f61029a565b3480156100a657600080fd5b506100ba6100b5366004610a3d565b610483565b60405161007c9190610aed565b6100da6100d5366004610a0b565b6104f3565b005b6100da6100ea3660046109e2565b61076d565b606060006100fc60015490565b9050600061010960025490565b6001546101169190610b19565b90506000808267ffffffffffffffff81111561014257634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561017b57816020015b61016861097a565b8152602001906001900390816101605790505b50905060005b84811015610291576000600581610199846001610b01565b81526020810191909152604001600020600401546001600160a01b0316141561027f5760006005816101cc846001610b01565b81526020808201929092526040908101600090812054808252600580855291839020835160c0810185528154815260018201546001600160a01b0390811696820196909652600282015494810194909452600381015485166060850152600481015490941660808401529083015460a0830152855190935085908790811061026457634e487b7160e01b600052603260045260246000fd5b602090810291909101015261027a600186610b01565b945050505b8061028981610b30565b915050610181565b50935050505090565b606060006102a760015490565b905060008060005b8381101561030a5733600560006102c7846001610b01565b81526020810191909152604001600020600401546001600160a01b031614156102f8576102f5600184610b01565b92505b8061030281610b30565b9150506102af565b5060008267ffffffffffffffff81111561033457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561036d57816020015b61035a61097a565b8152602001906001900390816103525790505b50905060005b8481101561029157336005600061038b846001610b01565b81526020810191909152604001600020600401546001600160a01b031614156104715760006005816103be846001610b01565b81526020808201929092526040908101600090812054808252600580855291839020835160c0810185528154815260018201546001600160a01b0390811696820196909652600282015494810194909452600381015485166060850152600481015490941660808401529083015460a0830152855190935085908790811061045657634e487b7160e01b600052603260045260246000fd5b602090810291909101015261046c600186610b01565b945050505b8061047b81610b30565b915050610373565b61048b61097a565b50600081815260056020818152604092839020835160c0810185528154815260018201546001600160a01b039081169382019390935260028201549481019490945260038101548216606085015260048101549091166080840152015460a08201525b919050565b6002600054141561054b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000558061059d5760405162461bcd60e51b815260206004820152601c60248201527f5072696365206d757374206265206174206c65617374203120776569000000006044820152606401610542565b60045434146105fa5760405162461bcd60e51b8152602060048201526024808201527f5072696365206d75737420626520657175616c20746f206c697374696e6720706044820152637269636560e01b6064820152608401610542565b610608600180546001019055565b600061061360015490565b6040805160c0810182528281526001600160a01b0387811660208084018281528486018a8152336060870181815260006080890181815260a08a018e81528c8352600597889052918b902099518a55945160018a018054918a166001600160a01b0319928316179055935160028a015590516003890180549189169185169190911790559251600480890180549290981691909316179095559051949091019390935592516323b872dd60e01b81529182015230602482015260448101869052919250906323b872dd90606401600060405180830381600087803b1580156106fa57600080fd5b505af115801561070e573d6000803e3d6000fd5b505060408051338152600060208201529081018590528592506001600160a01b038716915083907f2ad024d53a0dc50c130967f8d4941927ee087ea31394cebb2b9599d3706c9c009060600160405180910390a4505060016000555050565b600260005414156107c05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610542565b6002600081815582815260056020819052604090912090810154910154348214610854576040805162461bcd60e51b81526020600482015260248101919091527f506c65617365207375626d6974207468652061736b696e67207072696365206960448201527f6e206f7264657220746f20636f6d706c657465207468652070757263686173656064820152608401610542565b6000838152600560205260408082206003015490516001600160a01b03909116913480156108fc02929091818181858888f1935050505015801561089c573d6000803e3d6000fd5b506040516323b872dd60e01b8152306004820152336024820152604481018290526001600160a01b038516906323b872dd90606401600060405180830381600087803b1580156108eb57600080fd5b505af11580156108ff573d6000803e3d6000fd5b505050600084815260056020526040902060040180546001600160a01b0319163317905550610932600280546001019055565b6003546004546040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561096e573d6000803e3d6000fd5b50506001600055505050565b6040518060c001604052806000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081525090565b80356001600160a01b03811681146104ee57600080fd5b600080604083850312156109f4578182fd5b6109fd836109cb565b946020939093013593505050565b600080600060608486031215610a1f578081fd5b610a28846109cb565b95602085013595506040909401359392505050565b600060208284031215610a4e578081fd5b5035919050565b80518252602081015160018060a01b03808216602085015260408301516040850152806060840151166060850152806080840151166080850152505060a081015160a08301525050565b6020808252825182820181905260009190848201906040850190845b81811015610ae157610ace838551610a55565b9284019260c09290920191600101610abb565b50909695505050505050565b60c08101610afb8284610a55565b92915050565b60008219821115610b1457610b14610b4b565b500190565b600082821015610b2b57610b2b610b4b565b500390565b6000600019821415610b4457610b44610b4b565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212206b7945ba8afdf85d9b812fa8043821f6ae3a658172e23da507d77e2bcf89813d64736f6c63430008030033";
