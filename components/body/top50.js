import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingTop50 } from '../../actions/actions'
import RankNewsList from './parts/rankNewsList'
import AdArea from './parts/adArea'
import Axios from "axios";

class Top50 extends Component {

    constructor(props) {
        super(props)

        //const { dataFetchingReducer, petchingTop50 } = this.props;

        this.props.petchingTop50()

        this.state = { list : this.props.dataFetchingReducer.top50 }
    }

    getData = () => {

        try {
            this.props.petchingTop50()

        } catch (e) {
            console.log(e)
        }

    }

    componentDidMount() {
        // 첫 로딩시에 getData 호출
        this.getData()
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(prevState.branch===nextProps.branch) return false

        return { branch : nextProps.branch }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.branch !== this.state.branch) {

            this.getData()
        }
    }

    render () {
        return (
            <div id="container" >
                <RankNewsList index="1" list={this.state.list.slice(0,10)} />
                <AdArea />
                <RankNewsList index="11" list={this.state.list.slice(10,20)} />
                <AdArea />
                <RankNewsList index="21" list={this.state.list.slice(20,30)} />
                <AdArea />
                <RankNewsList index="31" list={this.state.list.slice(30,40)} />
                <AdArea />
                <RankNewsList index="41" list={this.state.list.slice(40,50)} />
                <AdArea />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ petchingTop50 }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Top50)
