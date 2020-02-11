import React from 'react'
import { NavLink } from 'react-router-dom'
import imageCheck from 'image-exists'
import Moment from 'moment'


/* 뉴스 기사의 이미지 유무 체크 */
function imageChecking(item) {

    const imageUrl = "http://image.koreatimes.com"+item.thumbnail

    return imageCheck(imageUrl, function (exists) {
        if(exists) {
            return
                <NavLink to={'/section/'+item.c1Id+'/'+item.c2Id+'/'+item.articleId} className="img"><img src={imageUrl} alt="기사이미지" /></NavLink>
        }
    })
}

export default ({item}) => (
    <li key={item.articleId}>
        <div className="img">
            { imageChecking(item) }
        </div>
        <div className="txt">
            <NavLink to={'/article'+'/'+item.articleId} className="tit">{item.title}</NavLink>
            <NavLink to={'/article'+'/'+item.articleId} className="comment">
                <span className="ico"></span>댓글 개
            </NavLink>

        </div>
    </li>

)

