module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: CLICK_HAMBURGER, CLICK_NAV_CLOSE, CLICK_NAV_LOCATION_FOLDER, CLICK_NAV_KTOWN1ST_FOLDER, CLICK_HEADER_SECTION, CLICK_BTN_MORE, CLICK_MAIN_LOGO, CLICK_NAV_LIVING_INFO, ClICK_SEARCH_BTN, CHANGE_HEADER_GNB, PETCHING_MAIN_TOP_NEWS, PETCHING_MAIN_NEWS_LIST, PETCHING_SECTION_OPINION, PETCHING_PHOTO_NEWS, PETCHING_MAIN_OPINION, PETCHING_ARTICLE_DETAIL, PETCHING_ARTICLE_DETAIL_BESTCLICK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_HAMBURGER", function() { return CLICK_HAMBURGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_NAV_CLOSE", function() { return CLICK_NAV_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_NAV_LOCATION_FOLDER", function() { return CLICK_NAV_LOCATION_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_NAV_KTOWN1ST_FOLDER", function() { return CLICK_NAV_KTOWN1ST_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_HEADER_SECTION", function() { return CLICK_HEADER_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_BTN_MORE", function() { return CLICK_BTN_MORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_MAIN_LOGO", function() { return CLICK_MAIN_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_NAV_LIVING_INFO", function() { return CLICK_NAV_LIVING_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClICK_SEARCH_BTN", function() { return ClICK_SEARCH_BTN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_HEADER_GNB", function() { return CHANGE_HEADER_GNB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_MAIN_TOP_NEWS", function() { return PETCHING_MAIN_TOP_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_MAIN_NEWS_LIST", function() { return PETCHING_MAIN_NEWS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_SECTION_OPINION", function() { return PETCHING_SECTION_OPINION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_PHOTO_NEWS", function() { return PETCHING_PHOTO_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_MAIN_OPINION", function() { return PETCHING_MAIN_OPINION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_ARTICLE_DETAIL", function() { return PETCHING_ARTICLE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PETCHING_ARTICLE_DETAIL_BESTCLICK", function() { return PETCHING_ARTICLE_DETAIL_BESTCLICK; });
const CLICK_HAMBURGER = 'CLICK_HAMBURGER';
const CLICK_NAV_CLOSE = 'CLICK_NAV_CLOSE';
const CLICK_NAV_LOCATION_FOLDER = 'CLICK_NAV_LOCATION_FOLDER';
const CLICK_NAV_KTOWN1ST_FOLDER = 'CLICK_NAV_KTOWN1ST_FOLDER';
const CLICK_HEADER_SECTION = "CLICK_HEADER_SECTION";
const CLICK_BTN_MORE = "CLICK_BTN_MORE";
const CLICK_MAIN_LOGO = "CLICK_MAIN_LOGO";
const CLICK_NAV_LIVING_INFO = "CLICK_NAV_LIVING_INFO";
const ClICK_SEARCH_BTN = "ClICK_SEARCH_BTN";
const CHANGE_HEADER_GNB = "CHANGE_HEADER_GNB";
const PETCHING_MAIN_TOP_NEWS = "PETCHING_MAIN_TOP_NEWS";
const PETCHING_MAIN_NEWS_LIST = "PETCHING_MAIN_NEWS_LIST";
const PETCHING_SECTION_OPINION = "PETCHING_SECTION_OPINION";
const PETCHING_PHOTO_NEWS = "PETCHING_PHOTO_NEWS";
const PETCHING_MAIN_OPINION = "PETCHING_MAIN_OPINION";
const PETCHING_ARTICLE_DETAIL = "PETCHING_ARTICLE_DETAIL";
const PETCHING_ARTICLE_DETAIL_BESTCLICK = "PETCHING_ARTICLE_DETAIL_BESTCLICK";

/***/ }),

/***/ "./actions/actions.js":
/*!****************************!*\
  !*** ./actions/actions.js ***!
  \****************************/
/*! exports provided: clickingHamburger, clickingNavClose, clickingNavLocationFolder, clickingNavKtown1stFolder, clickingHeaderSection, clickingBtnMore, clickingMainLogo, clickingNavLivingInfo, clickingSearchBtn, changingHeaderGnb, petchingMainTopNews, petchingMainNewsList, petchingSectionOpinion, petchingPhotoNews, petchingMainOpinion, petchingArticleDetail, petchingArticleDetailBestClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingHamburger", function() { return clickingHamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingNavClose", function() { return clickingNavClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingNavLocationFolder", function() { return clickingNavLocationFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingNavKtown1stFolder", function() { return clickingNavKtown1stFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingHeaderSection", function() { return clickingHeaderSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingBtnMore", function() { return clickingBtnMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingMainLogo", function() { return clickingMainLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingNavLivingInfo", function() { return clickingNavLivingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickingSearchBtn", function() { return clickingSearchBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changingHeaderGnb", function() { return changingHeaderGnb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingMainTopNews", function() { return petchingMainTopNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingMainNewsList", function() { return petchingMainNewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingSectionOpinion", function() { return petchingSectionOpinion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingPhotoNews", function() { return petchingPhotoNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingMainOpinion", function() { return petchingMainOpinion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingArticleDetail", function() { return petchingArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "petchingArticleDetailBestClick", function() { return petchingArticleDetailBestClick; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const clickingHamburger = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_HAMBURGER"]
});
const clickingNavClose = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_NAV_CLOSE"]
});
const clickingNavLocationFolder = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_NAV_LOCATION_FOLDER"]
});
const clickingNavKtown1stFolder = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_NAV_KTOWN1ST_FOLDER"]
});
const clickingHeaderSection = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_HEADER_SECTION"],
  arg: data
});
const clickingBtnMore = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_BTN_MORE"]
});
const clickingMainLogo = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_MAIN_LOGO"]
});
const clickingNavLivingInfo = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLICK_NAV_LIVING_INFO"]
});
const clickingSearchBtn = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ClICK_SEARCH_BTN"]
});
const changingHeaderGnb = type => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_HEADER_GNB"],
  arg: type
});
const petchingMainTopNews = () => {
  return async dispatch => {
    /*let config = {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
        },
        responseType: 'json',
        withCredentials: true,
        credentials: 'same-origin',
    }*/
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/la/main_top/main_top.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      // console.log(response)
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_MAIN_TOP_NEWS"],
        arg: response.data
      });
    }).catch(error => console.log(error));
  };
};
const petchingMainNewsList = () => {
  return async dispatch => {
    const branch = 'la';
    let newsList = new Array();
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/${branch}/top1/top1.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      // console.log(response.data)
      newsList = newsList.concat(response.data.data); //console.log(newsList)
    }).catch(error => console.log(error));
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/${branch}/top2/top2.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      //console.log(response.data)
      newsList = newsList.concat(response.data.data); //console.log(newsList)
    }).catch(error => console.log(error));
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/${branch}/top_list/top_list.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      //console.log(response.data)
      newsList = newsList.concat(response.data.data); //console.log(newsList)
    }).catch(error => console.log(error));
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/${branch}/economy/economy.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      //console.log(response.data)
      newsList = newsList.concat(response.data.data); //console.log(newsList)
    }).catch(error => console.log(error));
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_MAIN_NEWS_LIST"],
      arg: newsList
    });
  };
};
const petchingSectionOpinion = () => {
  return async dispatch => {
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/la/opinion/opinion.data`).then(function (response) {
      // console.log(response.data)
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_SECTION_OPINION"],
        arg: response.data
      });
    }).catch(error => console.log(error));
  };
};
const petchingPhotoNews = () => {
  return async dispatch => {
    /*let config = {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
        },
        responseType: 'json',
        withCredentials: true,
        credentials: 'same-origin',
    }*/
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/publishing/photonews/la/la.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      // console.log(response.data)
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_PHOTO_NEWS"],
        arg: response.data
      });
    }).catch(error => console.log(error));
  };
};
const petchingMainOpinion = () => {
  return async dispatch => {
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://data.koreatimes.com/manage/cron/opinion/opinion.data`) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      // console.log(response.data.data )
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_MAIN_OPINION"],
        arg: response.data.data
      });
    }).catch(error => console.log(error));
  };
};
const petchingArticleDetail = (p2, p3) => {
  let p2Index;

  if (p3) {
    p2Index = p2.substring(0, 4) + "/" + p2.substring(4, 6) + "/" + p2.substring(6, 8);
  } else {} //console.log(p3)
  //}


  const url = `http://data.koreatimes.com/article/${p2Index}/${p3}.data`;
  return async dispatch => {
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      console.log(response.data);
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_ARTICLE_DETAIL"],
        arg: response.data
      });
    }).catch(error => console.log(error));
  };
};
const petchingArticleDetailBestClick = (p2, p3) => {
  let p2Index;

  if (p3) {
    p2Index = p2.substring(0, 4) + "/" + p2.substring(4, 6) + "/" + p2.substring(6, 8);
  } else {} //console.log(p3)
  //}


  const url = `http://data.koreatimes.com/manage/cron/bestclick/bestclick.data`;
  return async dispatch => {
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url) //await fetch('https://cloudreports.net/sample/api/countries.json')
    //    .then((response) => response.json())
    .then(function (response) {
      // console.log(response.data )
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["PETCHING_ARTICLE_DETAIL_BESTCLICK"],
        arg: response.data.slice(0, 5)
      });
    }).catch(error => console.log(error));
  };
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/index */ "./components/header/index.js");
/* harmony import */ var _sidenav_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav/index */ "./components/sidenav/index.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body */ "./components/body/index.js");
/* harmony import */ var _footer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/index */ "./components/footer/index.js");
/* harmony import */ var _css_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/default.css */ "./css/default.css");
/* harmony import */ var _css_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_default_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











/*
let ShowPageInfo = withRouter(({match, location}) => {
    return {location.pathname};
});*/

class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /* static async getInitialProps({req}) {
      console.log(req)
      //const res = await fetch('https://cloudreports.net/sample/api/countries.json')
      //const json = await res.json()
      //console.log(json)
      //return {countries: json}
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      return { userAgent }
  } */
  render() {
    const {
      switchReducer
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      id: "dim",
      className: !!switchReducer.sideNavStatus ? 'active' : ''
    }), __jsx(_header_index__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_sidenav_index__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/home"
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/"
    })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/:p1?/:p2?/:p3?",
      component: _body__WEBPACK_IMPORTED_MODULE_7__["default"]
    })), __jsx(_footer_index__WEBPACK_IMPORTED_MODULE_8__["default"], null));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_4__["reduxPage"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Layout)));

/***/ }),

/***/ "./components/body/article.js":
/*!************************************!*\
  !*** ./components/body/article.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_adArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/adArea */ "./components/body/parts/adArea.js");
/* harmony import */ var _parts_articleDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/articleDetail */ "./components/body/parts/articleDetail.js");
/* harmony import */ var _parts_relatedNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/relatedNews */ "./components/body/parts/relatedNews.js");
/* harmony import */ var _parts_PopularNews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/PopularNews */ "./components/body/parts/PopularNews.js");
/* harmony import */ var _parts_bottomMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/bottomMenu */ "./components/body/parts/bottomMenu.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _reducers_dataFetchingReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/dataFetchingReducer */ "./reducers/dataFetchingReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/actionTypes */ "./actions/actionTypes.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Article = props => {
  const {
    0: articleDetail,
    1: setArticleDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const date = props.match.params;
  const p2Index = date.p2.substring(0, 4) + "/" + date.p2.substring(4, 6) + "/" + date.p2.substring(6, 8);
  const url = `http://data.koreatimes.com/article/${p2Index}/${date.p3}.data`;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const CancelToken = axios__WEBPACK_IMPORTED_MODULE_10___default.a.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try {
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url, {
          cancelToken: source.token
        }).then(data => {
          setArticleDetail(data.data);
        });
      } catch (error) {
        if (axios__WEBPACK_IMPORTED_MODULE_10___default.a.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, [props]);
  return __jsx("div", {
    id: "container",
    className: "bg_container"
  }, __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_parts_articleDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: articleDetail
  }), !!articleDetail.related_u1 && __jsx(_parts_relatedNews__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: articleDetail
  }), __jsx(_parts_PopularNews__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_parts_bottomMenu__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);
/*

class Article extends Component {

        constructor(props) {
                super(props)

                const { petchingArticleDetail } = this.props
                //console.log(petchingArticleDetail())
                petchingArticleDetail(this.props.match.params.p2, this.props.match.params.p3)

        }


    render () {

                const { dataFetchingReducer } = this.props

                return (
                    <div id="container" className="bg_container">
                            <AdArea/>
                            <ArticleDetail item={dataFetchingReducer.articleDetail}/>
                            { !! dataFetchingReducer.articleDetail.related_u1 && <RelatedNews item={dataFetchingReducer.articleDetail}/> }
                            <PopularNews/>
                            <AdArea/>
                            <BottomMenu/>
                    </div>
                )
        }
};

function mapStateToProps (state) {
        const { dataFetchingReducer } = state
        return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ petchingArticleDetail }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)*/

/***/ }),

/***/ "./components/body/home.js":
/*!*********************************!*\
  !*** ./components/body/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_mainTopNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/mainTopNews */ "./components/body/parts/mainTopNews.js");
/* harmony import */ var _parts_adArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/adArea */ "./components/body/parts/adArea.js");
/* harmony import */ var _parts_newsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/newsList */ "./components/body/parts/newsList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = () => __jsx("div", {
  id: "container"
}, __jsx(_parts_mainTopNews__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_parts_newsList__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_parts_newsList__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Home);
/*
class Home extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {
        return (
            <div id="container">
                <MainTopNews />
                <AdArea />
                <NewsList />
                <AdArea />
                <NewsList />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home) */

