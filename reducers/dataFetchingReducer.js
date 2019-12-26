import * as types from "../actions/actionTypes";

export const initialState = {
  mainTop: [],
  mainNewsList: [],
  sectionOpinion: [],
  photoNews: [],
  opinionCartoon: [],
  opinionEditorial: [],
  opinionColumn: [],
  opinionContri: [],
  opinionEtc: [],
  articleDetail: [],
  articleDetailBestclick: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case types.PETCHING_MAIN_TOP_NEWS: {
      return Object.assign({}, state, {
        ...state,
        mainTop: action.arg.data
      })
    }

    case types.PETCHING_MAIN_NEWS_LIST: {
      return Object.assign({}, state, {
        ...state,
        mainNewsList: action.arg
      })
    }

    case types.PETCHING_SECTION_OPINION: {
      return Object.assign({}, state, {
        ...state,
        sectionOpinion: action.arg.info.use == 1 ? action.arg.data : this.sectionOpinion
      })
    }

    case types.PETCHING_PHOTO_NEWS: {
      return Object.assign({}, state, {
        ...state,
        photoNews: action.arg
      })
    }

    case types.PETCHING_MAIN_OPINION: {
      return Object.assign({}, state, {
        ...state,
        opinionCartoon: action.arg['298']['0'],
        opinionEditorial: action.arg['276'],
        opinionColumn: [
            action.arg['280']['0'] ,
            action.arg['286']['0'] ,
            action.arg['282']['0'] ,
            action.arg['283']['0'] ,
            action.arg['284']['0'] ,
            action.arg['295']['0'] ,
            action.arg['377']['0'] ,
            action.arg['378']['0'] ,
            action.arg['277']['0'] ,
            action.arg['292']['0'] ,
            action.arg['278']['0'] , // 데스크의 창
            action.arg['285']['0'] ,
            action.arg['300']['0'] ,
            action.arg['376']['0']
        ],
        opinionContri: [
            action.arg['288']['0'] ,
            action.arg['293']['0'] ,
            action.arg['291']['0'] ,
            action.arg['289']['0'] ,
            action.arg['294']['0'] ,
        ],
          opinionEtc: [
              action.arg['279']['0'] ,
              action.arg['287']['0']
          ]
      })
    }

    case types.PETCHING_ARTICLE_DETAIL: {
      return Object.assign({}, state, {
          ...state,
          articleDetail: action.arg
      })
    }

    case types.PETCHING_ARTICLE_DETAIL_BESTCLICK: {
      return Object.assign({}, state, {
          ...state,
          articleDetailBestclick: action.arg
      })
    }

    default: {
      return state
    }
  }
}
