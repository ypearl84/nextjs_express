import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Redirect, Route, withRouter} from 'react-router-dom'
import { reduxPage } from '../store'

import Header from './header/index'
import Sidenav from './sidenav/index'
import Body from './body'
import Footer from './footer/index'
import default_css from '../css/default.css';
import style_css from '../css/style.css';

/*
let ShowPageInfo = withRouter(({match, location}) => {
    return {location.pathname};
});*/

class Layout extends Component {

    /* static async getInitialProps({req}) {
        console.log(req)
        //const res = await fetch('https://cloudreports.net/sample/api/countries.json')
        //const json = await res.json()
        //console.log(json)
        //return {countries: json}

        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    } */

    render () {
        const { switchReducer } = this.props;
        return (
            <>
                <div id="dim" className={ !!switchReducer.sideNavStatus ? 'active' : '' }></div>
                <Header />
                <Sidenav />
                <>
                    <Route path={"/home"}>
                        <Redirect to={"/"} />
                    </Route>
                    <Route path={"/:p1?/:p2?/:p3?"} component={Body} />
                </>
                <Footer />
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

export default reduxPage(connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout))


