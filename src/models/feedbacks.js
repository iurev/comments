import { createActions, handleActions } from 'redux-actions';
import { getFeedbacksList } from '../api'
import comment from '../data/comment'

const SHOW_COUNT = 5

const initialState = {
  list: [comment, comment],
  limit: SHOW_COUNT,
};

const { loadStart, loadSuccess, loadFail } = createActions({
  LOAD_START: () => ({}),
  LOAD_SUCCESS: () => ({}),
  LOAD_FAIL: () => ({}),
});

export const { showMore, load } = createActions({
  SHOW_MORE: () => ({}),
  LOAD: () => ({
    isPromise: true,
    actions: [loadStart, loadSuccess, loadFail],
    promise: getFeedbacksList()
  }),
});

export default handleActions(
  {
    SHOW_MORE: (state) => ({
      ...state,
      limit: state.limit + SHOW_COUNT
    }),
    LOAD_SUCCESS: (state, action) => ({
      ...state,
      list: action.data.data.list,
    }),
  },
  initialState
);
