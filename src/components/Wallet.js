import React from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from "ethers"
import {injectedConnector} from "../connector/connector";
import { ERC20_ABI, TOKEN_ADDRESS} from "../constant";
import {updateETH, updateLP, updateUNI} from "../actions";
import {FACTORY_ADDRESS, INIT_CODE_HASH, Token, WETH} from "@uniswap/sdk";
import {getCreate2Address} from "@ethersproject/address";
import {keccak256, pack} from "@ethersproject/solidity";
import {useDispatch, useSelector} from "react-redux";
import {Text, Wrap} from "./style";

function Wallet() {
    const dispatch = useDispatch()
    const ethBalance = useSelector((state) => state?.ethBalance )
    const uniBalance = useSelector((state) => state?.uniBalance )
    const LPBalance = useSelector((state) => state?.LPBalance )

    const { chainId, account, activate, active, library } = useWeb3React()

    const tokenContract = new ethers.Contract(TOKEN_ADDRESS, ERC20_ABI, library) // create token contract instance

    const tokenA = new Token(chainId, TOKEN_ADDRESS, 18)
    const tokenB = new Token(chainId, WETH[active ? chainId : 3].address, 6)
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, library)

    library && library?.getBalance(account)
        .then( (result) => {
            if(ethers.utils.formatEther(result) !== ethBalance)
                dispatch(updateETH(ethers.utils.formatEther(result)))
        }) // update eth balance

    library && tokenContract?.balanceOf(account)
        .then((result) => {
            if(ethers.utils.formatEther(result) !== uniBalance)
                dispatch(updateUNI(ethers.utils.formatUnits(result,6)))
        }) // update token balance using balanceOf function in token contract

    library && pairTokenContract?.balanceOf(account)
        .then((result) => {
            if(ethers.utils.formatEther(result) !== LPBalance)
                dispatch(updateLP(ethers.utils.formatEther(result)))
        })

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <Wrap>
            <Text style={{marginTop:'15px'}}>ChainId: {chainId}</Text>
            <Text style={{marginBottom:'15px'}}>Account: {account}</Text>
            <Text>ETH Balance: {ethBalance}</Text>
            <Text>UNI Balance: {uniBalance}</Text>
            <Text>Liquidity Token Amount : {LPBalance}</Text>
            {active ? (
                <Text style={{color:'green'}}>Connected </Text>
            ) : (
                <button type="button" onClick={onClick}>
                    Connect
                </button>
            )}
        </Wrap>
    )
}

export default Wallet