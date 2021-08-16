import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, Token, WETH, FACTORY_ADDRESS, INIT_CODE_HASH } from "@uniswap/sdk"
import {TOKEN_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, ERC20_ABI} from "../constant";
import {updateTokenA, updateTokenB} from "../actions";
import { pack, keccak256 } from "@ethersproject/solidity";
import { getCreate2Address } from "@ethersproject/address";
import {useDispatch, useSelector} from "react-redux";
import {BorderWrap, Text} from "./style";
import {MaxUint256} from "@ethersproject/constants";

function RemoveLiquidityButton() {
    const dispatch = useDispatch()
    const LPBalance = useSelector((state) => state?.LPBalance )
    const { chainId, account, library } = useWeb3React()

    const [approved, setApproved] = useState(false)
    const [pending, setPending] = useState(false)

    const signer = library?.getSigner(account).connectUnchecked()

    const tokenA = new Token(chainId, TOKEN_ADDRESS, 18)
    const tokenB = new Token(chainId, WETH[chainId].address, 18)
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, signer)

    pairTokenContract.allowance(account, ROUTER_ADDRESS)
        .then(result => {
            if( result >= MaxUint256.div(100))
                setApproved(true)
        })

    function approve() {
        pairTokenContract.approve(ROUTER_ADDRESS, MaxUint256)
            .then((result) => {
                setPending(true)
                result.wait().then(() => {
                    setPending(false)
                    setApproved(true)
                })
            })
    }

    function removeLiquidity(): Promise<Pair> {
        const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance
        const tokenContract = new ethers.Contract(TOKEN_ADDRESS, ERC20_ABI, library)

        const token = TOKEN_ADDRESS
        const amountTokenDesired = ethers.utils.parseEther(LPBalance)
        const amountTokenMin = '0'
        const amountETHMin = '0'
        const to = account // Send to myself
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

        routerContract.removeLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline, {gasLimit: 1000000})
            .then((result) => {
                setPending(true)
                result.wait().then( () => {
                    tokenContract.balanceOf(account)
                        .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                    library.getBalance(account)
                        .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                    setPending(false)
                })
            })
    }

    return (
        <BorderWrap>
            <Text>
                ------Remove Liquidity------
            </Text>
            { !pending ?  (approved ? (
                <button style={{color:"green"}} type="button" onClick={removeLiquidity}>
                    Remove Liquidity
                </button>
            ) : (
                <button style={{color:"red"}} type="button" onClick={approve}>
                    Approve
                </button>
            )) : (
                <button style={{color:"pink"}} >
                    Pending...
                </button>
            )}
        </BorderWrap>
    )
}


export default RemoveLiquidityButton

