import { createStore } from "redux";

export default createStore(function(state, action){
    if(state === undefined) {
        return { value:0 }
    }
    if(action.type === 'UPDATE_ETH') {
        return {...state, value : action.value}
    }

    return state;
})