/***/ }),

/***/ "./components/body/index.js":
/*!**********************************!*\
  !*** ./components/body/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./components/body/home.js");
/* harmony import */ var _top50__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top50 */ "./components/body/top50.js");
/* harmony import */ var _opinion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opinion */ "./components/body/opinion.js");
/* harmony import */ var _photoNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photoNews */ "./components/body/photoNews.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article */ "./components/body/article.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section */ "./components/body/section.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











class Body extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);
    const {
      changingHeaderGnb
    } = this.props; //console.log(this.props.match.params.p1)

    changingHeaderGnb([this.props.match.params.p1, this.props.match.params.p2]);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  /*static getDerivedStateFromProps(nextProps) {
       console.log(nextProps)
       //return changingHeaderGnb(nextProps.match.params.p1)
      return { p1: nextProps.match.params.p1 }
  }*/

  /*componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps)
      if(prevProps.switchReducer.gnbSelector!=this.props.match.params.p1) {
          changingHeaderGnb(this.props.match.params.p1)
      }
  }*/


  render() {
    //let aa = this.state.p1
    // changingHeaderGnb(aa)
    const {
      location,
      match
    } = this.props;
    let bodyType = {
      match
    }.match.url === '/' ? 'home' : {
      match
    }.match.params.p1;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, bodyType === 'home' && __jsx(_home__WEBPACK_IMPORTED_MODULE_0__["default"], null), bodyType === 'top50' && __jsx(_top50__WEBPACK_IMPORTED_MODULE_1__["default"], null), bodyType === 'opinion' && __jsx(_opinion__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location,
      match: match
    }), bodyType === 'photonews' && __jsx(_photoNews__WEBPACK_IMPORTED_MODULE_3__["default"], null), bodyType === 'article' && __jsx(_article__WEBPACK_IMPORTED_MODULE_4__["default"], {
      match: match
    }), bodyType === 'section' && __jsx(_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
      location: location
    }));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
  changingHeaderGnb: _actions_actions__WEBPACK_IMPORTED_MODULE_6__["changingHeaderGnb"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Body));

/***/ }),

/***/ "./components/body/opinion.js":
/*!************************************!*\
  !*** ./components/body/opinion.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_mainOpinion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/mainOpinion */ "./components/body/parts/mainOpinion.js");
/* harmony import */ var _parts_detailOpinion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/detailOpinion */ "./components/body/parts/detailOpinion.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Opinion extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      location,
      match
    } = this.props;
    return __jsx("div", {
      id: "container",
      className: location.pathname === '/opinion' ? "bg_container" : ""
    }, location.pathname === '/opinion' ? __jsx(_parts_mainOpinion__WEBPACK_IMPORTED_MODULE_1__["default"], {
      location: location
    }) : __jsx(_parts_detailOpinion__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location,
      match: match
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Opinion);

/***/ }),

/***/ "./components/body/parts/MostCommentNews.js":
/*!**************************************************!*\
  !*** ./components/body/parts/MostCommentNews.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_popularNewsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/popularNewsItem */ "./components/containers/popularNewsItem.js");
/* harmony import */ var _containers_articleDetailItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/articleDetailItem */ "./components/containers/articleDetailItem.js");
/* harmony import */ var _commentArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commentArea */ "./components/body/parts/commentArea.js");
/* harmony import */ var _adArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adArea */ "./components/body/parts/adArea.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class MostCommentNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      id: "tab02",
      className: "comment_news news_list_infinite rank_news"
      /* style="display: none;" */

    }, __jsx("h3", {
      className: "hidden"
    }, "\uB313\uAE00 \uB9CE\uC740 \uAE30\uC0AC"), __jsx("ul", null), __jsx("a", {
      className: "btn_list_more"
    }, __jsx("span", {
      className: "txt_point"
    }, "\uB313\uAE00 \uB9CE\uC740 \uAE30\uC0AC"), " \uB354\uBCF4\uAE30 ", __jsx("span", {
      className: "ico"
    })));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(MostCommentNews));

/***/ }),

/***/ "./components/body/parts/MostViewNews.js":
/*!***********************************************!*\
  !*** ./components/body/parts/MostViewNews.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_popularNewsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/popularNewsItem */ "./components/containers/popularNewsItem.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class MostViewNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    const {
      petchingArticleDetailBestClick
    } = this.props;
    petchingArticleDetailBestClick();
  }

  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      id: "tab01",
      className: "view_news news_list_infinite rank_news"
      /*  style="display: block;" */

    }, __jsx("h3", {
      className: "hidden"
    }, "\uB9CE\uC774 \uBCF8 \uAE30\uC0AC"), __jsx("ul", null, dataFetchingReducer.articleDetailBestclick.map(function (row, index) {
      return __jsx(_containers_popularNewsItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: row.articleId,
        item: row,
        index: index
      });
    })), __jsx("a", {
      className: "btn_list_more"
    }, __jsx("span", {
      className: "txt_point"
    }, "\uB9CE\uC774 \uBCF8 \uAE30\uC0AC 50"), " \uB354\uBCF4\uAE30 ", __jsx("span", {
      className: "ico"
    })));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  petchingArticleDetailBestClick: _actions_actions__WEBPACK_IMPORTED_MODULE_4__["petchingArticleDetailBestClick"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MostViewNews));

/***/ }),

/***/ "./components/body/parts/PopularNews.js":
/*!**********************************************!*\
  !*** ./components/body/parts/PopularNews.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MostViewNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostViewNews */ "./components/body/parts/MostViewNews.js");
/* harmony import */ var _MostCommentNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MostCommentNews */ "./components/body/parts/MostCommentNews.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class PopularNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "section popular_news"
    }, __jsx("ul", {
      className: "tab"
    }, __jsx("li", {
      className: "tab_on"
    }, __jsx("a", {
      href: "#tab01"
    }, "\uB9CE\uC774 \uBCF8 \uAE30\uC0AC")), __jsx("li", {
      className: ""
    }, __jsx("a", {
      href: "#tab02"
    }, "\uB313\uAE00 \uB9CE\uC740 \uAE30\uC0AC"))), __jsx("div", {
      className: "tab_contents"
    }, __jsx(_MostViewNews__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_MostCommentNews__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PopularNews);

/***/ }),

/***/ "./components/body/parts/adArea.js":
/*!*****************************************!*\
  !*** ./components/body/parts/adArea.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const defaultProps = {
  location: {
    pathname: '/'
  }
};

class AdArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    let classType = "ad_area";

    if (this.props.location.pathname == '/article' || this.props.location.pathname == '/opinion') {
      classType = "ad_area pt0 mt0";
    }

    return __jsx("div", {
      className: classType
    }, __jsx("a", {
      href: "#"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ad.png */ "./public/ad.png"),
      alt: "ad\uC774\uBBF8\uC9C0"
    })));
  }

}

AdArea.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AdArea);

/***/ }),

/***/ "./components/body/parts/articleDetail.js":
/*!************************************************!*\
  !*** ./components/body/parts/articleDetail.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_articleDetailItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/articleDetailItem */ "./components/containers/articleDetailItem.js");
/* harmony import */ var _commentArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentArea */ "./components/body/parts/commentArea.js");
/* harmony import */ var _adArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adArea */ "./components/body/parts/adArea.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class ArticleDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "detail_wrap"
    }, __jsx(_containers_articleDetailItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: this.props.item
    }), __jsx(_commentArea__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_adArea__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ArticleDetail);

/***/ }),

/***/ "./components/body/parts/bottomMenu.js":
/*!*********************************************!*\
  !*** ./components/body/parts/bottomMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class BottomMenu extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {// const { clickingHamburger } = this.props
      // clickingHamburger()
    });
  }

  render() {
    return __jsx("div", {
      className: "bottom_menu"
    }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uC0AC\uD68C")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uACBD\uC81C")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uC2A4\uD3EC\uCE20")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uBD80\uB3D9\uC0B0")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uAD50\uC721")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uAC74\uAC15")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uB77C\uC774\uD504")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uC704\uCF04\uB4DC")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uBB38\uD654")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uC885\uAD50")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uC5F0\uC608")), __jsx("li", null, __jsx("a", {
      href: ""
    }, "\uD56B\uC774\uC288")), __jsx("li", {
      className: "bd_none"
    }, __jsx("a", {
      href: ""
    }, "\uD3EC\uD1A0\uB274\uC2A4")), __jsx("li", {
      className: "bd_none"
    }, __jsx("a", {
      href: ""
    }, "\uC624\uD53C\uB2C8\uC5B8")), __jsx("li", {
      className: "bd_none"
    }), __jsx("li", {
      className: "bd_none"
    })));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(BottomMenu));

/***/ }),

/***/ "./components/body/parts/cartoon.js":
/*!******************************************!*\
  !*** ./components/body/parts/cartoon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more */ "./components/body/parts/more.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Cartoon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      dataFetchingReducer
    } = this.props;
    const inputdate = new Date({
      dataFetchingReducer
    }.dataFetchingReducer.opinionCartoon.inputDate);
    const date = inputdate.getFullYear().toString() + (inputdate.getMonth() + 1).toString() + inputdate.getDate().toString();
    return __jsx("div", {
      className: "section cartoon"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uC2DC\uC0AC\uB9CC\uD3C9"), __jsx(_more__WEBPACK_IMPORTED_MODULE_3__["default"], {
      opinionId: "113/298"
    })), __jsx("div", {
      className: "contents"
    }, __jsx("div", {
      className: "img_wrap"
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      to: `/article/${date}/` + dataFetchingReducer.opinionCartoon.articleId
    }, __jsx("img", {
      src: "http://image.koreatimes.com/" + dataFetchingReducer.opinionCartoon.thumbnail,
      alt: dataFetchingReducer.opinionCartoon.preRead
    }), __jsx("span", {
      className: "cartoon_tit"
    }, dataFetchingReducer.opinionCartoon.title)))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Cartoon));

/***/ }),

/***/ "./components/body/parts/column.js":
/*!*****************************************!*\
  !*** ./components/body/parts/column.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Column extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      className: "section opinion_logo column"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uCE7C\uB7FC")), __jsx("div", {
      className: "logo_list"
    }, __jsx("ul", null, dataFetchingReducer.opinionColumn.map(row => !!row && __jsx("li", {
      key: row.articleId
    }, __jsx("a", {
      href: '/article/' + row.articleId,
      className: "img"
    }, __jsx("img", {
      src: row.thumbnail,
      alt: row.categoryName
    })), __jsx("a", {
      href: '/article/' + row.articleId,
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, row.title), __jsx("span", {
      className: "writer"
    }, row.writer)))))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Column));

/***/ }),

