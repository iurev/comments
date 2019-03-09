import React, { Component } from 'react';
import styled from 'styled-components'
import Author from './author'
import Comment from './comment'

const Root = styled.article`
  background: ${props => props.theme.lightBg};
  margin: 10px;
  padding: 16px;
`

class Item extends Component {
  render() {
    const { comment: { author, body, title, attachments } } = this.props
    const avatar = attachments[0].variants.profile.url // TODO: try/catch
    return (
      <Root>
        <Author author={{ ...author, avatar }} />
        <Comment title={title} text={body} />
        {/* <Bottom stats={comment.stats} /> */}
      </Root>
    );
  }
}

export default Item;
