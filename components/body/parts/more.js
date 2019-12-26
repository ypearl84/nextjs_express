import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingBtnMore } from '../../../actions/actions'
import { NavLink } from 'react-router-dom'

class More extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
           /* <a className="btn_more" onClick={(e)=>this.click()}><img src={require("../../../public/arrow_right.png")} alt="사설 더보기" /></a>*/
            <div className="btn_more"><NavLink to={"/opinion/"+this.props.opinionId}><img src={require("../../../public/arrow_right.png")} alt="사설 더보기" /></NavLink></div>
        )
    }
}

export default More