/***/ "./components/body/parts/commentArea.js":
/*!**********************************************!*\
  !*** ./components/body/parts/commentArea.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class CommentArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "section total_comment"
    }, __jsx("strong", {
      className: "total"
    }, "\uB313\uAE00 237"), __jsx("a", {
      href: "my_comment.html",
      className: "go_my_comment"
    }, "\uB0B4 \uB313\uAE00", __jsx("span", {
      className: "ico"
    }))), __jsx("div", {
      className: "section comment_list"
    }, __jsx("div", {
      className: "input"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), __jsx("input", {
      type: "button",
      value: "\uB4F1\uB85D"
    })), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx("div", {
      className: "comment"
    }, __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0 \uC548\uD0C0\uAE5D\uB124\uC694 \uC7A0\uAE50 \uBD80\uC9C4\uC778\uAC78\uAE4C\uC694  \uC624\uB798\uAC00\uC9C0 \uC54A\uC558\uC73C\uBA74 \uD558\uB294\uB370 \uACC4\uC18D \uC548\uC88B\uC740\uAE30\uC0AC\uB9CC \uB728\uB124\uC694 \uB958\uD604\uC9C4 \uACBD\uAE30\uBCF4\uBA74\uC11C \uD798\uC744 \uC5BB\uB294 \uC0AC\uB78C\uB4E4\uC774 \uB9CE\uC2B5\uB2C8\uB2E4  \uB958\uD604\uC9C4 \uC120\uC218 \uD798\uB0B4\uC138\uC694"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      href: "#",
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), "\uC2E0\uACE0")), __jsx("a", {
      className: "btn_reply"
    }, "\uB2F5\uAE00 0")), __jsx("div", {
      className: "reply_wrap"
    }, __jsx("div", {
      className: "reply_write"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("div", {
      className: "box"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB2F5\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), __jsx("a", {
      href: "#self",
      className: "btn_regi"
    }, "\uB4F1\uB85D")), __jsx("a", {
      href: "#self",
      className: "btn_close"
    }, "\uB2F5\uAE00 \uC811\uAE30", __jsx("span", {
      className: "ico"
    }))))), __jsx("li", null, __jsx("div", {
      className: "comment"
    }, __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0 \uC548\uD0C0\uAE5D\uB124\uC694 \uC7A0\uAE50 \uBD80\uC9C4\uC778\uAC78\uAE4C\uC694  \uC624\uB798\uAC00\uC9C0 \uC54A\uC558\uC73C\uBA74 \uD558\uB294\uB370 \uACC4\uC18D \uC548\uC88B\uC740\uAE30\uC0AC\uB9CC \uB728\uB124\uC694 \uB958\uD604\uC9C4 \uACBD\uAE30\uBCF4\uBA74\uC11C \uD798\uC744 \uC5BB\uB294 \uC0AC\uB78C\uB4E4\uC774 \uB9CE\uC2B5\uB2C8\uB2E4. \uB958\uD604\uC9C4 \uC120\uC218 \uD798\uB0B4\uC138\uC694 \uD560\uC218\uC788\uB2E4"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      href: "#",
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), "\uC2E0\uACE0")), __jsx("a", {
      className: "btn_reply"
    }, "\uB2F5\uAE00 0")), __jsx("div", {
      className: "reply_wrap"
    }, __jsx("div", {
      className: "reply_write"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("div", {
      className: "box"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB2F5\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), __jsx("a", {
      href: "#self",
      className: "btn_regi"
    }, "\uB4F1\uB85D")), __jsx("a", {
      href: "#self",
      className: "btn_close"
    }, "\uB2F5\uAE00 \uC811\uAE30", __jsx("span", {
      className: "ico"
    }))))), __jsx("li", null, __jsx("div", {
      className: "comment"
    }, __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0 \uC548\uD0C0\uAE5D\uB124\uC694 \uC7A0\uAE50 \uBD80\uC9C4\uC778\uAC78\uAE4C\uC694  \uC624\uB798\uAC00\uC9C0 \uC54A\uC558\uC73C\uBA74 \uD558\uB294\uB370 \uACC4\uC18D \uC548\uC88B\uC740\uAE30\uC0AC\uB9CC \uB728\uB124\uC694 \uB958\uD604\uC9C4 \uACBD\uAE30\uBCF4\uBA74\uC11C \uD798\uC744 \uC5BB\uB294 \uC0AC\uB78C\uB4E4\uC774 \uB9CE\uC2B5\uB2C8\uB2E4. \uB958\uD604\uC9C4 \uC120\uC218 \uD798\uB0B4\uC138\uC694  \uD560\uC218\uC788\uB2E4"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      href: "#",
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), "\uC2E0\uACE0")), __jsx("a", {
      className: "btn_reply"
    }, "\uB2F5\uAE00 0")), __jsx("div", {
      className: "reply_wrap"
    }, __jsx("div", {
      className: "reply_write"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("div", {
      className: "box"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB2F5\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), __jsx("a", {
      href: "#self",
      className: "btn_regi"
    }, "\uB4F1\uB85D")), __jsx("a", {
      href: "#self",
      className: "btn_close"
    }, "\uB2F5\uAE00 \uC811\uAE30", __jsx("span", {
      className: "ico"
    }))))), __jsx("li", null, __jsx("div", {
      className: "comment"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0 \uC548\uD0C0\uAE5D\uB124\uC694 \uC7A0\uAE50 \uBD80\uC9C4\uC778\uAC78\uAE4C\uC694  \uC624\uB798\uAC00\uC9C0 \uC54A\uC558\uC73C\uBA74 \uD558\uB294\uB370 \uACC4\uC18D \uC548\uC88B\uC740\uAE30\uC0AC\uB9CC \uB728\uB124\uC694. \uB958\uD604\uC9C4 \uACBD\uAE30\uBCF4\uBA74\uC11C \uD798\uC744 \uC5BB\uB294 \uC0AC\uB78C\uB4E4\uC774 \uB9CE\uC2B5\uB2C8\uB2E4. \uB958\uD604\uC9C4 \uC120\uC218 \uD798\uB0B4\uC138\uC694  \uD560\uC218\uC788\uB2E4"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      href: "#",
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), " \uC2E0\uACE0")), __jsx("a", {
      className: "btn_reply"
    }, "\uB2F5\uAE00 2")), __jsx("div", {
      className: "reply_wrap"
    }, __jsx("div", {
      className: "reply"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0 \uC548\uD0C0\uAE5D\uB124"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), " \uC2E0\uACE0"))), __jsx("div", {
      className: "reply"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0 \uC548\uD0C0\uAE5D\uB124"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), " \uC2E0\uACE0"))), __jsx("div", {
      className: "reply_write"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("div", {
      className: "box"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB2F5\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), __jsx("a", {
      href: "#self",
      className: "btn_regi"
    }, "\uB4F1\uB85D")), __jsx("a", {
      href: "#self",
      className: "btn_close"
    }, "\uB2F5\uAE00 \uC811\uAE30", __jsx("span", {
      className: "ico"
    }))))), __jsx("li", null, __jsx("div", {
      className: "comment"
    }, __jsx("strong", {
      className: "user"
    }, "Honggildong"), __jsx("div", {
      className: "txt"
    }, "\uC815\uB9D0"), __jsx("div", {
      className: "bottom"
    }, __jsx("span", {
      className: "date"
    }, "2019-09-20"), __jsx("a", {
      href: "#",
      className: "btn_report"
    }, __jsx("span", {
      className: "bar"
    }, "I"), "\uC2E0\uACE0")), __jsx("a", {
      className: "btn_reply"
    }, "\uB2F5\uAE00 0")), __jsx("div", {
      className: "reply_wrap"
    }, __jsx("div", {
      className: "reply_write"
    }, __jsx("div", {
      className: "deco"
    }, __jsx("i", {
      className: "v"
    }), __jsx("i", {
      className: "h"
    })), __jsx("div", {
      className: "box"
    }, __jsx("input", {
      type: "text",
      placeholder: "\uB2F5\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    }), __jsx("a", {
      href: "#self",
      className: "btn_regi"
    }, "\uB4F1\uB85D")), __jsx("a", {
      href: "#self",
      className: "btn_close"
    }, "\uB2F5\uAE00 \uC811\uAE30", __jsx("span", {
      className: "ico"
    })))))), __jsx("a", {
      className: "btn_list_more"
    }, "\uB354\uBCF4\uAE30 ", __jsx("span", {
      className: "ico"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CommentArea);

/***/ }),

/***/ "./components/body/parts/contri.js":
/*!*****************************************!*\
  !*** ./components/body/parts/contri.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Contri extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      className: "section opinion_logo contri"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uAE30\uACE0")), __jsx("div", {
      className: "logo_list"
    }, __jsx("ul", null, dataFetchingReducer.opinionContri.map(row => !!row && __jsx("li", {
      key: row.articleId
    }, __jsx("a", {
      href: '/article/' + row.articleId,
      className: "img"
    }, __jsx("img", {
      src: row.thumbnail,
      alt: row.categoryName
    })), __jsx("a", {
      href: '/article/' + row.articleId,
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, row.title), __jsx("span", {
      className: "writer"
    }, row.writer)))))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Contri));

/***/ }),

/***/ "./components/body/parts/detailOpinion.js":
/*!************************************************!*\
  !*** ./components/body/parts/detailOpinion.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opinionMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opinionMenu */ "./components/body/parts/opinionMenu.js");
/* harmony import */ var _containers_detailOpinionItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/detailOpinionItem */ "./components/containers/detailOpinionItem.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class DetailOpinion extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "findingData", (opNo, dataFetchingReducer) => {
      if (opNo == 276) {
        return dataFetchingReducer.opinionEditorial;
      }
    });
  }

  render() {
    const {
      match,
      dataFetchingReducer
    } = this.props;
    const opNo = {
      match
    }.match.params.p3;
    const rendingData = this.findingData(opNo, {
      dataFetchingReducer
    }.dataFetchingReducer);
    console.log(rendingData);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_opinionMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      match: match
    }), __jsx("div", {
      className: "bg_bar"
    }), __jsx("div", {
      className: "opinion_list"
    }, __jsx("div", {
      className: "txt_list"
    }, __jsx("ul", null, __jsx(_containers_detailOpinionItem__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(DetailOpinion));

/***/ }),

/***/ "./components/body/parts/editorial.js":
/*!********************************************!*\
  !*** ./components/body/parts/editorial.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more */ "./components/body/parts/more.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Editorial extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      className: "section editorial"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uC0AC\uC124"), __jsx(_more__WEBPACK_IMPORTED_MODULE_2__["default"], {
      opinionId: "113/276"
    })), __jsx("div", {
      className: "txt_list"
    }, __jsx("ul", null, dataFetchingReducer.opinionEditorial.map(row => __jsx("li", {
      key: row.articleId
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
      to: "/article/" + row.articleId
    }, __jsx("span", {
      className: "tit"
    }, row.title), __jsx("span", {
      className: "sub_txt"
    }, row.preRead)))))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Editorial));

/***/ }),

/***/ "./components/body/parts/etc.js":
/*!**************************************!*\
  !*** ./components/body/parts/etc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Etc extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      className: "section opinion_logo etc"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uAE30\uD0C0")), __jsx("div", {
      className: "logo_list"
    }, __jsx("ul", null, dataFetchingReducer.opinionEtc.map(row => !!row && __jsx("li", {
      key: row.articleId
    }, __jsx("a", {
      href: '/article/' + row.articleId,
      className: "img"
    }, __jsx("img", {
      src: row.thumbnail,
      alt: "\uB098\uC758 \uC758\uACAC"
    })), __jsx("a", {
      href: '/article/' + row.articleId,
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, row.title), __jsx("span", {
      className: "writer"
    }, row.writer)))))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Etc));

/***/ }),

/***/ "./components/body/parts/mainOpinion.js":
/*!**********************************************!*\
  !*** ./components/body/parts/mainOpinion.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sectionOpinion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sectionOpinion */ "./components/body/parts/sectionOpinion.js");
/* harmony import */ var _cartoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartoon */ "./components/body/parts/cartoon.js");
/* harmony import */ var _adArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adArea */ "./components/body/parts/adArea.js");
/* harmony import */ var _editorial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editorial */ "./components/body/parts/editorial.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column */ "./components/body/parts/column.js");
/* harmony import */ var _contri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contri */ "./components/body/parts/contri.js");
/* harmony import */ var _etc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./etc */ "./components/body/parts/etc.js");
/* harmony import */ var _bottomMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bottomMenu */ "./components/body/parts/bottomMenu.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













class MainOpinion extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      petchingMainOpinion
    } = this.props;
    petchingMainOpinion();
  }

  render() {
    const {
      location
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_sectionOpinion__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_cartoon__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_adArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
      location: location
    }), __jsx(_editorial__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_column__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_contri__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_etc__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_adArea__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_bottomMenu__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  petchingMainOpinion: _actions_actions__WEBPACK_IMPORTED_MODULE_11__["petchingMainOpinion"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(MainOpinion));

/***/ }),

/***/ "./components/body/parts/mainTopNews.js":
/*!**********************************************!*\
  !*** ./components/body/parts/mainTopNews.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class MainTopNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    const {
      petchingMainTopNews
    } = props;
    petchingMainTopNews();
  }

  componentDidMount() {}

  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dataFetchingReducer.mainTop.map(row => __jsx("div", {
      key: row.info1,
      className: "main_top_news"
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      to: row.url
    }, __jsx("div", {
      className: "txt"
    }, __jsx("div", {
      className: "tit",
      dangerouslySetInnerHTML: {
        __html: row.title
      }
    }), __jsx("div", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 ", row.comment_total, "\uAC1C")), __jsx("div", {
      className: "img"
    }, __jsx("div", null, __jsx("img", {
      src: row.image,
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })))))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  petchingMainTopNews: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["petchingMainTopNews"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MainTopNews));

/***/ }),

/***/ "./components/body/parts/more.js":
/*!***************************************!*\
  !*** ./components/body/parts/more.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class More extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /* <a className="btn_more" onClick={(e)=>this.click()}><img src={require("../../../public/arrow_right.png")} alt="사설 더보기" /></a>*/
      __jsx("div", {
        className: "btn_more"
      }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        to: "/opinion/" + this.props.opinionId
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../../public/arrow_right.png */ "./public/arrow_right.png"),
        alt: "\uC0AC\uC124 \uB354\uBCF4\uAE30"
      })))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (More);

/***/ }),

/***/ "./components/body/parts/newsList.js":
/*!*******************************************!*\
  !*** ./components/body/parts/newsList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _containers_newsListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/newsListItem */ "./components/containers/newsListItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class NewsList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      petchingMainNewsList
    } = this.props;
    petchingMainNewsList();
  }

  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      className: "news_list_infinite"
    }, __jsx("ul", null, dataFetchingReducer.mainNewsList.map(row => __jsx(_containers_newsListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: row.info1,
      item: row
    }))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  petchingMainNewsList: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["petchingMainNewsList"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NewsList));

/***/ }),

/***/ "./components/body/parts/opinionMenu.js":
/*!**********************************************!*\
  !*** ./components/body/parts/opinionMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_opinionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/opinionList */ "./constants/opinionList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class OpinionMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      opinionMenu: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    //this.setState({ opinionMenu: true })
    this.setState((state, props) => ({
      opinionMenu: this.state.opinionMenu ? false : true
    }));
  }

  render() {
    const {
      match
    } = this.props;
    console.log({
      match
    });
    const title = _constants_opinionList__WEBPACK_IMPORTED_MODULE_3__["default"].opinion.find(function (row) {
      if (row.id == {
        match
      }.match.params.p3) {
        return row;
      }

      ;
    });
    console.log(title);
    return __jsx("div", {
      className: !!this.state.opinionMenu ? "active section opinion_list_top clearfix" : "section opinion_list_top clearfix"
    }, __jsx("h3", null, title.name), __jsx("a", {
      onClick: this.onClick,
      className: "btn_all_menu"
    }, "\uC804\uCCB4\uBA54\uB274 ", __jsx("span", {
      className: "ico"
    })), __jsx("div", {
      className: "opinion_all_menu"
    }, __jsx("ul", null, _constants_opinionList__WEBPACK_IMPORTED_MODULE_3__["default"].opinion.map(row => __jsx("li", {
      key: row.id,
      className: row.liClass
    }, __jsx("a", {
      href: '/opinion/113/' + row.id
    }, row.name))))));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(OpinionMenu));

/***/ }),

/***/ "./components/body/parts/photoNews.js":
/*!********************************************!*\
  !*** ./components/body/parts/photoNews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_photoNewsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/photoNewsItem */ "./components/containers/photoNewsItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class SectionPhotoNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "photo_news"
    }, __jsx("ul", null, this.props.dataList.map(row => __jsx(_containers_photoNewsItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: row
    }))));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(SectionPhotoNews));

