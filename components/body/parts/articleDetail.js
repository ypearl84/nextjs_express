import React, { Component } from 'react'

import { default as NewsItem } from '../../containers/articleDetailItem'

import CommentArea from './commentArea'
import AdArea from './adArea'


class ArticleDetail extends Component {

    render () {


        return (
            <div className="detail_wrap">
                <NewsItem item={this.props.item}  />
                <CommentArea />
                <AdArea />
            </div>
        )
    }

}


export default ArticleDetail
