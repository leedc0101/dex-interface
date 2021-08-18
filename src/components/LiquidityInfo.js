import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {BorderWrap, HeaderText, Text} from "./style";
import {FACTORY_ADDRESS, INIT_CODE_HASH, Token, WETH} from "@uniswap/sdk";
import {getCreate2Address} from "@ethersproject/address";
import {keccak256, pack} from "@ethersproject/solidity";
import {ethers} from "ethers";
import {ERC20_ABI} from "../constant";
import {useSelector} from "react-redux";

function LiquidityInfo() {
    const { chainId, library } = useWeb3React()

    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)
    const LPBalance = useSelector(state => state?.LPBalance)

    const [total, setTotal] = useState(0)

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
    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, library)

    pairTokenContract.totalSupply()
        .then(result => {
            if(ethers.utils.formatEther(result) !== total)
                setTotal(ethers.utils.formatEther(result))
        })

    const ratio = LPBalance / total * 100
    const ratioFixed = ratio >= 0.01 ? ratio.toFixed(2) : ">0.01"

    return(
        <BorderWrap>
            <HeaderText>Pool 정보</HeaderText>
            <Text>유동성 보유 비율  : {ratioFixed}%</Text>
        </BorderWrap>
    )
}

export default LiquidityInfo