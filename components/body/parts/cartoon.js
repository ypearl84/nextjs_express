import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import More from "./more";
import { NavLink } from 'react-router-dom'

class Cartoon extends Component {

    render () {

        const { dataFetchingReducer } = this.props;

        const inputdate = new Date({ dataFetchingReducer }.dataFetchingReducer.opinionCartoon.inputDate)
        const date = inputdate.getFullYear().toString()+(inputdate.getMonth()+1).toString()+(inputdate.getDate()).toString()

        return (
            <div className="section cartoon">
                <div className="tit_wrap">
                    <h3 className="sub_tit">시사만평</h3>
                    <More opinionId='113/298' />
                </div>
                <div className="contents">
                    <div className="img_wrap">
                        <NavLink to={`/article/${date}/` + dataFetchingReducer.opinionCartoon.articleId }>
                            <img src={"http://image.koreatimes.com/" + dataFetchingReducer.opinionCartoon.thumbnail } alt={dataFetchingReducer.opinionCartoon.preRead} />
                            <span className="cartoon_tit">{dataFetchingReducer.opinionCartoon.title}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cartoon)
