import { combineReducers } from 'redux'
import sidenav, { initialState as sidenavState } from './sidenav'
import section, { initialState as sectionState } from './section'
import switchReducer, { initialState as switchState } from './switchReducer'
import dataFetchingReducer, { initialState as dataFetchingState } from './dataFetchingReducer'

export const initialState = {
  // sidenav: sidenavState,
  // section: sectionState,
  switchReducer: switchState,
  dataFetchingReducer: dataFetchingState
}

export default combineReducers({
  //sidenav,
  //section,
  switchReducer,
  dataFetchingReducer
})
