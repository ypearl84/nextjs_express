import React, { Component } from 'react'
import { connect } from 'react-redux'
import More from './more'
import { NavLink } from 'react-router-dom'

class Editorial extends Component {

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div className="section editorial">
                <div className="tit_wrap">
                    <h3 className="sub_tit">사설</h3>
                    <More opinionId='113/276' />
                </div>
                <div className="txt_list">
                    <ul>
                        {
                            dataFetchingReducer.opinionEditorial.map(row => (
                                <li key={row.articleId}>
                                    <NavLink to={"/article/" + row.articleId}>
                                        <span className="tit">{row.title}</span>
                                        <span className="sub_txt">{row.preRead}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

export default connect(
    mapStateToProps,
    null
)(Editorial)
