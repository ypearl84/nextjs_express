import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AdArea from './parts/adArea'
import ArticleDetail from "./parts/articleDetail"
import RelatedNews from "./parts/relatedNews"
import PopularNews from "./parts/PopularNews"
import BottomMenu from './parts/bottomMenu'
import {petchingArticleDetail} from "../../actions/actions"


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
)(Article)