/***/ }),

/***/ "./components/body/parts/rankNewsList.js":
/*!***********************************************!*\
  !*** ./components/body/parts/rankNewsList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class RankNewsList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {// const { clickingHamburger } = this.props
      // clickingHamburger()
    });
  }

  render() {
    return __jsx("div", {
      className: "news_list_infinite rank_news"
    }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "1"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img03.png */ "./public/ex_img03.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uCE98\uB9AC\uD3EC\uB2C8\uC544 \uC0B0\uBD88 \uBC1C\uD654\uCC45\uC784 \uC804\uB825\uC0AC, 10\uC5B5\uB2EC\uB7EC \uC190\uBC30 \uD569\uC758"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "2"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img03.png */ "./public/ex_img03.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uCE98\uB9AC\uD3EC\uB2C8\uC544 \uC0B0\uBD88 \uBC1C\uD654\uCC45\uC784 \uC804\uB825\uC0AC, 10\uC5B5\uB2EC\uB7EC \uC190\uBC30 \uD569\uC758"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "3"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "4"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "5"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "6"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "7"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "8"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "9"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C"))), __jsx("li", null, __jsx("a", {
      href: "#",
      className: "img"
    }, __jsx("span", {
      className: "rank"
    }, "10"), __jsx("img", {
      src: __webpack_require__(/*! ../../../public/ex_img02.png */ "./public/ex_img02.png"),
      alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
    })), __jsx("a", {
      href: "#",
      className: "txt"
    }, __jsx("span", {
      className: "tit"
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uCC3D\uAC04 50\uC8FC\uB144, \uCC38\uC2E0\uD55C \uC778\uC7AC\uB97C \uCC3E\uC2B5\uB2C8\uB2E4"), __jsx("span", {
      className: "comment"
    }, __jsx("span", {
      className: "ico"
    }), "\uB313\uAE00 12\uAC1C")))));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(RankNewsList));

/***/ }),

/***/ "./components/body/parts/relatedNews.js":
/*!**********************************************!*\
  !*** ./components/body/parts/relatedNews.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_relatedNewsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/relatedNewsItem */ "./components/containers/relatedNewsItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class RelatedNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      data: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.item.articleId != prevState.id) {
      return {
        id: nextProps.item.articleId,
        data: [!!nextProps.item.related_t1 && {
          title: nextProps.item.related_t1,
          link: nextProps.item.related_u1
        }, !!nextProps.item.related_t2 && {
          title: nextProps.item.related_t2,
          link: nextProps.item.related_u2
        }, !!nextProps.item.related_t3 && {
          title: nextProps.item.related_t3,
          link: nextProps.item.related_u3
        }, !!nextProps.item.related_t4 && {
          title: nextProps.item.related_t4,
          link: nextProps.item.related_u4
        }]
      };
    } else {
      return null;
    }
  }

  render() {
    return __jsx("div", {
      className: "section related_news news_list_infinite"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uAD00\uB828 \uB274\uC2A4")), __jsx("ul", null, this.state.data.map(function (row, index) {
      return !!row && __jsx(_containers_relatedNewsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: index,
        item: row
      });
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RelatedNews);

/***/ }),

/***/ "./components/body/parts/sectionOpinion.js":
/*!*************************************************!*\
  !*** ./components/body/parts/sectionOpinion.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more */ "./components/body/parts/more.js");
/* harmony import */ var _containers_sectionOpinionItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/sectionOpinionItem */ "./components/containers/sectionOpinionItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class SectionOpinion extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      petchingSectionOpinion
    } = this.props;
    petchingSectionOpinion();
  }

  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      className: "section opinion"
    }, __jsx("div", {
      className: "tit_wrap"
    }, __jsx("h3", {
      className: "sub_tit"
    }, "\uC624\uD53C\uB2C8\uC5B8"), __jsx(_more__WEBPACK_IMPORTED_MODULE_4__["default"], {
      opinionId: '113/276'
    })), __jsx("div", {
      className: "top5 txt_img_list"
    }, __jsx("ul", null, dataFetchingReducer.sectionOpinion.map(row => __jsx(_containers_sectionOpinionItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: row.info1,
      item: row
    })))));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  petchingSectionOpinion: _actions_actions__WEBPACK_IMPORTED_MODULE_3__["petchingSectionOpinion"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SectionOpinion));

/***/ }),

/***/ "./components/body/photoNews.js":
/*!**************************************!*\
  !*** ./components/body/photoNews.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_photoNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/photoNews */ "./components/body/parts/photoNews.js");
/* harmony import */ var _parts_adArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/adArea */ "./components/body/parts/adArea.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class PhotoNews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /*
      constructor(props) {
          super(props)
  
          this.state = {
              itemIndex: 0
  
          }
  
      }*/
  componentDidMount() {
    const {
      petchingPhotoNews
    } = this.props;
    petchingPhotoNews();
  }

  render() {
    const {
      dataFetchingReducer
    } = this.props;
    return __jsx("div", {
      id: "container"
    }, __jsx(_parts_photoNews__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dataList: dataFetchingReducer.photoNews.slice(0, 4)
    }), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_parts_photoNews__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dataList: dataFetchingReducer.photoNews.slice(4, 8)
    }));
  }

}

function mapStateToProps(state) {
  const {
    dataFetchingReducer
  } = state;
  return {
    dataFetchingReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
  petchingPhotoNews: _actions_actions__WEBPACK_IMPORTED_MODULE_5__["petchingPhotoNews"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PhotoNews));

/***/ }),

/***/ "./components/body/section.js":
/*!************************************!*\
  !*** ./components/body/section.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_newsListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/newsListItem */ "./components/containers/newsListItem.js");
/* harmony import */ var _parts_adArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/adArea */ "./components/body/parts/adArea.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Section extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "news_list_infinite"
    }, __jsx("ul", null, __jsx("li", null), __jsx("li", null), __jsx("li", null), __jsx("li", null))), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
      className: "news_list_infinite"
    }, __jsx("ul", null, __jsx("li", null), __jsx("li", null), __jsx("li", null), __jsx("li", null))));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Section));

/***/ }),

/***/ "./components/body/top50.js":
/*!**********************************!*\
  !*** ./components/body/top50.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_rankNewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/rankNewsList */ "./components/body/parts/rankNewsList.js");
/* harmony import */ var _parts_adArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/adArea */ "./components/body/parts/adArea.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Top50 extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {// const { clickingHamburger } = this.props
      // clickingHamburger()
    });
  }

  render() {
    return __jsx("div", {
      id: "container"
    }, __jsx(_parts_rankNewsList__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_parts_rankNewsList__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_parts_rankNewsList__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_parts_rankNewsList__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_parts_adArea__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Top50));

/***/ }),

/***/ "./components/containers/articleDetailItem.js":
/*!****************************************************!*\
  !*** ./components/containers/articleDetailItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function subTitleCheck(subTitle) {
  if (subTitle) {
    return __jsx("div", {
      id: "sub_tit"
    }, __jsx("p", {
      className: "sub_1"
    }, "\u25B6 ", subTitle));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) => __jsx("div", {
  className: "section news_wrap"
}, __jsx("div", {
  className: "news_top"
}, __jsx("div", {
  className: "news_tit"
}, __jsx("h2", null, item.title), __jsx("div", {
  className: "date"
}, item.inputDate)), __jsx("div", {
  className: "news_btn"
}, __jsx("a", {
  href: "#",
  className: "go_comment"
}, __jsx("span", {
  className: "ico"
}), "1,020"), __jsx("div", null, __jsx("ul", null, __jsx("li", null, __jsx("a", {
  href: "#",
  className: "btn_listen"
}, __jsx("span", {
  className: "ico"
}), "\uBCF8\uBB38\uB4E3\uAE30")), __jsx("li", null, __jsx("a", {
  href: "#",
  className: "btn_view_s"
}, __jsx("span", null, "\uAC00"), " ", __jsx("span", null, "-"))), __jsx("li", null, __jsx("a", {
  href: "#",
  className: "btn_view_l"
}, __jsx("span", null, "\uAC00"), " ", __jsx("span", null, "+"))))))), subTitleCheck(item.subTitle1), __jsx("div", {
  className: "article"
}, __jsx("div", {
  id: "article_txt",
  className: "article_txt",
  dangerouslySetInnerHTML: {
    __html: item.contents
  }
}), __jsx("div", {
  className: "ad_area article_ad"
}, "\uB274\uC2A4 \uC911\uAC04 \uAD11\uACE0\uC601\uC5ED"), __jsx("div", {
  className: "reporter"
}, item.writer)), __jsx("ul", {
  className: "news_sns"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("img", {
  src: __webpack_require__(/*! ../../public/share_twitter.png */ "./public/share_twitter.png"),
  alt: "Twitter"
}))), __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("img", {
  src: __webpack_require__(/*! ../../public/share_facebook.png */ "./public/share_facebook.png"),
  alt: "Facebook"
}))), __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("img", {
  src: __webpack_require__(/*! ../../public/share_kakao.png */ "./public/share_kakao.png"),
  alt: "KakaoTalk"
}))), __jsx("li", null, __jsx("a", {
  href: "#",
  className: "btn_url"
}, "URL \uBCF5\uC0AC")))));

/***/ }),

/***/ "./components/containers/detailOpinionItem.js":
/*!****************************************************!*\
  !*** ./components/containers/detailOpinionItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) => __jsx("li", null, __jsx("a", {
  href: "#",
  className: "txt"
}, __jsx("span", {
  className: "tit"
}, "\uD64D\uCF69\uC0AC\uD0DC, \uBB38\uBA85\uCDA9\uB3CC\uC778\uAC00"), __jsx("span", {
  className: "sub_txt"
}, "6\uC6D4, 7\uC6D4, 8\uC6D4. \uADF8\uB9AC\uACE0 9\uC6D4 4\uC77C \uCE90\uB9AC \uB78C \uD589\uC815\uC7A5\uAD00\uC740 \u2018\uBC94\uC8C4\uC778 \uC778\uB3C4\uBC95\uC548\u2019(\uC1A1\uD658\uBC95) \uACF5\uC2DD\uCCA0\uD68C\uB97C \uBC1C\uD45C\uD588\uB2E4. 100\uB9CC, \uD55C \uB54C\uB294 200\uB9CC \uC774\uC0C1\uC774 \uAC70\uB9AC\uB85C \uC3DF\uC544\uC838 \uB098\uC628 \uD64D\uCF69 \uC2DC\uC704. \uBB34\uB354\uC6B4 \uC5EC\uB984 \uC11D \uB2EC \uB0B4\uB0B4 \uACC4\uC18D\uB418\uC5B4 \uC654\uB358 \uC774 \uC2DC\uBBFC \uC800\uD56D \uC6B4\uB3D9\uC740 \uADF8\uB7EC\uBA74 \uC774\uB85C\uC368 \uC7A6\uC544\uB4E4\uACE0 \uB9D0 \uAC83 \uC778\uAC00."), __jsx("span", {
  className: "date"
}, "2019-09-07"))));

/***/ }),

/***/ "./components/containers/newsListItem.js":
/*!***********************************************!*\
  !*** ./components/containers/newsListItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var image_exists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! image-exists */ "image-exists");
/* harmony import */ var image_exists__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(image_exists__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* 뉴스 기사의 이미지 유무 체크 */

function imageChecking(item) {
  return image_exists__WEBPACK_IMPORTED_MODULE_2___default()(item.image, function (exists) {
    if (exists) {
      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: item.url,
        className: "img"
      }, __jsx("img", {
        src: item.image,
        alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
      }));
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) =>
/* <form action='javascript:' onSubmit={({target: {title}}) => {
    addTodo(title.value)
    title.value = ''
}} >
    <input type='checkbox' onClick={() => {
        setAllCompleted(setAllValue)
        toggleSetAllValue()
    }} />
    <input type='text' name='title' placeholder='What needs to be done?' />
</form> */
__jsx("li", {
  key: item.info1
}, imageChecking(item), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.url,
  className: "txt"
}, __jsx("span", {
  className: "tit"
}, item.title), __jsx("span", {
  className: "comment"
}, __jsx("span", {
  className: "ico"
}), "\uB313\uAE00 ", item.comment_total, "\uAC1C"))));

/***/ }),

/***/ "./components/containers/photoNewsItem.js":
/*!************************************************!*\
  !*** ./components/containers/photoNewsItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) => __jsx("li", {
  key: item.photoId
}, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: "/"
}, __jsx("span", {
  className: "img"
}, __jsx("img", {
  src: "http://mimg.koreatimes.com/la/" + item.image,
  alt: "news image"
})), __jsx("span", {
  className: "txt"
}, __jsx("span", {
  className: "tit"
}, item.title), __jsx("span", {
  className: "sub_txt"
}, item.content)))));

/***/ }),

/***/ "./components/containers/popularNewsItem.js":
/*!**************************************************!*\
  !*** ./components/containers/popularNewsItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  item,
  index
}) => __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.url,
  className: "img"
}, __jsx("span", {
  className: "rank"
}, index + 1), __jsx("img", {
  src: __webpack_require__(/*! ../../public/ex_img03.png */ "./public/ex_img03.png"),
  alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
})), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.url,
  className: "txt"
}, __jsx("span", {
  className: "tit"
}, item.title), __jsx("span", {
  className: "comment"
}, __jsx("span", {
  className: "ico"
}), "\uB313\uAE00 ", item.review_cnt, "\uAC1C"))));

/***/ }),

