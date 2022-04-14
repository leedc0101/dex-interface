import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { Pair } from '@uniswap/sdk';
import { ROUTER_ADDRESS } from '../constant';
import { updateTokenA, updateTokenB } from '../actions';
import { useDispatch } from 'react-redux';
import Pending, { BorderWrap, HeaderText, StyledButton } from './style';
import { MaxUint256 } from '@ethersproject/constants';
import { usePairContract, useRouterContract, useTokenAddress, useTokenBalance, useTokenContract } from '../hooks';

function RemoveLiquidityButton() {
  const dispatch = useDispatch();

  const { account, library } = useWeb3React();
  const { LPBalance } = useTokenBalance();
  const { tokenAAddress, tokenBAddress } = useTokenAddress();
  const { pairTokenContract } = usePairContract();
  const { tokenAContract, tokenBContract } = useTokenContract();
  const { routerContract } = useRouterContract();

  const [pending, setPending] = useState(false);
  const [approved, setApproved] = useState(false);

  pairTokenContract.allowance(account, ROUTER_ADDRESS).then((result) => {
    if (ethers.utils.formatEther(result) >= ethers.utils.formatEther(MaxUint256.div(100)))
      !approved && setApproved(true);
  });

  function approve() {
    pairTokenContract.approve(ROUTER_ADDRESS, MaxUint256).then((result) => {
      setPending(true);
      result.wait().then(() => {
        setPending(false);
        setApproved(true);
      });
    });
  }

  const liquidity = ethers.utils.parseEther(LPBalance);
  const amountTokenMin = '0';
  const amountETHMin = '0';
  const to = account; // Send to myself
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time

  function removeLiquidity() {
    routerContract.removeLiquidity(tokenAAddress, tokenBAddress, liquidity, '0', '0', to, deadline).then((result) => {
      setPending(true);
      result.wait().then(() => {
        tokenAAddress.balanceOf(account).then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))));
        tokenBAddress.balanceOf(account).then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))));
        setPending(false);
      });
    });
  }

  function removeLiquidityETH() {
    routerContract
      .removeLiquidityETH(
        tokenAContract === 'WETH' ? tokenBAddress : tokenAAddress,
        liquidity,
        amountTokenMin,
        amountETHMin,
        to,
        deadline,
        { gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', 'gwei') }
      )
      .then((result) => {
        setPending(true);
        result.wait().then(() => {
          if (tokenAContract === 'WETH') {
            tokenBContract
              .balanceOf(account)
              .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))));
            library.getBalance(account).then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))));
          } else {
            tokenAContract
              .balanceOf(account)
              .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))));
            library.getBalance(account).then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))));
          }
          setPending(false);
        });
      });
  }

  const onClick = tokenAContract === 'WETH' || tokenBContract === 'WETH' ? removeLiquidityETH : removeLiquidity;

  return (
    <BorderWrap>
      <HeaderText>유동성 제거</HeaderText>
      {!pending ? (
        approved ? (
          <StyledButton type="button" onClick={onClick}>
            Remove Liquidity
          </StyledButton>
        ) : (
          <StyledButton style={{ color: 'grey' }} type="button" onClick={approve}>
            Approve
          </StyledButton>
        )
      ) : (
        <Pending />
      )}
    </BorderWrap>
  );
}

export default RemoveLiquidityButton;
