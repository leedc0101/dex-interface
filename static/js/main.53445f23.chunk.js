(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(t,e){},125:function(t,e,n){"use strict";n.r(e);var a,r,i,c,o=n(9),u=n.n(o),s=n(64),d=n.n(s),l=n(42),b=n(28),j=new(n(99).a)({supportedChainIds:[1,3,4,5,42]}),f=n(43),h=f.a.div(a||(a=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: normal;\n  align-items: center;\n"]))),O=f.a.div(r||(r=Object(l.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: normal;\n  align-items: center;\n  border: 2px solid;\n  width: 100%;\n  border-radius: 8px;\n  padding: 5px;\n"]))),p=f.a.div(i||(i=Object(l.a)(["\n  text-align: center;\n  font-size: 13px;\n"]))),v=f.a.div(c||(c=Object(l.a)(["\n  text-align: center;\n  font-size: 17px;\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),x=n(21),m="UPDATE_TOKEN_A",g="UPDATE_TOKEN_B",y="UPDATE_LP",w="UPDATE_SWAP_INPUT",A="UPDATE_SWAP_OUTPUT",E="UPDATE_SWAP_EXPECT",k="UPDATE_ADD_INPUT",B="UPDATE_ADD_INPUT_2",T="UPDATE_TOKEN_A_ADDRESS",C="UPDATE_TOKEN_B_ADDRESS",P=function(t){return{type:m,tokenABalance:t}},I=function(t){return{type:g,tokenBBalance:t}},S=function(t){return{type:w,swapInput:t}},D=function(t){return{type:E,swapExpect:t}},L=function(t){return{type:k,addInput:t}},U=function(t){return{type:B,addInput2:t}},_=function(t){return{type:T,tokenAAddress:t}},F=function(t){return{type:C,tokenBAddress:t}},q=n(12),M=n(19),H=n(8);var N=function(){var t=Object(x.b)(),e=Object(b.b)().chainId;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(p,{children:["\ud1a0\ud070 A \uc8fc\uc18c :",Object(H.jsx)("input",{type:"text",onChange:function(n){if(0!==n.target.value.length)try{q.a.utils.getAddress(n.target.value),t(_(n.target.value))}catch(a){"eth"===n.target.value&&t(_(M.d[e].address))}}})]})})}),Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(p,{children:["\ud1a0\ud070 B \uc8fc\uc18c :",Object(H.jsx)("input",{type:"text",onChange:function(n){if(0!==n.target.value.length)try{q.a.utils.getAddress(n.target.value),t(F(n.target.value))}catch(a){"eth"===n.target.value&&t(F(M.d[e].address))}}})]})})})]})},K=n(31),W="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",z=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)","function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)","function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,address to,uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)","function removeLiquidity(address tokenA, address tokenB, uint liquidity, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB)","function removeLiquidityETH(address token,uint liquidity, uint amountTokenMin,uint amountETHMin,address to, uint deadline) external returns (uint amountToken, uint amountETH)"],R=["function balanceOf(address account) external view returns (uint)","function totalSupply() external view returns (uint)","function approve(address spender, uint rawAmount) external returns (bool)","function allowance(address owner, address spender) public view returns (uint256)","function decimals() public view returns (uint8)"],J=n(17),X=n(38);var G=function(){var t=Object(x.b)(),e=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenABalance})),n=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBBalance})),a=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.LPBalance})),r=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),i=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress})),c=Object(o.useState)(0),u=Object(K.a)(c,2),s=u[0],d=u[1],l=Object(o.useState)(0),j=Object(K.a)(l,2),f=j[0],h=j[1],m=Object(b.b)(),g=m.chainId,w=m.account,A=m.library,E=r===M.d[g].address?void 0:new q.a.Contract(r,R,A),k=i===M.d[g].address?void 0:new q.a.Contract(i,R,A);null===E||void 0===E||E.decimals().then((function(t){s!==t&&d(t)})),null===k||void 0===k||k.decimals().then((function(t){f!==t&&h(t)}));var B=void 0===E?new M.c(g,M.d[g].address,18):new M.c(g,r,s),T=void 0===k?new M.c(g,M.d[g].address,18):new M.c(g,i,f),C=B.sortsBefore(T)?[B,T]:[T,B],S=Object(J.c)(M.a,Object(X.a)(["bytes"],[Object(X.b)(["address","address"],[C[0].address,C[1].address])]),M.b),D=new q.a.Contract(S,R,A);return r!==M.d[g].address?E.balanceOf(w).then((function(e){return t(P(q.a.utils.formatUnits(e,s)))})):A.getBalance(w).then((function(e){return t(P(q.a.utils.formatEther(e)))})),i!==M.d[g].address?k.balanceOf(w).then((function(e){return t(I(q.a.utils.formatUnits(e,f)))})):A.getBalance(w).then((function(e){return t(I(q.a.utils.formatEther(e)))})),null===D||void 0===D||D.balanceOf(w).then((function(e){q.a.utils.formatEther(e)!==a&&t(function(t){return{type:y,LPBalance:t}}(q.a.utils.formatEther(e)))})),Object(H.jsxs)(O,{children:[Object(H.jsx)(v,{children:"\uc794\uc561 \uc815\ubcf4"}),Object(H.jsxs)(p,{children:["\ud1a0\ud070 A \uc794\uc561: ",e]}),Object(H.jsxs)(p,{children:["\ud1a0\ud070 B \uc794\uc561: ",n]}),Object(H.jsxs)(p,{children:["\uc720\ub3d9\uc131 \ud1a0\ud070 \uc794\uc561 : ",a]})]})};var Q=function(){var t=Object(b.b)(),e=t.chainId,n=t.account,a=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),r=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress}));return Object(H.jsxs)(h,{children:[Object(H.jsx)(p,{style:{color:"green"},children:"Connected "}),Object(H.jsxs)(p,{style:{marginTop:"15px"},children:["ChainId: ",e]}),Object(H.jsxs)(p,{style:{marginBottom:"15px"},children:["Account: ",n]}),Object(H.jsx)(N,{}),""===a||""===r?Object(H.jsx)(H.Fragment,{}):Object(H.jsx)(G,{})]})},V=n(127);var Y=function(){var t=Object(b.b)(),e=t.chainId,n=t.account,a=t.library,r=Object(o.useState)(!1),i=Object(K.a)(r,2),c=i[0],u=i[1],s=Object(o.useState)(!1),d=Object(K.a)(s,2),l=d[0],j=d[1],f=Object(o.useState)(!1),h=Object(K.a)(f,2),m=h[0],g=h[1],y=Object(x.b)(),w=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.swapInput})),A=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.swapExpect})),E=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),k=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress})),B=a.getSigner(n).connectUnchecked(),T=new q.a.Contract(W,z,B),C=E===M.d[e].address?void 0:new q.a.Contract(E,R,a),L=k===M.d[e].address?void 0:new q.a.Contract(k,R,a),U=void 0!==w?q.a.utils.parseEther(w):void 0,_=[E,k],F=n,N=Math.floor(Date.now()/1e3)+1200;function J(){C.approve(W,V.a).then((function(t){u(!0),t.wait().then((function(){u(!1),j(!0)}))}))}function X(){L.approve(W,V.a).then((function(t){u(!0),t.wait().then((function(){u(!1),g(!0)}))}))}void 0===U||U.eq(0)?y(D("0")):T.getAmountsOut(U,_,{gasLimit:1e7}).then((function(t){y(D(q.a.utils.formatEther(t[1])))})),void 0!==C?C.allowance(n,W).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(V.a.div(100))&&!l&&j(!0)})):!l&&j(!0),void 0!==L?L.allowance(n,W).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(V.a.div(100))&&!m&&g(!0)})):!m&&g(!0);var G=void 0!==C&&void 0!==L?function(){T.swapExactTokensForTokens(U,"0",_,F,N,{gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(t){u(!0),t.wait().then((function(){a.getBalance(n).then((function(t){return y(P(q.a.utils.formatEther(t)))})),a.getBalance(n).then((function(t){return y(I(q.a.utils.formatEther(t)))})),u(!1),y(S("0"))}))}))}:function(){T.swapExactETHForTokens("0",_,F,N,{value:U,gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(t){u(!0),t.wait().then((function(){E!==M.d[e].address?C.balanceOf(n).then((function(t){return y(P(q.a.utils.formatEther(t)))})):a.getBalance(n).then((function(t){return y(P(q.a.utils.formatEther(t)))})),k!==M.d[e].address?L.balanceOf(n).then((function(t){return y(I(q.a.utils.formatEther(t)))})):a.getBalance(n).then((function(t){return y(I(q.a.utils.formatEther(t)))})),u(!1),y(S("0"))}))}))};return Object(H.jsxs)(O,{style:{marginTop:"10px",border:"2px solid"},children:[Object(H.jsx)(v,{children:"\uc2a4\uc651"}),c?Object(H.jsx)(p,{children:"Pending..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(p,{children:["Input :",Object(H.jsx)("input",{type:"text",onChange:function(t){0!==t.target.value.length?y(S(t.target.value)):y(S("0"))}})]})})}),Object(H.jsxs)(p,{children:["Output : ",A]}),l&&m?Object(H.jsx)("button",{style:{color:"green"},type:"button",onClick:G,children:"Swap"}):l?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:X,children:"Approve B"}):m?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:J,children:"Approve A"}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:J,children:"Approve A"}),Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:X,children:"Approve B"})]})]})]})};var Z=function(){var t=Object(x.b)(),e=Object(b.b)(),n=e.account,a=e.chainId,r=e.library,i=Object(o.useState)(!1),c=Object(K.a)(i,2),u=c[0],s=c[1],d=Object(o.useState)(!1),l=Object(K.a)(d,2),j=l[0],f=l[1],h=Object(o.useState)(!1),m=Object(K.a)(h,2),g=m[0],y=m[1],w=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.addInput})),A=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.addInput2})),E=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),k=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress})),B=null===r||void 0===r?void 0:r.getSigner(n).connectUnchecked(),T=E===M.d[a].address?void 0:new q.a.Contract(E,R,r),C=k===M.d[a].address?void 0:new q.a.Contract(k,R,r),S=new q.a.Contract(W,z,B),D=void 0!==w?q.a.utils.parseEther(w):void 0,_=void 0!==A?q.a.utils.parseEther(A):void 0,F=n,N=Math.floor(Date.now()/1e3)+1200;function J(){T.approve(W,V.a).then((function(t){y(!0),t.wait().then((function(){y(!1),s(!0)}))}))}function X(){C.approve(W,V.a).then((function(t){y(!0),t.wait().then((function(){y(!1),f(!0)}))}))}void 0!==T?T.allowance(n,W).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(V.a.div(100))&&!u&&s(!0)})):!u&&s(!0),void 0!==C?C.allowance(n,W).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(V.a.div(100))&&!j&&f(!0)})):!j&&f(!0);var G=void 0===T||void 0===C?function(){S.addLiquidityETH(void 0===T?k:E,_,"0","0",F,N,{value:D,gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(e){y(!0),e.wait().then((function(){void 0===T?(C.balanceOf(n).then((function(e){return t(I(q.a.utils.formatEther(e)))})),r.getBalance(n).then((function(e){return t(P(q.a.utils.formatEther(e)))}))):(T.balanceOf(n).then((function(e){return t(P(q.a.utils.formatEther(e)))})),r.getBalance(n).then((function(e){return t(I(q.a.utils.formatEther(e)))}))),y(!1)}))}))}:function(){S.addLiquidity(E,k,D,_,"0","0",F,N,{gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(e){y(!0),e.wait().then((function(){T.balanceOf(n).then((function(e){return t(P(q.a.utils.formatEther(e)))})),C.balanceOf(n).then((function(e){return t(I(q.a.utils.formatEther(e)))})),y(!1)}))}))};return Object(H.jsxs)(O,{children:[Object(H.jsx)(v,{children:"\uc720\ub3d9\uc131 \uacf5\uae09"}),g?Object(H.jsx)("button",{style:{color:"pink"},children:"Pending..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(p,{children:["Token A Input :",Object(H.jsx)("input",{type:"text",onChange:function(e){0!==e.target.value.length?t(L(e.target.value)):t(L("0"))}})]})})}),Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(p,{children:["Token B Input :",Object(H.jsx)("input",{type:"text",onChange:function(e){0!==e.target.value.length?t(U(e.target.value)):t(U("0"))}})]})})}),u&&j?Object(H.jsx)("button",{style:{color:"green"},type:"button",onClick:G,children:"Add Liquidity"}):u?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:X,children:"Approve B"}):j?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:J,children:"Approve A"}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:J,children:"Approve A"}),Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:X,children:"Approve B"})]})]})]})};var $=function(){var t=Object(b.b)(),e=t.chainId,n=t.account,a=t.library,r=Object(o.useState)(!1),i=Object(K.a)(r,2),c=i[0],u=i[1],s=Object(o.useState)(!1),d=Object(K.a)(s,2),l=d[0],j=d[1],f=Object(x.b)(),h=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.LPBalance})),p=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),m=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress})),g=null===a||void 0===a?void 0:a.getSigner(n).connectUnchecked(),y=new q.a.Contract(W,z,g),w=p===M.d[e].address?void 0:new q.a.Contract(p,R,a),A=m===M.d[e].address?void 0:new q.a.Contract(m,R,a),E=new M.c(e,p,18),k=new M.c(e,m,18),B=E.sortsBefore(k)?[E,k]:[k,E],T=Object(J.c)(M.a,Object(X.a)(["bytes"],[Object(X.b)(["address","address"],[B[0].address,B[1].address])]),M.b),C=new q.a.Contract(T,R,g);C.allowance(n,W).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(V.a.div(100))&&!l&&j(!0)}));var S=q.a.utils.parseEther(h),D=n,L=Math.floor(Date.now()/1e3)+1200,U=void 0===w||void 0===A?function(){y.removeLiquidityETH(void 0===w?m:p,S,"0","0",D,L,{gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(t){u(!0),t.wait().then((function(){void 0===w?(A.balanceOf(n).then((function(t){return f(I(q.a.utils.formatEther(t)))})),a.getBalance(n).then((function(t){return f(P(q.a.utils.formatEther(t)))}))):(w.balanceOf(n).then((function(t){return f(P(q.a.utils.formatEther(t)))})),a.getBalance(n).then((function(t){return f(I(q.a.utils.formatEther(t)))}))),u(!1)}))}))}:function(){y.removeLiquidity(p,m,S,"0","0",D,L).then((function(t){u(!0),t.wait().then((function(){p.balanceOf(n).then((function(t){return f(P(q.a.utils.formatEther(t)))})),m.balanceOf(n).then((function(t){return f(I(q.a.utils.formatEther(t)))})),u(!1)}))}))};return Object(H.jsxs)(O,{children:[Object(H.jsx)(v,{children:"\uc720\ub3d9\uc131 \uc81c\uac70"}),c?Object(H.jsx)("button",{style:{color:"pink"},children:"Pending..."}):l?Object(H.jsx)("button",{style:{color:"green"},type:"button",onClick:U,children:"Remove Liquidity"}):Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:function(){C.approve(W,V.a).then((function(t){u(!0),t.wait().then((function(){u(!1),j(!0)}))}))},children:"Approve"})]})};var tt=function(){var t=Object(b.b)(),e=t.chainId,n=t.library,a=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),r=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress})),i=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.LPBalance})),c=Object(o.useState)(0),u=Object(K.a)(c,2),s=u[0],d=u[1],l=a===M.d[e].address?void 0:new q.a.Contract(a,R,n),j=r===M.d[e].address?void 0:new q.a.Contract(r,R,n),f=void 0===l?new M.c(e,M.d[e].address,18):new M.c(e,a,18),h=void 0===j?new M.c(e,M.d[e].address,18):new M.c(e,r,18),m=f.sortsBefore(h)?[f,h]:[h,f],g=Object(J.c)(M.a,Object(X.a)(["bytes"],[Object(X.b)(["address","address"],[m[0].address,m[1].address])]),M.b);new q.a.Contract(g,R,n).totalSupply().then((function(t){q.a.utils.formatEther(t)!==s&&d(q.a.utils.formatEther(t))}));var y=i/s*100,w=y>=.01?y.toFixed(2):">0.01";return Object(H.jsxs)(O,{children:[Object(H.jsx)(v,{children:"-------Pool \uc815\ubcf4-------"}),Object(H.jsxs)(p,{children:["\uc720\ub3d9\uc131 \ubcf4\uc720 \ube44\uc728  : ",w,"%"]})]})};var et,nt,at,rt,it=function(){var t=Object(b.b)(),e=t.library,n=t.activate,a=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),r=Object(x.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress}));return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(p,{style:{fontSize:"20px"},children:"Dong Chang Swap"}),e?Object(H.jsxs)(h,{style:{gap:"30px"},children:[Object(H.jsx)(Q,{}),""!==a&&""!==r?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Y,{}),Object(H.jsx)(Z,{}),Object(H.jsx)($,{}),Object(H.jsx)(tt,{})]}):Object(H.jsx)(H.Fragment,{})]}):Object(H.jsx)("button",{type:"button",onClick:function(){n(j)},children:"Connect"})]})},ct=f.a.div(et||(et=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),ot=(Object(f.a)(ct)(nt||(nt=Object(l.a)(["\n  width: 100%;\n  align-items: center;\n"]))),f.a.div(at||(at=Object(l.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n"])),(function(t){var e=t.gap;return("sm"===e?"8px":"md"===e&&"12px")||"lg"===e&&"24px"||e}),(function(t){var e=t.justify;return e&&e}))),ut=f.a.div(rt||(rt=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-family: 'Spoqa Han Sans Neo', serif;\n"])));var st=function(){return Object(H.jsx)(ut,{children:Object(H.jsx)(ot,{gap:"lg",children:Object(H.jsx)(it,{})})})},dt=n(77),lt=n(26),bt={tokenABalance:"0",tokenBBalance:"0",LPBalance:"0",swapInput:"0",swapOutput:"0",swapExpect:"0",addInput:"0",addInput2:"0",tokenAAddress:"",tokenBAddress:""},jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(lt.a)(Object(lt.a)({},t),{},{tokenABalance:e.tokenABalance});case g:return Object(lt.a)(Object(lt.a)({},t),{},{tokenBBalance:e.tokenBBalance});case y:return Object(lt.a)(Object(lt.a)({},t),{},{LPBalance:e.LPBalance});case w:return Object(lt.a)(Object(lt.a)({},t),{},{swapInput:e.swapInput});case A:return Object(lt.a)(Object(lt.a)({},t),{},{swapOutput:e.swapOutput});case E:return Object(lt.a)(Object(lt.a)({},t),{},{swapExpect:e.swapExpect});case B:return Object(lt.a)(Object(lt.a)({},t),{},{addInput2:e.addInput2});case k:return Object(lt.a)(Object(lt.a)({},t),{},{addInput:e.addInput});case T:return Object(lt.a)(Object(lt.a)({},t),{},{tokenAAddress:e.tokenAAddress});case C:return Object(lt.a)(Object(lt.a)({},t),{},{tokenBAddress:e.tokenBAddress});default:return t}},ft=n(97),ht=Object(dt.createStore)(jt,Object(ft.composeWithDevTools)()),Ot=n(76);var pt=function(t){var e=new Ot.a(t);return e.pollingInterval=12e3,e};d.a.render(Object(H.jsx)(u.a.StrictMode,{children:Object(H.jsx)(b.a,{getLibrary:pt,children:Object(H.jsx)(x.a,{store:ht,children:Object(H.jsx)(st,{})})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.53445f23.chunk.js.map