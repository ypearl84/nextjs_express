import {CLICK_HAMBURGER, CLICK_NAV_CLOSE, CLICK_NAV_LOCATION_FOLDER, CLICK_NAV_KTOWN1ST_FOLDER } from "../actions/actionTypes";

export const initialState = {
  //lastUpdate: 0,
  sideNavStatus: false,
  locationFolder: false,
  selectedCity: 'LA',
  ktown1st: false,
}

export default (state = initialState, action) => {
  //const { type, ts, light } = action

  switch (action.type) {
    /* 헤더 햄버거 버튼 클릭 */
    case CLICK_HAMBURGER: {
      return Object.assign({}, state, {
        //lastUpdate: ts,
        sideNavStatus: true
      })
    }
    /* 사이드 네비 X 버튼 클릭 */
    case CLICK_NAV_CLOSE: {
      return Object.assign({}, state, {
        ...state,
        sideNavStatus: false
      })
    }
    /* 지역 폴더 여닫기 */
    case CLICK_NAV_LOCATION_FOLDER: {
      return Object.assign({}, state, {
        ...state,
        locationFolder: state.locationFolder === true ? false : true
      })
    }

    case CLICK_NAV_KTOWN1ST_FOLDER: {
      return Object.assign({}, state, {
        ...state,
        ktown1st: state.ktown1st === true ? false : true
      })
    }

    default: {
      return state
    }
  }
}
