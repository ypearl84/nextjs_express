import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'


class HeaderSearch extends Component {

    constructor(props) {
        super(props)

        this.state = { keyword : '' }
        this.handleChange = this.handleChange.bind(this)
        this.searchClick = this.searchClick.bind(this)

    }

    searchClick() {

    }

    handleChange(e) {
        this.setState({keyword : e.target.value})
    }

    render () {

        const { switchReducer } = this.props;

        return (
            <>
                <div className={ !!switchReducer.searchBtnStatus ? "header_btn active " : "header_btn" }  >
                    <div className="sch_box">
                        <input className="sch_txt" type="text" maxLength="30" placeholder="검색어를 입력하세요" onChange={this.handleChange}/>
                    </div>
                    <NavLink to={'/search?keyword=' + this.state.keyword }><div className="sch_btn" onClick={this.searchClick} /></NavLink>
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

