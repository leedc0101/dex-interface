import {
    UPDATE_TOKEN_A,
    UPDATE_TOKEN_B,
    UPDATE_LP,
    UPDATE_SWAP_OUTPUT,
    UPDATE_SWAP_INPUT,
    UPDATE_SWAP_EXPECT,
    UPDATE_ADD_INPUT_2,
    UPDATE_ADD_INPUT,
    UPDATE_TOKEN_B_ADDRESS,
    UPDATE_TOKEN_A_ADDRESS
} from "../constant/action-types";

const initialState = {
    tokenABalance: "0",
    tokenBBalance: "0",
    LPBalance: "0",
    swapInput: "0",
    swapOutput: "0",
    swapExpect: "0",
    addInput: "0",
    addInput2: "0",
    tokenAAddress: "",
    tokenBAddress: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TOKEN_A:
            return {...state, tokenABalance : action.tokenABalance}
        case UPDATE_TOKEN_B:
            return {...state, tokenBBalance : action.tokenBBalance}
        case UPDATE_LP:
            return {...state, LPBalance : action.LPBalance}
        case UPDATE_SWAP_INPUT:
            return {...state, swapInput : action.swapInput}
        case UPDATE_SWAP_OUTPUT:
            return {...state, swapOutput : action.swapOutput}
        case UPDATE_SWAP_EXPECT:
            return {...state, swapExpect: action.swapExpect}
        case UPDATE_ADD_INPUT_2:
            return {...state, addInput2: action.addInput2}
        case UPDATE_ADD_INPUT:
            return {...state, addInput: action.addInput}
        case UPDATE_TOKEN_A_ADDRESS:
            return {...state, tokenAAddress: action.tokenAAddress}
        case UPDATE_TOKEN_B_ADDRESS:
            return {...state, tokenBAddress: action.tokenBAddress}
        default:
            return state
    }
}

export default rootReducer