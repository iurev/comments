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
      const { author, body, title, attachments, statistics, closed, last_activity_at, created_at } = item
      let avatar
      try {
        avatar = attachments[0].variants.profile.url
      } catch {}
      // TODO: add toCamelCase function to data
      const { vote_count, answer_count } = statistics
  
      const authorTime = humanizeDuration(new Date() - new Date(last_activity_at), { language: 'de', largest: 1 })
      const commentTime = humanizeDuration(new Date() - new Date(created_at), { language: 'de', largest: 1 })

      return {
        author: {
          ...author,
          avatar,
          time: authorTime,
        },
        comment: {
          title,
          text: body,
        },
        bottom: {
          closed,
          voteCount: vote_count,
          answerCount: answer_count,
          time: commentTime,
        },
      }
    })
  })
)

class List extends Component {
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
