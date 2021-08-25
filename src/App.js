import React from 'react'
import Main from "./components/Main";
import {AutoColumn} from "./components/Column";
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: 'Spoqa Han Sans Neo', serif;
`

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
  position: fixed;
  background-color: #1a202e;
  color:white;
`

function App() {
    return (
        <AppWrap>
            <Wrap>
                <AutoColumn gap={"lg"}>
                    <Main />
                </AutoColumn>
            </Wrap>
        </AppWrap>
    )
}

export default App