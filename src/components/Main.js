import React from "react";
import {useWeb3React} from "@web3-react/core";
import {injectedConnector} from "../connector/connector";
import {Text, Wrap} from "./style";
import Account from "./Account";
import Swap from "./Swap";
import AddLiquidityButton from "./AddLiquidity";
import RemoveLiquidityButton from "./RemoveLiquidity";


function Main() {
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
                <Wrap style={{gap:"30px"}}>
                    <Account/>
                    <Swap/>
                    <AddLiquidityButton/>
                    <RemoveLiquidityButton/>
                </Wrap>
            ) : (
                <button type="button" onClick={onClick}>
                    Connect
                </button>
            )}
        </>
    )
}

export default Main