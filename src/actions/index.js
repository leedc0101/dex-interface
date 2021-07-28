import { UPDATE_UNI, UPDATE_ETH } from "../constant/action-types";

export const updateETH = ethBalance => ({
    type: UPDATE_ETH,
    ethBalance: ethBalance
})

export const updateUNI = uniBalance => ({
    type: UPDATE_UNI,
    uniBalance: uniBalance
})