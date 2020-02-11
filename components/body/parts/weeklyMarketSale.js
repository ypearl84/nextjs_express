import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeeklyMarketSale extends Component {

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div className="list_main">
                <div className="main_area">
                    <h4>
                        <a href="">금주의 마켓 세일</a>
                    </h4>
                    <div className="life_select">
                        <select>&gt;
                            <option value="">지역 선택</option>
                            <option value="">로스앤젤레스</option>
                            <option value="">뉴욕</option>
                            <option value="">워싱턴 D.C</option>
                            <option value="">샌프란시스코</option>
                            <option value="">시애틀</option>
                        </select>
                    </div>
                    <img src={require("../../../public/market_main.jpg")} alt="마켓이미지" />
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

export default connect(
    mapStateToProps,
    null
)(WeeklyMarketSale)

