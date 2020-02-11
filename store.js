import { createStore, applyMiddleware } from 'redux'
//import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer, { initialState as setinitialState } from './reducers'
import withRedux from 'next-redux-wrapper'
import thunkMiddleware from "redux-thunk"

//import { createBrowserHistory } from 'history'
//import { routerMiddleware } from 'connected-react-router'

//export const history = createBrowserHistory()

/*
export const initializeStore = (state = initialState) => {
  const middlewares = [thunkMiddleware, createLogger()]
  return createStore(reducer, state, compose(applyMiddleware(...middlewares)))
};

*/
const persistConfig = {
  key: 'primary',
  storage //: AsyncStorage,
  ,blacklist: ['switchReducer']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const initializeStore = (initialState = setinitialState) => {
  return createStore(
      persistedReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}


export const reduxPage = comp => withRedux(initializeStore)(comp)
