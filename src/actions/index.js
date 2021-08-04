import {UPDATE_UNI, UPDATE_ETH, UPDATE_LP, UPDATE_INPUT, UPDATE_OUTPUT, UPDATE_EXPECT} from "../constant/action-types";

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

export const updateInput = input => ({
    type: UPDATE_INPUT,
    input: input
})

export const updateOutput = output => ({
    type: UPDATE_OUTPUT,
    output: output
})

export const updateExpect = expect => ({
    type: UPDATE_EXPECT,
    expect: expect
})