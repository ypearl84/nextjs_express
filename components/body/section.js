import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { default as ListItem } from '../containers/newsListItem'
import AdArea from "./parts/adArea"

class Section extends Component {

    constructor(props) {
        super(props)


    }

    render () {

        return (
            <div className="container">
                <div className="news_list_infinite">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <AdArea />
                <div className="news_list_infinite">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Section)
