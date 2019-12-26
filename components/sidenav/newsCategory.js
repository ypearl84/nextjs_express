import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewsCategory extends Component {

  render () {
    return (
        <div className="news_category side_section">
            <h2>뉴스 카테고리</h2>
            <ul>
                <li><a href="/section/101">사회</a></li>
                <li><a href="/section/102">경제</a></li>
                <li><a href="/section/103">스포츠</a></li>
                <li><a href="/section/108">부동산</a></li>
                <li><a href="/section/105">교육</a></li>
                <li><a href="/section/106">건강</a></li>
                <li><a href="/section/104">라이프</a></li>
                <li><a href="/section/107">위켄드</a></li>
                <li><a href="/section/110">문화</a></li>
                <li><a href="/section/111">종교</a></li>
                <li><a href="/section/109">연예</a></li>
                <li><a href="/issue">핫이슈</a></li>
                <li className="bd_none"><a href="/photonews">포토뉴스</a></li>
                <li className="bd_none"><a href="/opinion">오피니언</a></li>
                <li className="bd_none"></li>
                <li className="bd_none"></li>
            </ul>
        </div>
    )
  }
}


export default connect(
)(NewsCategory)
