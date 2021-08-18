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

function App() {
    return (
        <Wrap>
            <AutoColumn gap={"lg"}>
                <Main />
            </AutoColumn>
        </Wrap>
    )
}

export default App