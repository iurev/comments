import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
// import reset from 'styled-reset' TODO: use reset-css later
import List from './list'
import Load from './load'
import { main } from './theme'

const Root = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  background: ${props => props.theme.darkBg};
  padding-bottom: 10px;

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
        <Root>
          <div className="iurev-space-comments">
            <List />
            <Load />
          </div>
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
