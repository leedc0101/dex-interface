import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair } from "@uniswap/sdk"
import {TOKEN_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, ERC20_ABI} from "../constant";
import { updateAddInput, updateAddInput2, updateETH, updateUNI} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import {BorderWrap, Text} from "./style";
import {MaxUint256} from '@ethersproject/constants'

function AddLiquidityButton() {
    const dispatch = useDispatch()
    const { account, library } = useWeb3React()

    const [approved, setApproved] = useState(false)
    const [pending, setPending] = useState(false)

    const input = useSelector(state => state?.addInput)
    const input2 = useSelector(state => state?.addInput2)

    const signer = library?.getSigner(account).connectUnchecked()
    const tokenContract = new ethers.Contract(TOKEN_ADDRESS, ERC20_ABI, signer)
    const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance

    const token = TOKEN_ADDRESS
    const amountIn = input !== undefined ? ethers.utils.parseEther(input) : undefined
    const amountTokenDesired = input2 !== undefined ? ethers.utils.parseEther(input2) : undefined
    const amountTokenMin = '0'
    const amountETHMin = '0'
    const to = account // Send to myself
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

    tokenContract.allowance(account, ROUTER_ADDRESS)
        .then(result => {
            if( result >= MaxUint256.div(100))
                setApproved(true)
        })

    function approve() {
        tokenContract.approve(ROUTER_ADDRESS, MaxUint256)
            .then((result) => {
                setPending(true)
                result.wait().then(() => {
                    setPending(false)
                    setApproved(true)
                })
            })
    }

    function addLiquidity(): Promise<Pair> {
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

    function inputOnChange(e){
        if(e.target.value.length !== 0)
            dispatch(updateAddInput(e.target.value))
        else
            dispatch(updateAddInput('0'))
    }

    function inputOnChange2(e){
        if(e.target.value.length !== 0)
            dispatch(updateAddInput2(e.target.value))
        else
            dispatch(updateAddInput2('0'))
    }

    return (
        <BorderWrap>
            <Text>
                ------Add Liquidity------
            </Text>
            { !pending ? (
                <>
                    <form>
                        <label>
                            <Text>
                                ETH Input :
                                <input type="text" onChange={inputOnChange}/>
                            </Text>
                        </label>
                    </form>
                    <form>
                        <label>
                            <Text>
                                UNI Input :
                                <input type="text" onChange={inputOnChange2}/>
                            </Text>
                        </label>
                    </form>
                    { approved ? (
                        <button style={{color:"green"}} type="button" onClick={addLiquidity}>
                            Add Liquidity
                        </button>
                    ):(
                        <button style={{color:"red"}} type="button" onClick={approve}>
                            Approve
                        </button>
                    )}
                </>
            ) : (
                <button style={{color:"pink"}}>
                    Pending...
                </button>
            )}
        </BorderWrap>
    )
}


export default AddLiquidityButton

