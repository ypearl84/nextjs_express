import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingMainNewsList } from '../../../actions/actions'

import { default as ListItem } from '../../containers/newsListItem'
import Axios from "axios";

class NewsList extends Component {

    constructor(props) {
        super(props)

        //const { dataFetchingReducer } = this.props;

        const { petchingMainNewsList } = props

        this.getData.bind(this)

        this.state = { branch : props.branch }
    }

    getData = (branch) => {

        try {
            this.props.petchingMainNewsList(branch)

        } catch (e) {
            console.log(e)
        }

    }

    componentDidMount() {
        // 첫 로딩시에 getData 호출
        this.getData(this.state.branch)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.branch !== this.state.branch) {
            this.getData(this.state.branch)
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(prevState.branch===nextProps.branch) return false

        return { branch : nextProps.branch }

    }

    render () {

        return (
            <div className="news_list_infinite">
                <ul>
                    {
                        this.props.dataFetchingReducer.mainNewsList.map( row => (

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
