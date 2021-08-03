export const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const ROUTER_ABI = [
    'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
    'function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,address to,uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)',
    'function removeLiquidityETH(address token,uint liquidity, uint amountTokenMin,uint amountETHMin,address to, uint deadline) external returns (uint amountToken, uint amountETH)'
]
export const CONTRACT_ABI = [
    'function balanceOf(address account) external view returns (uint)',
    'function approve(address spender, uint rawAmount) external returns (bool)'
]