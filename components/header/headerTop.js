import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'

import Hamburger from './hamburger'
import MainLogo from './mainLogo'
import {clickingMainLogo, clickingSearchBtn} from "../../actions/actions";
import SectionLogo from "./sectionLogo";

class headerTop extends Component {

    logoClick = () => {
        const { clickingMainLogo } = this.props
        clickingMainLogo()
    }

    searchClick = () => {
        const { clickingSearchBtn } = this.props
        clickingSearchBtn()
    }

    render () {

        const { switchReducer } = this.props

        return (
            <div id="headerTop" className={ switchReducer.gnbSelector === 'main' ? '' : 'section_header'}>
                <Hamburger />
                { switchReducer.gnbSelector === 'main' ? <><MainLogo />
                <select name='' id="" className="slt_location">
                    <option value="">LA</option>
                    <option value="">NY</option>
                    <option value="">DC</option>
                    <option value="">SF</option>
                    <option value="">SEA</option>
                    <option value="">HI</option>
                    <option value="">CHI</option>
                </select></>: <SectionLogo name={switchReducer.gnbSubSelector} /> }
                <a onClick={this.searchClick} className={"btn_sch"}><img src={require("../../public/bt_sch.png")} alt="검색" /></a>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingMainLogo, clickingSearchBtn }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(headerTop)

