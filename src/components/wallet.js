import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from "ethers"
import {injectedConnector} from "../connector/connector";
import { UNI_ABI, UNI_ADDRESS} from "../constant";
import store from '../store'
import {updateETH, updateUNI} from "../actions";

function Wallet() {
    const { chainId, account, activate, active, library } = useWeb3React()

    const tokenContract = new ethers.Contract(UNI_ADDRESS, UNI_ABI, library) // create token contract instance

    const [ETHBalance, setETHBalance] = useState()
    const [UNIBalance, setUNIBalance] = useState()

    store.subscribe(() => {
        setETHBalance( store.getState().ethBalance )
        setUNIBalance( store.getState().uniBalance)
    })

    library && library.getBalance(account)
        .then( (result) => {
            if( ethers.utils.formatEther(result) !== ETHBalance ) {
                store.dispatch(updateETH(ethers.utils.formatEther(result)))
            }
        }) // update eth balance

    library && tokenContract.balanceOf(account)
        .then((result) => {
            if( ethers.utils.formatEther(result) !== UNIBalance )
                store.dispatch(updateUNI(ethers.utils.formatEther(result)))
        }) // update token balance using balanceOf function in token contract

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
            <div>ETH Balance: {ETHBalance}</div>
            <div>UNI Balance: {UNIBalance}</div>
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

export default Wallet