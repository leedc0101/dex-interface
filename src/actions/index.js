import {
    UPDATE_TOKEN_B,
    UPDATE_TOKEN_A,
    UPDATE_LP,
    UPDATE_SWAP_INPUT,
    UPDATE_SWAP_OUTPUT,
    UPDATE_SWAP_EXPECT,
    UPDATE_ADD_INPUT,
    UPDATE_ADD_INPUT_2,
    UPDATE_TOKEN_A_ADDRESS, UPDATE_TOKEN_B_ADDRESS
} from "../constant/action-types";

export const updateTokenA = tokenABalance => ({
    type: UPDATE_TOKEN_A,
    tokenABalance: tokenABalance
})

export const updateTokenB = tokenBBalance => ({
    type: UPDATE_TOKEN_B,
    tokenBBalance: tokenBBalance
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

export const updateTokenAAddress = tokenAAddress => ({
    type: UPDATE_TOKEN_A_ADDRESS,
    tokenAAddress: tokenAAddress
})

export const updateTokenBAddress = tokenBAddress => ({
    type: UPDATE_TOKEN_B_ADDRESS,
    tokenBAddress: tokenBAddress
})