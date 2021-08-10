import {Text} from "./style";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers";
import {ERC20_ABI} from "../constant";
import {FACTORY_ADDRESS, INIT_CODE_HASH, Token, WETH} from "@uniswap/sdk";
import {getCreate2Address} from "@ethersproject/address";
import {keccak256, pack} from "@ethersproject/solidity";
import {updateETH, updateLP, updateUNI} from "../actions";

function TokenBalance() {
    const dispatch = useDispatch()
    const ethBalance = useSelector((state) => state?.ethBalance )
    const uniBalance = useSelector((state) => state?.uniBalance )
    const LPBalance = useSelector((state) => state?.LPBalance )
    const inputTokenAddress = useSelector(state => state?.inputTokenAddress)
    const outputTokenAddress = useSelector(state => state?.outputTokenAddress)


    const { chainId, account, library } = useWeb3React()

    const tokenContract = new ethers.Contract(outputTokenAddress, ERC20_ABI, library) // create token contract instance

    const tokenA = new Token(chainId, outputTokenAddress, 18)
    const tokenB = new Token(chainId, WETH[chainId].address, 18)
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, library)

    library?.getBalance(account)
        .then( (result) => {
            if(ethers.utils.formatEther(result) !== ethBalance)
                dispatch(updateETH(ethers.utils.formatEther(result)))
        }) // update eth balance

    tokenContract?.balanceOf(account)
        .then((result) => {
            if(ethers.utils.formatEther(result) !== uniBalance)
                dispatch(updateUNI(ethers.utils.formatUnits(result,6)))
        }) // update token balance using balanceOf function in token contract

    pairTokenContract?.balanceOf(account)
        .then((result) => {
            if(ethers.utils.formatEther(result) !== LPBalance)
                dispatch(updateLP(ethers.utils.formatEther(result)))
        })

    return (
        <>
            <Text>-----Balance Info-----</Text>
            <Text>ETH Balance: {ethBalance}</Text>
            <Text>Token Balance: {uniBalance}</Text>
            <Text>Liquidity Token Amount : {LPBalance}</Text>
        </>
    )
}

export default TokenBalance