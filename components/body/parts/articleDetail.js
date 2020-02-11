import React, { Component } from 'react'

import { default as NewsItem } from '../../containers/articleDetailItem'

import CommentArea from './commentArea'
import AdArea from './adArea'


class ArticleDetail extends Component {

    constructor(props) {
        super(props)

        this.state = { item : props.item }
    }

    render () {

        return (
            <div className="detail_wrap">
                <NewsItem item={this.props.item}  />
                <CommentArea articleId={this.props.item.articleId}/>
                <AdArea />
            </div>
        )
    }

}


export default ArticleDetail
