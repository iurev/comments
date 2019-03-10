const middleware = store => next => action => {
  const { payload } = action
  if (!payload || !action.payload.isPromise) {
    return next(action);
  }
  const [startAction, successAction, failureAction] = payload.actions;
  store.dispatch({
    type: startAction
  });
  payload.promise.then(
    data =>
      store.dispatch({
        type: successAction,
        data: data
      }),
    error =>
      store.dispatch({
        type: failureAction,
        error
      })
  );
};

export default middleware;