/***/ "./components/containers/relatedNewsItem.js":
/*!**************************************************!*\
  !*** ./components/containers/relatedNewsItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) => __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.link,
  className: "img"
}, __jsx("span", {
  className: "rank"
}, "42"), __jsx("img", {
  src: __webpack_require__(/*! ../../public/ex_img03.png */ "./public/ex_img03.png"),
  alt: "\uAE30\uC0AC\uC774\uBBF8\uC9C0"
})), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.link,
  className: "txt"
}, __jsx("span", {
  className: "tit"
}, item.title), __jsx("span", {
  className: "comment"
}, __jsx("span", {
  className: "ico"
}), "\uB313\uAE00 12\uAC1C"))));

/***/ }),

/***/ "./components/containers/sectionOpinionItem.js":
/*!*****************************************************!*\
  !*** ./components/containers/sectionOpinionItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  item
}) =>
/* <form action='javascript:' onSubmit={({target: {title}}) => {
    addTodo(title.value)
    title.value = ''
}} >
    <input type='checkbox' onClick={() => {
        setAllCompleted(setAllValue)
        toggleSetAllValue()
    }} />
    <input type='text' name='title' placeholder='What needs to be done?' />
</form> */
__jsx("li", {
  key: item.info1
}, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.url,
  className: "img"
}, __jsx("img", {
  src: item.image,
  alt: item.cName
})), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: item.url,
  className: "txt"
}, __jsx("span", {
  className: "tit"
}, item.title), __jsx("span", {
  className: "sub_txt"
}), __jsx("span", {
  className: "date"
}, item.pDate.substring(0, 10)))));

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  handleClick() {
    // With route name and params
    //Router.pushRoute('home', {slug: 'hello-world'})
    // With route URL
    _routes__WEBPACK_IMPORTED_MODULE_1__["Router"].pushRoute('/home/hello-world');
  }

  render() {
    return __jsx("div", {
      id: "footer"
    }, __jsx("div", {
      className: "btn_top_wrap"
    }, __jsx("a", {
      className: "btn_top",
      onClick: this.handleClick
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/bt_top.png */ "./public/bt_top.png"),
      alt: "\uB9E8\uC704\uB85C"
    })), __jsx("span", null, "\uB9E8\uC704\uB85C")), __jsx("div", {
      className: "copy"
    }, __jsx("a", {
      className: "btn_go_pc"
    }, "PC\uBC84\uC804"), __jsx("div", {
      className: "txt"
    }, "3731 Wilshire Blvd., 10th Floor, Los Angeles CA 90010", __jsx("br", null), "Tel.(323)", __jsx("strong", null, "692-2000"), " ", __jsx("br", null), "Copyright\xA9The Korea Times All rights reserved.")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header/gnb.js":
/*!**********************************!*\
  !*** ./components/header/gnb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_gnbList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/gnbList */ "./constants/gnbList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import { clickingHeaderSection } from '../../actions/actions'





class Gnb extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); // const { switchReducer, location } = this.props;

    /* const { switchReducer, location } = this.props;
       this.state = {
         hSection : {switchReducer}.switchReducer.gnbSelector
     }*/
  } // static getDerivedStateFromProps(nextProps) {
  //console.log(nextProps)
  //return changingHeaderGnb(nextProps.match.params.p1)
  // return { p1: nextProps.match.params.p1 }
  // }

  /*
    getDerivedStateFromProps() {
          this.setState({hSection : {switchReducer}.switchReducer.gnbSelector})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps)
      //if(prevProps.switchReducer.gnbSelector!=this.props.match.params.p1) {
     //     changingHeaderGnb(this.props.match.params.p1)
     // }
  }*/


  _makingGnb() {
    const {
      switchReducer
    } = this.props; //const hSection = { switchReducer }.switchReducer.headerSection;
    //const mSection = { section }.section.mainSection;

    let hSection = {
      switchReducer
    }.switchReducer.gnbSelector;
    let selectedGnb = _constants_gnbList__WEBPACK_IMPORTED_MODULE_2__["default"].gnbs.find(function (row) {
      if (row.id == hSection) {
        return row;
      }
    }); // section 일 경우 1depth 더 들어감

    if (hSection == 'section') {
      selectedGnb = selectedGnb.list.find(function (row) {
        if (row.id == {
          switchReducer
        }.switchReducer.gnbSubSelector) {
          hSection = 'section/' + row.id;
          return row;
        }
      });
    }

    let selectedGnbli = selectedGnb.list.map(row => {
      return __jsx("li", {
        key: row.id
      }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        to: '/' + (hSection == 'main' ? '' : hSection + '/') + row.id,
        activeClassName: "on"
      }, row.name)); //return <li key={row.id} className={ row.id==mSection ? "on" : "" }><a onClick={(e)=>this.click(row.id)}>{row.name}</a></li>
      //return <li key={row.id} className={ row.id==mSection ? "on" : "" }><ActiveLink href={'/index'} >{row.name}</ActiveLink></li>
    });
    return __jsx("div", {
      id: "gnb",
      className: hSection.substring(0, 7) == 'section' ? 'section_gnb' : ''
    }, __jsx("ul", {
      className: hSection == 'main' ? 'clearfix' : 'scroll'
    }, selectedGnbli));
  }
  /* click = (e) => {
       const { clickingHeaderSection } = this.props
       clickingHeaderSection(e)
   } */


  render() {
    // const { switchReducer } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this._makingGnb());
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}
/*
const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingHeaderSection }, dispatch)
*/


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Gnb));

/***/ }),

/***/ "./components/header/hamburger.js":
/*!****************************************!*\
  !*** ./components/header/hamburger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Hamburger extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {
      const {
        clickingHamburger
      } = this.props;
      clickingHamburger();
    });
  }

  render() {
    return __jsx("a", {
      className: "btn_hamburger",
      onClick: this.click
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/bt_hambuger.png */ "./public/bt_hambuger.png"),
      alt: "\uC804\uCCB4\uBA54\uB274"
    }));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingHamburger: _actions_actions__WEBPACK_IMPORTED_MODULE_4__["clickingHamburger"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Hamburger));

/***/ }),

/***/ "./components/header/headerSearch.js":
/*!*******************************************!*\
  !*** ./components/header/headerSearch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class HeaderSearch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      switchReducer
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: !!switchReducer.searchBtnStatus ? "header_btn active " : "header_btn"
    }, __jsx("div", {
      className: "sch_box"
    }, __jsx("input", {
      className: "sch_txt",
      type: "text",
      maxLength: "30",
      placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694"
    })), __jsx("div", {
      className: "sch_btn"
    })), __jsx("div", {
      className: !!switchReducer.searchBtnStatus ? "active blocker" : "blocker"
    }));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderSearch));

/***/ }),

/***/ "./components/header/headerTop.js":
/*!****************************************!*\
  !*** ./components/header/headerTop.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburger */ "./components/header/hamburger.js");
/* harmony import */ var _mainLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainLogo */ "./components/header/mainLogo.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");
/* harmony import */ var _sectionLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sectionLogo */ "./components/header/sectionLogo.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class headerTop extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logoClick", () => {
      const {
        clickingMainLogo
      } = this.props;
      clickingMainLogo();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchClick", () => {
      const {
        clickingSearchBtn
      } = this.props;
      clickingSearchBtn();
    });
  }

  render() {
    const {
      switchReducer
    } = this.props;
    return __jsx("div", {
      id: "headerTop",
      className: switchReducer.gnbSelector === 'main' ? '' : 'section_header'
    }, __jsx(_hamburger__WEBPACK_IMPORTED_MODULE_4__["default"], null), switchReducer.gnbSelector === 'main' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_mainLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("select", {
      name: "",
      id: "",
      className: "slt_location"
    }, __jsx("option", {
      value: ""
    }, "LA"), __jsx("option", {
      value: ""
    }, "NY"), __jsx("option", {
      value: ""
    }, "DC"), __jsx("option", {
      value: ""
    }, "SF"), __jsx("option", {
      value: ""
    }, "SEA"), __jsx("option", {
      value: ""
    }, "HI"), __jsx("option", {
      value: ""
    }, "CHI"))) : __jsx(_sectionLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: switchReducer.gnbSubSelector
    }), __jsx("a", {
      onClick: this.searchClick,
      className: "btn_sch"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/bt_sch.png */ "./public/bt_sch.png"),
      alt: "\uAC80\uC0C9"
    })));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingMainLogo: _actions_actions__WEBPACK_IMPORTED_MODULE_6__["clickingMainLogo"],
  clickingSearchBtn: _actions_actions__WEBPACK_IMPORTED_MODULE_6__["clickingSearchBtn"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(headerTop));

/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headerTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerTop */ "./components/header/headerTop.js");
/* harmony import */ var _headerSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerSearch */ "./components/header/headerSearch.js");
/* harmony import */ var _gnb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gnb */ "./components/header/gnb.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      id: "header"
    }, __jsx(_headerTop__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_headerSearch__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_gnb__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/mainLogo.js":
/*!***************************************!*\
  !*** ./components/header/mainLogo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class MainLogo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logoClick", () => {
      const {
        clickingMainLogo
      } = this.props;
      clickingMainLogo();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchClick", () => {
      const {
        clickingSearchBtn
      } = this.props;
      clickingSearchBtn();
    });
  }

  render() {
    return __jsx("h1", null, __jsx("a", {
      onClick: this.logoClick
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/logo.png */ "./public/logo.png"),
      alt: "미주한국일보 THE KOREA TIMES"
    })));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingMainLogo: _actions_actions__WEBPACK_IMPORTED_MODULE_4__["clickingMainLogo"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(MainLogo));

/***/ }),

/***/ "./components/header/sectionLogo.js":
/*!******************************************!*\
  !*** ./components/header/sectionLogo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_gnbList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/gnbList */ "./constants/gnbList.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class SectionLogo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "logoClick", () => {
      const {
        clickingMainLogo
      } = this.props;
      clickingMainLogo();
    });
  }

  render() {
    const {
      name
    } = this.props;
    const sectionList = _constants_gnbList__WEBPACK_IMPORTED_MODULE_4__["default"].gnbs.find(function (row) {
      if (row.id == 'section') return row;
    });
    const sectionTit = sectionList.list.find(function (row) {
      if (row.id == {
        name
      }.name) return row;
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
      className: "logo_emblem"
    }, __jsx("a", {
      href: "../index.html"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/logo_emblem.png */ "./public/logo_emblem.png"),
      alt: "\uBBF8\uC8FC\uD55C\uAD6D\uC77C\uBCF4 THE KOREA TIMES"
    }))), __jsx("h2", {
      className: "section_tit"
    }, sectionTit.name));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingMainLogo: _actions_actions__WEBPACK_IMPORTED_MODULE_5__["clickingMainLogo"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(SectionLogo));

/***/ }),

/***/ "./components/sidenav/appDown.js":
/*!***************************************!*\
  !*** ./components/sidenav/appDown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AppDown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "app_down side_section"
    }, __jsx("h2", null, "\uC571 \uB2E4\uC6B4\uB85C\uB4DC"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: ""
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/app_kt.png */ "./public/app_kt.png"),
      alt: "\uD55C\uAD6D\uC77C\uBCF4"
    }), __jsx("span", {
      className: "txt"
    }, "\uD55C\uAD6D\uC77C\uBCF4"))), __jsx("li", null, __jsx("a", {
      href: ""
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/app_radio.png */ "./public/app_radio.png"),
      alt: "\uB77C\uB514\uC624\uC11C\uC6B8"
    }), __jsx("span", {
      className: "txt"
    }, "\uB77C\uB514\uC624\uC11C\uC6B8"))), __jsx("li", null, __jsx("a", {
      href: ""
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/app_hktv.png */ "./public/app_hktv.png"),
      alt: "\uD55C\uAD6DTV"
    }), __jsx("span", {
      className: "txt"
    }, "\uD55C\uAD6DTV"))), __jsx("li", null, __jsx("a", {
      href: ""
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/app_epaper.png */ "./public/app_epaper.png"),
      alt: "\uC804\uC790\uC2E0\uBB38"
    }), __jsx("span", {
      className: "txt"
    }, "\uC804\uC790\uC2E0\uBB38")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(AppDown));

/***/ }),

/***/ "./components/sidenav/branch.js":
/*!**************************************!*\
  !*** ./components/sidenav/branch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Branch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "branch side_section"
    }, __jsx("a", {
      href: ""
    }, "\uD55C\uAD6D\uC77C\uBCF4 \uC9C0\uC0AC \uC548\uB0B4 ", __jsx("span", {
      className: "ico_go"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Branch));

/***/ }),

