import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
// import reset from 'styled-reset' TODO: use reset-css later
import { Provider } from 'react-redux'
import List from './List'
import ShowMore from './ShowMore'
import { main } from '../themes'
import store from '../store'

const Root = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  background: ${props => props.theme.darkBg};
  padding-bottom: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .iurev-space-comments * {
    font-family: 'Open Sans', sans-serif;
  }

  .iurev-space-comments {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
