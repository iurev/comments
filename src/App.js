import React, { Component } from 'react';
import styled from 'styled-components'
// import reset from 'styled-reset' TODO: use reset-css later
import List from './list'
import Load from './load'

const Root = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .iurev-space-comments * {
    font-family: 'Open Sans', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <Root>
        <div className="iurev-space-comments">
          <List />
          <Load />
        </div>
      </Root>
    );
  }
}

export default App;
