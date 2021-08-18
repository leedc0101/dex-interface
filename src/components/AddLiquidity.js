import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import {Pair} from "@uniswap/sdk"
import {ROUTER_ADDRESS} from "../constant";
import { updateAddInput, updateAddInput2, updateTokenA, updateTokenB} from "../actions";
import {useDispatch} from "react-redux";
import {BorderWrap, HeaderText, Text} from "./style";
import {MaxUint256} from '@ethersproject/constants'
import {useAddLiquidityInput, useRouterContract, useTokenAddress, useTokenContract} from "../hooks";

function AddLiquidityButton() {
    const dispatch = useDispatch()

    const { account, library } = useWeb3React()
    const { tokenAAddress, tokenBAddress } = useTokenAddress()
    const { input, input2 } = useAddLiquidityInput()
    const { tokenAContract, tokenBContract } = useTokenContract()
    const { routerContract } = useRouterContract()

    const [approvedA, setApprovedA] = useState(false)
    const [approvedB, setApprovedB] = useState(false)
    const [pending, setPending] = useState(false)

    const amountIn = input !== undefined ? ethers.utils.parseEther(input) : undefined
    const amountTokenDesired = input2 !== undefined ? ethers.utils.parseEther(input2) : undefined
    const amountTokenMin = '0'
    const amountETHMin = '0'
    const to = account // Send to myself
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

    if(tokenAContract !== undefined)
        tokenAContract.allowance(account, ROUTER_ADDRESS)
            .then(result => {
                if( ethers.utils.formatEther(result) >= ethers.utils.formatEther(MaxUint256.div(100)))
                    !approvedA && setApprovedA(true)
            })
    else
        !approvedA && setApprovedA(true)

    if(tokenBContract !== undefined)
        tokenBContract.allowance(account, ROUTER_ADDRESS)
            .then(result => {
                if( ethers.utils.formatEther(result) >= ethers.utils.formatEther(MaxUint256.div(100)))
                    !approvedB && setApprovedB(true)
            })
    else
        !approvedB && setApprovedB(true)

    function approveA() {
        tokenAContract.approve(ROUTER_ADDRESS, MaxUint256)
            .then((result) => {
                setPending(true)
                result.wait().then(() => {
                    setPending(false)
                    setApprovedA(true)
                })
            })
    }

    function approveB() {
        tokenBContract.approve(ROUTER_ADDRESS, MaxUint256)
            .then((result) => {
                setPending(true)
                result.wait().then(() => {
                    setPending(false)
                    setApprovedB(true)
                })
            })
    }

    function addLiquidity(): Promise<Pair> {
        routerContract.addLiquidity(
            tokenAAddress,
            tokenBAddress,
            amountIn,
            amountTokenDesired,
            '0',
            '0',
            to,
            deadline,
            {gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")}
        ).then((result) => {
            setPending(true)
            result.wait().then(()=>{
                tokenAContract.balanceOf(account)
                    .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                tokenBContract.balanceOf(account)
                    .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                setPending(false)
            })
        })
    }

    function addLiquidityETH(): Promise<Pair> {
        routerContract.addLiquidityETH(
            tokenAContract === undefined ? tokenBAddress : tokenAAddress,
            amountTokenDesired,
            amountTokenMin,
            amountETHMin,
            to,
            deadline,
            {value: amountIn, gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")}
        ).then((result) => {
                setPending(true)
                result.wait().then( () => {
                    if(tokenAContract === undefined){
                        tokenBContract.balanceOf(account)
                            .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                        library.getBalance(account)
                            .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                    } else {
                        tokenAContract.balanceOf(account)
                            .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                        library.getBalance(account)
                            .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                    }
                    setPending(false)
                })
            })
    }

    const onClick = tokenAContract === undefined || tokenBContract === undefined ? addLiquidityETH : addLiquidity

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
            <HeaderText>
                유동성 공급
            </HeaderText>
            { !pending ? (
                <>
                    <form>
                        <label>
                            <Text>
                                Token A Input :
                                <input type="text" onChange={inputOnChange}/>
                            </Text>
                        </label>
                    </form>
                    <form>
                        <label>
                            <Text>
                                Token B Input :
                                <input type="text" onChange={inputOnChange2}/>
                            </Text>
                        </label>
                    </form>
                    { approvedA && approvedB ? (
                        <button style={{color:"green"}} type="button" onClick={onClick}>
                            Add Liquidity
                        </button>
                    ):(
                        approvedA ?
                            <button style={{color:"red"}} type="button" onClick={approveB}>
                                Approve B
                            </button>
                            : approvedB ?
                            <button style={{color:"red"}} type="button" onClick={approveA}>
                                Approve A
                            </button> :
                            <>
                                <button style={{color:"red"}} type="button" onClick={approveA}>
                                    Approve A
                                </button>
                                <button style={{color:"red"}} type="button" onClick={approveB}>
                                    Approve B
                                </button>
                            </>
                    )
                    }
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

