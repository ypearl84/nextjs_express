import React, { Component } from 'react'
import { default as Home } from './home'
import { default as Top50 } from './top50'
import { default as Opinion } from './opinion'
import { default as PhotoNews } from './photoNews'
import { default as Search } from './search'
import { default as Article } from './article'
import { default as Section } from './section'
import { default as LivingInfo } from './livingInfo'

class Body extends Component {

    constructor(props) {
        super(props)

        this.state = { location : props.location , match : props.match }
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(prevState.match.params===nextProps.match.params) return false

        //this.onClick()

        return { location: nextProps.location, match : nextProps.match }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.location !== prevProps.location) {
            window.scrollTo(0,0)
        }
    }

    render () {
        //let aa = this.state.p1
       // changingHeaderGnb(aa)
        console.log("body call")

        //let bodyType = {match}.match.url === '/' ? 'home' : {match}.match.params.p1
        //let bodyType = this.state.match.url === '/' ? 'home' : this.state.match.params.p1
        let bodyType = this.state.match.url === '/' ? 'home' : this.state.match.params.p1

        return (
            <>
                {   bodyType === 'home' &&  <Home/> }
                {   bodyType === 'top50' && <Top50 /> }
                {   bodyType === 'opinion' && <Opinion location={this.state.location} match={this.state.match} />  }
                {   bodyType === 'photonews' && <PhotoNews />  }
                {   bodyType === 'article' && <Article match={this.state.match} />  }
                {   bodyType === 'search' && <Search location={this.state.location} />  }
                {   bodyType === 'section' && <Section location={this.state.location} match={this.state.match} />  }
                {   bodyType === 'livinginfo' &&  <LivingInfo location={this.state.location} match={this.state.match} />  }
            </>
        )
    }

}

export default Body