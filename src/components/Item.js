import React, { Component } from 'react';
import styled from 'styled-components'
import humanizeDuration from 'humanize-duration'
import Author from './Author'
import Comment from './Comment'
import Bottom from './Bottom'

const Root = styled.article`
  background: ${props => props.theme.lightBg};
  margin: 10px;
  padding: 16px;
`

class Item extends Component {
  render() {
    const { comment: { author, body, title, attachments, statistics, closed, last_activity_at, created_at } } = this.props
    const avatar = attachments[0].variants.profile.url // TODO: try/catch
    // TODO: add toCamelCase function to data
    const { vote_count, answer_count } = statistics

    const authorTime = humanizeDuration(new Date() - new Date(last_activity_at), { language: 'de', largest: 1 })
    const commentTime = humanizeDuration(new Date() - new Date(created_at), { language: 'de', largest: 1 })

    return (
      <Root>
        <Author author={{ ...author, avatar, time: authorTime }} />
        <Comment title={title} text={body} />
        <Bottom
          voteCount={vote_count}
          answerCount={answer_count}
          closed={closed}
          time={commentTime}
        />
      </Root>
    );
  }
}

export default Item;
