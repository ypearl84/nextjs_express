import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RankNewsList from './parts/rankNewsList'
import AdArea from './parts/adArea'

class Top50 extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {
        return (
            <div id="container" >
                <RankNewsList />
                <AdArea />
                <RankNewsList />
                <AdArea />
                <RankNewsList />
                <AdArea />
                <RankNewsList />
                <AdArea />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Top50)
