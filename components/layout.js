import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { reduxPage } from '../store'

import Header from './header/index'
import Sidenav from './sidenav/index'
import Body from './body'
import Footer from './footer/index'
import default_css from '../css/default.css';
import style_css from '../css/style.css';
import { changingHeaderGnb } from '../actions/actions'



/*
let ShowPageInfo = withRouter(({match, location}) => {
    return {location.pathname};
});*/

const Layout = ({ children, type, switchReducer, location, match }) => {

    //const { switchReducer } = this.props;

    console.log("Layout call")
    console.log(match)

    return (
        <>
            <div id="dim" className={ !!switchReducer.sideNavStatus ? 'active' : '' }></div>
            <Header match={match} />
            <Sidenav />
            <Body location={location} match={match} />
            <Footer />
        </>
    )
}

            /*
            class Layout extends Component {

                constructor(props) {
                    super(props)

                    const { changingHeaderGnb, match } =  props

                    console.log(match)

                    //console.log(this.props.match.params.p1)
                   // changingHeaderGnb('main', '')
                }



                /*
                   static getDerivedStateFromProps(nextProps, prevState) {

                       console.log('layout')
                       console.log(nextProps)

                       return null;
                   }

                  static async getInitialProps({req}) {
                       console.log(req)
                       //const res = await fetch('https://cloudreports.net/sample/api/countries.json')
                       //const json = await res.json()
                       //console.log(json)
                       //return {countries: json}

                       const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
                       return { userAgent }
                   }

    render () {
        const { switchReducer } = this.props;
        return (
            <>
                <div id="dim" className={ !!switchReducer.sideNavStatus ? 'active' : '' }></div>
                <Header gnbSelector={switchReducer.gnbSelector} />
                <Sidenav />*/
             {/*   <>
                    <Route path={"/home"}>
                        <Redirect to={"/"} />
                    </Route>
                    <Route path={"/:p1?/:p2?/:p3?"} component={Body} />
                </>*/}
              /*  <Footer />
            </>
        )
    }
}*/

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changingHeaderGnb }, dispatch)

export default reduxPage(connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout))




