import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({item}) => (
    <li>
        <NavLink to={item.link} className="img">
            <span className="rank">42</span>
            <img src={require("../../public/ex_img03.png")} alt="기사이미지"/>
        </NavLink>
        <NavLink to={item.link} className="txt">
            <span className="tit">{item.title}</span>
            <span className="comment"><span className="ico"></span>댓글 12개</span>
        </NavLink>
    </li>
)

