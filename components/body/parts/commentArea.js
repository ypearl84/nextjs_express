import React, { Component , Fragment } from 'react'


class CommentArea extends Component {

    constructor(props) {
        super(props);
    }

    render () {

        return (
            <Fragment>
                <div className="section total_comment">
                    <strong className="total">댓글 237</strong>
                    <a href="my_comment.html" className="go_my_comment">내 댓글
                        <span className="ico"></span>
                    </a>
                </div>

                <div className="section comment_list">
                <div className="input">
                <input type="text" placeholder="댓글을 입력해주세요"/>
                <input type="button" value="등록"/>
                </div>
            <ul className="list">
                <li>
                    <div className="comment">
                        <strong className="user">Honggildong</strong>
                        <div className="txt">
                            정말 안타깝네요 잠깐 부진인걸까요  오래가지 않았으면 하는데 계속 안좋은기사만 뜨네요 류현진 경기보면서 힘을 얻는 사람들이 많습니다  류현진 선수
                            힘내세요
                        </div>
                        <div className="bottom">
                            <span className="date">2019-09-20</span>
                            <a href="#" className="btn_report"><span className="bar">I</span>신고</a>
                        </div>
                        <a className="btn_reply">답글 0</a>
                    </div>
                    <div className="reply_wrap">
                        <div className="reply_write">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <div className="box">
                                <input type="text" placeholder="답글을 입력해주세요"/>
                                <a href="#self" className="btn_regi">등록</a>
                            </div>
                            <a href="#self" className="btn_close">답글 접기<span className="ico"></span></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="comment">
                        <strong className="user">Honggildong</strong>
                        <div className="txt">
                            정말 안타깝네요 잠깐 부진인걸까요  오래가지 않았으면 하는데 계속 안좋은기사만 뜨네요 류현진 경기보면서 힘을 얻는 사람들이 많습니다. 류현진 선수
                            힘내세요 할수있다
                        </div>
                        <div className="bottom">
                            <span className="date">2019-09-20</span>
                            <a href="#" className="btn_report"><span className="bar">I</span>신고</a>
                        </div>
                        <a className="btn_reply">답글 0</a>
                    </div>
                    <div className="reply_wrap">
                        <div className="reply_write">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <div className="box">
                                <input type="text" placeholder="답글을 입력해주세요"/>
                                <a href="#self" className="btn_regi">등록</a>
                            </div>
                            <a href="#self" className="btn_close">답글 접기<span className="ico"></span></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="comment">
                        <strong className="user">Honggildong</strong>
                        <div className="txt">
                            정말 안타깝네요 잠깐 부진인걸까요  오래가지 않았으면 하는데 계속 안좋은기사만 뜨네요 류현진 경기보면서 힘을 얻는 사람들이 많습니다. 류현진 선수
                            힘내세요  할수있다
                        </div>
                        <div className="bottom">
                            <span className="date">2019-09-20</span>
                            <a href="#" className="btn_report"><span className="bar">I</span>신고</a>
                        </div>
                        <a className="btn_reply">답글 0</a>
                    </div>
                    <div className="reply_wrap">
                        <div className="reply_write">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <div className="box">
                                <input type="text" placeholder="답글을 입력해주세요"/>
                                <a href="#self" className="btn_regi">등록</a>
                            </div>
                            <a href="#self" className="btn_close">답글 접기<span className="ico"></span></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="comment">
                        <div className="deco"><i className="v"></i><i className="h"></i></div>
                        <strong className="user">Honggildong</strong>
                        <div className="txt">
                            정말 안타깝네요 잠깐 부진인걸까요  오래가지 않았으면 하는데 계속 안좋은기사만 뜨네요. 류현진 경기보면서 힘을 얻는 사람들이 많습니다. 류현진 선수
                            힘내세요  할수있다
                        </div>
                        <div className="bottom">
                            <span className="date">2019-09-20</span>
                            <a href="#" className="btn_report"><span className="bar">I</span> 신고</a>
                        </div>
                        <a className="btn_reply">답글 2</a>
                    </div>
                    <div className="reply_wrap">
                        <div className="reply">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <strong className="user">Honggildong</strong>
                            <div className="txt">
                                정말 안타깝네
                            </div>
                            <div className="bottom">
                                <span className="date">2019-09-20</span>
                                <a className="btn_report"><span className="bar">I</span> 신고</a>
                            </div>
                        </div>
                        <div className="reply">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <strong className="user">Honggildong</strong>
                            <div className="txt">
                                정말 안타깝네
                            </div>
                            <div className="bottom">
                                <span className="date">2019-09-20</span>
                                <a className="btn_report"><span className="bar">I</span> 신고</a>
                            </div>
                        </div>
                        <div className="reply_write">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <div className="box">
                                <input type="text" placeholder="답글을 입력해주세요"/>
                                <a href="#self" className="btn_regi">등록</a>
                            </div>
                            <a href="#self" className="btn_close">답글 접기<span className="ico"></span></a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="comment">
                        <strong className="user">Honggildong</strong>
                        <div className="txt">
                            정말
                        </div>
                        <div className="bottom">
                            <span className="date">2019-09-20</span>
                            <a href="#" className="btn_report"><span className="bar">I</span>신고</a>
                        </div>
                        <a className="btn_reply">답글 0</a>
                    </div>
                    <div className="reply_wrap">
                        <div className="reply_write">
                            <div className="deco"><i className="v"></i><i className="h"></i></div>
                            <div className="box">
                                <input type="text" placeholder="답글을 입력해주세요"/>
                                <a href="#self" className="btn_regi">등록</a>
                            </div>
                            <a href="#self" className="btn_close">답글 접기<span className="ico"></span></a>
                        </div>
                    </div>
                </li>
            </ul>
            <a className="btn_list_more">더보기 <span className="ico"></span></a>
            </div>
        </Fragment>
        )
    }
}

export default CommentArea
