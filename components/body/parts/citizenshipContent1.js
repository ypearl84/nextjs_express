import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {petchingDailyFortune, petchingPhotoNews} from '../../../actions/actions'

class CitizenshipCotent1 extends Component {

    constructor(props) {
        super(props)


        //const { petchingDailyFortune } = this.props
        //petchingDailyFortune()

    }

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div id="life_wrap">
                <div className="life_tit sub2">
                    <h2><span>시민권 취득 예상 문제 100</span></h2>
                </div>
                <div className="list_guide sub2">
                    2008년 10월부터 새로 적용된 개정 시민권 시험은 크게 행정 시험과 영어시험으로 시행된다. 100개의 예상 문제 중 10개 문항을 질문해 6개를 맞추면 통과한다. 50세 이상
                    되신 분으로 20년 이상 영주권을 가지고 있거나, 55세 이상으로 15년 이상 영주권을 가지고 계셨던 분들은 한국어로 시험을 볼 수 있으며 읽기와 쓰기 테스트가 면제된다.
                    예상문제에 나오는 정치인들은 캘리포니아주를 기준으로 작성됐으며 이름이 바뀔 수 있는 만큼 별도의 확인 절차가 필요하다.

                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>What is the supreme law of the land?</strong>
                        <p className="sub2">(미국 최고의 법은 무엇입니까?)</p>
                        <p className="sub">왓 더즈 더 컨스티투션 두?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>The constitution</strong>
                        <p className="sub2">(헌법)</p>
                        <p className="sub">더 컨스티투션</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>The idea of self-government is in the first three words of the constitution. What are
                            these words?</strong>
                        <p className="sub2">(자치정부란 이념이 헌법 전문 서두에 세 단어로 표현되어 있는데 그것은 무엇입니까?)</p>
                        <p className="sub"> 디 아이디어 오브 셀프- 거벌먼트 이즈 인 더 퍼스트 뜨리 워즈 오브 더 컨스티투션. 웟 아 디즈 워즈?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>We the people </strong>
                        <p className="sub2">(국민)</p>
                        <p className="sub">위 더 피플.</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>What is an amendment?</strong>
                        <p className="sub2">(수정헌법이란 무엇입니까?)</p>
                        <p className="sub">웟 이즈 언 어멘드먼트?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>A change to the constitution</strong>
                        <p className="sub2">(헌법의 수정)</p>
                        <p className="sub">어 췌인지 투 더 컨스티투션.</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>What do we call the first ten amendments to the Constitution? </strong>
                        <p className="sub2">(헌법의 처음 10개 수정안을 무엇이라 부릅니까?)</p>
                        <p className="sub">웟 두 위 콜 더 퍼스트 텐 어멘드먼츠 투 더 컨스티투션?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer" >
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>The Bill of rights</strong>
                        <p className="sub2">(권리장전)</p>
                        <p className="sub">더 빌 오브 롸잇츠.</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>What is one right or freedom from the First Amendment?</strong>
                        <p className="sub2">(헌법 1조 수정안에 명시된 권리 또는 자유는 무엇입니까?)</p>
                        <p className="sub">웟 이즈 원 롸잇 오어 프리덤 프롬 더 퍼스트 어멘드먼트?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer" >
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>Speech, Religion, Assembly, Press, Petition the governments</strong>
                        <p className="sub2">(언론, 종교, 집회, 출판, 정부 청원의 자유)</p>
                        <p className="sub">스피취, 륄리전, 어쎔블리, 프레쓰, 페티션 더 거벌먼츠.</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>How many amendments does the Constitution have?</strong>
                        <p className="sub2">(헌법에 몇 개의 수정안이 있습니까?)</p>
                        <p className="sub">하우 매니 어멘드먼츠 더즈 더 컨스티투션 해브?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer" >
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>Twenty-seven</strong>
                        <p className="sub2">(27개)</p>
                        <p className="sub">트웬티 쎄븐</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>What did the Declaration of Independence do?</strong>
                        <p className="sub2">(독립선언서는 어떤 일을 했습니까?)</p>
                        <p className="sub">웟 디드 더 디클러레이션 오브 인디펜던스 두?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer" >
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>Announced our independence from Great Britain</strong>
                        <p className="sub2">(영국으로부터 독립을 선포 했다)</p>
                        <p className="sub">어나운스트 아우어 인디펜던스 프롬 그레잇 브뤼튼.</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>What are two rights in the Declaration of Independence?</strong>
                        <p className="sub2">(독립선언서에 표현된 2개의 권리는 무엇입니까?)</p>
                        <p className="sub">웟 아 투 롸잇츠 인 더 디클러레이션 오브 인디펜던스 ?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>Life, Liberty and pursuit of happiness</strong>
                        <p className="sub2">(생명 및 자유와 행복을 추구할 권리)</p>
                        <p className="sub">라이프, 리버티 앤드 펄숫 오브 해피니스.</p>
                    </div>
                </div>
                <div className="life_list">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_q.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong> What is freedom of religion?</strong>
                        <p className="sub2">(종교의 자유란 무엇입니까?)</p>
                        <p className="sub">웟 이즈 프리덤 오브 륄리전?</p>
                    </div>
                    <a href="#" className="list_btn"></a>
                </div>
                <div className="life_list answer">
                    <div className="list_img">
                        <img src={require("../../../public/citizen_a.png")} alt="질문" className="citizen_q" />
                    </div>
                    <div className="list_tit sub2">
                        <strong>You can practice any religion, or not practice a religion</strong>
                        <p className="sub2">(종교를 가져도 되고, 종교를 갖지 않아도 된다)</p>
                        <p className="sub">유 캔 프랙티스 애니 륄리전 오어 낫 프랙티스 어 륄리전.</p>
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({ }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitizenshipCotent1)
