import React, { Component, useState, useReducer, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdArea from './parts/adArea'
import ArticleDetail from "./parts/articleDetail"
import RelatedNews from "./parts/relatedNews"
import PopularNews from "./parts/PopularNews"
import BottomMenu from './parts/bottomMenu'
import {petchingArticleDetail} from "../../actions/actions"
import DataFetchingReducer from '../../reducers/dataFetchingReducer'

import Axios from 'axios'

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = { match : props.match, detail : []}
        this.getData.bind(this)
    }

    getData = async() => {

        try {

            Axios.defaults.baseURL = "http://data.koreatimes.com"


            const p2Index = this.state.match.params.p2.substring(0, 4) + "/" + this.state.match.params.p2.substring(4, 6) + "/" + this.state.match.params.p2.substring(6, 8);
            const url = `/article/${p2Index}/${this.state.match.params.p3}.data`
            console.log('axios test')
            Axios.get(url,{
                mode: 'no-cors',
                credentials: 'same-origin',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials':true,
                    'crossorigin':true
                }}).then(data => {
                console.log('axios....')
                this.setState({ detail : data.data })
            });
        } catch (e) {
            console.log(e)
        }

    }

    componentDidMount() {
        // 첫 로딩시에 getData 호출
        this.getData()
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        //const { petchingMainNewsList } = nextProps

        if(prevState.match.params.p3===nextProps.match.params.p3) return false

        return { match : nextProps.match }

    }

     componentDidUpdate(prevProps, prevState) {

        if (prevState.match.params.p3 !== this.state.match.params.p3) {

            this.getData()
        }
    }

    render () {

        return (

            <div id="container" className="bg_container">
                { this.state.detail.articleId > 0 &&
                                                        <Fragment>
                                                            <AdArea pathname={this.state.match.params.p1}/>
                                                            <ArticleDetail item={this.state.detail}/>
                                                        </Fragment> }
                { /* 관련 기사 있을 경우에만 렌더링 */ }
                { !!this.state.detail.related_u1 && <RelatedNews item={this.state.detail}/> }
            {/*    <PopularNews/>*/}
                <AdArea/>
                <BottomMenu/>
            </div>
        )
    }
}

export default Article


