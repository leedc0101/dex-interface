import { Text, Wrap } from './style';
import React from 'react';
import { useWeb3React } from '@web3-react/core';
import TokenAddressInput from './TokenAddressInput';
import TokenBalance from './TokenBalance';
import LiquidityInfo from './LiquidityInfo';
import { useTokenAddress } from '../hooks';

function Account() {
  const { chainId, account } = useWeb3React();
  const { tokenAAddress, tokenBAddress } = useTokenAddress();

  return (
    <Wrap>
      <Text style={{ color: 'green' }}>Connected </Text>
      <Text style={{ marginTop: '15px' }}>ChainId: {chainId}</Text>
      <Text style={{ marginBottom: '15px' }}>Account: {account}</Text>
      <TokenAddressInput />
      {tokenAAddress !== '' && tokenBAddress !== '' && (
        <>
          <TokenBalance />
          <LiquidityInfo />
        </>
      )}
    </Wrap>
  );
}

export default Account;
