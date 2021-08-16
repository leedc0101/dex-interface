export const TOKEN_ADDRESS = '0x110a13FC3efE6A245B50102D2d79B3E76125Ae83'
export const ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const ROUTER_ABI = [
    'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
    'function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,address to,uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)',
    'function removeLiquidityETH(address token,uint liquidity, uint amountTokenMin,uint amountETHMin,address to, uint deadline) external returns (uint amountToken, uint amountETH)',
    'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
    'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'
]
export const ERC20_ABI = [
    'function balanceOf(address account) external view returns (uint)',
    'function approve(address spender, uint rawAmount) external returns (bool)',
    'function allowance(address owner, address spender) public view returns (uint256)'
]

