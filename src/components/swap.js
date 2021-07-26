import React from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, Token, WETH } from "@uniswap/sdk"
import { UNI_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, PRIVATE_KEY } from "../constant";
import store from '../store'

function SwapButton() {
    const { chainId, account, active, library } = useWeb3React()

    /**
     * @todo refactor by not using PRIVATE_KEY
     */
    function swap(): Promise<Pair> {
        const wallet = new ethers.Wallet(PRIVATE_KEY, library) // sign
        const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, wallet) // create contract instance
        const UNI = new Token(chainId, UNI_ADDRESS, 18) // Get UNI Token Instance

        const amountIn = '10000000000000000'
        const amountOutMin = '0'
        const path = [WETH[UNI.chainId].address, UNI.address]
        const to = account // Send to myself
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

        routerContract.swapExactETHForTokens(amountOutMin, path, to, deadline, {value: amountIn, gasLimit: 1000000})
            .then( (result) => {
                result.wait().then( () => {
                    library && library.getBalance(account).then((result) => {
                        console.log(ethers.utils.formatEther(result))
                        store.dispatch({type: "UPDATE_ETH", value: ethers.utils.formatEther(result)})
                    })
                })
            })
    }

    return (
        <div style={{marginTop:"10px"}}>
            {active ? (
                <button type="button" onClick={swap}>
                    Swap
                </button>
            ) : (
                <></>
            )}
        </div>
    )
}


export default SwapButton

