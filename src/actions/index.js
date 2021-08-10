import {
    UPDATE_UNI,
    UPDATE_ETH,
    UPDATE_LP,
    UPDATE_SWAP_INPUT,
    UPDATE_SWAP_OUTPUT,
    UPDATE_SWAP_EXPECT,
    UPDATE_ADD_INPUT,
    UPDATE_ADD_INPUT_2,
    UPDATE_TOKEN_ADDRESS
} from "../constant/action-types";

export const updateETH = ethBalance => ({
    type: UPDATE_ETH,
    ethBalance: ethBalance
})

export const updateUNI = uniBalance => ({
    type: UPDATE_UNI,
    uniBalance: uniBalance
})

export const updateLP = LPBalance => ({
    type: UPDATE_LP,
    LPBalance: LPBalance
})

export const updateSwapInput = swapInput => ({
    type: UPDATE_SWAP_INPUT,
    swapInput: swapInput
})

export const updateSwapOutput = swapOutput => ({
    type: UPDATE_SWAP_OUTPUT,
    swapOutput: swapOutput
})

export const updateSwapExpect = swapExpect => ({
    type: UPDATE_SWAP_EXPECT,
    swapExpect: swapExpect
})

export const updateAddInput = addInput => ({
    type: UPDATE_ADD_INPUT,
    addInput: addInput
})

export const updateAddInput2 = addInput2 => ({
    type: UPDATE_ADD_INPUT_2,
    addInput2: addInput2
})

export const updateTokenAddress = tokenAddress => ({
    type: UPDATE_TOKEN_ADDRESS,
    tokenAddress: tokenAddress
})