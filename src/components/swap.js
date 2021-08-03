import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, Token, WETH } from "@uniswap/sdk"
import {UNI_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, CONTRACT_ABI} from "../constant";
import {updateETH, updateUNI} from "../actions";
import {useDispatch} from "react-redux";

function SwapButton() {
    const dispatch = useDispatch()
    const { chainId, account, active, library } = useWeb3React()
    const [pending, setPending] = useState(false)

    function swap(): Promise<Pair> {
        const signer = library.getSigner(account).connectUnchecked()
        const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance

        const tokenContract = new ethers.Contract(UNI_ADDRESS, CONTRACT_ABI, library)

        const UNI = new Token(chainId, UNI_ADDRESS, 18) // Get UNI Token Instance
        const amountIn = '10000000000000000' // 0.01 ETH
        const amountOutMin = '0'
        const path = [WETH[UNI.chainId].address, UNI.address]
        const to = account // Send to myself
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

        routerContract.swapExactETHForTokens(amountOutMin, path, to, deadline, {value: amountIn, gasLimit: 1000000})
            .then( (result) => {
                setPending(true)
                result.wait().then( () => {
                    library && tokenContract.balanceOf(account)
                        .then((result) => dispatch(updateUNI(ethers.utils.formatEther(result))))
                    library && library.getBalance(account)
                        .then((result) => dispatch(updateETH(ethers.utils.formatEther(result))))
                    setPending(false)
                })
            })
    }

    return (
        <div style={{marginTop:"10px"}}>
            <div>
                ------Swap------
            </div>
            { !pending ? (active ? (
                <button type="button" onClick={swap}>
                    Swap
                </button>
            ) : (
                <></>
            )) : (
                <div>
                    Pending...
                </div>
            )}
        </div>
    )
}


export default SwapButton

