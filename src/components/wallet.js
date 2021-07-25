import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from "ethers"
import {injectedConnector} from "../connector/connector";
import { UNI_ABI, UNI_ADDRESS} from "../constant";

function Wallet() {
    const { chainId, account, activate, active, library } = useWeb3React()

    /**
     * @todo use React-Redux hook instead of React hook
     */
    const [ETHBalance, setETHBalance] = useState(0)
    const [UNIBalance, setUNIBalance] = useState(0)

    const tokenContract = new ethers.Contract(UNI_ADDRESS, UNI_ABI, library) // create token contract instance

    library && library.getBalance(account)
        .then( (result) => setETHBalance(ethers.utils.formatEther(result)) ) // update eth balance

    library && tokenContract.balanceOf(account)
        .then((result) => setUNIBalance(ethers.utils.formatEther(result))) // update token balance using balanceOf function in token contract


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