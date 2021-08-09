import React from 'react'
import Wallet from "./components/Wallet";
import SwapButton from "./components/Swap";
import AddLiquidityButton from "./components/AddLiquidity";
import RemoveLiquidityButton from "./components/RemoveLiquidity";
import {AutoColumn} from "./components/Column";
import styled from 'styled-components'
import LiquidityInfo from "./components/LiquidityInfo";



const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

function App() {
    return (
        <Wrap>
            <AutoColumn gap={"lg"}>
                <Wallet />
                <SwapButton/>
                <AddLiquidityButton/>
                <RemoveLiquidityButton/>
            </AutoColumn>
        </Wrap>
    )
}

export default App