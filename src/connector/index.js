import { InjectedConnector } from "@web3-react/injected-connector";
import { TorusConnector } from "@web3-react/torus-connector";

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        1, // Mainet
        3, // Ropsten
        4, // Rinkeby
        5, // Goerli
        42, // Kovan
    ],
})


export const torusConnector = new TorusConnector({
    chainId:3,
    initOptions: {
        network: {
            host: 'ropsten',
            chainId: 3,
        },
    },
})