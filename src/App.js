import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import Wallet from "./components/wallet";
import getLibrary from "./library/library";
import SwapButton from "./components/swap";
import AddLiquidityButton from "./components/addLiquidity";
import RemoveLiquidityButton from "./components/removeLiquidity";


function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Wallet />
            <SwapButton/>
            <AddLiquidityButton/>
            <RemoveLiquidityButton/>
        </Web3ReactProvider>
    )
}

export default App