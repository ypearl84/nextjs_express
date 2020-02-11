import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeeklyFortuneList extends Component {

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div id="life_wrap">
                <div className="life_tit">
                    <h2><span>이번주 운세</span></h2>
                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/rat.png")} alt="쥐띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>쥐띠</strong> 84, 72, 60, 48, 36, 24년생
                        <p>반가운 소식이</p>
                    </div>
                    <a href="#" className="list_btn sub2" ></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/ox.png")} alt="소띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>소띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/tiger.png")} alt="범띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>범띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/rabbit.png")} alt="토끼띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>토끼띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/snake.png")} alt="용띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>용띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/snake.png")} alt="뱀띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>벰띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/horse.png")} alt="말띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>말띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/sheep.png")} alt="양띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>양띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/monkey.png")} alt="원숭이띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>원숭이띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/chicken.png")} alt="닭띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>닭띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"  ></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/dog.png")} alt="개띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>개띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

                </div>
                <div className="life_list">
                    <div className="list_img sub2">
                        <img src={require("../../../public/pig.png")} alt="돼지띠" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>돼지띠</strong> 85, 73, 61, 49, 37, 25년생
                        <p>관찰력이 필요한 때</p>
                    </div>
                    <a href="#" className="list_btn sub2"></a>
                </div>
                <div className="list_txt sub2" >
                    <ul>
                        <li><span>운세</span>
                            <div className="list_txt_sub">생각지도 않게 좋은 일이 생깁니다. 여러 가지 일이 교차되는 것으로써 끊임없이 생동하고 전진할 것입니다.
                            </div>
                        </li>
                        <li><span>금전</span>
                            <div className="list_txt_sub">자금문제가 서서히 풀리고 금전상으로 반가운 소식이 있겠습니다. 자신감을 가지고 박력 있게 밀고나가세요.
                            </div>
                        </li>
                        <li><span>애정</span>
                            <div className="list_txt_sub">여러 가지 면으로 도움을 주는 사람이 있겠습니다. 심신이 편해지면서 안정을 찾아갈 것입니다.</div>
                        </li>
                    </ul>
                    <div className="list_sub">
                        <ul>
                            <li><p>길일</p>7, 10일</li>
                            <li><p>주의</p>9, 12일</li>
                        </ul>
                    </div>

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
)(WeeklyFortuneList)

