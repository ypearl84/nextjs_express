import React, { Component } from 'react'

import MostViewNews from './MostViewNews'
import MostCommentNews from './MostCommentNews'

class PopularNews extends Component {

    render () {
        return (
            <div className="section popular_news">
                <ul className="tab">
                    <li className="tab_on"><a href="#tab01">많이 본 기사</a></li>
                    <li className=""><a href="#tab02">댓글 많은 기사</a></li>
                </ul>
                <div className="tab_contents">
                    <MostViewNews />
                    <MostCommentNews />
                </div>
            </div>
        )
    }
}

export default PopularNews
