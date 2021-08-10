import React from "react";
import {useWeb3React} from "@web3-react/core";
import {injectedConnector} from "../connector/connector";
import {Text} from "./style";
import Balance from "./Balance";


function Hero() {
    const { library, activate } = useWeb3React()

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <>
            <Text style={{fontSize: '20px'}}>
                Dong Chang Swap
            </Text>
            {library ? (
                <Balance/>
            ) : (
                <button type="button" onClick={onClick}>
                    Connect
                </button>
            )}
        </>
    )
}

export default Hero