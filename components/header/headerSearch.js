import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'


class HeaderSearch extends Component {


    render () {

        const { switchReducer } = this.props;

        return (
            <>
                <div className={ !!switchReducer.searchBtnStatus ? "header_btn active " : "header_btn" }  >
                    <div className="sch_box">
                        <input className="sch_txt" type="text" maxLength="30" placeholder="검색어를 입력하세요" />
                    </div>
                    <div className="sch_btn" />
                </div>
                <div className={ !!switchReducer.searchBtnStatus ? "active blocker" : "blocker" } />
            </>
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
)(HeaderSearch)

