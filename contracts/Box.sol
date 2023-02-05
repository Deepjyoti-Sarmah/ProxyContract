// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Box {
    uint256 private value;

    event ValueChange(uint256 newValue);

    //stores new Value in the smart contract 
    function  store(uint256 newValue) public {
        value = newValue;
        emit ValueChange(newValue);
    }

    //read the last stored value
    function retrieve() public view returns(uint256) {
        return value;
    }


}