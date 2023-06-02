// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import 'hardhat/console.sol';

// TODO:
// - Fix tokenCounter in mint fucntions & claim reserved function
// - Do not allow more than totalSupply (including reserve)
// - Do not allow endUser to mint more than totalSupply - reserve
// - Add Opensea "tradeable" contract so users have lower gas
//   https://docs.opensea.io/docs/1-structuring-your-smart-contract
// - Add Opensea crowdsale facroty contract & proxy contract info
//   https://docs.opensea.io/docs/2-custom-item-sale-contract
// - Add Opensea presale lootbox
// - Emit events when baseURL, storefrontMetaURI, _saleStarted, or price changes (check if openz does this)
//   https://docs.opensea.io/docs/9-advanced-presale-structure
// - Add ASCII art in all contracts

contract NFT is ERC721, ERC721Enumerable, ERC721URIStorage, Pausable, AccessControl, ERC721Burnable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  // Roles
  bytes32 public constant PAUSER_ROLE = keccak256('PAUSER_ROLE');
  bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');

  // Counter service to determin tokenId
  Counters.Counter private _tokenIds;
  uint256 public startingIndex;

  // NFT sale details
  uint256 public constant maxSupply = 10000;
  uint256 public price = 0.08 ether;

  uint256 private _reserved = 200;
  uint256 private _singleMintLimit = 20;
  string baseURI;
  string storefrontMetaURI;

  // Flag to enable sale
  bool private _saleStarted;

  // Market / Factory contract info
  address contractAddress;

  constructor(
    string memory name,
    string memory symbol,
    string memory _URI,
    string memory _storefrontMetaURI
  ) ERC721(name, symbol) {
    _saleStarted = false;

    baseURI = _URI;
    storefrontMetaURI = _storefrontMetaURI;
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _setupRole(PAUSER_ROLE, msg.sender);
    _setupRole(MINTER_ROLE, msg.sender);
  }

  modifier whenSaleStarted() {
    require(_saleStarted, 'Sale has not yet started');
    _;
  }

  function _buildTokenURI(
    string memory _URI,
    string memory _slash,
    uint256 _itemId,
    string memory _fileExt
  ) internal pure returns (string memory) {
    return string(abi.encodePacked(_URI, _slash, _itemId.toString(), _fileExt));
  }

  function mint(uint256 _nbTokens) external payable whenSaleStarted {
    uint256 supply = totalSupply();
    require(_nbTokens <= _singleMintLimit, 'You cannot mint that many NFTs at once.');
    require(supply + _nbTokens <= maxSupply - _reserved, 'Not enough Tokens left.');
    require(_nbTokens * price <= msg.value, 'Amount sent too low');
    for (uint256 i; i < _nbTokens; i++) {
      _tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      _safeMint(msg.sender, newItemId);
    }
  }

  function safeMint(address to, uint256 _nbTokens) public onlyRole(MINTER_ROLE) {
    uint256 supply = totalSupply();
    require(_nbTokens <= _singleMintLimit, 'You cannot mint that many NFTs at once.');
    require(supply + _nbTokens <= maxSupply - _reserved, 'Not enough Tokens left.');
    // require(_nbTokens * price <= msg.value, 'Amount sent too low');
    for (uint256 i; i < _nbTokens; i++) {
      _tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      _safeMint(to, newItemId);
      _reserved = _reserved - 1;
    }
  }

  function mintToken() public payable returns (uint256) {
    require(price <= msg.value, 'Amount sent too low');
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _safeMint(msg.sender, newItemId);
    setApprovalForAll(contractAddress, true);
    return newItemId;
  }

  function flipSaleStarted() external onlyRole(DEFAULT_ADMIN_ROLE) {
    _saleStarted = !_saleStarted;

    if (_saleStarted && startingIndex == 0) {
      setStartingIndex();
    }
  }

  function saleStarted() public view returns (bool) {
    return _saleStarted;
  }

  function pause() public onlyRole(PAUSER_ROLE) {
    _pause();
  }

  function unpause() public onlyRole(PAUSER_ROLE) {
    _unpause();
  }

  // Storefront metadata
  // https://docs.opensea.io/docs/contract-level-metadata
  function contractURI() public view returns (string memory) {
    return storefrontMetaURI;
  }

  function setStorefrontMetaURI(string memory _URI) external onlyRole(DEFAULT_ADMIN_ROLE) {
    storefrontMetaURI = _URI;
  }

  function setBaseURI(string memory _URI) external onlyRole(DEFAULT_ADMIN_ROLE) {
    baseURI = _URI;
  }

  function _baseURI() internal view override(ERC721) returns (string memory) {
    return baseURI;
  }

  // Make it possible to change the price: just in case
  function setPrice(uint256 _newPrice) external onlyRole(DEFAULT_ADMIN_ROLE) {
    price = _newPrice;
  }

  function getPrice() public view returns (uint256) {
    return price;
  }

  function getReservedLeft() public view whenSaleStarted returns (uint256) {
    return _reserved;
  }

  // Make it possible to change the reserve only if sale not started: just in case
  function setReserved(uint256 _newReserved) external onlyRole(DEFAULT_ADMIN_ROLE) {
    _reserved = _newReserved;
  }

  function claimReserved(uint256 _number, address _receiver) external onlyRole(DEFAULT_ADMIN_ROLE) {
    require(_number <= _reserved, 'That would exceed the max reserved.');

    uint256 _tokenId = totalSupply();
    for (uint256 i; i < _number; i++) {
      _safeMint(_receiver, _tokenId + i);
    }

    _reserved = _reserved - _number;
  }

  // Helper to list all the NFTs of a wallet
  function walletOfOwner(address _owner) public view returns (uint256[] memory) {
    uint256 tokenCount = balanceOf(_owner);

    uint256[] memory tokensId = new uint256[](tokenCount);
    for (uint256 i; i < tokenCount; i++) {
      tokensId[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokensId;
  }

  function setStartingIndex() public {
    require(startingIndex == 0, 'Starting index is already set');

    // BlockHash only works for the most 256 recent blocks.
    uint256 _block_shift = uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    _block_shift = 1 + (_block_shift % 255);

    // This shouldn't happen, but just in case the blockchain gets a reboot?
    if (block.number < _block_shift) {
      _block_shift = 1;
    }

    uint256 _block_ref = block.number - _block_shift;
    startingIndex = uint256(blockhash(_block_ref)) % maxSupply;

    // Prevent default sequence
    if (startingIndex == 0) {
      startingIndex = startingIndex + 1;
    }
  }

  function withdraw(address _receiver) public onlyRole(DEFAULT_ADMIN_ROLE) {
    uint256 _balance = address(this).balance;

    require(payable(_receiver).send(_balance));
  }

  function _beforeTokenTransfer( 
    address from,
    address to,
    uint256 tokenId
  ) internal override(ERC721, ERC721Enumerable) whenNotPaused {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable, AccessControl) returns (bool) {
    return super.supportsInterface(interfaceId);
  }
}
