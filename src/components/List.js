import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import humanizeDuration from 'humanize-duration'
import Item from './Item'
import {
  feedbacksLimitedList,
} from '../selectors'
import actions from '../actions'

const Root = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

const selector = createSelector(
  feedbacksLimitedList,
  list => ({
    feedbacks: list.map((item) => {
      const { rating, author, body, title, attachments, statistics, closed, lastActivityAt, createdAt } = item
      let avatar
      let image
      try {
        avatar = author.avatar.variants.profile.url
      } catch {}
      try {
        image = attachments[0].variants.profile.url
      } catch {}
      // TODO: add toCamelCase function to data
      const { voteCount, answerCount } = statistics
  
      const authorTime = humanizeDuration(new Date() - new Date(lastActivityAt), { language: 'de', largest: 1 })
      const commentTime = humanizeDuration(new Date() - new Date(createdAt), { language: 'de', largest: 1 })

      return {
        author: {
          ...author,
          avatar,
          time: authorTime,
        },
        comment: {
          title,
          text: body,
          image,
          rating,
        },
        bottom: {
          closed,
          voteCount: voteCount,
          answerCount: answerCount,
          time: commentTime,
        },
      }
    })
  })
)

export class List extends Component {
  componentDidMount() {
    this.props.load()
  }
  
  render() {
    return (
      <Root>
        {this.props.feedbacks.map((data, i) => <Item
          key={i}
          {...data}
        />)}
      </Root>
    );
  }
}

export default connect(
  state => selector(state),
  actions,
)(List);
