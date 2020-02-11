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
export const changingBranch = (branch) => ({
    type: types.CHANGE_BRANCH, arg: branch
})

export const petchingMainTopNews = (branch) => {
    return async (dispatch) => {

        // if(branch==null) branch='la';
        // console.log('action:petchingMainTopNews '+branch)
        //branch='la'

        await Axios.get(`http://data.koreatimes.com/publishing/${branch}/main_top/main_top.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                console.log(response)
                dispatch({
                    type: types.PETCHING_MAIN_TOP_NEWS,
                    arg: response.data
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingMainNewsList = (branch) => {
    return async (dispatch) => {

        //const branch = branch;
        let newsList = new Array();

        await import(`raw-loader!../data/publishing/${branch}/top1/top1.data`)
        /*           .then( (data => JSON.parse(data.default))).then(data => this.setState({list : data.data}));

                await Axios.get(`http://data.koreatimes.com/publishing/${branch}/top1/top1.data` )
                //await fetch('https://cloudreports.net/sample/api/countries.json')
                //    .then((response) => response.json())*/
            .then(function (response) {
                response = JSON.parse(response.default)
                newsList = newsList.concat(response.data)
            })
            .catch((error) => console.log(error));

        await import(`raw-loader!../data/publishing/${branch}/top2/top2.data`)
            .then(function (response) {
                response = JSON.parse(response.default)
                newsList = newsList.concat(response.data)
            })
            .catch((error) => console.log(error));

        await import(`raw-loader!../data/publishing/${branch}/top_list/top_list.data`)
            .then(function (response) {
                response = JSON.parse(response.default)
                newsList = newsList.concat(response.data)
            })
            .catch((error) => console.log(error));

        if(branch=='la') { // LA 지사만 economy 있음
            await import(`raw-loader!../data/publishing/${branch}/economy/economy.data`)
                .then(function (response) {
                    response = JSON.parse(response.default)
                    newsList = newsList.concat(response.data)
                })
                .catch((error) => console.log(error));
        }

        /*   await Axios.get(`http://data.koreatimes.com/publishing/${branch}/top2/top2.data` )
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

           if(branch=='la') { // LA 지사만 economy 있음
               await Axios.get(`http://data.koreatimes.com/publishing/${branch}/economy/economy.data` )
               //await fetch('https://cloudreports.net/sample/api/countries.json')
               //    .then((response) => response.json())
                   .then(function (response) {
                       //console.log(response.data)
                       newsList = newsList.concat(response.data.data)
                       //console.log(newsList)
                   })
                   .catch((error) => console.log(error));
           }*/

        dispatch({
            type: types.PETCHING_MAIN_NEWS_LIST,
            arg: newsList
        });
    }
}

export const petchingTop50 = () => {

    const url = `http://data.koreatimes.com/manage/cron/bestclick/bestclick.data`
    return async (dispatch) => {
        await Axios.get(url)
            .then(function (response) {
                dispatch({
                    type: types.PETCHING_TOP50,
                    arg: response.data
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingSectionOpinion = () => {
    return async (dispatch) => {

     /*   await import(`raw-loader!../data/publishing/la/opinion/opinion.data`)
            .then(function (response) {

                response = JSON.parse(response.default)
                //console.log(response)
                dispatch({
                    type: types.PETCHING_SECTION_OPINION,
                    arg: response
                });
            })
            .catch((error) => console.log(error));*/

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
      /*  await import(`raw-loader!../data/publishing/photonews/la/la.data`)
            .then(function (response) {

                response = JSON.parse(response.default)
                //console.log(response)
                dispatch({
                    type: types.PETCHING_PHOTO_NEWS,
                    arg: response
                });
            })
            .catch((error) => console.log(error));*/

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
        p3 = p2;

    }

    const articleId = p3

    const url = `/koreatimes/article/${p2Index}/${p3}.data`

    return async (dispatch) => {

        /*        await Axios.get(url,
                    {headers: {'Client-key': '9a9e059068347c04bbb40455b3e5c03b05a8484bfb3c645fb3974db45a3e4d6478c2f46a554c013353f900c754eed9e0991ad5e5248a6b797d134a82f5d671ceEr2pvrMg94YhQz3IRVUatdD1txT5WV6Ik7MMuY1UoZtQchUeQ1xp2e8E5bc/i3ayoP1o9gXsqKUrK4wFXzLRhHuEFRS0KYznrI4yhO93meOuA7IQSfbBv9tAPJho2A0G'}}).then(data => {
                    this.setState({ list : data.data.result })
                });*/
        /*
                await Axios.get(`https://epaperapi.koreatimes.com/koreatimes/article/select_article?articleId=${articleId}`,
                    {
                        headers: {  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                                    'Content-Type':  'application/json',
                                    'Client-key': '9a9e059068347c04bbb40455b3e5c03b05a8484bfb3c645fb3974db45a3e4d6478c2f46a554c013353f900c754eed9e0991ad5e5248a6b797d134a82f5d671ceEr2pvrMg94YhQz3IRVUatdD1txT5WV6Ik7MMuY1UoZtQchUeQ1xp2e8E5bc/i3ayoP1o9gXsqKUrK4wFXzLRhHuEFRS0KYznrI4yhO93meOuA7IQSfbBv9tAPJho2A0G'}})
                    .then(data => {
                        console.log(response)
                    });*/

        /*  await Axios.get( `https://epaperapi.koreatimes.com/koreatimes/article/select_article?articleId=${articleId}`,
              { headers: {'Client-key': '9a9e059068347c04bbb40455b3e5c03b05a8484bfb3c645fb3974db45a3e4d6478c2f46a554c013353f900c754eed9e0991ad5e5248a6b797d134a82f5d671ceEr2pvrMg94YhQz3IRVUatdD1txT5WV6Ik7MMuY1UoZtQchUeQ1xp2e8E5bc/i3ayoP1o9gXsqKUrK4wFXzLRhHuEFRS0KYznrI4yhO93meOuA7IQSfbBv9tAPJho2A0G'}})
              .then(function (response) {
                  console.log(response)
              })
              .catch((error) => console.log(error));*/

        /*        await import(`raw-loader!../data/article/${p2Index}/${p3}.data`)
                    .then(function (response) {

                        response = JSON.parse(response.default)
                        console.log(response)
                        dispatch({
                            type: types.PETCHING_ARTICLE_DETAIL,
                            arg: response
                        });
                    })
                    .catch((error) => console.log(error));*/


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
            .then(function (response) {
                dispatch({
                    type: types.PETCHING_ARTICLE_DETAIL_BESTCLICK,
                    arg: response.data.slice(0,5)
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingSectionArticleList = (sectionId) => {
    return async (dispatch) => {

        await Axios.get( `http://data.koreatimes.com/manage/cron/section_list/section_list_${sectionId}.data` )
            .then(function (response) {
                dispatch({
                    type: types.PETCHING_SECTION_ARTICLE_LIST,
                    arg: response.data.data.slice(0,20)
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingDailyFortune = () => {

    // const today = (new Date).format("yyyy-mm-dd")
    // console.log(today)

    return async (dispatch) => {
        await Axios.get( `http://data.koreatimes.com/publishing/la/ftdaily/201906/ftdaily_2019-6-9.data` )
        //await fetch('https://cloudreports.net/sample/api/countries.json')
        //    .then((response) => response.json())
            .then(function (response) {
                // console.log(response.data)
                dispatch({
                    type: types.PETCHING_DAILY_FORTUNE,
                    arg: response.data
                });
            })
            .catch((error) => console.log(error));
    }
}

export const petchingArticleComment = (articleId) => {
    return async (dispatch) => {
        await Axios.get( `https://epaperapi.koreatimes.com/koreatimes/article/comment_list?articleId=${articleId}` )
            .then(function (response) {
                dispatch({
                    type: types.PETCHING_ARTICLE_COMMENT,
                    arg: response.result
                });
            })
            .catch((error) => console.log(error));
    }
}









