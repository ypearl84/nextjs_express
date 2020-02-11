import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class NewsCategory extends Component {

  render () {
    return (
        <div className="news_category side_section">
            <h2>뉴스 카테고리</h2>
            <ul>
                <li><NavLink to="/section/101">사회</NavLink></li>
                <li><NavLink to="/section/102">경제</NavLink></li>
                <li><NavLink to="/section/103">스포츠</NavLink></li>
                <li><NavLink to="/section/108">부동산</NavLink></li>
                <li><NavLink to="/section/105">교육</NavLink></li>
                <li><NavLink to="/section/106">건강</NavLink></li>
                <li><NavLink to="/section/104">라이프</NavLink></li>
                <li><NavLink to="/section/107">위켄드</NavLink></li>
                <li><NavLink to="/section/110">문화</NavLink></li>
                <li><NavLink to="/section/111">종교</NavLink></li>
                <li><NavLink to="/section/109">연예</NavLink></li>
                <li><NavLink to="/issue">핫이슈</NavLink></li>
                <li className="bd_none"><NavLink to="/photonews">포토뉴스</NavLink></li>
                <li className="bd_none"><NavLink to="/opinion">오피니언</NavLink></li>
                <li className="bd_none"></li>
                <li className="bd_none"></li>
            </ul>
        </div>
    )
  }
}


export default connect(
)(NewsCategory)
