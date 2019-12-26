import { default as Home } from './home'
import { default as Top50 } from './top50'
import { default as Opinion } from './opinion'
import { default as PhotoNews } from './photoNews'
import { default as Article } from './article'
import { default as Section } from './section'

import { changingHeaderGnb } from '../../actions/actions'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Body extends Component {

    constructor(props) {
        super(props)

        const { changingHeaderGnb } = this.props
        //console.log(this.props.match.params.p1)
        changingHeaderGnb([this.props.match.params.p1, this.props.match.params.p2])

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location !== prevProps.location) {
            window.scrollTo(0,0)
        }
    }


    /*static getDerivedStateFromProps(nextProps) {
         console.log(nextProps)
         //return changingHeaderGnb(nextProps.match.params.p1)
        return { p1: nextProps.match.params.p1 }
    }*/

    /*componentDidUpdate(prevProps, prevState, snapshot) {

        console.log(prevProps)
        if(prevProps.switchReducer.gnbSelector!=this.props.match.params.p1) {
            changingHeaderGnb(this.props.match.params.p1)
        }
    }*/

    render () {
        //let aa = this.state.p1
       // changingHeaderGnb(aa)

        const { location, match } = this.props;

        let bodyType = {match}.match.url === '/' ? 'home' : {match}.match.params.p1

        return (
            <>
                {   bodyType === 'home' &&  <Home/>        }
                {   bodyType === 'top50' && <Top50 />  }
                {   bodyType === 'opinion' && <Opinion location={location} match={match} />  }
                {   bodyType === 'photonews' && <PhotoNews />  }
                {   bodyType === 'article' && <Article match={match} />  }
                {   bodyType === 'section' && <Section location={location} />  }
            </>
        )
    }

}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({ changingHeaderGnb }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body)