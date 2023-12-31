// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Capped.sol";

// contract HappyNewYear is ERC20Capped {

//     constructor(uint256 _CapSupply) ERC20("Happy New Year", "HNY") ERC20Capped(_CapSupply * (10**decimals())) {
//         _mint(msg.sender, 10 * (10**decimals()));
//     }

//     function mint(uint256 amount) external {
//         require(totalSupply() + amount <= cap(), "Exceeds capped supply");
//         _mint(msg.sender, amount * (10**18));
//     }

// }