/***/ "./components/sidenav/familySite.js":
/*!******************************************!*\
  !*** ./components/sidenav/familySite.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class FamilySite extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {
      const {
        clickingNavKtown1stFolder
      } = this.props;
      clickingNavKtown1stFolder();
    });
  }

  render() {
    const {
      switchReducer
    } = this.props;
    return __jsx("div", {
      className: "family_site side_section"
    }, __jsx("ul", {
      className: !!switchReducer.ktown1stFolder ? "active" : ""
    }, __jsx("li", {
      className: "dep1 dep1_ktown"
    }, __jsx("a", {
      className: "ktown"
    }, "Ktown 1\uBC88\uAC00 ", __jsx("span", {
      className: "ico",
      onClick: this.click
    })), __jsx("ul", {
      className: "ktown_menu"
    }, __jsx("li", {
      className: "kstory"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/story",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_kstory.png */ "./public/ktown_kstory.png"),
      alt: "K\uC2A4\uD1A0\uB9AC"
    })), __jsx("span", {
      className: "txt"
    }, "K\uC2A4\uD1A0\uB9AC"))), __jsx("li", {
      className: "ktalk"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/ktalk",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_ktalk.png */ "./public/ktown_ktalk.png"),
      alt: "ktalk"
    })), __jsx("span", {
      className: "txt"
    }, "K Talk"))), __jsx("li", {
      className: "yp"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/yp",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_yp.png */ "./public/ktown_yp.png"),
      alt: "\uC5C5\uC18C\uB85D"
    })), __jsx("span", {
      className: "txt"
    }, "\uC5C5\uC18C\uB85D"))), __jsx("li", {
      className: "in"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/in",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_in.png */ "./public/ktown_in.png"),
      alt: "\uC9C0\uC2DD\uD1A1"
    })), __jsx("span", {
      className: "txt"
    }, "\uC9C0\uC2DD\uD1A1"))), __jsx("li", {
      className: "realty"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/realty",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_realty.png */ "./public/ktown_realty.png"),
      alt: "\uBD80\uB3D9\uC0B0"
    })), __jsx("span", {
      className: "txt"
    }, "\uBD80\uB3D9\uC0B0"))), __jsx("li", {
      className: "car"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/car",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_car.png */ "./public/ktown_car.png"),
      alt: "\uC790\uB3D9\uCC28"
    })), __jsx("span", {
      className: "txt"
    }, "\uC790\uB3D9\uCC28"))), __jsx("li", {
      className: "rent"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/rent",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_rent.png */ "./public/ktown_rent.png"),
      alt: "\uB80C\uD2B8"
    })), __jsx("span", {
      className: "txt"
    }, "\uB80C\uD2B8"))), __jsx("li", {
      className: "job"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/rent",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_job.png */ "./public/ktown_job.png"),
      alt: "\uAD6C\uC778\uAD6C\uC9C1"
    })), __jsx("span", {
      className: "txt"
    }, "\uAD6C\uC778\uAD6C\uC9C1"))), __jsx("li", {
      className: "item"
    }, __jsx("a", {
      href: "https://www.ktown1st.com/item",
      target: "_blank"
    }, __jsx("span", {
      className: "ktown_ico"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/ktown_item.png */ "./public/ktown_item.png"),
      alt: "\uC0AC\uACE0\uD314\uAE30"
    })), __jsx("span", {
      className: "txt"
    }, "\uC0AC\uACE0\uD314\uAE30"))))), __jsx("li", {
      className: "dep1"
    }, __jsx("a", {
      href: "#"
    }, "The Korea Tims \uC601\uBB38 \uD55C\uAD6D\uC77C\uBCF4 ", __jsx("span", {
      className: "ico_go"
    }))), __jsx("li", {
      className: "dep1"
    }, __jsx("a", {
      href: "#"
    }, "\uD55C\uAD6DTV ", __jsx("span", {
      className: "ico_go"
    }))), __jsx("li", {
      className: "dep1"
    }, __jsx("a", {
      href: "#"
    }, "\uB77C\uB514\uC624 \uC11C\uC6B8 ", __jsx("span", {
      className: "ico_go"
    }))), __jsx("li", {
      className: "dep1"
    }, __jsx("a", {
      href: "#"
    }, "H magazine ", __jsx("span", {
      className: "ico_go"
    })))));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingNavKtown1stFolder: _actions_actions__WEBPACK_IMPORTED_MODULE_4__["clickingNavKtown1stFolder"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(FamilySite));

/***/ }),

/***/ "./components/sidenav/follow.js":
/*!**************************************!*\
  !*** ./components/sidenav/follow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Follow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "follow side_section"
    }, __jsx("h2", null, "Follow us"), __jsx("a", {
      href: "https://twitter.com/koreatimes",
      target: "_blank",
      className: "twitter"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/sns_twitter.png */ "./public/sns_twitter.png"),
      alt: "Twitter"
    })), __jsx("a", {
      href: "https://www.facebook.com/koreatimes",
      target: "_blank",
      className: "facebook"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../public/sns_facebook.png */ "./public/sns_facebook.png"),
      alt: "Facebook"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Follow));

/***/ }),

/***/ "./components/sidenav/index.js":
/*!*************************************!*\
  !*** ./components/sidenav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidenavTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenavTop */ "./components/sidenav/sidenavTop.js");
/* harmony import */ var _sidenavProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenavProfile */ "./components/sidenav/sidenavProfile.js");
/* harmony import */ var _selectLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectLocation */ "./components/sidenav/selectLocation.js");
/* harmony import */ var _newsCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsCategory */ "./components/sidenav/newsCategory.js");
/* harmony import */ var _livingInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./livingInfo */ "./components/sidenav/livingInfo.js");
/* harmony import */ var _appDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appDown */ "./components/sidenav/appDown.js");
/* harmony import */ var _familySite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./familySite */ "./components/sidenav/familySite.js");
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch */ "./components/sidenav/branch.js");
/* harmony import */ var _follow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./follow */ "./components/sidenav/follow.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












class Sidenav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      switchReducer
    } = this.props; // if({sidenav}.sidenav.sideNavStatus) {

    return __jsx("div", {
      id: "sidenav",
      className: !!switchReducer.sideNavStatus ? "active sidenav" : "sidenav"
    }, __jsx(_sidenavTop__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_sidenavProfile__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_selectLocation__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_newsCategory__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_livingInfo__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_appDown__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_familySite__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_branch__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_follow__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Sidenav));

/***/ }),

/***/ "./components/sidenav/livingInfo.js":
/*!******************************************!*\
  !*** ./components/sidenav/livingInfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class LivingInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "living_info side_section"
    }, __jsx("h2", null, "\uC0DD\uD65C \uC815\uBCF4"), __jsx("ul", null, __jsx("li", {
      className: "market"
    }, __jsx("a", {
      href: "/livinginfo"
    }, __jsx("span", {
      className: "ico"
    }), __jsx("span", {
      className: "txt"
    }, "\uAE08\uC8FC\uC758", __jsx("br", null), "\uB9C8\uCF13 \uC138\uC77C"))), __jsx("li", {
      className: "luck"
    }, __jsx("a", {
      href: ""
    }, __jsx("span", {
      className: "ico"
    }), __jsx("span", {
      className: "txt"
    }, "\uB760\uBCC4", __jsx("br", null), "\uC8FC\uAC04 \uC6B4\uC138"))), __jsx("li", {
      className: "citizen"
    }, __jsx("a", {
      href: ""
    }, __jsx("span", {
      className: "ico"
    }), __jsx("span", {
      className: "txt"
    }, "\uC2DC\uBBFC\uAD8C", __jsx("br", null), "\uBB38\uC81C"))), __jsx("li", {
      className: "drive"
    }, __jsx("a", {
      href: ""
    }, __jsx("span", {
      className: "ico"
    }), __jsx("span", {
      className: "txt"
    }, "\uC6B4\uC804\uBA74\uD5C8", __jsx("br", null), "\uBB38\uC81C")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(LivingInfo));

/***/ }),

/***/ "./components/sidenav/newsCategory.js":
/*!********************************************!*\
  !*** ./components/sidenav/newsCategory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class NewsCategory extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "news_category side_section"
    }, __jsx("h2", null, "\uB274\uC2A4 \uCE74\uD14C\uACE0\uB9AC"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
      href: "/section/101"
    }, "\uC0AC\uD68C")), __jsx("li", null, __jsx("a", {
      href: "/section/102"
    }, "\uACBD\uC81C")), __jsx("li", null, __jsx("a", {
      href: "/section/103"
    }, "\uC2A4\uD3EC\uCE20")), __jsx("li", null, __jsx("a", {
      href: "/section/108"
    }, "\uBD80\uB3D9\uC0B0")), __jsx("li", null, __jsx("a", {
      href: "/section/105"
    }, "\uAD50\uC721")), __jsx("li", null, __jsx("a", {
      href: "/section/106"
    }, "\uAC74\uAC15")), __jsx("li", null, __jsx("a", {
      href: "/section/104"
    }, "\uB77C\uC774\uD504")), __jsx("li", null, __jsx("a", {
      href: "/section/107"
    }, "\uC704\uCF04\uB4DC")), __jsx("li", null, __jsx("a", {
      href: "/section/110"
    }, "\uBB38\uD654")), __jsx("li", null, __jsx("a", {
      href: "/section/111"
    }, "\uC885\uAD50")), __jsx("li", null, __jsx("a", {
      href: "/section/109"
    }, "\uC5F0\uC608")), __jsx("li", null, __jsx("a", {
      href: "/issue"
    }, "\uD56B\uC774\uC288")), __jsx("li", {
      className: "bd_none"
    }, __jsx("a", {
      href: "/photonews"
    }, "\uD3EC\uD1A0\uB274\uC2A4")), __jsx("li", {
      className: "bd_none"
    }, __jsx("a", {
      href: "/opinion"
    }, "\uC624\uD53C\uB2C8\uC5B8")), __jsx("li", {
      className: "bd_none"
    }), __jsx("li", {
      className: "bd_none"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(NewsCategory));

/***/ }),

/***/ "./components/sidenav/selectLocation.js":
/*!**********************************************!*\
  !*** ./components/sidenav/selectLocation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class SelectLocation extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {
      const {
        clickingNavLocationFolder
      } = this.props;
      clickingNavLocationFolder();
    });
  }

  render() {
    const {
      switchReducer
    } = this.props;
    return __jsx("div", {
      className: !!switchReducer.locationFolder ? 'select_location side_section active' : 'select_location side_section'
    }, __jsx("h2", {
      className: "slide_down_menu"
    }, "\uC9C0\uC5ED\uC120\uD0DD ", __jsx("span", {
      className: "ico",
      onClick: this.click
      /* style="background-position: 0px 1px;" */

    })), __jsx("ul", null, __jsx("li", {
      className: "la current"
    }, __jsx("a", {
      href: "http://la.koreatimes.com/"
    }, "LA")), __jsx("li", {
      className: "ny"
    }, __jsx("a", {
      href: "http://ny.koreatimes.com/"
    }, "NY")), __jsx("li", {
      className: "dc"
    }, __jsx("a", {
      href: "http://dc.koreatimes.com/"
    }, "DC")), __jsx("li", {
      className: "sf"
    }, __jsx("a", {
      href: "http://sf.koreatimes.com/"
    }, "SF")), __jsx("li", {
      className: "seattle bd_none"
    }, __jsx("a", {
      href: "http://seattle.koreatimes.com/"
    }, "SEA")), __jsx("li", {
      className: "hawaii bd_none"
    }, __jsx("a", {
      href: "http://hawaii.koreatimes.com/"
    }, "HI")), __jsx("li", {
      className: "chi bd_none"
    }, __jsx("a", {
      href: "http://chi.koreatimes.com/"
    }, "CHI"))));
  }

}

function mapStateToProps(state) {
  const {
    switchReducer
  } = state;
  return {
    switchReducer
  };
}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingNavLocationFolder: _actions_actions__WEBPACK_IMPORTED_MODULE_4__["clickingNavLocationFolder"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(SelectLocation));

/***/ }),

/***/ "./components/sidenav/sidenavProfile.js":
/*!**********************************************!*\
  !*** ./components/sidenav/sidenavProfile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SidenavProfile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return (
      /* 비로그인 시 */
      __jsx("div", {
        className: "sidenav_profile side_section"
      }, __jsx("div", {
        className: "login"
      }, __jsx("a", {
        href: "#",
        className: "btn_login btn_action"
      }, "\uB85C\uADF8\uC778"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
        href: "#"
      }, "\uD68C\uC6D0\uAC00\uC785"), __jsx("span", {
        className: "bar"
      })), __jsx("li", null, __jsx("a", {
        href: "#"
      }, "ID\xB7\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30")))))
      /* 로그인 시
      <div className="profile">
              <div className="greeting"><strong>Honggildong</strong> 님 안녕하세요.</div>
          <div className="btn">
              <a href="#" className="btn_set"><span className="ico"></span>개인정보 수정</a>
          <a href="#" className="btn_logout"><span className="ico"></span>로그아웃</a>
          </div>
      </div>
      <!-- //로그인 시 */

    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(SidenavProfile));

/***/ }),

/***/ "./components/sidenav/sidenavTop.js":
/*!******************************************!*\
  !*** ./components/sidenav/sidenavTop.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/actions */ "./actions/actions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class SidenavTop extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "click", () => {
      const {
        clickingNavClose
      } = this.props;
      clickingNavClose();
    });
  }

  render() {
    return __jsx("div", {
      className: "sidenav_top"
    }, __jsx("h1", null, __jsx("img", {
      src: __webpack_require__(/*! ../../public/logo.png */ "./public/logo.png"),
      alt: "\uBBF8\uC8FC\uD55C\uAD6D\uC77C\uBCF4 THE KOREA TIMES"
    })), __jsx("a", {
      className: "closebtn",
      onClick: this.click
    }, "\xD7"));
  }

}

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
  clickingNavClose: _actions_actions__WEBPACK_IMPORTED_MODULE_4__["clickingNavClose"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(SidenavTop));

/***/ }),

