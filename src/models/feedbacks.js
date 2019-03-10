import { createActions, handleActions } from 'redux-actions';
import comment from '../data/comment'

const SHOW_COUNT = 1

const initialState = {
  list: [comment, comment],
  limit: SHOW_COUNT,
};

export const { showMore } = createActions({
  SHOW_MORE: () => ({}),
});

export default handleActions(
  {
    SHOW_MORE: (state) => ({
      ...state,
      limit: state.limit + SHOW_COUNT
    }),
  },
  initialState
);
