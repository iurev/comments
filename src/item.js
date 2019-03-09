import React, { Component } from 'react';
import styled from 'styled-components'
import Author from './author'
import Comment from './comment'
import Bottom from './bottom'

const Root = styled.article`
  background: ${props => props.theme.lightBg};
  margin: 10px;
  padding: 16px;
`

class Item extends Component {
  render() {
    const { comment: { author, body, title, attachments, statistics, closed } } = this.props
    const avatar = attachments[0].variants.profile.url // TODO: try/catch
    // TODO: add toCamelCase function to data
    const { vote_count, answer_count } = statistics
    return (
      <Root>
        <Author author={{ ...author, avatar }} />
        <Comment title={title} text={body} />
        <Bottom voteCount={vote_count} answerCount={answer_count} closed={closed} />
      </Root>
    );
  }
}

export default Item;
