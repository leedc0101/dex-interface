import {useWeb3React} from "@web3-react/core";
import React from "react";
import {injectedConnector} from "../connector/connector";

function Wallet() {
    const { chainId, account, activate, active } = useWeb3React()

    const onClick = () => {
        activate(injectedConnector)
    }

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
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