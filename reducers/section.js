
import {CLICK_HEADER_SECTION, CLICK_BTN_MORE, CLICK_MAIN_LOGO, CLICK_NAV_LIVING_INFO, CLICK_HEADER_PHOTONEWS } from "../actions/actionTypes";

export const initialState = {
  //lastUpdate: 0,
  headerSection: "main",
  mainSection: "home",
  opinionSection: "main",
  opinionDetail: ""
}

export default (state = initialState, action) => {

  switch (action.type) {
    case CLICK_HEADER_SECTION:
    //  const { payload } = action

      {
      return Object.assign({}, state, {
        ...state,
        headerSection: "main",
        mainSection: action.arg,
        opinionSection: "main",
        opinionDetail: ""
      })
    }

    case CLICK_MAIN_LOGO: {
      return initialState
    }

    case CLICK_NAV_LIVING_INFO: {
      return Object.assign({}, state, {
        ...state,
        headerSection: "livingInfo",
      })
    }

    case CLICK_BTN_MORE: {
      return Object.assign({}, state, {
        ...state,
        headerSection: "main",
        opinionSection: "detail",
        opinionDetail: action.arg
      })
    }

    default: {
      return state
    }
  }
}
