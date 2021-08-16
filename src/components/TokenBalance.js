import {BorderWrap, Text} from "./style";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers";
import {ERC20_ABI} from "../constant";
import {FACTORY_ADDRESS, INIT_CODE_HASH, Token, WETH} from "@uniswap/sdk";
import {getCreate2Address} from "@ethersproject/address";
import {keccak256, pack} from "@ethersproject/solidity";
import {updateTokenA, updateLP, updateTokenB} from "../actions";

function TokenBalance() {
    const dispatch = useDispatch()
    const tokenABalance = useSelector((state) => state?.tokenABalance )
    const tokenBBalance = useSelector((state) => state?.tokenBBalance )
    const LPBalance = useSelector((state) => state?.LPBalance )
    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)


    const { chainId, account, library } = useWeb3React()

    const tokenAContract = tokenAAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenAAddress, ERC20_ABI, library)
    const tokenBContract = tokenBAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenBAddress, ERC20_ABI, library)

    const tokenA = tokenAContract === undefined ? new Token(chainId, WETH[chainId].address, 18) : new Token(chainId, tokenAAddress, 18)
    const tokenB = tokenBContract === undefined ? new Token(chainId, WETH[chainId].address, 18) : new Token(chainId, tokenBAddress, 18)

    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )
    console.log(pair)
    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, library)

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

    pairTokenContract?.balanceOf(account)
        .then((result) => {
            console.log(result)
            if(ethers.utils.formatEther(result) !== LPBalance)
                dispatch(updateLP(ethers.utils.formatEther(result)))
        })

    return (
        <BorderWrap>
            <Text>-----Balance Info-----</Text>
            <Text>Token A Balance: {tokenABalance}</Text>
            <Text>Token B Balance: {tokenBBalance}</Text>
            <Text>Liquidity Token Amount : {LPBalance}</Text>
        </BorderWrap>
    )
}

export default TokenBalance