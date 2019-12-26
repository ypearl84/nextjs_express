import React, { Component, useState, useReducer, useEffect } from 'react'
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
import * as types from "../../actions/actionTypes";


const Article = (props) => {

    const [articleDetail, setArticleDetail] = useState({})

    const date = props.match.params
    const p2Index = date.p2.substring(0, 4) + "/" + date.p2.substring(4, 6) + "/" + date.p2.substring(6, 8);

    const url = `http://data.koreatimes.com/article/${p2Index}/${date.p3}.data`


    useEffect(() => {
        const CancelToken = Axios.CancelToken;
        const source = CancelToken.source();

        const loadData = () => {
            try {
                Axios.get(url, { cancelToken: source.token }).then(data => {
                    setArticleDetail(data.data);
                });
            } catch (error) {
                if (Axios.isCancel(error)) {
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

    return (
        <div id="container" className="bg_container">
            <AdArea/>
            <ArticleDetail item={articleDetail}/>
            { !! articleDetail.related_u1 && <RelatedNews item={articleDetail}/> }
            <PopularNews/>
            <AdArea/>
            <BottomMenu/>
        </div>
    )
}

export default Article

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
