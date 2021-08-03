import React from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from "ethers"
import {injectedConnector} from "../connector/connector";
import { CONTRACT_ABI, UNI_ADDRESS} from "../constant";
import {updateETH, updateLP, updateUNI} from "../actions";
import {FACTORY_ADDRESS, INIT_CODE_HASH, Token, WETH} from "@uniswap/sdk";
import {getCreate2Address} from "@ethersproject/address";
import {keccak256, pack} from "@ethersproject/solidity";
import {useDispatch, useSelector} from "react-redux";

function Wallet() {
    const dispatch = useDispatch()
    const ethBalance = useSelector((state) => state?.ethBalance )
    const uniBalance = useSelector((state) => state?.uniBalance )
    const LPBalance = useSelector((state) => state?.LPBalance )

    const { chainId, account, activate, active, library } = useWeb3React()

    const tokenContract = new ethers.Contract(UNI_ADDRESS, CONTRACT_ABI, library) // create token contract instance

    const tokenA = new Token(chainId, UNI_ADDRESS, 18)
    const tokenB = new Token(chainId, WETH[active ? chainId : 3].address, 18)
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    const pairTokenContract = new ethers.Contract(pair, CONTRACT_ABI, library)

    library && library?.getBalance(account)
        .then( (result) => {
            if(ethers.utils.formatEther(result) !== ethBalance)
                dispatch(updateETH(ethers.utils.formatEther(result)))
        }) // update eth balance

    library && tokenContract?.balanceOf(account)
        .then((result) => {
            if(ethers.utils.formatEther(result) !== uniBalance)
                dispatch(updateUNI(ethers.utils.formatEther(result)))
        }) // update token balance using balanceOf function in token contract

    library && pairTokenContract?.balanceOf(account)
        .then((result) => {
            console.log(ethers.utils.formatEther(result))
            if(ethers.utils.formatEther(result) !== LPBalance)
                dispatch(updateLP(ethers.utils.formatEther(result)))
        })

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
            <div>ETH Balance: {ethBalance}</div>
            <div>UNI Balance: {uniBalance}</div>
            <div>Liquidity Token Amount : {LPBalance}</div>
            {active ? (
                <div>Connected </div>
            ) : (
                <button type="button" onClick={onClick}>
                    Connect
                </button>
            )}
        </div>
    )
}

export default React.memo(Wallet)