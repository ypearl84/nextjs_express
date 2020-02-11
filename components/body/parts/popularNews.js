import React, { Component } from 'react'
import MostViewNews from './MostViewNews'
import MostCommentNews from './MostCommentNews'

class PopularNews extends Component {

    constructor(props) {
        super(props)
        this.newsTabChange = this.newsTabChange.bind(this)
        this.state = { tab : 'tab01' }

    }

    newsTabChange(value, e) {
        e.preventDefault()
        this.setState({tab: value})
    }

    render () {
        return (
            <div className="section popular_news">
                <ul className="tab">
                    <li className={ this.state.tab === 'tab01' ? 'tab_on' : '' }><a onClick={(e) => this.newsTabChange('tab01', e)}>많이 본 기사</a></li>
                    <li className={ this.state.tab === 'tab02' ? 'tab_on' : '' }><a onClick={(e) => this.newsTabChange('tab02', e)}>댓글 많은 기사</a></li>
                </ul>
                <div className="tab_contents">
                    { this.state.tab === 'tab01' && <MostViewNews /> }
                    { this.state.tab === 'tab02' && <MostCommentNews /> }
                </div>
            </div>
        )
    }
}

export default PopularNews
