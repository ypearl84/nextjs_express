import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingMainTopNews } from '../../actions/actions'
import queryString from 'query-string'

class Search extends Component {

     constructor(props) {
        super(props)

        const query =queryString.parse(props.location.search)

        this.state = { keyword : query['keyword'] }

    }

    static getDerivedStateFromProps(nextProps, prevState) {

        const query =queryString.parse(nextProps.location.search)

        if(query.keyword===prevState.keyword) return false

        return { keyword : query.keyword }
    }

    render () {

       // const { dataFetchingReducer } = this.props;

        return (
            <div id="container">

            </div>
        )
    }
}


function mapStateToProps (state) {
    const {  switchReducer } = state
    return { switchReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
