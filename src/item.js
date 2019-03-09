import React, { Component } from 'react';
import styled from 'styled-components'
import User from './user'
import Comment from './comment'
import Bottom from './bottom'

const Root = styled.article`
`

class Item extends Component {
  render() {
    return (
      <Root>
        <User user={this.props.comment.user} />
        <Comment comment={this.props.comment.title} />
        <Bottom stats={this.props.comment.stats} />
      </Root>
    );
  }
}

export default Item;
