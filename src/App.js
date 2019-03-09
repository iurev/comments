import React, { Component } from 'react';
import styled from 'styled-components'
import reset from 'styled-reset'
import List from './list'
import Load from './load'

const Root = styled.div`
  .iurev-space-comments {
    ${reset}
  }
`

class App extends Component {
  render() {
    return (
      <Root className="iurev-space-comments">
        <List />
        <Load />
      </Root>
    );
  }
}

export default App;
