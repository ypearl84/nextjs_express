import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SectionPhotoNews from './parts/photoNews'
import AdArea from './parts/adArea'
import {petchingPhotoNews} from "../../actions/actions"

import { NavLink } from 'react-router-dom'

class PhotoNews extends Component {
/*
    constructor(props) {
        super(props)

        this.state = {
            itemIndex: 0

        }

    }*/

    componentDidMount() {
        const { petchingPhotoNews } = this.props
        petchingPhotoNews()
    }

    render () {

        const { dataFetchingReducer } = this.props
        return (
            <div id="container" >
                <SectionPhotoNews dataList={ dataFetchingReducer.photoNews.slice(0,4)} />
                <AdArea />
                <SectionPhotoNews dataList={ dataFetchingReducer.photoNews.slice(4,8)} />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({petchingPhotoNews}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoNews)

