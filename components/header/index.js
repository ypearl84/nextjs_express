import React, { Component } from 'react'
import Head from 'next/head'

import HeaderTop from './headerTop'
import HeaderSearch from './headerSearch'
import Gnb from "./gnb";

class Header extends Component {

    constructor(props) {
        super(props)

        /*const { changingHeaderGnb } = this.props
        //console.log(this.props.match.params.p1)
        changingHeaderGnb([this.props.match.params.p1, this.props.match.params.p2])*/

        //this.state = { match : [] }

        const { match } = this.props;


    }

/*
    static getDerivedStateFromProps(nextProps, prevState) {

        console.log('header')
        console.log(nextProps)

        return null // { match : nextProps.match }
    }*/

  render () {
    return (
      <div id="header" className={ this.props.match.params.p1 == 'section' ? 'section_header' : '' }>
        <HeaderTop match={this.props.match} />
        <HeaderSearch />
        <Gnb match={this.props.match} />
      </div>
    )
  }
}

export default Header
