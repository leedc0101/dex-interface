import React from "react";
import {useWeb3React} from "@web3-react/core";
import {injectedConnector} from "../connector/connector";
import {Text, Wrap} from "./style";
import Account from "./Account";
import Swap from "./Swap";
import AddLiquidityButton from "./AddLiquidity";
import RemoveLiquidityButton from "./RemoveLiquidity";
import {useSelector} from "react-redux";
import LiquidityInfo from "./LiquidityInfo";


function Main() {
    const { library, activate } = useWeb3React()
    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <>
            <Text style={{fontSize: '30px'}}>
                Dong Chang Swap
            </Text>
            {library ? (
                <Wrap style={{gap:"30px"}}>
                    <Account/>
                    { tokenAAddress !== "" && tokenBAddress !== "" ? (
                        <>
                            <Swap/>
                            <AddLiquidityButton/>
                            <RemoveLiquidityButton/>
                            <LiquidityInfo/>
                        </>
                        ) : (<></>)  }
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