import React, { Component } from 'react'
import Head from 'next/head'

import HeaderTop from './headerTop'
import HeaderSearch from './headerSearch'
import Gnb from "./gnb";

class Header extends Component {

  render () {
    return (
      <div id="header">
        <HeaderTop />
        <HeaderSearch />
        <Gnb />
      </div>
    )
  }
}

export default Header
