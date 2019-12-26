import React from 'react'
import { NavLink } from 'react-router-dom'
import imageCheck from 'image-exists'

/* 뉴스 기사의 이미지 유무 체크 */
function imageChecking(item) {
    return imageCheck(item.image, function (exists) {
        if(exists) {
            return <NavLink to={item.url} className="img"><img src={item.image} alt="기사이미지" /></NavLink>
        }
    })
}

export default ({item}) => (
    /* <form action='javascript:' onSubmit={({target: {title}}) => {
        addTodo(title.value)
        title.value = ''
    }} >
        <input type='checkbox' onClick={() => {
            setAllCompleted(setAllValue)
            toggleSetAllValue()
        }} />
        <input type='text' name='title' placeholder='What needs to be done?' />
    </form> */
    <li key={item.info1}>
        { imageChecking(item) }
        <NavLink to={item.url} className="txt">
            <span className="tit">{item.title}</span>
            <span className="comment"><span className="ico"></span>댓글 {item.comment_total}개</span>
        </NavLink>
    </li>

)