/***/ "./constants/gnbList.js":
/*!******************************!*\
  !*** ./constants/gnbList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const GnbList = {
  gnbs: [{
    id: "main",
    list: [{
      id: "home",
      name: "홈"
    }, {
      id: "top50",
      name: "탑50"
    }, {
      id: "opinion",
      name: "오피니언"
    }, {
      id: "photonews",
      name: "포토뉴스"
    }]
  }, {
    id: "livinginfo",
    name: '생활정보',
    list: [{
      id: "market",
      name: "금주의 마켓 세일"
    }, {
      id: "fortune",
      name: "띠별 주간 운세"
    }, {
      id: "citizenship",
      name: "시민권 문제"
    }, {
      id: "drive",
      name: "운전면허 문제"
    }]
  }, {
    id: "section",
    list: [{
      id: '101',
      name: '사회',
      list: [{
        id: "201",
        name: "LA로컬/사회"
      }, {
        id: "202",
        name: "내셔널"
      }, {
        id: "203",
        name: "LA 인근지역"
      }, {
        id: "204",
        name: "사건/사고"
      }, {
        id: "205",
        name: "이민뉴스"
      }, {
        id: "206",
        name: "사람/사람들"
      }, {
        id: "207",
        name: "특약뉴스"
      }, {
        id: "208",
        name: "사고"
      }, {
        id: "209",
        name: "스테이트/로컬"
      }]
    }, {
      id: '102',
      name: '경제',
      list: [{
        id: "211",
        name: "경제일반"
      }, {
        id: "212",
        name: "금융/증권"
      }, {
        id: "213",
        name: "생활경제"
      }, {
        id: "214",
        name: "마켓"
      }, {
        id: "215",
        name: "자동차"
      }, {
        id: "216",
        name: "소비자정보"
      }, {
        id: "217",
        name: "타운비지니스"
      }, {
        id: "219",
        name: "경제와 사람들"
      }, {
        id: "220",
        name: "경제컬럼"
      }, {
        id: "218",
        name: "기업"
      }]
    }, {
      id: '108',
      name: '부동산',
      list: [{
        id: "211",
        name: "경제일반"
      }, {
        id: "212",
        name: "금융/증권"
      }, {
        id: "213",
        name: "생활경제"
      }, {
        id: "213",
        name: "생활경제"
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (GnbList);

/***/ }),

/***/ "./constants/opinionList.js":
/*!**********************************!*\
  !*** ./constants/opinionList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const OpinionList = {
  opinion: [{
    id: "298",
    name: "시사만평"
  }, {
    id: "276",
    name: "사설"
  }, {
    id: "280",
    name: "이철칼럼"
  }, {
    id: "286",
    name: "박록의 오늘과 내일"
  }, {
    id: "281",
    name: "주말산책"
  }, {
    id: "282",
    name: "옥세철의 인사이드"
  }, {
    id: "283",
    name: "민경훈의 논단"
  }, {
    id: "284",
    name: "권정희의 세상읽기"
  }, {
    id: "295",
    name: "조윤성의 하프타임"
  }, {
    id: "377",
    name: "정숙희의 시선"
  }, {
    id: "378",
    name: "안상호의 사람과 사람 사이"
  }, {
    id: "277",
    name: "이런이야기 저런이야기",
    liClass: "letter"
  }, {
    id: "292",
    name: "데스크의 창"
  }, {
    id: "278",
    name: "뉴스의 현장"
  }, {
    id: "300",
    name: "자카리아 칼럼"
  }, {
    id: "000",
    name: "넥스트 제너레이션"
  }, {
    id: "288",
    name: "시론"
  }, {
    id: "293",
    name: "전망대"
  }, {
    id: "291",
    name: "젊은시각 2030"
  }, {
    id: "290",
    name: "발언대"
  }, {
    id: "289",
    name: "삶과 생각"
  }, {
    id: "294",
    name: "주말 에세이"
  }, {
    id: "0000",
    name: "나의 의견"
  }, {
    id: "287",
    name: "이 아침의 시"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (OpinionList);

/***/ }),

/***/ "./css/default.css":
/*!*************************!*\
  !*** ./css/default.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  /*
      state = {
          isLoading: true,
          movies: []
      }
  
  
      getMovies = async() => {
          const { data: { data: { movies } } } = await Axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
          this.setState({
              movies: movies,
              isLoading: false
          });
      }
  
      componentDidMount() {
          this.getMovies();
      }
  
  */
  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_4__["reduxPage"])(Index));
/*

static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(petchingMainTopNews( ));
}
*/
//export default Index;

/***/ }),

/***/ "./public/ad.png":
/*!***********************!*\
  !*** ./public/ad.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ad-5042d077359ad867d8dd45e568df86e9.png";

/***/ }),

/***/ "./public/app_epaper.png":
/*!*******************************!*\
  !*** ./public/app_epaper.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAYAAADHcWrDAAAEq0lEQVR4nO3dS2gjdRzA8e/8J3HSZmziLlgriI9t/x5UtlbUQz2oyC7exIMXqehNXUEPonfRsyy7sF5ERBeF3Ys39SD4WsQH7LK4sOOLPYaVJUnTmW2amXiYyRq7fSRtkh82v8+lJZmG4dvpfx7p5O9cvHiRPkwAJWAReBC4Echnz5mu5dqAC+Sy7/u1uu71diPp8bU665nbZvkEaAAB8CVQsdZW+1khp8foE8BB4FngbmAhiqL9AO32Tpr+vzmOw8TERBX4FagAJ4HvrbWVnn5+m+gucB/wMnAoiqLb4zgmjuOxjN3NcRxc18VxHIrFYgU4C7xHGv/ylj+7RfQycBh4IwzDhVarRZIkA13xvaLzC/B9/xLwAfCRtfbPTZffJPoM8AzwSqPRmG21WsNZ2z3GGMPU1FQFuAC8aq09v+FyGzx2K7AEvFav1zV4H5IkoVarTUdR9BhwIgiCgxsttz76PtIt/MV6vX6HDif9a7fbrK6uEobhInAsCIK59ct0R88Bh4Aj9Xr9Tg2+O9kIMQcsBUFwW/dz3dHvAd5sNBqzGnz3sobTpIfZh4Mg8DrPdaJ7wJEwDOd1DB+carXqLC8v3wW8BMx2Hu9Evx94XIMPXhzHRFG0ADwfBIELafQbgKUoig7osDIc2cb8BGAhjb4POBDHseBq7W1xHNNsNueBxSAIHAM8Asxr9OHK+s4BOQM8HEXR9LhfSxm2tbU1SE86ZwxwkwYfviRJiON4BvAN6UmRGh3HMLg3C1SPNLgAjS5AowvQ6AI0ugCNLkCjC9DoAjS6AI0uQKML0OgCNLoAjT56jkYfPb2eLsEA+o70iBmgKb0S40aHFwEaXIBGF6DRBWh0ARpdgCG9A1iNkAEajuNIr8dYMezs3n21CzqmC9DoAjT66On1dAEaXcCaRh+9RKML0OgCNLoAjS5AowvQ6AI0ugCNLkCjC9DoAjS6AI0uQKML0OgCNLoAjS5AowvQ6AI0ugCNLkCjC9DoAjS6AAPo/0mPmN68K8AAK3pTwPC5rovruueAZQNUNfrw5XI5gG+AKwb40fO8M9mDakiyDbsCNA3pTIOXjNEDmWFyXRcgsNbGhnRuzd8nJyf1Lrshyefz5PP5z4AzkO5IW8CnwHc6xAxHsVhsAr+QDi/XTo7+An72ff+q7lQHK9uQvwU+sda24N/oEekEpmezsUcNgOM4+L5/FfiCdMMG/nsZ4A/glO/7q7q1D0apVGoBHwInrLXXTkK7oyfAceDdUqmUaPjdKZfLCXAKOGqtbXQ/t/44sQm8Axz1PA8NvzPlcrkNnAaOAddNbbzR4UoDeKtQKMTA63EcdyZGUj3wPA/gY9J95E/W2usOxTc7RqwCbxcKhSvAQ2EYPtVs6uerbSWfz5PL5fA87zjwPnC+exzvtt0U9jlgkXQi0xcAt1arOYBOYZ8NvaVSqU26PzwNfJ19/dtau2mg7aJ33Aw8CjwJPA2YlZUVf1wnGTTG4Pv+CukniHwOfAX8AJzbaDhZr9foHVPAA8B+4DngXsBlvN4IiYEAOAnUgAvW2t/6eYF+z/vrpH9CBdK98i2kv4hxuloWAZdJw9c3G7e38g9K6l1HQDrCsgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/app_hktv.png":
/*!*****************************!*\
  !*** ./public/app_hktv.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/app_kt.png":
/*!***************************!*\
  !*** ./public/app_kt.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app_kt-d401caed6dbaa727cd779209fbba2a1b.png";

/***/ }),

/***/ "./public/app_radio.png":
/*!******************************!*\
  !*** ./public/app_radio.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app_radio-1e6b56e13c9d6cae1e4b684d8c963681.png";

/***/ }),

/***/ "./public/arrow_right.png":
/*!********************************!*\
  !*** ./public/arrow_right.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA8CAYAAAAHbrgUAAADUUlEQVRYhb3Zb6iecxzH8ddxOOqkRsfJA1NkkYZCTVGUMxvDSKiRP9nypygr5IGtNjzYaopYyn9p/h4aYQzzgNAIjZQ/ofDAikYOlnU8+N5Xzbb7+l7XOb9r3yd3Xb/PdX/f1+/+3r/vn2tgfPxFOAd34Fh8g5V42l6wfTEX6zHYu3YM1uFg3Nc1wD7iaQd3uT6Ae3HV3gA4oc/aAB7CxV0D/FKzPognRYx0BrAu0QzhWZzRFcBKvJfohkWgntwFwF9iiz9OtAdgA44vDQDbcDa+SPQH4k0cXRoAtmK+OIjqbLQHcURpAPgJZ+LH5L6ZeKP3WRQAvseY2JE6myViYrQ0AHzVg/gtuX92D2JGaQDYIgLzj+Q7TsSr4q9aFAA+xPmYSHSn4CXsXxoANol8sD3RjYkTc6g0ALHFl2FHoluIx+yeXacNAM9jMSYT3SI8ILJpUQB4HDc20C3B3V0AwP24rYHuJpHoigPAKtzVQLcMt3QBALeLsi2zVbiuCwBimx9JNANYi8u7AJjENXimAcSjuLA0AHE2XIGXE90gnsJZpQGIU/ISvJ3ohjCO00sDwN/iJPwg0VX15ZzSAPCn2OJPE90McbwfWRqAqC/n4ctEN4I1XQAQ1dQ8fJvoxroCqCxNzV0BHCLqiMMS3YYuAEawURStdbYVt5YGqKL7uES3TfQg35UEGBZ14ZxENyGK3U8oFwNDeAGnJbp/cB7ery6UAKjO+PmJbo/H9XQB+ma5XWwHrhQ/0f9sOgC1eX4nm8S1+kzdpgOwWk2ls5MtxcP9FqcKsBw3N9Atwz11gqkALMWKBrrVuDMTtQVYgjUNdGs1K91bATTteJ7ADfIOqhXAQtEVZT3fOK5u6rwpwFw8h/0S3Wu4VN7AtgI4VdRvWV5/BxfJW/hWACfhFfnko+kQoxXAbLGl2exnCxbg96k47wcwC6/Lp19fi/j4darO9wQwU1Qzhyb3/SCG13WT9tYAo3gLhyf3/CyePBtmtgI4qOf8qETfdJzbCmBYBFyTOm4BPi/lvAJYIX8PMIFz8VFJ5xXAokSzHRfg3dLOK4CRmvV/RR23sQvnFUC/ba3quPVdOa8Alts9gUzievkLrSIAm0SjsFlE+meiyn2wa+fwH+PKoGqe+HxPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/bt_hambuger.png":
/*!********************************!*\
  !*** ./public/bt_hambuger.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAB+CAYAAACEVZuaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABTRJREFUeNrsnbtKbEkUhpczYqgw4z1Smcxboia+gqJPYqCPIYpv4AVz4aBvoIEoCDoGCh41EK8jmEqPPetn15am6S02Z9Qq+T74oWl6J4uPonpV7apGex+NnjFPr6fd02QA/z/PnjvPT8+ep/QeMd9i2DPrmfD8QX3hE/nHs+VZ8BzW+3CrZ83zr6dMyBdGDq54/qwlakON7wY8P8J0ASAWNK2Y8vxd+eVvNeTdQV6IkD7Ptqe/SGAN0RueZmoFkdLi2fS01RJ4yfMXNYLI6fHMV8+BhzwHNaYUADHy4hmRs7mwc8gLCSFXZ/IRWL3gGytoUwBEivrEnTJ5DHkhQeTsiASmZQap0iuBu6gDJEq3BC5TB0iUsgS+pg6QKFcS+II6QKJcqo32u2VttFbqAQnx2kbTdrUt6gGJoR2TpXz1bSGIDJACcnVRH3KBjzzr1AUSYdXCvuDKDe16ZWjX2JEGcXNu2erxQ+UILB49054nagSRIjcnc3mrBRbHwe4TagWRceYZD45akcDiNPxQ84wX6gYR/GFbDgPrcb0PD4aHNWTzhiz5zNwH9wbeErThnSJrsWPUsp1rnZ4OBgb4AG4tW1TTG8j7RmsXvju8RgQIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgM35jGOn6no310sEm7p4nSwQfw7Lmz7GCTPU/pVwUe9sx6Jiw7fhXgs9AVAro5QIevH9b7sO7LWLPsaB/O6SJfGTm4YgW3ydY6G02Hqf0wbvCEuNC0YsrCyexFf+Ik7w7yQoT0ebY9/UUCa4je8DRTK4iUFs+mp62WwEvG/RgQPz2e+eo58JDnwOgLQxro5oAROZsLO4e8kBBydSYfgdULvrGCNgVApLxeNTuGvJAgcnZEAtMyg1TplcBd1AESpVsCl6kDJEpZAl9TB0iUKwl8QR0gUS7VRtMlhmqjtVIPSIjXNpq2q21RD0gM7Zgs5atvC8a1npAOcnVRH3KBjzzr1AUSYdXCvuDKDe16ZWjX2JEGcXNu2erxQ+UILB49054nagSRIjcnc3mrBRbHwe4TagWRceYZD45akcDiNPxQ84wX6gYR/GFbDgPrcb0PD4aHNWTzhiz5zNwH9wbeErThnSJrsWPUsp1rnZ4OBgb4AG4tW1TTG8j7RmsXvju8RgQIDIDAAAgMCAyAwAAIDIDAgMAACAyAwAAIDAgMgMAACAwIDIDAAAgMgMCAwAAIDIDAAAgM35jGOn6no310sEm7p4nSwQfw7Lmz7GCTPU/pVwUe9sx6Jiw7fhXgs9AVAro5QIevH9b7sO7LWLPsaB/O6SJfGTm4YgW3ydY6G02Hqf0wbvCEuNC0YsrCyexFf+Ik7w7yQoT0ebY9/UUCa4je8DRTK4iUFs+mp62WwEvG/RgQPz2e+eo58JDnwOgLQxro5oAROZsLO4e8kBBydSYfgdULvrGCNgVApLxeNTuGvJAgcnZEAtMyg1TplcBd1AESpVsCl6kDJEpZAl9TB0iUKwl8QR0gUS7VRtMlhmqjtVIPSIjXNpq2q21RD0gM7Zgs5atvC8a1npAOcnVRH3KBjzzr1AUSYdXCvuDKDe16ZWjX2JEGcXNu2erxQ+UILB49054nagSRIjcnc3mrBRbHwe4TagWRceYZD45akcDiNPxQ84wX6gYR/GFbDgPrcb0PD4aHNWTzhiz5zNwH9wbeErThnSJrsWPUsp1rnZ4OBgb4AG4tW1TTG8j79o7W7n8CDAC73YGJ4ruSmAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/bt_sch.png":
/*!***************************!*\
  !*** ./public/bt_sch.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bt_sch-b66dfb036d4ca91ce35dc4c5923b06ef.png";

/***/ }),

