import {useState} from "react";
import {useSelector} from "react-redux";
import {FACTORY_ADDRESS, INIT_CODE_HASH, Token, WETH} from "@uniswap/sdk";
import {ethers} from "ethers";
import {ERC20_ABI, ROUTER_ABI, ROUTER_ADDRESS} from "../constant";
import {useWeb3React} from "@web3-react/core";
import {getCreate2Address} from "@ethersproject/address";
import {keccak256, pack} from "@ethersproject/solidity";

export const useTabs = (initialTabs, contentList) => {
    const [index, setIndex] = useState(initialTabs)

    return {
        contentItem: contentList[index],
        contentChange: setIndex
    }
}

export const useTokenAddress = () => {
    const tokenAAddress = useSelector(state => state?.tokenAAddress)
    const tokenBAddress = useSelector(state => state?.tokenBAddress)

    return { tokenAAddress, tokenBAddress }
}

export const useAddLiquidityInput = () => {
    const input = useSelector(state => state?.addInput)
    const input2 = useSelector(state => state?.addInput2)

    return { input, input2 }
}

export const useTokenBalance = () => {
    const tokenABalance = useSelector((state) => state?.tokenABalance )
    const tokenBBalance = useSelector((state) => state?.tokenBBalance )
    const LPBalance = useSelector((state) => state?.LPBalance )

    return { tokenABalance, tokenBBalance, LPBalance }
}

export const useTokenContract = () => {
    const {tokenAAddress, tokenBAddress} = useTokenAddress()
    const {chainId, library} = useWeb3React()
    const tokenAContract = tokenAAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenAAddress, ERC20_ABI, library)
    const tokenBContract = tokenBAddress === WETH[chainId].address ? undefined : new ethers.Contract(tokenBAddress, ERC20_ABI, library)

    return { tokenAContract, tokenBContract }
}

export const useTokenDecimals = () => {
    const {tokenAContract, tokenBContract} = useTokenContract()

    const [ADecimals,setADecimals] = useState(0)
    const [BDecimals,setBDecimals] = useState(0)

    tokenAContract?.decimals()
        .then(result => {
            if(ADecimals !== result)
                setADecimals(result)
        })

    tokenBContract?.decimals()
        .then(result => {
            if(BDecimals !== result)
                setBDecimals(result)
        })

    return { ADecimals, BDecimals }
}

export const usePairContract = () => {
    const { chainId, library, account } = useWeb3React()
    const { tokenAAddress, tokenBAddress } = useTokenAddress()
    const { tokenAContract, tokenBContract } = useTokenContract()

    const tokenA = tokenAContract === undefined ? new Token(chainId, WETH[chainId].address, 18) : new Token(chainId, tokenAAddress, 18)
    const tokenB = tokenBContract === undefined ? new Token(chainId, WETH[chainId].address, 18) : new Token(chainId, tokenBAddress, 18)

    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    const signer = library.getSigner(account).connectUnchecked()

    const pairTokenContract = new ethers.Contract(pair, ERC20_ABI, signer)

    return { pairTokenContract }
}

export const useSwapInput = () => {
    const input = useSelector(state => state?.swapInput)
    const expect = useSelector(state => state?.swapExpect)

    return { input, expect }
}

export const useRouterContract = () => {
    const { account, library } = useWeb3React()
    const signer = library.getSigner(account).connectUnchecked()
    const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance

    return { routerContract }

}