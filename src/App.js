import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import Wallet from "./components/wallet";
import getLibrary from "./library/library";


function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Wallet />
        </Web3ReactProvider>
    )
}

export default App