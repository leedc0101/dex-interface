import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from "ethers"
import {injectedConnector} from "../connector/connector";
// import { UNI_ABI, UNI_ADDRESS} from "../constant";
import store from '../store'

function Wallet() {
    const { chainId, account, activate, active, library } = useWeb3React()
    const [ETHBalance, setETHBalance] = useState()

    // const tokenContract = new ethers.Contract(UNI_ADDRESS, UNI_ABI, library) // create token contract instance

    store.subscribe(() => {setETHBalance( store.getState().value )})

    library && library.getBalance(account)
        .then( (result) => {
            if( ethers.utils.formatEther(result) !== ETHBalance ) {
                store.dispatch({type: "UPDATE_ETH", value: ethers.utils.formatEther(result)})
            }
        }) // update eth balance

    store.subscribe(()=> {setETHBalance(store.getState().value)})
    // library && tokenContract.balanceOf(account)
    //     .then((result) => store.dispatch({type:"UPDATE_UNI", value:ethers.utils.formatEther(result)})) // update token balance using balanceOf function in token contract

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
            <div>ETH Balance: {ETHBalance}</div>
            {/*<div>UNI Balance: {UNIBalance}</div>*/}
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