/***/ "./public/bt_top.png":
/*!***************************!*\
  !*** ./public/bt_top.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB7CAYAAAC/8ER8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABIRJREFUeNrs3WuIzXkcx/G/g6VNpCWtlXusS9suNol1idzJbNYal90lTdFuu0JJPNknHii5PTAPkDtN7pdZy7Im4gFJ22yTWklJ2rStJJcY32/n91PKzO83Z/zPnN/vvN/1yYP5Rc6rzpw553/ONCsrKzuUJMnXCcXYkQy4UVeS4TaIO4ABJoCpoIGPcDPE+yi6BY+iw668vJy7aL4HE8AEMAFMABPABDABDDABTAATwHmsGcDx1VxWLauVvTJ/2v0VO3qmCHD3yvrX8fWBsh3mHMCB4n7rOPe9bFesyJkix7XNke2TtQA4PlzbLNlB2QcAFzbunhxwbXr5UkVMyJkIcWc38u+ZnmQvRGwFcHy4tsmyY7IPAY4P1zZBdjx05Ay49TZWdlrWBuBwcWsdXx8lq5S1BbgwcTc6vr7YA3mE7DdZO4ALD3ep44y+NWCR7KXj3DDZWVl7gAsLt9bj7HbZQg/kL2XnZB8BHA6uTZ+Pnu+BPMggdwQ4HFzbflmp7IXj3OeyC7JOAOcXd1MjcG0V5t967jg3wCB/DHD+cH9pJK7tsGymB3I/g/wJwLnh7m4CXNsJ2QzZU8e5vrKLsq4ANxy3tIlwbZUG+YnjXC/Zn7LuAIeDazsjm+aB3MMg9wQ4HFzbedkk2WPHuW7m7roPwOHg2qpkE2WPHOe6mAdenwIcDq7tcpJ9GfF/x7nO5u66P8Dh4NquysbJ/nOc62SQPytm4NBwbdeS7GvFDx3n9OnMP2RfFCNwqLi2Gwb5X8e5DgZ5cDEBh45ruykbLXvgONfeIA8tBuBYcG1/G+T7jnN6scDvsuExAyvurohwbTUG+Z7jnF72o1eGfBUjsMWdExmu7ZZspOyu41wbgzwmJuDYcW23k+xFencc5/RS3JOy8TEANwR3c8C4tjsG+bYHsl5cPzFk4Ibi/hw4ru2uubu+5TjX2iBPDRG4WHFt98wDrxrHOX2jm/5qo5KQgIsd13bfIFd7IOtbV2eGAAzu2z0wj5hvOs61lB3w/BGyyYDBfXf6dKY+rXnD4/bTJ4HmFyIwuPX30CBf87gd9YNhFhQSMLh+6UuM+lLjVY/bc5usrBCAwW1YerGAXjRwyXFOP79rq2xJUwKDm1t62Y9e41XlgbzF3G55B1bcneDm3GODfN4DeYNseT6BLe5ccBuVXoqrl+Se8Ti7TrYyH8Dgvn9kvbi+0uPsWtmaNIHBTaenBvm4x9lfZfPSAl4BbmrpG92+SbJvfHO1Ki3gn8BNHVnfbFfhONcjDWB9NNcZ3NTTN5/r89H76jlTkwawolWDm5f0YyS+M88xvMthdVp30WvqANwCbirIP8iWyf6RPZNdl02RnUoLWD+kU1+YvmJ+UNePxP/RfG8G9/2nt+l6We8ke/XHEM8fp96UywdgHzOjAOLX6gBMABPABDABTAATwAATwAQwAUwAE8AEMMAEMAFMABPABDABTAADTAATwAQwAUwAE8AAE8AEMAFMABPABDDABDABTAATwAQwAUwAA0wAE8AEcD6q61fVHI39P/5agAEA78ccBZxqEEMAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/ex_img02.png":
/*!*****************************!*\
  !*** ./public/ex_img02.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex_img02-4bb3a5a217362a94404e2e38cf939470.png";

/***/ }),

/***/ "./public/ex_img03.png":
/*!*****************************!*\
  !*** ./public/ex_img03.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ex_img03-d6c50888c3172a0fae33acfb3eda278d.png";

/***/ }),

/***/ "./public/ktown_car.png":
/*!******************************!*\
  !*** ./public/ktown_car.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_in.png":
/*!*****************************!*\
  !*** ./public/ktown_in.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_item.png":
/*!*******************************!*\
  !*** ./public/ktown_item.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_job.png":
/*!******************************!*\
  !*** ./public/ktown_job.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_kstory.png":
/*!*********************************!*\
  !*** ./public/ktown_kstory.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_ktalk.png":
/*!********************************!*\
  !*** ./public/ktown_ktalk.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_realty.png":
/*!*********************************!*\
  !*** ./public/ktown_realty.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_rent.png":
/*!*******************************!*\
  !*** ./public/ktown_rent.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/ktown_yp.png":
/*!*****************************!*\
  !*** ./public/ktown_yp.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/logo.png":
/*!*************************!*\
  !*** ./public/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/logo_emblem.png":
/*!********************************!*\
  !*** ./public/logo_emblem.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/share_facebook.png":
/*!***********************************!*\
  !*** ./public/share_facebook.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/share_kakao.png":
/*!********************************!*\
  !*** ./public/share_kakao.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/share_twitter.png":
/*!**********************************!*\
  !*** ./public/share_twitter.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/sns_facebook.png":
/*!*********************************!*\
  !*** ./public/sns_facebook.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/sns_twitter.png":
/*!********************************!*\
  !*** ./public/sns_twitter.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./reducers/dataFetchingReducer.js":
/*!*****************************************!*\
  !*** ./reducers/dataFetchingReducer.js ***!
  \*****************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");



const initialState = {
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
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_MAIN_TOP_NEWS"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          mainTop: action.arg.data
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_MAIN_NEWS_LIST"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          mainNewsList: action.arg
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_SECTION_OPINION"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          sectionOpinion: action.arg.info.use == 1 ? action.arg.data : undefined.sectionOpinion
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_PHOTO_NEWS"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          photoNews: action.arg
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_MAIN_OPINION"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          opinionCartoon: action.arg['298']['0'],
          opinionEditorial: action.arg['276'],
          opinionColumn: [action.arg['280']['0'], action.arg['286']['0'], action.arg['282']['0'], action.arg['283']['0'], action.arg['284']['0'], action.arg['295']['0'], action.arg['377']['0'], action.arg['378']['0'], action.arg['277']['0'], action.arg['292']['0'], action.arg['278']['0'], // 데스크의 창
          action.arg['285']['0'], action.arg['300']['0'], action.arg['376']['0']],
          opinionContri: [action.arg['288']['0'], action.arg['293']['0'], action.arg['291']['0'], action.arg['289']['0'], action.arg['294']['0']],
          opinionEtc: [action.arg['279']['0'], action.arg['287']['0']]
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_ARTICLE_DETAIL"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          articleDetail: action.arg
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["PETCHING_ARTICLE_DETAIL_BESTCLICK"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          articleDetailBestclick: action.arg
        }));
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav */ "./reducers/sidenav.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ "./reducers/section.js");
/* harmony import */ var _switchReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switchReducer */ "./reducers/switchReducer.js");
/* harmony import */ var _dataFetchingReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataFetchingReducer */ "./reducers/dataFetchingReducer.js");





const initialState = {
  // sidenav: sidenavState,
  // section: sectionState,
  switchReducer: _switchReducer__WEBPACK_IMPORTED_MODULE_3__["initialState"],
  dataFetchingReducer: _dataFetchingReducer__WEBPACK_IMPORTED_MODULE_4__["initialState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  //sidenav,
  //section,
  switchReducer: _switchReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  dataFetchingReducer: _dataFetchingReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./reducers/section.js":
/*!*****************************!*\
  !*** ./reducers/section.js ***!
  \*****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");



const initialState = {
  //lastUpdate: 0,
  headerSection: "main",
  mainSection: "home",
  opinionSection: "main",
  opinionDetail: ""
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_HEADER_SECTION"]:
      //  const { payload } = action
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          headerSection: "main",
          mainSection: action.arg,
          opinionSection: "main",
          opinionDetail: ""
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_MAIN_LOGO"]:
      {
        return initialState;
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_NAV_LIVING_INFO"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          headerSection: "livingInfo"
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_BTN_MORE"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          headerSection: "main",
          opinionSection: "detail",
          opinionDetail: action.arg
        }));
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./reducers/sidenav.js":
/*!*****************************!*\
  !*** ./reducers/sidenav.js ***!
  \*****************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");



const initialState = {
  //lastUpdate: 0,
  sideNavStatus: false,
  locationFolder: false,
  selectedCity: 'LA',
  ktown1st: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  //const { type, ts, light } = action
  switch (action.type) {
    /* 헤더 햄버거 버튼 클릭 */
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_HAMBURGER"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
          //lastUpdate: ts,
          sideNavStatus: true
        });
      }

    /* 사이드 네비 X 버튼 클릭 */

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_NAV_CLOSE"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          sideNavStatus: false
        }));
      }

    /* 지역 폴더 여닫기 */

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_NAV_LOCATION_FOLDER"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          locationFolder: state.locationFolder === true ? false : true
        }));
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CLICK_NAV_KTOWN1ST_FOLDER"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          ktown1st: state.ktown1st === true ? false : true
        }));
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./reducers/switchReducer.js":
/*!***********************************!*\
  !*** ./reducers/switchReducer.js ***!
  \***********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");


const initialState = {
  //lastUpdate: 0,
  sideNavStatus: false,
  locationFolder: false,
  selectedCity: 'LA',
  ktown1stFolder: false,
  searchBtnStatus: false,
  gnbSelector: 'main',
  gnbSubSelector: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    /* 헤더 햄버거 버튼 클릭 */
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLICK_HAMBURGER"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          //lastUpdate: ts,
          sideNavStatus: true
        });
      }

    /* 사이드 네비 X 버튼 클릭 */

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLICK_NAV_CLOSE"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          sideNavStatus: false
        });
      }

    /* 지역 폴더 여닫기 */

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLICK_NAV_LOCATION_FOLDER"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          locationFolder: state.locationFolder === true ? false : true
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLICK_NAV_KTOWN1ST_FOLDER"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          //...state,
          ktown1stFolder: state.ktown1stFolder === true ? false : true
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ClICK_SEARCH_BTN"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          //...state,
          searchBtnStatus: state.searchBtnStatus === true ? false : true
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CHANGE_HEADER_GNB"]:
      {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          //...state,
          gnbSelector: !!action.arg[0] ? action.arg[0] : 'main',
          gnbSubSelector: action.arg[1]
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLICK_MAIN_LOGO"]:
      {
        return initialState;
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")(); //routes.add('blog', '/blog/:slug')
//routes.add('about', '/about-us/:foo(bar|baz)')


routes; //.add({name: 'home', page: '/index'})
//.add('top50', '/index')
//.add('opinion', '/index')
//.add('opinion', '/opinion/:cate')
//.add('photonews')
//routes.add(name, pattern = /name, page = name)
//routes.add(pattern, page)
//routes.add(object)
//export default withRouter(routes)

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore, reduxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxPage", function() { return reduxPage; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./reducers/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
 //import logger from 'redux-logger'








/*
export const initializeStore = (state = initialState) => {
  const middlewares = [thunkMiddleware, createLogger()]
  return createStore(reducer, state, compose(applyMiddleware(...middlewares)))
};

*/

const persistConfig = {
  key: 'primary',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default()) //: AsyncStorage,
  ,
  blacklist: ['switchReducer']
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_4__["default"]);
const initializeStore = (initialState = _reducers__WEBPACK_IMPORTED_MODULE_4__["initialState"]) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_6___default.a)));
};
const reduxPage = comp => next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(initializeStore)(comp);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NewMedia\PhpstormProjects\test1017\sample\test2\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "image-exists":
/*!*******************************!*\
  !*** external "image-exists" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("image-exists");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map