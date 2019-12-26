import React, {Component} from 'react'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import {reduxPage} from "../store";

import Axios from 'axios';


class Index extends Component {


/*
    state = {
        isLoading: true,
        movies: []
    }


    getMovies = async() => {
        const { data: { data: { movies } } } = await Axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
        this.setState({
            movies: movies,
            isLoading: false
        });
    }

    componentDidMount() {
        this.getMovies();
    }

*/


    render() {
        return <Layout />
    }

}

export default reduxPage(Index)
/*

static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(petchingMainTopNews( ));
}
*/
//export default Index;


