import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { default as ListItem } from '../../containers/rankedNewsItem'

class RankNewsList extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {

        const rank = Number(this.props.index)

        return (
            <div className="news_list_infinite rank_news">
                <ul>
                    {
                        this.props.list.map(function(row, index) {
                            return <ListItem key={row.articleId} item={row} index={index+rank}  />
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(RankNewsList)
