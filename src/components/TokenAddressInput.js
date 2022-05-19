import { useDispatch } from 'react-redux';
import { StyledInput, Text } from './style';
import React from 'react';
import { updateTokenAAddress, updateTokenBAddress } from '../actions';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { WETH } from '@uniswap/sdk';
import { useTokenAddress } from '../hooks';

function TokenAddressInput() {
  const dispatch = useDispatch();
  const { tokenAAddress, tokenBAddress } = useTokenAddress();
  console.log(tokenAAddress, tokenBAddress);
  const { chainId } = useWeb3React();

  function tokenAOnChange(e) {
    if (tokenBAddress === e.target.value) return;

    if (e.target.value === 'eth' && tokenBAddress !== WETH[chainId].address) {
      dispatch(updateTokenAAddress(WETH[chainId].address));
    } else {
      if (ethers.utils.isAddress(e.target.value)) {
        ethers.utils.getAddress(e.target.value);
        dispatch(updateTokenAAddress(e.target.value));
      } else {
        dispatch(updateTokenAAddress(''));
      }
    }
  }

  function tokenBOnChange(e) {
    if (tokenAAddress === e.target.value) return;

    if (e.target.value === 'eth' && tokenAAddress !== WETH[chainId].address) {
      dispatch(updateTokenBAddress(WETH[chainId].address));
    } else {
      if (ethers.utils.isAddress(e.target.value)) {
        ethers.utils.getAddress(e.target.value);
        dispatch(updateTokenBAddress(e.target.value));
      } else {
        dispatch(updateTokenBAddress(''));
      }
    }
  }

  return (
    <>
      <form>
        <label>
          <Text>
            토큰 A 주소 :
            <StyledInput type="text" onChange={tokenAOnChange} />
          </Text>
        </label>
      </form>
      <form>
        <label>
          <Text>
            토큰 B 주소 :
            <StyledInput type="text" onChange={tokenBOnChange} />
          </Text>
        </label>
      </form>
    </>
  );
}

export default TokenAddressInput;
