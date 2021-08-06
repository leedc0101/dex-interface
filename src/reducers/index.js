import {
    UPDATE_ETH,
    UPDATE_UNI,
    UPDATE_LP,
    UPDATE_SWAP_OUTPUT,
    UPDATE_SWAP_INPUT,
    UPDATE_SWAP_EXPECT,
    UPDATE_ADD_INPUT_2, UPDATE_ADD_INPUT
} from "../constant/action-types";

const initialState = {
    ethBalance: "0",
    uniBalance: "0",
    LPBalance: "0",
    swapInput: "0",
    swapOutput: "0",
    swapExpect: "0",
    addInput: "0",
    addInput2: "0"
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ETH:
            return {...state, ethBalance : action.ethBalance}
        case UPDATE_UNI:
            return {...state, uniBalance : action.uniBalance}
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
    }
}

export default rootReducer