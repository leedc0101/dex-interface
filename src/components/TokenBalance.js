import {BorderWrap, HeaderText, Text} from "./style";
import React, {useState} from "react";
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

    const [ADecimals,setADecimals] = useState(0)
    const [BDecimals,setBDecimals] = useState(0)


    const { chainId, account, library } = useWeb3React()

    const tokenAContract = tokenAAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenAAddress, ERC20_ABI, library)
    const tokenBContract = tokenBAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenBAddress, ERC20_ABI, library)


    tokenAContract?.decimals()
        .then(result => {
            if(ADecimals !== result)
                setADecimals(result)
        })

    tokenBContract?.decimals()
        .then(result => {
            if(BDecimals !== result)
                setBDecimals(result)
        })

    const tokenA = tokenAContract === undefined ? new Token(chainId, WETH[chainId].address, 18) : new Token(chainId, tokenAAddress, ADecimals)
    const tokenB = tokenBContract === undefined ? new Token(chainId, WETH[chainId].address, 18) : new Token(chainId, tokenBAddress, BDecimals)

    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )
    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, library)

    if(tokenAAddress !== WETH[chainId].address)
        tokenAContract.balanceOf(account)
            .then((result) => dispatch(updateTokenA(ethers.utils.formatUnits(result,ADecimals))))
    else
        library.getBalance(account)
            .then((result) => dispatch(updateTokenA(ethers.utils.formatEther(result))))

    if(tokenBAddress !== WETH[chainId].address)
        tokenBContract.balanceOf(account)
            .then((result) => dispatch(updateTokenB(ethers.utils.formatUnits(result,BDecimals))))
    else
        library.getBalance(account)
            .then((result) => dispatch(updateTokenB(ethers.utils.formatEther(result))))

    pairTokenContract?.balanceOf(account)
        .then((result) => {
            if(ethers.utils.formatEther(result) !== LPBalance)
                dispatch(updateLP(ethers.utils.formatEther(result)))
        })

    return (
        <BorderWrap>
            <HeaderText>잔액 정보</HeaderText>
            <Text>토큰 A 잔액: {tokenABalance}</Text>
            <Text>토큰 B 잔액: {tokenBBalance}</Text>
            <Text>유동성 토큰 잔액 : {LPBalance}</Text>
        </BorderWrap>
    )
}

export default TokenBalance