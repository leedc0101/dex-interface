import {useDispatch} from "react-redux";
import {Text} from "./style";
import React from "react";
import { updateTokenAAddress, updateTokenBAddress} from "../actions";
import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers";
import {WETH} from "@uniswap/sdk";

function TokenAddressInput() {
    const dispatch = useDispatch()
    const {chainId} = useWeb3React()

    function tokenAOnChange(e){
        if(e.target.value.length !== 0){
            try {
                ethers.utils.getAddress(e.target.value)
                dispatch(updateTokenAAddress(e.target.value))
            } catch {
                if(e.target.value === "eth")
                    dispatch(updateTokenAAddress(WETH[chainId].address))
            }
        }
    }

    function tokenBOnChange(e){
        if(e.target.value.length !== 0){
            try {
                ethers.utils.getAddress(e.target.value)
                dispatch(updateTokenBAddress(e.target.value))
            } catch {
                if(e.target.value === "eth")
                    dispatch(updateTokenBAddress(WETH[chainId].address))
            }
        }
    }

    return(
        <>
            <form>
                <label>
                    <Text>
                        토큰 A 주소 :
                        <input type="text" onChange={tokenAOnChange}/>
                    </Text>
                </label>
            </form>
            <form>
                <label>
                    <Text>
                        토큰 B 주소 :
                        <input type="text" onChange={tokenBOnChange}/>
                    </Text>
                </label>
            </form>
        </>
    )
}

export default TokenAddressInput