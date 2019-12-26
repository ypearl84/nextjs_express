import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingHamburger } from '../../actions/actions'

class Hamburger extends Component {

  click = () => {
    const { clickingHamburger } = this.props
    clickingHamburger()
  }

  render () {
    return (
        <a className="btn_hamburger" onClick={this.click}><img src={require("../../public/bt_hambuger.png")} alt="전체메뉴"/></a>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickingHamburger }, dispatch)

export default connect(
    null,
  mapDispatchToProps
)(Hamburger)
