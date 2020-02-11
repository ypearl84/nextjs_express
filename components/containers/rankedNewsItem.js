import React from 'react'
import { NavLink } from 'react-router-dom'
import imageCheck from 'image-exists'

export default ({item, index}) => (
    <li>
        <NavLink to={item.url} className="img">
            <span className="rank">{index}</span>
            <img src={'http://image.koreatimes.com'+item.thumbnail} alt="기사이미지" />
        </NavLink>
        <NavLink to={item.url} className="txt">
            <span className="tit">{item.title}</span>
            <span className="comment"><span className="ico"></span>댓글 {item.review_cnt}개</span>
        </NavLink>
    </li>
)

