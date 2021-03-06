import React, { Component } from 'react'
import { connect } from 'react-redux'

class Column extends Component {

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div className="section opinion_logo column">
                <div className="tit_wrap">
                    <h3 className="sub_tit">칼럼</h3>
                </div>
                <div className="logo_list">
                    <ul>
                        {
                            dataFetchingReducer.opinionColumn.map( row => (
                                !!row &&
                                        <li key={row.articleId}>
                                            <a href={'/article/' + row.articleId} className="img"><img src={'http://img.koreatimes.com/2015/images/opinion/opinion_'+row.c2Id+'.jpg'} alt={row.categoryName} /></a>
                                            <a href={'/article/' + row.articleId} className="txt">
                                            <span className="tit">{row.title}</span>
                                            <span className="writer">{row.writer}</span>
                                            </a>
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
)(Column)

