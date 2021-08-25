import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import {Pair, WETH} from "@uniswap/sdk"
import {ROUTER_ADDRESS} from "../constant";
import {updateTokenA, updateSwapExpect, updateSwapInput, updateTokenB} from "../actions";
import {useDispatch} from "react-redux";
import Pending, {BorderWrap, HeaderText, StyledButton, StyledInput, Text} from "./style";
import {MaxUint256} from "@ethersproject/constants";
import {useRouterContract, useSwapInput, useTokenAddress, useTokenContract} from "../hooks";


function Swap() {
    const dispatch = useDispatch()

    const { chainId, account, library } = useWeb3React()
    const { input, expect } = useSwapInput()
    const { tokenAAddress, tokenBAddress } = useTokenAddress()
    const { tokenAContract, tokenBContract } = useTokenContract()
    const { routerContract } = useRouterContract()

    const [pending, setPending] = useState(false)
    const [approvedA, setApprovedA] = useState(false)
    const [approvedB, setApprovedB] = useState(false)
    
    const amountIn = input !== undefined ? ethers.utils.parseEther(input) : undefined
    const path = [tokenAAddress, tokenBAddress]
    const amountOutMin = '0'
    const to = account // Send to myself
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

    if(amountIn !== undefined && !amountIn.eq(0)){
        routerContract.getAmountsOut(amountIn, path, {gasLimit:10000000})
            .then((result)=>{
                dispatch(updateSwapExpect(ethers.utils.formatEther(result[1])))
            })
    } else {
        dispatch(updateSwapExpect('0'))
    }

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

    function swapExactTokensForTokens(): Promise<Pair> {
        routerContract.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline, {gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")})
            .then( (result) => {
                setPending(true)
                result.wait().then( () => {
                    library.getBalance(account)
                        .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                    library.getBalance(account)
                        .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                    setPending(false)
                    dispatch(updateSwapInput('0'))
                })
            })
    }

    function swapExactETHForTokens(): Promise<Pair> {
        routerContract.swapExactETHForTokens(amountOutMin, path, to, deadline, {value: amountIn, gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei") })
            .then( (result) => {
                setPending(true)
                result.wait().then( () => {
                    if(tokenAAddress !== WETH[chainId].address)
                        tokenAContract.balanceOf(account)
                            .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                    else
                        library.getBalance(account)
                            .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))

                    if(tokenBAddress !== WETH[chainId].address)
                        tokenBContract.balanceOf(account)
                            .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                    else
                        library.getBalance(account)
                            .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                    setPending(false)
                    dispatch(updateSwapInput('0'))
                })
            })
    }

    const onClick = tokenAContract !== undefined && tokenBContract !== undefined ?  swapExactTokensForTokens : swapExactETHForTokens

    function inputOnChange(e){
        if(e.target.value.length !== 0)
            dispatch(updateSwapInput(e.target.value))
        else
            dispatch(updateSwapInput('0'))
    }

    return (
        <BorderWrap style={{marginTop:"10px"}}>
            <HeaderText>
                스왑
            </HeaderText>
            { !pending ? (
                <>
                    <form>
                        <label>
                            <Text>
                                Input :
                                <StyledInput type="text" onChange={inputOnChange}/>
                            </Text>
                        </label>
                    </form>
                    <Text>
                        Output : {expect}
                    </Text>
                    { approvedA && approvedB ? (
                        <StyledButton type="button" onClick={onClick}>
                            Swap
                        </StyledButton>
                    ):(
                        approvedA ?
                            <StyledButton style={{color:"green"}} type="button" onClick={approveB}>
                                B 승인
                            </StyledButton>
                            : approvedB ?
                            <StyledButton style={{color:"green"}} type="button" onClick={approveA}>
                                A 승인
                            </StyledButton> :
                            <>
                                <StyledButton style={{color:"green"}} type="button" onClick={approveA}>
                                    A 승인
                                </StyledButton>
                                <StyledButton style={{color:"green"}} type="button" onClick={approveB}>
                                    B 승인
                                </StyledButton>
                            </>
                        )
                    }
                </>
            ) : (
                <Pending/>
            )}
        </BorderWrap>
    )
}

export default Swap

