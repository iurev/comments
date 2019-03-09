import React, { Component } from 'react';
import styled from 'styled-components'

const Root = styled.div`
`

class Author extends Component {
  render() {
    return (
      <Root>
        {this.props.author.name}
      </Root>
    );
  }
}

export default Author;
