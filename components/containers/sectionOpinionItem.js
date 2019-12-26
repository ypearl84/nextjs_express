import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <NavLink to={item.url} className="img"><img src={item.image} alt={item.cName} /></NavLink>
        <NavLink to={item.url} className="txt">
            <span className="tit">{item.title}</span>
            <span className="sub_txt"></span>
            <span className="date">{item.pDate.substring(0,10)}</span>
        </NavLink>
    </li>

)

