import React from 'react'
import Hero from "./components/Hero";
import SwapButton from "./components/Swap";
import AddLiquidityButton from "./components/AddLiquidity";
import RemoveLiquidityButton from "./components/RemoveLiquidity";
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
                <Hero />
                <SwapButton/>
                <AddLiquidityButton/>
                <RemoveLiquidityButton/>
            </AutoColumn>
        </Wrap>
    )
}

export default App