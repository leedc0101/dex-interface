import {BorderWrap} from "./style";
import React from "react";
import TokenBalance from "./TokenBalance";
import TokenInput from "./TokenInput";
import {useSelector} from "react-redux";

function BalanceInfo() {
    const inputTokenAddress = useSelector(state => state?.inputTokenAddress)
    const outputTokenAddress = useSelector(state => state?.outputTokenAddress)

    return(
        <BorderWrap>
            <TokenInput/>
            { inputTokenAddress === "" && outputTokenAddress === "" ? (
                <></>
                // <TokenBalance/>
            ) : (
                <TokenBalance/>
            )}
        </BorderWrap>
    )
}

export default BalanceInfo