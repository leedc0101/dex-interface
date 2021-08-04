import {UPDATE_ETH, UPDATE_UNI, UPDATE_LP, UPDATE_OUTPUT, UPDATE_INPUT, UPDATE_EXPECT} from "../constant/action-types";

const initialState = {
    ethBalance: "0",
    uniBalance: "0",
    LPBalance: "0",
    input: "0",
    output: "0",
    expect: "0",
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ETH:
            return {...state, ethBalance : action.ethBalance}
        case UPDATE_UNI:
            return {...state, uniBalance : action.uniBalance}
        case UPDATE_LP:
            return {...state, LPBalance : action.LPBalance}
        case UPDATE_INPUT:
            return {...state, input : action.input}
        case UPDATE_OUTPUT:
            return {...state, output : action.output}
        case UPDATE_EXPECT:
            return {...state, expect: action.expect}
    }
}

export default rootReducer