import {Text, Wrap} from "./style";
import React from "react";
import {useWeb3React} from "@web3-react/core";
import BalanceInfo from "./BalanceInfo";

function Account() {
    const { chainId, account } = useWeb3React()

    return (
        <Wrap>
            <Text style={{color:'green'}}>Connected </Text>
            <Text style={{marginTop:'15px'}}>ChainId: {chainId}</Text>
            <Text style={{marginBottom:'15px'}}>Account: {account}</Text>
            <BalanceInfo/>
        </Wrap>
    )
}

export default Account