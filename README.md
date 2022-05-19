## DEX Interface using uniswap-v2 protocol

- Who : leedc0101
- How : Using React, Web3.js, Redux

## Demo

https://leedc0101.github.io/dex-interface/

## Caution

DON'T TRY MAINNET WITH THIS INTERFACE
Just use Kovan, or Ropsten Network

## How to run

`yarn && yarn start`

## Tips

You can either type `eth` for WETH address, or you just can type token address to input.
<br>
Ex) <br>
`0xaD6D458402F60fD3Bd25163575031ACDce07538D` (DAI Ropsten address) <br>
`0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa` (DAI Kovan address)

## Needs to be fixed

- Refactor huge amount of legacy codes
- Fix decimal issue (ex. WBTC)
- Add more default token such as `DAI`, `WBTC` as `eth`
