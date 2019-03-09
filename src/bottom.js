import React, { Component } from 'react';
import styled from 'styled-components'

const Root = styled.div`
`

class Bottom extends Component {
  render() {
    return (
      <Root>
        {this.props.stats}
      </Root>
    );
  }
}

export default Bottom;
