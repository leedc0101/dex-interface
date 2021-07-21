import {useWeb3React} from "@web3-react/core";
import React from "react";
import {Fetcher, Pair, Percent, Route, Token, TokenAmount, Trade, TradeType, WETH} from "@uniswap/sdk";
import { ethers } from 'ethers'

function SwapButton() {
    const { chainId, account, activate, active, library } = useWeb3React()

    const abi = [{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"}]
    const privateKey = '8a2d8715d6d5031a7193266270d2f8ba40db63654241453bc3d3999f1ecf2805'
    const wallet = new ethers.Wallet(privateKey, library)
    const contract = library ? new ethers.Contract('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',abi, wallet) : undefined

    const tokenAddress = '0xd3A691C852CDB01E281545A27064741F0B7f6825' // must be checksummed
    const decimals = 18

    async function swap(): Promise<Pair> {
        const WBTC = new Token(chainId, tokenAddress, decimals)
        const pair = WBTC ? await Fetcher.fetchPairData(WBTC, WETH[WBTC.chainId]) : undefined
        const route = WBTC ? new Route([pair], WETH[WBTC.chainId]) : undefined
        const amountIn = '10000000000000000'
        const trade = WBTC ? new Trade(route, new TokenAmount(WETH[WBTC.chainId], amountIn), TradeType.EXACT_INPUT) : undefined

        const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%

        const amountOutMin = trade ? trade.minimumAmountOut(slippageTolerance).raw : undefined
        const path = WBTC ? [WETH[WBTC.chainId].address, WBTC.address] : undefined
        const to = account // should be a checksummed recipient address
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
        const value = trade ? trade.inputAmount.raw : undefined

        console.log(contract.estimateGas)
    }

    return (
        <div>
            {active ? (
                <button type="button" onClick={swap}>
                    Swap
                </button>
            ) : (
                <></>
            )}
        </div>
    )
}


export default SwapButton