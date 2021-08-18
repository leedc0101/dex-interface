import React from "react";
import {useWeb3React} from "@web3-react/core";
import {injectedConnector} from "../connector/connector";
import {Text, Wrap} from "./style";
import Account from "./Account";
import Swap from "./Swap";
import AddLiquidityButton from "./AddLiquidity";
import RemoveLiquidityButton from "./RemoveLiquidity";
import {useTabs, useTokenAddress} from "../hooks";

function Main() {
    const { library, activate } = useWeb3React()

    const { tokenAAddress, tokenBAddress } = useTokenAddress()

    const contentList = [
        { tab: "Swap", content: <Swap/> },
        { tab: "Add", content: <AddLiquidityButton/> },
        { tab: "Remove", content: <RemoveLiquidityButton/> }
    ]

    const { contentItem, contentChange } = useTabs(0, contentList)

    const onClick = function () {
        activate(injectedConnector)
    }

    return (
        <>
            <Text style={{fontSize: '30px', marginTop:"30px"}}>
                Dong Chang Swap
            </Text>
            {library ? (
                <Wrap style={{gap:"30px"}}>
                    <Account/>
                    <div style={{width:"100%"}}>
                        { tokenAAddress !== "" && tokenBAddress !== "" ? (
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <div style={{alignItems:"center", display:"flex"}}>
                                    {contentList.map((section, index) => {
                                    return(
                                        <button style={{flexGrow:"1"}} onClick={() => contentChange(index)}>
                                            {section.tab}
                                        </button>
                                    )})}
                                </div>
                                <div>{contentItem.content}</div>
                            </div>
                        ) : (<></>)  }
                    </div>
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