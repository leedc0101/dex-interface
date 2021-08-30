import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any): Web3Provider {
    return new Web3Provider(provider)
}

export default getLibrary