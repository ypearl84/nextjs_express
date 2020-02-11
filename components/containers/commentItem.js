import React from 'react'
import { NavLink } from 'react-router-dom'
import imageCheck from 'image-exists'

export default ({item}) => (
    <li>
        <div className="comment">
            <strong className="user">{item.user_id}</strong>
            <div className="txt">{item.comment}</div>
            <div className="bottom">
                <span className="date">{item.inputtime}</span>
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
)

