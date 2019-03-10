import React, { Component } from 'react';
import styled from 'styled-components'
import Author from './Author'
import Comment from './Comment'
import Bottom from './Bottom'

const Root = styled.article`
  background: ${props => props.theme.lightBg};
  margin: 10px 0;
  padding: 16px;
  width: 100%;
`

class Item extends Component {
  render() {
    const { author, comment, bottom } = this.props.data

    return (
      <Root>
        <Author {...author} />
        <Comment {...comment} />
        <Bottom {...bottom} />
      </Root>
    );
  }
}

export default Item;
