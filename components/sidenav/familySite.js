import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {clickingNavKtown1stFolder} from "../../actions/actions";

class FamilySite extends Component {

    click = () => {
        const { clickingNavKtown1stFolder } = this.props
        clickingNavKtown1stFolder()

    }

  render () {

    const { switchReducer } = this.props;

    return (
        <div className="family_site side_section">
            <ul className={!!switchReducer.ktown1stFolder ? "active" : ""}>
                <li className="dep1 dep1_ktown">
                    <a className="ktown">Ktown 1번가 <span className="ico" onClick={this.click}></span></a>
                    <ul className="ktown_menu">
                        <li className="kstory">
                            <a href="https://www.ktown1st.com/story" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_kstory.png")} alt="K스토리" /></span>
                                <span className="txt">K스토리</span>
                            </a>
                        </li>
                        <li className="ktalk">
                            <a href="https://www.ktown1st.com/ktalk" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_ktalk.png")} alt="ktalk" /></span>
                                <span className="txt">K Talk</span>
                            </a>
                        </li>
                        <li className="yp">
                            <a href="https://www.ktown1st.com/yp" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_yp.png")} alt="업소록" /></span>
                                <span className="txt">업소록</span>
                            </a>
                        </li>
                        <li className="in">
                            <a href="https://www.ktown1st.com/in" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_in.png")} alt="지식톡" /></span>
                                <span className="txt">지식톡</span>
                            </a>
                        </li>
                        <li className="realty">
                            <a href="https://www.ktown1st.com/realty" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_realty.png")} alt="부동산" /></span>
                                <span className="txt">부동산</span>
                            </a>
                        </li>
                        <li className="car">
                            <a href="https://www.ktown1st.com/car" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_car.png")} alt="자동차" /></span>
                                <span className="txt">자동차</span>
                            </a>
                        </li>
                        <li className="rent">
                            <a href="https://www.ktown1st.com/rent" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_rent.png")} alt="렌트" /></span>
                                <span className="txt">렌트</span>
                            </a>
                        </li>
                        <li className="job">
                            <a href="https://www.ktown1st.com/rent" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_job.png")} alt="구인구직" /></span>
                                <span className="txt">구인구직</span>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.ktown1st.com/item" target="_blank">
                                <span className="ktown_ico"><img src={require("../../public/ktown_item.png")} alt="사고팔기" /></span>
                                <span className="txt">사고팔기</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="dep1"><a href="#">The Korea Tims 영문 한국일보 <span className="ico_go"></span></a></li>
                <li className="dep1"><a href="#">한국TV <span className="ico_go"></span></a></li>
                <li className="dep1"><a href="#">라디오 서울 <span className="ico_go"></span></a></li>
                <li className="dep1"><a href="#">H magazine <span className="ico_go"></span></a></li>
            </ul>
        </div>
    )
  }
}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingNavKtown1stFolder }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FamilySite)

