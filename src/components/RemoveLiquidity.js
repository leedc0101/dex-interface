import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, Token, WETH, FACTORY_ADDRESS, INIT_CODE_HASH } from "@uniswap/sdk"
import {ROUTER_ADDRESS, ROUTER_ABI, ERC20_ABI} from "../constant";
import {updateTokenA, updateTokenB} from "../actions";
import { pack, keccak256 } from "@ethersproject/solidity";
import { getCreate2Address } from "@ethersproject/address";
import {useDispatch, useSelector} from "react-redux";
import {BorderWrap, Text} from "./style";
import {MaxUint256} from "@ethersproject/constants";

function RemoveLiquidityButton() {
    const { chainId, account, library } = useWeb3React()

    const [pending, setPending] = useState(false)
    const [approved, setApproved] = useState(false)

    const dispatch = useDispatch()
    const LPBalance = useSelector((state) => state?.LPBalance )
    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)

    const signer = library?.getSigner(account).connectUnchecked()
    const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance
    const tokenAContract = tokenAAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenAAddress, ERC20_ABI, library)
    const tokenBContract = tokenBAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenBAddress, ERC20_ABI, library)

    const tokenA = new Token(chainId, tokenAAddress, 18)
    const tokenB = new Token(chainId, tokenBAddress, 18)
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, signer)

    pairTokenContract.allowance(account, ROUTER_ADDRESS)
        .then(result => {
            if( ethers.utils.formatEther(result) >= ethers.utils.formatEther(MaxUint256.div(100)) )
                !approved && setApproved(true)
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

    const liquidity = ethers.utils.parseEther(LPBalance)
    const amountTokenMin = '0'
    const amountETHMin = '0'
    const to = account // Send to myself
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

    function removeLiquidity(): Promise<Pair> {
        routerContract.removeLiquidity(
            tokenAAddress,
            tokenBAddress,
            liquidity,
            '0',
            '0',
            to,
            deadline
        ).then((result)=> {
            setPending(true)
            result.wait().then(()=>{
                tokenAAddress.balanceOf(account)
                    .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))
                tokenBAddress.balanceOf(account)
                    .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))
                setPending(false)
            })
        })
    }

    function removeLiquidityETH(): Promise<Pair> {
        routerContract.removeLiquidityETH(
            tokenAContract === undefined ? tokenBAddress : tokenAAddress,
            liquidity,
            amountTokenMin,
            amountETHMin,
            to,
            deadline,
            {gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei")}
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

    const onClick = tokenAContract === undefined || tokenBContract === undefined ? removeLiquidityETH : removeLiquidity

    return (
        <BorderWrap>
            <Text>
                ------Remove Liquidity------
            </Text>
            { !pending ?  (approved ? (
                <button style={{color:"green"}} type="button" onClick={onClick}>
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

