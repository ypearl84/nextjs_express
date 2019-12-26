import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import GnbList from '../../constants/gnbList'

import {clickingMainLogo} from "../../actions/actions";

class SectionLogo extends Component {

    logoClick = () => {
        const { clickingMainLogo } = this.props
        clickingMainLogo()
    }

    render () {

        const { name } = this.props

        const sectionList = GnbList.gnbs.find(function (row) {
            if(row.id=='section')
                return row
        })

        const sectionTit = sectionList.list.find(function (row) {
             if(row.id=={name}.name)
                 return row

        })

        return (
            <>
                <h1 className="logo_emblem">
                    <a href="../index.html">
                        <img src={require("../../public/logo_emblem.png")} alt="미주한국일보 THE KOREA TIMES" />
                    </a>
                </h1>
                <h2 className="section_tit">{sectionTit.name}</h2>
            </>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingMainLogo }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(SectionLogo)

