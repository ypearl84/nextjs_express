import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingNavClose } from '../../actions/actions'

class SidenavTop extends Component {

    click = () => {
        const { clickingNavClose } = this.props
        clickingNavClose()
    }

  render () {
    return (
        <div className="sidenav_top">
          <h1><img src={require("../../public/logo.png")} alt="미주한국일보 THE KOREA TIMES" /></h1>
          <a className="closebtn" onClick={this.click}>×</a>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickingNavClose }, dispatch)

export default connect(
    null,
  mapDispatchToProps
)(SidenavTop)
