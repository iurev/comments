import { createSelector } from 'reselect'

export const feedbacksRoot = state => state.feedbacks;

export const feedbacksList = createSelector(
  feedbacksRoot,
  feedbacks => feedbacks.list
)

export const feedbacksLimit = createSelector(
  feedbacksRoot,
  feedbacks => feedbacks.limit
)

export const feedbacksLimitedList = createSelector(
  feedbacksList,
  feedbacksLimit,
  (list, limit) => list.slice(0, limit)
)
