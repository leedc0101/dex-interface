import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, WETH } from "@uniswap/sdk"
import {TOKEN_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, ERC20_ABI} from "../constant";
import {updateETH, updateExpect, updateInput, updateOutput, updateUNI} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import {Text, Wrap} from "./Style";

function SwapButton() {
    const dispatch = useDispatch()
    const { chainId, account, active, library } = useWeb3React()
    const [pending, setPending] = useState(false)
    const input = useSelector(state => state?.input)
    const expect = useSelector(state => state?.expect)

    // Todo
    // const output = useSelector(state => state?.output)

    const signer = library ? library.getSigner(account).connectUnchecked() : undefined
    const routerContract = library ? new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) : undefined // create contract instance
    const tokenContract = new ethers.Contract(TOKEN_ADDRESS, ERC20_ABI, library)

    const amountIn = input !== undefined ? ethers.utils.parseEther(input) : undefined
    const path = [WETH[chainId]?.address, TOKEN_ADDRESS]
    const amountOutMin = '0'
    const to = account // Send to myself
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

    if(amountIn !== undefined && !amountIn.eq(0)){
        routerContract.getAmountsOut(amountIn, path, {gasLimit:10000000})
            .then((result)=>{
                dispatch(updateExpect(ethers.utils.formatEther(result[1])))
            })
    } else {
        dispatch(updateExpect('0'))
    }

    function swap(): Promise<Pair> {

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

    function inputOnChange(e){
        if(e.target.value.length !== 0)
            dispatch(updateInput(e.target.value))
        else
            dispatch(updateInput('0'))
    }

    // Todo
    // function outputOnChange(e){
    //     dispatch(updateOutput(e.target.value))
    // }

    return (
        <Wrap style={{marginTop:"10px"}}>
            <Text>
                ------Swap------
            </Text>
            { !pending ? (active ? (
                <>
                    <form>
                        <label>
                            <Text>
                                Input(ETH) :
                                <input type="text" onChange={inputOnChange}/>
                            </Text>
                        </label>
                    </form>
                    {/*<form>*/}
                    {/*    <label>*/}
                    {/*        <Text>*/}
                    {/*            Output(UNI) :*/}
                    {/*            <input type="text" onChange={outputOnChange}/>*/}
                    {/*        </Text>*/}
                    {/*    </label>*/}
                    {/*</form>*/}
                    <Text>
                        예상 Output(UNI) : {expect}
                    </Text>
                    <button type="button" onClick={swap}>
                        Swap
                    </button>
                </>
            ) : (
                <></>
            )) : (
                <Text>
                    Pending...
                </Text>
            )}
        </Wrap>
    )
}


export default SwapButton

