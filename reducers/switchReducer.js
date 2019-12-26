import * as types from "../actions/actionTypes";

export const initialState = {
  //lastUpdate: 0,
  sideNavStatus: false,
  locationFolder: false,
  selectedCity: 'LA',
  ktown1stFolder: false,
  searchBtnStatus: false,
  gnbSelector: 'main',
  gnbSubSelector: ''
}

export default (state = initialState, action) => {

  switch (action.type) {
    /* 헤더 햄버거 버튼 클릭 */
    case types.CLICK_HAMBURGER: {
      return Object.assign({}, state, {
        //lastUpdate: ts,
        sideNavStatus: true
      })
    }
    /* 사이드 네비 X 버튼 클릭 */
    case types.CLICK_NAV_CLOSE: {
      return Object.assign({}, state, {
        sideNavStatus: false
      })
    }
    /* 지역 폴더 여닫기 */
    case types.CLICK_NAV_LOCATION_FOLDER: {
      return Object.assign({}, state, {
        locationFolder: state.locationFolder === true ? false : true
      })
    }

    case types.CLICK_NAV_KTOWN1ST_FOLDER: {
      return Object.assign({}, state, {
        //...state,
        ktown1stFolder: state.ktown1stFolder === true ? false : true
      })
    }

    case types.ClICK_SEARCH_BTN: {
      return Object.assign({}, state, {
        //...state,
        searchBtnStatus: state.searchBtnStatus === true ? false : true
      })
    }

    case types.CHANGE_HEADER_GNB: {
      return Object.assign({}, state, {
        //...state,
        gnbSelector: !! action.arg[0] ? action.arg[0] : 'main',
        gnbSubSelector: action.arg[1]
      })
    }

    case types.CLICK_MAIN_LOGO: {
      return initialState
    }

    default: {
      return state
    }
  }
}
