import { createActions, handleActions } from 'redux-actions';
import { getFeedbacksList } from '../api'

const SHOW_COUNT = 5

const initialState = {
  list: [],
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
      // NOTE: bad practice, I did it to make it work on gitlab pages
      list: (process.env.NODE_ENV === 'production' ? action.data.data.list : action.data.data),
    }),
  },
  initialState
);
