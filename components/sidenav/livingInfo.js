import React, { Component } from 'react'
import { connect } from 'react-redux'

class LivingInfo extends Component {

  render () {
    return (
        <div className="living_info side_section">
            <h2>생활 정보</h2>
            <ul>
                <li className="market">
                    <a href="/livinginfo">
                        <span className="ico"></span>
                        <span className="txt">금주의<br/>마켓 세일</span>
                    </a>
                </li>
                <li className="luck">
                    <a href="">
                        <span className="ico"></span>
                        <span className="txt">띠별<br/>주간 운세</span>
                    </a>
                </li>
                <li className="citizen">
                    <a href="">
                        <span className="ico"></span>
                        <span className="txt">시민권<br/>문제</span>
                    </a>
                </li>
                <li className="drive">
                    <a href="">
                        <span className="ico"></span>
                        <span className="txt">운전면허<br/>문제</span>
                    </a>
                </li>
            </ul>
        </div>
    )
  }
}


export default connect(
)(LivingInfo)
