import React, { useState } from 'react';
import { BorderWrap, HeaderText, Text } from './style';
import { ethers } from 'ethers';
import { usePairContract, useTokenBalance } from '../hooks';

function LiquidityInfo() {
  const { LPBalance } = useTokenBalance();
  const { pairTokenContract } = usePairContract();

  const [total, setTotal] = useState(0);

  pairTokenContract.totalSupply().then((result) => {
    if (ethers.utils.formatEther(result) !== total) setTotal(ethers.utils.formatEther(result));
  });

  const ratio = (LPBalance / total) * 100;
  const ratioFixed = ratio >= 0.01 ? ratio.toFixed(2) : 'less than 0.01';

  return (
    <BorderWrap>
      <HeaderText>Pool 정보</HeaderText>
      <Text>유동성 보유 비율 : {ratioFixed}%</Text>
    </BorderWrap>
  );
}

export default LiquidityInfo;
