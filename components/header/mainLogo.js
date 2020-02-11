import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import {clickingMainLogo} from "../../actions/actions"
import { useRouter } from 'next/router'

class MainLogo extends Component {

    /*logoClick = () => {
        const { clickingMainLogo } = this.props
        clickingMainLogo()
    }*/



    searchClick = () => {
        const { clickingSearchBtn } = this.props
        clickingSearchBtn()
    }

    render () {
        return (
                <h1>
                    <NavLink to="/" >
                        <img src={require("../../public/logo.png")} alt={"미주한국일보 THE KOREA TIMES"} />
                    </NavLink>
                </h1>

        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingMainLogo }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(MainLogo)

