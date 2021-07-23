import {useWeb3React} from "@web3-react/core";
import React from "react";
// import {Fetcher, Pair, Percent, Route, Token, TokenAmount, Trade, TradeType, WETH} from "@uniswap/sdk";
import { Pair, Token, WETH } from "@uniswap/sdk"
import { ethers } from 'ethers'

function SwapButton() {
    const { chainId, account, active, library } = useWeb3React()

    const swapABI = ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)']
    const tokenABI = ['function approve(address _spender, uint256 amount) external returns (bool)']
    const privateKey = '8a2d8715d6d5031a7193266270d2f8ba40db63654241453bc3d3999f1ecf2805'
    const tokenAddress = '0xd3A691C852CDB01E281545A27064741F0B7f6825'
    const routerAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    const decimals = 18

    async function swap(): Promise<Pair> {
        const wallet = new ethers.Wallet(privateKey, library)

        const routerContract = library ? new ethers.Contract(routerAddress,swapABI, wallet) : undefined
        const tokenContract = library ? new ethers.Contract(tokenAddress, tokenABI, wallet) : undefined
        console.log(tokenContract)

        let tx1 = await tokenContract.approve(routerAddress, 100000000,{gasLimit:100000})
        await tx1.wait()
        console.log(tx1)

        const WBTC = new Token(chainId, tokenAddress, decimals)
        // const pair = WBTC ? await Fetcher.fetchPairData(WBTC, WETH[WBTC.chainId]) : undefined
        // const route = WBTC ? new Route([pair], WETH[WBTC.chainId]) : undefined
        // const amountIn = '20000000000000000'
        // const trade = WBTC ? new Trade(route, new TokenAmount(WETH[WBTC.chainId], amountIn), TradeType.EXACT_INPUT) : undefined
        // const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%

        const amountOutMin = '0'
        const path = WBTC ? [WETH[WBTC.chainId].address, WBTC.address] : undefined
        const to = account // should be a checksummed recipient address
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
        // const value = trade ? trade.inputAmount.raw : undefined
        const value = '10000000000000000'
        console.log(amountOutMin,path,to,deadline)

        let tx2 = await routerContract.swapExactETHForTokens(amountOutMin, path, to, deadline,{value:value, gasLimit:10000000})
        await tx2.wait()
        console.log(tx2)
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

// await 빼고 해보자
// react 프로젝트 하나 잡고 파악해보자

