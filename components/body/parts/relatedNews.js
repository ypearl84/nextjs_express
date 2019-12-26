import React, { Component } from 'react'
import { default as ListItem } from '../../containers/relatedNewsItem'

class RelatedNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            data: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(nextProps.item.articleId != prevState.id) {
            return {
                id: nextProps.item.articleId,
                data: [
                        !!nextProps.item.related_t1 && { title: nextProps.item.related_t1, link: nextProps.item.related_u1 },
                        !!nextProps.item.related_t2 && { title: nextProps.item.related_t2, link: nextProps.item.related_u2 },
                        !!nextProps.item.related_t3 && { title: nextProps.item.related_t3, link: nextProps.item.related_u3 },
                        !!nextProps.item.related_t4 &&{ title: nextProps.item.related_t4, link: nextProps.item.related_u4 }
                    ]}

        } else {
            return null
        }
    }

    render () {

        return (

            <div className="section related_news news_list_infinite">
                <div className="tit_wrap">
                    <h3 className="sub_tit">관련 뉴스</h3>
                </div>
                <ul>
                    {

                        this.state.data.map(function(row, index) {
                            return !!row && <ListItem key={index} item={row} />
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default RelatedNews
