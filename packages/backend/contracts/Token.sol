// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol';

// We import this library to be able to use console.log
import 'hardhat/console.sol';

// This is the main building block for smart contracts.
contract Token is ERC20, Pausable, Ownable, ERC20Permit, ERC20Votes {
  // Some string type variables to identify the token.
  // string public name = "My Hardhat Token";
  // string public symbol = "MHT";


  // // The fixed amount of tokens stored in an unsigned integer type variable.
//   uint256 public totalSupply = 100000000;

  // // An address type variable is used to store ethereum accounts.
//   address public owner;

  // A mapping is a key/value map. Here we store each account balance.
  mapping(address => uint256) balances;



  /**
   * Contract initialization.
   *
   * The `constructor` is executed only once when the contract is created.
   * The `public` modifier makes a function callable from outside the contract.
   */

     constructor(uint256 initialSupply) ERC20('Sample token', 'SAM') ERC20Permit('Sample token') {
    _mint(msg.sender, initialSupply * 10**decimals());
    // balances[msg.sender] = totalSupply;
    // owner = msg.sender;
  }

  // constructor() {
  //     // The totalSupply is assigned to transaction sender, which is the account
  //     // that is deploying the contract.
  //     balances[msg.sender] = totalSupply;
  //     owner = msg.sender;
  // }

  /**
   * A function to transfer tokens.
   *
   * The `external` modifier makes a function *only* callable from outside
   * the contract.
   */
  // function transfer(address to, uint256 amount) external {
  //     // Check if the transaction sender has enough tokens.
  //     // If `require`'s first argument evaluates to `false` then the
  //     // transaction will revert.
  //     require(balances[msg.sender] >= amount, "Not enough tokens");

  //     // We can print messages and values using console.log
  //     console.log(
  //         "Transferring from %s to %s %s tokens",
  //         msg.sender,
  //         to,
  //         amount
  //     );

  //     // Transfer the amount.
  //     balances[msg.sender] -= amount;
  //     balances[to] += amount;
  // }

  /**
   * Read only function to retrieve the token balance of a given account.
   *
   * The `view` modifier indicates that it doesn't modify the contract's
   * state, which allows us to call it without executing a transaction.
   */
  // function balanceOf(address account) external view returns (uint256) {
  //     return balances[account];
  // }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override whenNotPaused {
    super._beforeTokenTransfer(from, to, amount);
  }

  function _afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override(ERC20, ERC20Votes) {
    super._afterTokenTransfer(from, to, amount);
  }

  function _mint(address to, uint256 amount) internal override(ERC20, ERC20Votes) {
    super._mint(to, amount);
  }

  function _burn(address account, uint256 amount) internal override(ERC20, ERC20Votes) {
    super._burn(account, amount);
  }
}
