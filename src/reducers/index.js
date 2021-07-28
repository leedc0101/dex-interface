import { UPDATE_ETH, UPDATE_UNI } from "../constant/action-types";

const initialState = {
    ethBalance: 0,
    uniBalance: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ETH:
            return {...state, ethBalance : action.ethBalance}
        case UPDATE_UNI:
            return {...state, uniBalance : action.uniBalance}
    }
}

export default rootReducer