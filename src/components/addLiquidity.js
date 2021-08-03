import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, Token } from "@uniswap/sdk"
import {UNI_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, CONTRACT_ABI} from "../constant";
import {updateETH, updateUNI} from "../actions";
import {useDispatch} from "react-redux";

function AddLiquidityButton() {
    const dispatch = useDispatch()
    const { chainId, account, active, library } = useWeb3React()

    const [approved, setApproved] = useState(false)
    const [pending, setPending] = useState(false)

    function approve() {
        const signer = library.getSigner(account).connectUnchecked()
        const amountTokenDesired = '1000000000000000' // 0.001 UNI
        const tokenContract = new ethers.Contract(UNI_ADDRESS, CONTRACT_ABI, signer)

        tokenContract.approve(ROUTER_ADDRESS, amountTokenDesired)
            .then((result) => {
                setPending(true)
                result.wait().then(() => {
                    setPending(false)
                    setApproved(true)
                })
            })
    }

    function addLiquidity(): Promise<Pair> {
        const signer = library.getSigner(account).connectUnchecked()
        const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance

        const tokenContract = new ethers.Contract(UNI_ADDRESS, CONTRACT_ABI, library)
        const UNI = new Token(chainId, UNI_ADDRESS, 18) // Get UNI Token Instance

        const token = UNI.address
        const amountIn = '1000000000000000' // 0.001 UNI
        const amountTokenDesired = '1000000000000000' // 0.001 UNI
        const amountTokenMin = '0'
        const amountETHMin = '0'
        const to = account // Send to myself
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

        routerContract.addLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline, {value: amountIn, gasLimit: 1000000})
            .then( (result) => {
                setPending(true)
                result.wait().then( () => {
                    tokenContract.balanceOf(account)
                        .then((result) => dispatch(updateUNI(ethers.utils.formatEther(result))))
                    library.getBalance(account)
                        .then((result) => dispatch(updateETH(ethers.utils.formatEther(result))))
                    setPending(false)
                })
            })
    }

    return (
        <div style={{marginTop:"10px"}}>
            <div>
                ------Add Liquidity------
            </div>
            { !pending ? (active && (approved ? (
                < button style={{color:"green"}} type="add-button" onClick={addLiquidity}>
                    Add Liquidity
                </button>
            ) : (
                <button style={{color:"red"}} type="approve-button" onClick={approve}>
                    Approve
                </button>
            ))) : (
                <button style={{color:"pink"}}>
                    Pending...
                </button>
            )}
        </div>
    )
}


export default AddLiquidityButton

