import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingMainNewsList } from '../../../actions/actions'

import { default as ListItem } from '../../containers/newsListItem'

class NewsList extends Component {

    componentDidMount() {
        const { petchingMainNewsList } = this.props
        petchingMainNewsList()
    }

    render () {

        const { dataFetchingReducer } = this.props;

        return (
            <div className="news_list_infinite">
                <ul>
                    {
                        dataFetchingReducer.mainNewsList.map( row => (

                            <ListItem key={row.info1} item={row}/>

                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ petchingMainNewsList }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList)
