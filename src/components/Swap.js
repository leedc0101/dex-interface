import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import {Pair, WETH} from "@uniswap/sdk"
import {ROUTER_ADDRESS, ROUTER_ABI, ERC20_ABI} from "../constant";
import {updateTokenA, updateSwapExpect, updateSwapInput, updateTokenB} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import {BorderWrap, Text} from "./style";
import {MaxUint256} from "@ethersproject/constants";


function Swap() {
    const { chainId, account, library } = useWeb3React()

    const [pending, setPending] = useState(false)
    const [approvedA, setApprovedA] = useState(false)
    const [approvedB, setApprovedB] = useState(false)

    const dispatch = useDispatch()
    const input = useSelector(state => state?.swapInput)
    const expect = useSelector(state => state?.swapExpect)
    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)


    const signer = library.getSigner(account).connectUnchecked()
    const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance

    const tokenAContract = tokenAAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenAAddress, ERC20_ABI, library)
    const tokenBContract = tokenBAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenBAddress, ERC20_ABI, library)

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
        <BorderWrap style={{marginTop:"10px", border:"2px solid"}}>
            <Text>
                ------Swap------
            </Text>
            { !pending ? (
                <>
                    <form>
                        <label>
                            <Text>
                                Input :
                                <input type="text" onChange={inputOnChange}/>
                            </Text>
                        </label>
                    </form>
                    <Text>
                        Output : {expect}
                    </Text>
                    { approvedA && approvedB ? (
                        <button style={{color:"green"}} type="button" onClick={onClick}>
                            Swap
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
                <Text>
                    Pending...
                </Text>
            )}
        </BorderWrap>
    )
}

export default Swap

