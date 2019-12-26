import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppDown extends Component {

  render () {
    return (
        <div className="app_down side_section">
            <h2>앱 다운로드</h2>
            <ul>
                <li>
                    <a href="">
                        <img src={require("../../public/app_kt.png")} alt="한국일보" />
                            <span className="txt">한국일보</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={require("../../public/app_radio.png")}  alt="라디오서울" />
                            <span className="txt">라디오서울</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={require("../../public/app_hktv.png")} alt="한국TV" />
                            <span className="txt">한국TV</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={require("../../public/app_epaper.png")} alt="전자신문" />
                            <span className="txt">전자신문</span>
                    </a>
                </li>
            </ul>
        </div>
    )
  }
}


export default connect(
)(AppDown)
