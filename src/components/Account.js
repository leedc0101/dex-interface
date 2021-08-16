import {Text, Wrap} from "./style";
import React from "react";
import {useWeb3React} from "@web3-react/core";
import {useSelector} from "react-redux";
import TokenAddressInput from "./TokenAddressInput";
import TokenBalance from "./TokenBalance";

function Account() {
    const { chainId, account } = useWeb3React()
    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)

    return (
        <Wrap>
            <Text style={{color:'green'}}>Connected </Text>
            <Text style={{marginTop:'15px'}}>ChainId: {chainId}</Text>
            <Text style={{marginBottom:'15px'}}>Account: {account}</Text>
            <TokenAddressInput/>
            { tokenAAddress === "" || tokenBAddress === "" ?  <></> : <TokenBalance/> }
        </Wrap>
    )
}

export default Account