import React, { Component } from 'react';
import styled from 'styled-components'
import Author from './author'
import Comment from './comment'
import Bottom from './bottom'

const Root = styled.article`
`

class Item extends Component {
  render() {
    const { comment: { author, body } } = this.props
    return (
      <Root>
        <Author author={author} />
        <Comment comment={body} />
        {/* <Bottom stats={comment.stats} /> */}
      </Root>
    );
  }
}

export default Item;
