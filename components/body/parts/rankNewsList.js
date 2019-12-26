import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingHamburger } from '../../../actions/actions'

class RankNewsList extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {
        return (
            <div className="news_list_infinite rank_news">
                <ul>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">1</span>
                            <img src={require("../../../public/ex_img03.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">캘리포니아 산불 발화책임 전력사, 10억달러 손배 합의</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">2</span>
                            <img src={require("../../../public/ex_img03.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">캘리포니아 산불 발화책임 전력사, 10억달러 손배 합의</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">3</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">4</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">5</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">6</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">7</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">8</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">9</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="img">
                            <span className="rank">10</span>
                            <img src={require("../../../public/ex_img02.png")} alt="기사이미지" />
                        </a>
                        <a href="#" className="txt">
                            <span className="tit">한국일보 창간 50주년, 참신한 인재를 찾습니다</span>
                            <span className="comment"><span className="ico"></span>댓글 12개</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(RankNewsList)
