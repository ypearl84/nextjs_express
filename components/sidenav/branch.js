import React, { Component } from 'react'
import { connect } from 'react-redux'

class Branch extends Component {

  render () {
    return (
        <div className="branch side_section">
            <a href="">한국일보 지사 안내 <span className="ico_go"></span></a>
        </div>
    )
  }
}


export default connect(
)(Branch)
