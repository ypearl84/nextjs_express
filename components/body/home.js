import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainTopNews from './parts/mainTopNews'
import AdArea from './parts/adArea'
import NewsList from './parts/newsList'
import {default as ListItem} from "../containers/newsListItem";
import { petchingMainTopNews } from '../../actions/actions'

class Home extends Component {

     constructor(props) {
        super(props);

        const { switchReducer } = this.props

        this.state = { branch : switchReducer.selectedBranch.toLowerCase() }

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('home getDerivedStateFromProps')
        console.log(nextProps)

        if(prevState.branch===nextProps.switchReducer.selectedBranch.toLowerCase()) return false

        return { branch : nextProps.switchReducer.selectedBranch.toLowerCase() }
    }

    render () {

        console.log("Home call")

       // const { dataFetchingReducer } = this.props;

        return (
            <div id="container">
                <MainTopNews branch={this.state.branch} />
                <AdArea />
                <NewsList branch={this.state.branch} />
                <AdArea />
            </div>
        )
    }
}

/*
class Home extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {
        return (
            <div id="container">
                <MainTopNews />
                <AdArea />
                <NewsList />
                <AdArea />
                <NewsList />
            </div>
        )
    }
}*/

function mapStateToProps (state) {
    const {  switchReducer } = state
    return { switchReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({petchingMainTopNews}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
