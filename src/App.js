import React from 'react'
import Wallet from "./components/wallet";
import SwapButton from "./components/swap";
import AddLiquidityButton from "./components/addLiquidity";
import RemoveLiquidityButton from "./components/removeLiquidity";
import {AutoColumn} from "./components/Column";
import styled from 'styled-components'



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