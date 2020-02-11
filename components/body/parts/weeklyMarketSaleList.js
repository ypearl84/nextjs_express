import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeeklyMarketSaleList extends Component {

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div className="life_wrap">
                <div className="life_tit"><h2><span className="area_name">LA</span> 주간 세일 품목</h2></div>
                <div className="life_list">
                    <ul>
                        <li className="market_btn">
                            <a href="../images/kims_landing.jpg" className="market_ad"><img src="../images/Mo_lotte.png"
                                                                                            alt="마켓이미지"/></a>
                        </li>
                        <li className="market_btn">
                            <a href="../images/kims_landing.jpg" className="market_ad"><img src="../images/Mo_lotte.png"
                                                                                            alt="마켓이미지"/></a>
                        </li>
                        <li className="market_btn">
                            <a href="../images/kims_landing.jpg" className="market_ad"><img src="../images/Mo_lotte.png"
                                                                                            alt="마켓이미지"/></a>
                        </li>
                        <li className="market_btn">
                            <a href="../images/kims_landing.jpg" className="market_ad"><img src="../images/Mo_lotte.png"
                                                                                            alt="마켓이미지"/></a>
                        </li>
                        <li className="market_btn">
                            <a href="../images/kims_landing.jpg" className="market_ad"><img src="../images/Mo_lotte.png"
                                                                                            alt="마켓이미지"/></a>
                        </li>
                    </ul>
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
)(WeeklyMarketSaleList)

