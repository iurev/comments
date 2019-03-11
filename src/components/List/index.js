import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import humanizeDuration from 'humanize-duration'
import ListView from './view'
import {
  feedbacksLimitedList,
} from '../../selectors'
import actions from '../../actions'

const HUMANIZE_CONFIG = { language: 'de', largest: 1 }

const humanize = (date) => (
  humanizeDuration(new Date() - new Date(date), HUMANIZE_CONFIG)
)

const getAuthor = (item) => {
  const { author, lastActivityAt } = item
  let avatar
  try {
    avatar = author.avatar.variants.profile.url
  } catch {}
  return {
    ...author,
    avatar,
    time: humanize(lastActivityAt),
  }
}

const getComment = (item) => {
  const { rating, body, title, attachments } = item
  let image
  try {
    image = attachments[0].variants.profile.url
  } catch {}

  return {
    title,
    text: body,
    image,
    rating,
  }
}

const getBottom = (item) => {
  const { statistics, closed, createdAt } = item
  const { voteCount, answerCount } = statistics

  return {
    closed,
    voteCount,
    answerCount,
    time: humanize(createdAt),
  }
}

const selector = createSelector(
  feedbacksLimitedList,
  list => ({
    feedbacks: list.map((item) => {
      return {
        author: getAuthor(item),
        comment: getComment(item),
        bottom: getBottom(item),
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
      <ListView feedbacks={this.props.feedbacks} />
    );
  }
}

export default connect(
  state => selector(state),
  actions,
)(List);
