import { createSelector } from 'reselect'
import camelify from 'camelcase-keys-recursive'

export const feedbacksRoot = state => state.feedbacks;

export const feedbacksList = createSelector(
  feedbacksRoot,
  feedbacks => feedbacks.list
)

export const normalizedFeedbacks = createSelector(
  feedbacksList,
  feedbacks => camelify(feedbacks)
)

export const feedbacksLimit = createSelector(
  feedbacksRoot,
  feedbacks => feedbacks.limit
)

export const feedbacksLimitedList = createSelector(
  normalizedFeedbacks,
  feedbacksLimit,
  (list, limit) => list.slice(0, limit)
)
