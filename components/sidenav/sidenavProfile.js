import React, { Component } from 'react'
import { connect } from 'react-redux'

class SidenavProfile extends Component {

  render () {
    return (
        /* 비로그인 시 */
        <div className="sidenav_profile side_section">
            <div className="login">
                <a href="#" className="btn_login btn_action">로그인</a>
                <ul>
                    <li><a href="#">회원가입</a><span className="bar"></span></li>
                    <li><a href="#">ID·비밀번호 찾기</a></li>
                </ul>
            </div>
        </div>
          /* 로그인 시
          <div className="profile">
                  <div className="greeting"><strong>Honggildong</strong> 님 안녕하세요.</div>
              <div className="btn">
                  <a href="#" className="btn_set"><span className="ico"></span>개인정보 수정</a>
              <a href="#" className="btn_logout"><span className="ico"></span>로그아웃</a>
              </div>
          </div>
          <!-- //로그인 시 */
    )
  }
}


export default connect(
)(SidenavProfile)
