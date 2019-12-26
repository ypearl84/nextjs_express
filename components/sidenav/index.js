import React, { Component } from 'react'
import {connect} from "react-redux"
import SidenavTop from "./sidenavTop"
import SideNavProfile from "./sidenavProfile"
import SelectLocation from "./selectLocation"
import NewsCategory from "./newsCategory"
import LivingInfo from "./livingInfo"
import AppDown from "./appDown"
import FamilySite from "./familySite"
import Branch from  "./branch"
import Follow from "./follow"

class Sidenav extends Component {

    render() {

        const { switchReducer } = this.props;

        // if({sidenav}.sidenav.sideNavStatus) {
        return (
            <div id="sidenav" className={ !!switchReducer.sideNavStatus ? "active sidenav" : "sidenav" }>
                <SidenavTop />
                <SideNavProfile />
                <SelectLocation />
                <NewsCategory />
                <LivingInfo />
                <AppDown />
                <FamilySite />
                <Branch />
                <Follow />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}

export default connect(
    mapStateToProps,
    null
)(Sidenav)