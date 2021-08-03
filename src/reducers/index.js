import { UPDATE_ETH, UPDATE_UNI, UPDATE_LP } from "../constant/action-types";

const initialState = {
    ethBalance: 0,
    uniBalance: 0,
    LPBalance: 0,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ETH:
            return {...state, ethBalance : action.ethBalance}
        case UPDATE_UNI:
            return {...state, uniBalance : action.uniBalance}
        case UPDATE_LP:
            return {...state, LPBalance : action.LPBalance}
    }
}

export default rootReducer