import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {petchingDailyFortune, petchingPhotoNews} from '../../../actions/actions'

class DailyFortuneList extends Component {

    constructor(props) {
        super(props)

        console.log('dailyfortunelist constructor')

        const { petchingDailyFortune } = this.props
        petchingDailyFortune()

    }

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div id="life_wrap">
                <div className="life_tit">
                    <h2><span>오늘의 운세</span></h2>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/rat.png")} alt="쥐띠" />
                    </div>
                    <div className="list_tit">
                        <strong>쥐띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >

                    84년생 쉽게 포기하지 마라. 가다 말면 아니 간 것만도 못하다.
                    72년생 말과 행동을 정확하게 하지 않으면 오해가 생긴다.
                    60년생 초조하고 불안해하면 원활한 진행이 힘들다. 여유를 갖도록 하라.
                    48, 36년생 어른으로 아량을 베풀어야 할 때다.
                    아랫사람의 불만을 들어주고 이해하라.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/ox.png")} alt="소띠" />
                    </div>
                    <div className="list_tit">
                        <strong>소띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >

                    85년생 나사가 풀린 것처럼 하루를 무의미하게 보낼 수 있다.
                    계획을 잘 세워야 하겠다.
                    73년생 이것저것 벌인 일은 하나씩 정리해 나가야 한다.
                    61년생 지난 일은 빨리 잊어라.
                    미련을 버리고 현실에 충실해야 한다.
                    49, 37년생 서로에게 도움 되는 일이라면 권유해서 함께 하라.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/tiger.png")} alt="범띠" />
                    </div>
                    <div className="list_tit">
                        <strong>범띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >

                    86년생 사랑은 뜨거워져가고 서로 감정에 사로잡혀 있다.
                    74년생 공통의 대화거리를 찾아라.
                    대화를 시도하면 잘 통하는 날이다.
                    62년생 주위에 도와주는 사람이 있어서 갑자기 일이 진척된다.
                    50, 38년생 주위 사람에게 베풀고 함께 즐겨라.
                    즐거움은 나눌수록 배가 될 것이다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/rabbit.png")} alt="토끼띠" />
                    </div>
                    <div className="list_tit">
                        <strong>토끼띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1"  >
                    87년생 불필요한 일에 시간과 돈을 낭비하기 쉽다.
                    철저한 관리가 필요하다, 75년생 작은 일일수록 꼼꼼히 챙겨야 한다.
                    63년생 살아가는 동안 다툼이 없을 수 없지만 자신만 생각하다 가정이 흔들릴 수 있다.
                    51, 39년생 뜻하지 않은 어려움이 닥치니 주의하지 않으면 손해 보게 된다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/dragon.png")} alt="용띠" />
                    </div>
                    <div className="list_tit">
                        <strong>용띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    87년생 불필요한 일에 시간과 돈을 낭비하기 쉽다.
                    철저한 관리가 필요하다, 75년생 작은 일일수록 꼼꼼히 챙겨야 한다.
                    63년생 살아가는 동안 다툼이 없을 수 없지만 자신만 생각하다 가정이 흔들릴 수 있다.
                    51, 39년생 뜻하지 않은 어려움이 닥치니 주의하지 않으면 손해 보게 된다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/snake.png")} alt="뱀띠 " />
                    </div>
                    <div className="list_tit">
                        <strong>뱀띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    89년생 시간이 좀 더 필요하다. 마음의 여유를 갖도록 하라.
                    77년생 자신감을 가져도 되는 날이다.
                    긍정적인 방향으로 일이 진행될 것이다.
                    65, 53년생 기대한 만큼은 아니더라도 작은 것은 이루게 된다.
                    41년생 특별한 일이 아니라도 열심히 하다보면 좋은 결과를 얻게 되는 것이다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/horse.png")} alt="말띠" />
                    </div>
                    <div className="list_tit">
                        <strong>말띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    90년생 남의 흉이 제 흉이 될 수도 있는 것이니 남을 비난하지 마라.
                    78, 66년생 마음속에 미움이 있으면 괴롭다. 미움은 될 수 있으면 적게 가지려고 하라.
                    54년생 유난히 바쁜 하루다. 소득은 별로 없으니 큰 기대는 하지 마라.
                    42년생 번잡한 일은 여유가 있는 시간에 하라.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/sheep.png")} alt="양띠" />
                    </div>
                    <div className="list_tit">
                        <strong>양띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    91년생 오랫동안 묻어두었던 감정을 싹틔우기 시작하는 날이다.
                    79, 67년생 가족이나 가까운 친구가 든든한 울타리가 되어준다.
                    55년생 가깝게 지내던 지인과 함께 여행을 떠나보는 것도 심기일전하는데 도움이 될 것이다.
                    43년생 주변 사람과의 대화에 신경을 써라. 도움이 된다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/monkey.png")} alt="원숭이띠" />
                    </div>
                    <div className="list_tit">
                        <strong>원숭이띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    92년생 사랑하는 사람과 사소한 일로 오해가 생겨 이별할 수 있다.
                    80년생 대인관계를 중요시 생각하라. 감정이 앞서는 행동은 손해만 부를 뿐이다.
                    68, 56년생 땀의 결실만 기대하고 그 이상은 탐하지 마라.
                    44년생 돈이란 없다가도 있고 있다가도 없는 것이니 실망하지 마라.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/chicken.png")} alt="닭띠" />
                    </div>
                    <div className="list_tit">
                        <strong>닭띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    93년생 상대하고 있는 사람이 두 얼굴을 하고 있는 것은 아닌지 잘 살펴보라.
                    81, 69년생 많지도 않은 돈 때문에 인간관계가 깨질 수 있으니 조심하라.
                    57년생 형제나 가족 간에 다툼이 있을 수 있으니 자중하라.
                    45, 33년생 아는 척하지 말고 나서지도 않는 것이 자신에게 유리하다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/dog.png")} alt="개띠" />
                    </div>
                    <div className="list_tit">
                        <strong>개띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    94년생 오락이나 스포츠를 즐기기에 좋은 운이 찾아오는 날이다.
                    82년생 마음과 뜻이 맞는 죽마고우를 만난다.
                    앞으로의 일을 같이 의논하고 설계하게 된다.
                    70, 58년생 자신에게 유리하니 원하는 방향대로 일이 진행될 것이다.
                    46, 34년생 잠시라도 나를 위한 시간을 갖도록 하라.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
                    </ul>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/pig.png")} alt="돼지띠" />
                    </div>
                    <div className="list_tit">
                        <strong>돼지띠</strong>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="list_txt sub1" >
                    95년생 뜻밖의 장소에서 마음에 꼭 드는 이성을 만나서 가슴이 설레게 된다.
                    83, 71년생 경험자나 집안 어른의 조언을 구하면 무난하게 해결된다.
                    59, 47년생 진심으로 대하라.
                    자신의 성의와 진심이 상대에게 전해질 것이다.
                    35년생 온 집안에 따뜻한 기운이 돌고 마음이 편안해진다.
                    <ul>
                        <li><span>운세</span>90</li>
                        <li><span>금전</span>90</li>
                        <li><span>건강</span>90</li>
                        <li><span>애정</span>90</li>
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({petchingDailyFortune}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyFortuneList)
