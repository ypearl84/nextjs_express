import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({item}) => (
    <li key={item.photoId}>
        <NavLink to={"/"}>
            <span className="img">
                <img src={"http://mimg.koreatimes.com/la/"+item.image} alt="news image" />
            </span>
            <span className="txt">
                <span className="tit">{item.title}</span>
                <span className="sub_txt">{item.content}</span>
            </span>
        </NavLink>
    </li>
)

