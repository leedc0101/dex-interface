import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector, torusConnector } from '../connector';
import { ModalContainer, GreyButton, StyledButton, Text, Wrap, Modal } from './style';
import Account from './Account';
import Swap from './Swap';
import AddLiquidityButton from './AddLiquidity';
import RemoveLiquidityButton from './RemoveLiquidity';
import { useTabs, useTokenAddress } from '../hooks';
import metamaskImg from '../assets/metamask.png';
import torusImg from '../assets/torus.png';
import close from '../assets/close.svg';
import { Row, RowBetween } from './Row';
import { AutoColumn } from './Column';
import { AnimatePresence } from 'framer-motion';

function Main() {
  const { library, activate } = useWeb3React();
  const { tokenAAddress, tokenBAddress } = useTokenAddress();
  const [connectActive, setConnectActive] = useState(false);

  const contentList = [
    { tab: 'Swap', content: <Swap /> },
    { tab: 'Add', content: <AddLiquidityButton /> },
    { tab: 'Remove', content: <RemoveLiquidityButton /> },
  ];

  const { contentItem, contentChange } = useTabs(0, contentList);

  const connectActivate = function () {
    !connectActive && setConnectActive(true);
  };

  return (
    <>
      <AnimatePresence>
        {connectActive && (
          <ModalContainer>
            <Modal animate={{ scale: 2 }} exit={{ scale: 0 }}>
              <AutoColumn gap="sm" style={{ margin: '10px' }}>
                <RowBetween>
                  <div></div>
                  <div
                    onClick={() => {
                      connectActive && setConnectActive(false);
                    }}
                  >
                    <img src={close} style={{ height: '10px', width: '10px' }} />
                  </div>
                </RowBetween>
                <Row style={{ justifyContent: 'center' }}>
                  <div
                    onClick={() => {
                      activate(injectedConnector);
                      connectActive && setConnectActive(false);
                    }}
                  >
                    <img src={metamaskImg} style={{ height: '30px', width: '30px' }} />
                  </div>
                  <div
                    onClick={() => {
                      activate(torusConnector);
                      connectActive && setConnectActive(false);
                    }}
                  >
                    <img src={torusImg} style={{ height: '30px', width: '30px' }} />
                  </div>
                </Row>
                <div></div>
              </AutoColumn>
            </Modal>
          </ModalContainer>
        )}
      </AnimatePresence>
      <Text style={{ fontSize: '30px', marginTop: '30px' }}>Dong Chang Swap</Text>
      {library ? (
        <Wrap style={{ gap: '30px' }}>
          <Account />
          <div style={{ width: '100%' }}>
            {tokenAAddress !== '' && tokenBAddress !== '' ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  {contentList.map((section, index) => {
                    return (
                      <GreyButton style={{ flexGrow: '1' }} onClick={() => contentChange(index)}>
                        {section.tab}
                      </GreyButton>
                    );
                  })}
                </div>
                <div>{contentItem.content}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Wrap>
      ) : (
        <StyledButton type="button" onClick={connectActivate}>
          Connect
        </StyledButton>
      )}
    </>
  );
}

export default Main;
