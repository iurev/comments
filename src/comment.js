import React, { Component } from 'react';
import styled from 'styled-components'

const Root = styled.div`
`

class Item extends Component {
  render() {
    return (
      <Root>
        {this.props.comment}
      </Root>
    );
  }
}

export default Item;
