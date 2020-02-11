import React, {Component, Fragment} from 'react'
import Layout from '../components/layout'
import {reduxPage} from "../store"
import {Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// export default class extends Component {

class Index extends Component {
/*
    static getInitialProps({ query: { id } }) {
        console.log("SSR")
        return { postId: id }
    }*/

    render() {

        return (
            <Fragment>
                <Route path={"/home"}>
                    <Redirect to={"/"} />
                </Route>
                <Route path={"/:p1?/:p2?/:p3?"} component={Layout} />
            </Fragment>
        )
    }

}

export default reduxPage(connect(
    null,
    null
)(Index))
/*

static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(petchingMainTopNews( ));
}
*/
//export default Index;


