import React, { Component } from 'react';
import styled from 'styled-components'
import Html from 'dangerously-set-inner-html'

const Root = styled.div`
`

class Item extends Component {
  render() {
    return (
      <Root>
        <Html html={this.props.comment} />
      </Root>
    );
  }
}

export default Item;
