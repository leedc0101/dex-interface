(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{133:function(t,e){},143:function(t,e,n){"use strict";n.r(e);var a,c,i,r,o,s,u,d,l,j,b=n(4),h=n.n(b),f=n(77),p=n.n(f),O=n(30),x=n(36),m=n(34),v=n(103),g=n(105),A=new v.a({supportedChainIds:[1,3,4,5,42]}),y=new g.a({chainId:3,initOptions:{network:{host:"ropsten",chainId:3}}}),k=n(31),E=n(148),B=n(8),w=k.a.div(a||(a=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: normal;\n  align-items: center;\n"]))),C=k.a.div(c||(c=Object(O.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: #111622;\n  gap: normal;\n  align-items: center;\n  //border: 2px solid;\n  width: 100%;\n  border-radius: 8px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),D=k.a.div(i||(i=Object(O.a)(["\n  text-align: center;\n  font-size: 13px;\n"]))),I=k.a.div(r||(r=Object(O.a)(["\n  text-align: center;\n  font-size: 17px;\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),q=Object(k.a)(E.a.div)(o||(o=Object(O.a)(["\n  background-color: #8EC5FC;\n  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color:white;\n  font-size: 13px;\n  height: 60px;\n  width: 60px;\n"]))),T=k.a.button(s||(s=Object(O.a)(["\n  background-color: #8EC5FC;\n  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n\n  border-radius: 8px;\n  border: none;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  padding: 10px;\n  font-size: 13px;\n"]))),S=Object(k.a)(T)(u||(u=Object(O.a)(["\n  background-color: #6C7284;\n  background-image: none;\n  border-radius: 3px;\n  border:0.2px solid #565A69;\n"])));function U(){return Object(B.jsx)(q,{animate:{scale:[1,1.5,1.5,1.5,1,1],rotate:[0,0,360,360,360,0],borderRadius:["20%","20%","50%","50%","50%","20%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],loop:1/0,repeatDelay:1},children:"\uc9c4\ud589\uc911.."})}var L=k.a.input(d||(d=Object(O.a)(["\n  color:white;\n  background:inherit;\n  border:none;\n"]))),P=k.a.div(l||(l=Object(O.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 0;\n"]))),N=Object(k.a)(E.a.div)(j||(j=Object(O.a)(["\n    height: 20%;\n    width: 20%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #fff;\n    z-index: 1;\n    border-radius: 8px;\n"]))),F=n(27),R="UPDATE_TOKEN_A",K="UPDATE_TOKEN_B",Q="UPDATE_LP",z="UPDATE_SWAP_INPUT",V="UPDATE_SWAP_OUTPUT",J="UPDATE_SWAP_EXPECT",Z="UPDATE_ADD_INPUT",H="UPDATE_ADD_INPUT_2",X="UPDATE_TOKEN_A_ADDRESS",Y="UPDATE_TOKEN_B_ADDRESS",M=function(t){return{type:R,tokenABalance:t}},W=function(t){return{type:K,tokenBBalance:t}},G=function(t){return{type:z,swapInput:t}},_=function(t){return{type:J,swapExpect:t}},$=function(t){return{type:Z,addInput:t}},tt=function(t){return{type:H,addInput2:t}},et=function(t){return{type:X,tokenAAddress:t}},nt=function(t){return{type:Y,tokenBAddress:t}},at=n(13),ct=n(28);var it=function(){var t=Object(F.b)(),e=Object(m.b)().chainId;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("form",{children:Object(B.jsx)("label",{children:Object(B.jsxs)(D,{children:["\ud1a0\ud070 A \uc8fc\uc18c :",Object(B.jsx)(L,{type:"text",onChange:function(n){if(0!==n.target.value.length)try{at.a.utils.getAddress(n.target.value),t(et(n.target.value))}catch(a){"eth"===n.target.value&&t(et(ct.d[e].address))}}})]})})}),Object(B.jsx)("form",{children:Object(B.jsx)("label",{children:Object(B.jsxs)(D,{children:["\ud1a0\ud070 B \uc8fc\uc18c :",Object(B.jsx)(L,{type:"text",onChange:function(n){if(0!==n.target.value.length)try{at.a.utils.getAddress(n.target.value),t(nt(n.target.value))}catch(a){"eth"===n.target.value&&t(nt(ct.d[e].address))}}})]})})})]})},rt="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",ot=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)","function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)","function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,address to,uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)","function removeLiquidity(address tokenA, address tokenB, uint liquidity, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB)","function removeLiquidityETH(address token,uint liquidity, uint amountTokenMin,uint amountETHMin,address to, uint deadline) external returns (uint amountToken, uint amountETH)"],st=["function balanceOf(address account) external view returns (uint)","function totalSupply() external view returns (uint)","function approve(address spender, uint rawAmount) external returns (bool)","function allowance(address owner, address spender) public view returns (uint256)","function decimals() public view returns (uint8)"],ut=n(16),dt=n(56),lt=function(){return{tokenAAddress:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),tokenBAddress:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress}))}},jt=function(){return{tokenABalance:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.tokenABalance})),tokenBBalance:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.tokenBBalance})),LPBalance:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.LPBalance}))}},bt=function(){var t=lt(),e=t.tokenAAddress,n=t.tokenBAddress,a=Object(m.b)(),c=a.chainId,i=a.library,r=a.account,o=i.getSigner(r).connectUnchecked();return{tokenAContract:e===ct.d[c].address?void 0:new at.a.Contract(e,st,o),tokenBContract:n===ct.d[c].address?void 0:new at.a.Contract(n,st,o)}},ht=function(){var t=Object(m.b)(),e=t.chainId,n=t.library,a=t.account,c=lt(),i=c.tokenAAddress,r=c.tokenBAddress,o=bt(),s=o.tokenAContract,u=o.tokenBContract,d=void 0===s?new ct.c(e,ct.d[e].address,18):new ct.c(e,i,18),l=void 0===u?new ct.c(e,ct.d[e].address,18):new ct.c(e,r,18),j=d.sortsBefore(l)?[d,l]:[l,d],b=Object(ut.c)(ct.a,Object(dt.a)(["bytes"],[Object(dt.b)(["address","address"],[j[0].address,j[1].address])]),ct.b),h=n.getSigner(a).connectUnchecked();return{pairTokenContract:new at.a.Contract(b,st,h)}},ft=function(){var t=Object(m.b)(),e=t.account,n=t.library.getSigner(e).connectUnchecked();return{routerContract:new at.a.Contract(rt,ot,n)}};var pt=function(){var t=Object(F.b)(),e=Object(m.b)(),n=e.chainId,a=e.account,c=e.library,i=jt(),r=i.tokenABalance,o=i.tokenBBalance,s=i.LPBalance,u=lt(),d=u.tokenAAddress,l=u.tokenBAddress,j=function(){var t=bt(),e=t.tokenAContract,n=t.tokenBContract,a=Object(b.useState)(0),c=Object(x.a)(a,2),i=c[0],r=c[1],o=Object(b.useState)(0),s=Object(x.a)(o,2),u=s[0],d=s[1];return null===e||void 0===e||e.decimals().then((function(t){i!==t&&r(t)})),null===n||void 0===n||n.decimals().then((function(t){u!==t&&d(t)})),{ADecimals:i,BDecimals:u}}(),h=j.ADecimals,f=j.BDecimals,p=bt(),O=p.tokenAContract,v=p.tokenBContract,g=ht().pairTokenContract;return d!==ct.d[n].address?O.balanceOf(a).then((function(e){return t(M(at.a.utils.formatUnits(e,h)))})):c.getBalance(a).then((function(e){return t(M(at.a.utils.formatEther(e)))})),l!==ct.d[n].address?v.balanceOf(a).then((function(e){return t(W(at.a.utils.formatUnits(e,f)))})):c.getBalance(a).then((function(e){return t(W(at.a.utils.formatEther(e)))})),null===g||void 0===g||g.balanceOf(a).then((function(e){at.a.utils.formatEther(e)!==s&&t(function(t){return{type:Q,LPBalance:t}}(at.a.utils.formatEther(e)))})),Object(B.jsxs)(C,{children:[Object(B.jsx)(I,{children:"\uc794\uc561 \uc815\ubcf4"}),Object(B.jsxs)(D,{children:["\ud1a0\ud070 A \uc794\uc561: ",r]}),Object(B.jsxs)(D,{children:["\ud1a0\ud070 B \uc794\uc561: ",o]}),Object(B.jsxs)(D,{children:["\uc720\ub3d9\uc131 \ud1a0\ud070 \uc794\uc561 : ",s]})]})};var Ot=function(){var t=jt().LPBalance,e=ht().pairTokenContract,n=Object(b.useState)(0),a=Object(x.a)(n,2),c=a[0],i=a[1];e.totalSupply().then((function(t){at.a.utils.formatEther(t)!==c&&i(at.a.utils.formatEther(t))}));var r=t/c*100,o=r>=.01?r.toFixed(2):"less than 0.01";return Object(B.jsxs)(C,{children:[Object(B.jsx)(I,{children:"Pool \uc815\ubcf4"}),Object(B.jsxs)(D,{children:["\uc720\ub3d9\uc131 \ubcf4\uc720 \ube44\uc728  : ",o,"%"]})]})};var xt=function(){var t=Object(m.b)(),e=t.chainId,n=t.account,a=lt(),c=a.tokenAAddress,i=a.tokenBAddress;return Object(B.jsxs)(w,{children:[Object(B.jsx)(D,{style:{color:"green"},children:"Connected "}),Object(B.jsxs)(D,{style:{marginTop:"15px"},children:["ChainId: ",e]}),Object(B.jsxs)(D,{style:{marginBottom:"15px"},children:["Account: ",n]}),Object(B.jsx)(it,{}),""===c||""===i?Object(B.jsx)(B.Fragment,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(pt,{}),Object(B.jsx)(Ot,{})]})]})},mt=n(58);var vt=function(){var t=Object(F.b)(),e=Object(m.b)(),n=e.chainId,a=e.account,c=e.library,i={input:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.swapInput})),expect:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.swapExpect}))},r=i.input,o=i.expect,s=lt(),u=s.tokenAAddress,d=s.tokenBAddress,l=bt(),j=l.tokenAContract,h=l.tokenBContract,f=ft().routerContract,p=Object(b.useState)(!1),O=Object(x.a)(p,2),v=O[0],g=O[1],A=Object(b.useState)(!1),y=Object(x.a)(A,2),k=y[0],E=y[1],w=Object(b.useState)(!1),q=Object(x.a)(w,2),S=q[0],P=q[1],N=void 0!==r?at.a.utils.parseEther(r):void 0,R=[u,d],K=a,Q=Math.floor(Date.now()/1e3)+1200;function z(){j.approve(rt,mt.b).then((function(t){g(!0),t.wait().then((function(){g(!1),E(!0)}))}))}function V(){h.approve(rt,mt.b).then((function(t){g(!0),t.wait().then((function(){g(!1),P(!0)}))}))}void 0===N||N.eq(0)?t(_("0")):f.getAmountsOut(N,R,{gasLimit:1e7}).then((function(e){t(_(at.a.utils.formatEther(e[1])))})),void 0!==j?j.allowance(a,rt).then((function(t){at.a.utils.formatEther(t)>=at.a.utils.formatEther(mt.b.div(100))&&!k&&E(!0)})):!k&&E(!0),void 0!==h?h.allowance(a,rt).then((function(t){at.a.utils.formatEther(t)>=at.a.utils.formatEther(mt.b.div(100))&&!S&&P(!0)})):!S&&P(!0);var J=void 0!==j&&void 0!==h?function(){f.swapExactTokensForTokens(N,"0",R,K,Q,{gasLimit:at.a.utils.hexlify(25e4),gasPrice:at.a.utils.parseUnits("5","gwei")}).then((function(e){g(!0),e.wait().then((function(){c.getBalance(a).then((function(e){return t(M(at.a.utils.formatEther(e)))})),c.getBalance(a).then((function(e){return t(W(at.a.utils.formatEther(e)))})),g(!1),t(G("0"))}))}))}:function(){f.swapExactETHForTokens("0",R,K,Q,{value:N,gasLimit:at.a.utils.hexlify(25e4),gasPrice:at.a.utils.parseUnits("5","gwei")}).then((function(e){g(!0),e.wait().then((function(){u!==ct.d[n].address?j.balanceOf(a).then((function(e){return t(M(at.a.utils.formatEther(e)))})):c.getBalance(a).then((function(e){return t(M(at.a.utils.formatEther(e)))})),d!==ct.d[n].address?h.balanceOf(a).then((function(e){return t(W(at.a.utils.formatEther(e)))})):c.getBalance(a).then((function(e){return t(W(at.a.utils.formatEther(e)))})),g(!1),t(G("0"))}))}))};return Object(B.jsxs)(C,{style:{marginTop:"10px"},children:[Object(B.jsx)(I,{children:"\uc2a4\uc651"}),v?Object(B.jsx)(U,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("form",{children:Object(B.jsx)("label",{children:Object(B.jsxs)(D,{children:["Input :",Object(B.jsx)(L,{type:"text",onChange:function(e){0!==e.target.value.length?t(G(e.target.value)):t(G("0"))}})]})})}),Object(B.jsxs)(D,{children:["Output : ",o]}),k&&S?Object(B.jsx)(T,{type:"button",onClick:J,children:"Swap"}):k?Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:V,children:"B \uc2b9\uc778"}):S?Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:z,children:"A \uc2b9\uc778"}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:z,children:"A \uc2b9\uc778"}),Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:V,children:"B \uc2b9\uc778"})]})]})]})};var gt=function(){var t=Object(F.b)(),e=Object(m.b)(),n=e.account,a=e.library,c=lt(),i=c.tokenAAddress,r=c.tokenBAddress,o={input:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.addInput})),input2:Object(F.c)((function(t){return null===t||void 0===t?void 0:t.addInput2}))},s=o.input,u=o.input2,d=bt(),l=d.tokenAContract,j=d.tokenBContract,h=ft().routerContract,f=Object(b.useState)(!1),p=Object(x.a)(f,2),O=p[0],v=p[1],g=Object(b.useState)(!1),A=Object(x.a)(g,2),y=A[0],k=A[1],E=Object(b.useState)(!1),w=Object(x.a)(E,2),q=w[0],S=w[1],P=void 0!==s?at.a.utils.parseEther(s):void 0,N=void 0!==u?at.a.utils.parseEther(u):void 0,R=n,K=Math.floor(Date.now()/1e3)+1200,Q=[i,r];function z(){l.approve(rt,mt.b).then((function(t){S(!0),t.wait().then((function(){S(!1),v(!0)}))}))}function V(){j.approve(rt,mt.b).then((function(t){S(!0),t.wait().then((function(){S(!1),k(!0)}))}))}void 0===P||P.eq(0)?t(tt("0")):h.getAmountsOut(P,Q,{gasLimit:1e7}).then((function(e){t(tt(at.a.utils.formatEther(e[1])))})),void 0!==l?l.allowance(n,rt).then((function(t){at.a.utils.formatEther(t)>=at.a.utils.formatEther(mt.b.div(100))&&!O&&v(!0)})):!O&&v(!0),void 0!==j?j.allowance(n,rt).then((function(t){at.a.utils.formatEther(t)>=at.a.utils.formatEther(mt.b.div(100))&&!y&&k(!0)})):!y&&k(!0);var J=void 0===l||void 0===j?function(){h.addLiquidityETH(void 0===l?r:i,N,"0","0",R,K,{value:P,gasLimit:at.a.utils.hexlify(25e4),gasPrice:at.a.utils.parseUnits("5","gwei")}).then((function(e){S(!0),e.wait().then((function(){void 0===l?(j.balanceOf(n).then((function(e){return t(W(at.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(M(at.a.utils.formatEther(e)))}))):(l.balanceOf(n).then((function(e){return t(M(at.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(W(at.a.utils.formatEther(e)))}))),S(!1)}))}))}:function(){h.addLiquidity(i,r,P,N,"0","0",R,K,{gasLimit:at.a.utils.hexlify(25e4),gasPrice:at.a.utils.parseUnits("5","gwei")}).then((function(e){S(!0),e.wait().then((function(){l.balanceOf(n).then((function(e){return t(M(at.a.utils.formatEther(e)))})),j.balanceOf(n).then((function(e){return t(W(at.a.utils.formatEther(e)))})),S(!1)}))}))};return Object(B.jsxs)(C,{children:[Object(B.jsx)(I,{children:"\uc720\ub3d9\uc131 \uacf5\uae09"}),q?Object(B.jsx)(U,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("form",{children:Object(B.jsx)("label",{children:Object(B.jsxs)(D,{children:["Token A Input :",Object(B.jsx)(L,{type:"text",onChange:function(e){0!==e.target.value.length?t($(e.target.value)):t($("0"))}})]})})}),Object(B.jsx)("form",{children:Object(B.jsx)("label",{children:Object(B.jsxs)(D,{children:["Token B Input :",Object(B.jsx)(L,{type:"text",value:u,onChange:function(e){0!==e.target.value.length?t(tt(e.target.value)):t(tt("0"))}})]})})}),O&&y?Object(B.jsx)(T,{type:"button",onClick:J,children:"Add Liquidity"}):O?Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:V,children:"Approve B"}):y?Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:z,children:"Approve A"}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:z,children:"Approve A"}),Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:V,children:"Approve B"})]})]})]})};var At,yt,kt,Et,Bt,wt=function(){var t=Object(F.b)(),e=Object(m.b)(),n=e.account,a=e.library,c=jt().LPBalance,i=lt(),r=i.tokenAAddress,o=i.tokenBAddress,s=ht().pairTokenContract,u=bt(),d=u.tokenAContract,l=u.tokenBContract,j=ft().routerContract,h=Object(b.useState)(!1),f=Object(x.a)(h,2),p=f[0],O=f[1],v=Object(b.useState)(!1),g=Object(x.a)(v,2),A=g[0],y=g[1];s.allowance(n,rt).then((function(t){at.a.utils.formatEther(t)>=at.a.utils.formatEther(mt.b.div(100))&&!A&&y(!0)}));var k=at.a.utils.parseEther(c),E=n,w=Math.floor(Date.now()/1e3)+1200,D=void 0===d||void 0===l?function(){j.removeLiquidityETH(void 0===d?o:r,k,"0","0",E,w,{gasLimit:at.a.utils.hexlify(25e4),gasPrice:at.a.utils.parseUnits("5","gwei")}).then((function(e){O(!0),e.wait().then((function(){void 0===d?(l.balanceOf(n).then((function(e){return t(W(at.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(M(at.a.utils.formatEther(e)))}))):(d.balanceOf(n).then((function(e){return t(M(at.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(W(at.a.utils.formatEther(e)))}))),O(!1)}))}))}:function(){j.removeLiquidity(r,o,k,"0","0",E,w).then((function(e){O(!0),e.wait().then((function(){r.balanceOf(n).then((function(e){return t(M(at.a.utils.formatEther(e)))})),o.balanceOf(n).then((function(e){return t(W(at.a.utils.formatEther(e)))})),O(!1)}))}))};return Object(B.jsxs)(C,{children:[Object(B.jsx)(I,{children:"\uc720\ub3d9\uc131 \uc81c\uac70"}),p?Object(B.jsx)(U,{}):A?Object(B.jsx)(T,{type:"button",onClick:D,children:"Remove Liquidity"}):Object(B.jsx)(T,{style:{color:"grey"},type:"button",onClick:function(){s.approve(rt,mt.b).then((function(t){O(!0),t.wait().then((function(){O(!1),y(!0)}))}))},children:"Approve"})]})},Ct=n.p+"static/media/torus.c33c813a.png",Dt=n.p+"static/media/close.17a94979.svg",It=k.a.div(At||(At=Object(O.a)(["\n  display: flex;\n  width: 100%;\n  justify-items: center;\n"]))),qt=Object(k.a)(It)(yt||(yt=Object(O.a)(["\n  justify-content: space-between;\n"]))),Tt=k.a.div(kt||(kt=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),St=(Object(k.a)(Tt)(Et||(Et=Object(O.a)(["\n  width: 100%;\n  align-items: center;\n"]))),k.a.div(Bt||(Bt=Object(O.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: center;\n  width: 100%;\n  height: 100%;\n"])),(function(t){var e=t.gap;return("sm"===e?"8px":"md"===e&&"12px")||"lg"===e&&"24px"||e}))),Ut=n(149);var Lt,Pt,Nt=function(){var t=Object(m.b)(),e=t.library,n=t.activate,a=lt(),c=a.tokenAAddress,i=a.tokenBAddress,r=Object(b.useState)(!1),o=Object(x.a)(r,2),s=o[0],u=o[1],d=[{tab:"Swap",content:Object(B.jsx)(vt,{})},{tab:"Add",content:Object(B.jsx)(gt,{})},{tab:"Remove",content:Object(B.jsx)(wt,{})}],l=function(t,e){var n=Object(b.useState)(t),a=Object(x.a)(n,2),c=a[0],i=a[1];return{contentItem:e[c],contentChange:i}}(0,d),j=l.contentItem,h=l.contentChange;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Ut.a,{children:s&&Object(B.jsx)(P,{children:Object(B.jsx)(N,{animate:{scale:2},exit:{scale:0},children:Object(B.jsxs)(St,{gap:"sm",style:{margin:"10px"},children:[Object(B.jsxs)(qt,{children:[Object(B.jsx)("div",{}),Object(B.jsx)("div",{onClick:function(){s&&u(!1)},children:Object(B.jsx)("img",{src:Dt,style:{height:"10px",width:"10px"}})})]}),Object(B.jsxs)(It,{style:{justifyContent:"center"},children:[Object(B.jsx)("div",{onClick:function(){n(A),s&&u(!1)},children:Object(B.jsx)("img",{src:"data:image/png;base64,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",style:{height:"30px",width:"30px"}})}),Object(B.jsx)("div",{onClick:function(){n(y),s&&u(!1)},children:Object(B.jsx)("img",{src:Ct,style:{height:"30px",width:"30px"}})})]}),Object(B.jsx)("div",{})]})})})}),Object(B.jsx)(D,{style:{fontSize:"30px",marginTop:"30px"},children:"Dong Chang Swap"}),e?Object(B.jsxs)(w,{style:{gap:"30px"},children:[Object(B.jsx)(xt,{}),Object(B.jsx)("div",{style:{width:"100%"},children:""!==c&&""!==i?Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)("div",{style:{alignItems:"center",display:"flex"},children:d.map((function(t,e){return Object(B.jsx)(S,{style:{flexGrow:"1"},onClick:function(){return h(e)},children:t.tab})}))}),Object(B.jsx)("div",{children:j.content})]}):Object(B.jsx)(B.Fragment,{})})]}):Object(B.jsx)(T,{type:"button",onClick:function(){!s&&u(!0)},children:"Connect"})]})},Ft=k.a.div(Lt||(Lt=Object(O.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-family: 'Spoqa Han Sans Neo', serif;\n"]))),Rt=k.a.div(Pt||(Pt=Object(O.a)(["\n  width: 100vw;\n  height: 100vh;\n  top:0;\n  left:0;\n  position: fixed;\n  background-color: #1a202e;\n  color:white;\n"])));var Kt=function(){return Object(B.jsx)(Rt,{children:Object(B.jsx)(Ft,{children:Object(B.jsx)(St,{gap:"lg",children:Object(B.jsx)(Nt,{})})})})},Qt=n(94),zt=n(32),Vt={tokenABalance:"0",tokenBBalance:"0",LPBalance:"0",swapInput:"0",swapOutput:"0",swapExpect:"0",addInput:"0",addInput2:"0",tokenAAddress:"",tokenBAddress:""},Jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R:return Object(zt.a)(Object(zt.a)({},t),{},{tokenABalance:e.tokenABalance});case K:return Object(zt.a)(Object(zt.a)({},t),{},{tokenBBalance:e.tokenBBalance});case Q:return Object(zt.a)(Object(zt.a)({},t),{},{LPBalance:e.LPBalance});case z:return Object(zt.a)(Object(zt.a)({},t),{},{swapInput:e.swapInput});case V:return Object(zt.a)(Object(zt.a)({},t),{},{swapOutput:e.swapOutput});case J:return Object(zt.a)(Object(zt.a)({},t),{},{swapExpect:e.swapExpect});case H:return Object(zt.a)(Object(zt.a)({},t),{},{addInput2:e.addInput2});case Z:return Object(zt.a)(Object(zt.a)({},t),{},{addInput:e.addInput});case X:return Object(zt.a)(Object(zt.a)({},t),{},{tokenAAddress:e.tokenAAddress});case Y:return Object(zt.a)(Object(zt.a)({},t),{},{tokenBAddress:e.tokenBAddress});default:return t}},Zt=n(114),Ht=Object(Qt.createStore)(Jt,Object(Zt.composeWithDevTools)()),Xt=n(93);var Yt=function(t){return new Xt.a(t)};p.a.render(Object(B.jsx)(h.a.StrictMode,{children:Object(B.jsx)(m.a,{getLibrary:Yt,children:Object(B.jsx)(F.a,{store:Ht,children:Object(B.jsx)(Kt,{})})})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.cdc55048.chunk.js.map