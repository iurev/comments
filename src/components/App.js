import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { main } from '../themes'
import store from '../store'
import List from './List'
import ShowMore from './ShowMore'


const Root = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  background: ${(props) => props.theme.darkBg};
  padding-bottom: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .iurev-space-comments * {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  .iurev-space-comments {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const App = () => (
  <ThemeProvider theme={main}>
    <Provider store={store}>
      <Root>
        <div className="iurev-space-comments">
          <List />
          <ShowMore />
        </div>
      </Root>
    </Provider>
  </ThemeProvider>
)

export default App
