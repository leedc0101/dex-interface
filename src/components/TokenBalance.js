import { BorderWrap, HeaderText, Text } from './style';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { WETH } from '@uniswap/sdk';
import { updateTokenA, updateLP, updateTokenB } from '../actions';
import { usePairContract, useTokenAddress, useTokenBalance, useTokenContract, useTokenDecimals } from '../hooks';

function TokenBalance() {
  const dispatch = useDispatch();

  const { chainId, account, library } = useWeb3React();
  const { tokenABalance, tokenBBalance, LPBalance } = useTokenBalance();
  const { tokenAAddress, tokenBAddress } = useTokenAddress();
  const { ADecimals, BDecimals } = useTokenDecimals();
  const { tokenAContract, tokenBContract } = useTokenContract();
  const { pairTokenContract } = usePairContract();

  if (tokenAAddress !== WETH[chainId].address)
    tokenAContract
      .balanceOf(account)
      .then((result) => dispatch(updateTokenA(ethers.utils.formatUnits(result, ADecimals))));
  else library.getBalance(account).then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))));

  if (tokenBAddress !== WETH[chainId].address)
    tokenBContract
      .balanceOf(account)
      .then((result) => dispatch(updateTokenB(ethers.utils.formatUnits(result, BDecimals))));
  else library.getBalance(account).then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))));

  pairTokenContract?.balanceOf(account).then((result) => {
    if (ethers.utils.formatEther(result) !== LPBalance) dispatch(updateLP(ethers.utils.formatEther(result)));
  });

  return (
    <BorderWrap>
      <HeaderText>잔액 정보</HeaderText>
      <Text>토큰 A 잔액: {tokenABalance}</Text>
      <Text>토큰 B 잔액: {tokenBBalance}</Text>
      <Text>유동성 토큰 잔액 : {LPBalance}</Text>
    </BorderWrap>
  );
}

export default TokenBalance;
