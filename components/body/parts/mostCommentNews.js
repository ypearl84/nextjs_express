import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { default as ListItem } from '../../containers/popularNewsItem'

import { default as NewsItem } from '../../containers/articleDetailItem'
import CommentArea from './commentArea'
import AdArea from './adArea'



class MostCommentNews extends Component {

    render () {
        return (
            <div id="tab02" className="comment_news news_list_infinite rank_news"  /* style="display: none;" */>
                <h3 className="hidden">댓글 많은 기사</h3>
                <ul>

                </ul>
                <a className="btn_list_more"><span className="txt_point">댓글 많은 기사</span> 더보기 <span className="ico"></span></a>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(MostCommentNews)
