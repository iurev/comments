import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './models'
import { promises } from './middlewares'


const initialState = {}
const enhancers = []
const middleware = [
  promises,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

  middleware.push(require('redux-logger').logger)
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
)

export default store
