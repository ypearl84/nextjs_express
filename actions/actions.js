import * as types from './actionTypes'
import Axios from 'axios'

export const clickingHamburger = () => ({
  type: types.CLICK_HAMBURGER
})
export const clickingNavClose = () => ({
  type: types.CLICK_NAV_CLOSE
})
export const clickingNavLocationFolder = () => ({
  type: types.CLICK_NAV_LOCATION_FOLDER,
})
export const clickingNavKtown1stFolder = () => ({
  type: types.CLICK_NAV_KTOWN1ST_FOLDER,
})
export const clickingHeaderSection = (data) => ({
  type: types.CLICK_HEADER_SECTION, arg: data
})
export const clickingBtnMore = () => ({
  type: types.CLICK_BTN_MORE,
})
export const clickingMainLogo = () => ({
  type: types.CLICK_MAIN_LOGO,
})
export const clickingNavLivingInfo = () => ({
  type: types.CLICK_NAV_LIVING_INFO,
})
export const clickingSearchBtn = () => ({
  type: types.ClICK_SEARCH_BTN,
})
export const changingHeaderGnb = (type) => ({
    type: types.CHANGE_HEADER_GNB, arg: type
})

export const petchingMainTopNews = () => {
  return async (dispatch) => {
      /*let config = {
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*',
          },
          responseType: 'json',
          withCredentials: true,
          credentials: 'same-origin',
      }*/
    await Axios.get(`http://data.koreatimes.com/publishing/la/main_top/main_top.data` )
    //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
        .then(function (response) {
           // console.log(response)
          dispatch({
            type: types.PETCHING_MAIN_TOP_NEWS,
            arg: response.data
          });
        })
        .catch((error) => console.log(error));
  }
}

export const petchingMainNewsList = () => {
    return async (dispatch) => {

        const branch = 'la';
        let newsList = new Array();

        await Axios.get(`http://data.koreatimes.com/publishing/${branch}/top1/top1.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
               // console.log(response.data)
                newsList = newsList.concat(response.data.data)
                //console.log(newsList)
            })
            .catch((error) => console.log(error));

        await Axios.get(`http://data.koreatimes.com/publishing/${branch}/top2/top2.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                //console.log(response.data)
                newsList = newsList.concat(response.data.data)
                //console.log(newsList)
            })
            .catch((error) => console.log(error));

        await Axios.get(`http://data.koreatimes.com/publishing/${branch}/top_list/top_list.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                //console.log(response.data)
                newsList = newsList.concat(response.data.data)
                //console.log(newsList)
            })
            .catch((error) => console.log(error));

        await Axios.get(`http://data.koreatimes.com/publishing/${branch}/economy/economy.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                //console.log(response.data)
                newsList = newsList.concat(response.data.data)
                //console.log(newsList)
            })
            .catch((error) => console.log(error));

        dispatch({
            type: types.PETCHING_MAIN_NEWS_LIST,
            arg: newsList
        });
    }
}

export const petchingSectionOpinion = () => {
    return async (dispatch) => {

        await Axios.get(`http://data.koreatimes.com/publishing/la/opinion/opinion.data` )
            .then(function (response) {
               // console.log(response.data)
                dispatch({
                    type: types.PETCHING_SECTION_OPINION,
                    arg: response.data
                });
            })
            .catch((error) => console.log(error));



    }
}

export const petchingPhotoNews = () => {
    return async (dispatch) => {
        /*let config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
            },
            responseType: 'json',
            withCredentials: true,
            credentials: 'same-origin',
        }*/
        await Axios.get( `http://data.koreatimes.com/publishing/photonews/la/la.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
               // console.log(response.data)
                dispatch({
                    type: types.PETCHING_PHOTO_NEWS,
                    arg: response.data
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingMainOpinion = () => {
    return async (dispatch) => {
        await Axios.get(`http://data.koreatimes.com/manage/cron/opinion/opinion.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                // console.log(response.data.data )
                dispatch({
                    type: types.PETCHING_MAIN_OPINION,
                    arg: response.data.data
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingArticleDetail = (p2, p3) => {

    let p2Index

    if(p3) {
        p2Index = p2.substring(0, 4) + "/" + p2.substring(4, 6) + "/" + p2.substring(6, 8);
    } else {
        //console.log(p3)
    }
    //}

    const url = `http://data.koreatimes.com/article/${p2Index}/${p3}.data`
    return async (dispatch) => {
        await Axios.get(url)
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                 console.log(response.data )
                dispatch({
                    type: types.PETCHING_ARTICLE_DETAIL,
                    arg: response.data
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingArticleDetailBestClick = (p2, p3) => {
    let p2Index

    if(p3) {
        p2Index = p2.substring(0, 4) + "/" + p2.substring(4, 6) + "/" + p2.substring(6, 8);
    } else {
        //console.log(p3)
    }
    //}

    const url = `http://data.koreatimes.com/manage/cron/bestclick/bestclick.data`
    return async (dispatch) => {
        await Axios.get(url)
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
               // console.log(response.data )
                dispatch({
                    type: types.PETCHING_ARTICLE_DETAIL_BESTCLICK,
                    arg: response.data.slice(0,5)
                });
            })
            .catch((error) => console.log(error));
    }
}








