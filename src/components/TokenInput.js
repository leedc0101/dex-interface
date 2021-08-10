import {useDispatch} from "react-redux";
import {Text} from "./style";
import React from "react";
import { updateInputTokenAddress, updateOutputTokenAddress} from "../actions";

function TokenInput() {
    const dispatch = useDispatch()

    function inputOnChange(e){
        if(e.target.value.length !== 0)
            dispatch(updateInputTokenAddress(e.target.value))
    }

    function outputOnChange(e){
        if(e.target.value.length !== 0)
            dispatch(updateOutputTokenAddress(e.target.value))
    }

    return(
        <>
            <form>
                <label>
                    <Text>
                        Input Token Address :
                        <input type="text" onChange={inputOnChange}/>
                    </Text>
                </label>
            </form>
            <form>
                <label>
                    <Text>
                        Output Token Address :
                        <input type="text" onChange={outputOnChange}/>
                    </Text>
                </label>
            </form>
        </>
    )
}

export default TokenInput