import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'

import { default as ListItem } from '../../containers/popularNewsItem'
import {petchingArticleDetailBestClick} from "../../../actions/actions"

class MostViewNews extends Component {

    constructor(props) {
        super(props)

        const { petchingArticleDetailBestClick } = this.props
        petchingArticleDetailBestClick()
    }

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div id="tab01" className="view_news news_list_infinite rank_news" /*  style="display: block;" */>
                <h3 className="hidden">많이 본 기사</h3>
                <ul>
                    {
                        dataFetchingReducer.articleDetailBestclick.map(function(row, index) {
                            return <ListItem key={row.articleId} item={row} index={index} />
                        })
                    }


                </ul>
                <NavLink className="btn_list_more" to='/top50'><span className="txt_point">많이 본 기사 50</span> 더보기 <span className="ico"></span></NavLink>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ petchingArticleDetailBestClick }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MostViewNews)
