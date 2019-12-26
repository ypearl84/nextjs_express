import React, { Component } from 'react'
import { connect } from 'react-redux'

class Follow extends Component {

  render () {
    return (
        <div className="follow side_section">
            <h2>Follow us</h2>
            <a href="https://twitter.com/koreatimes" target="_blank" className="twitter">
                <img src={require("../../public/sns_twitter.png")} alt="Twitter" /></a>
            <a href="https://www.facebook.com/koreatimes" target="_blank" className="facebook">
                <img src={require("../../public/sns_facebook.png")} alt="Facebook" /></a>
        </div>
    )
  }
}

export default connect(
)(Follow)
