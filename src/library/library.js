import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

export default getLibrary;
