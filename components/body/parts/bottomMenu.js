import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingHamburger } from '../../../actions/actions'

class BottomMenu extends Component {

    click = () => {
       // const { clickingHamburger } = this.props
       // clickingHamburger()
    }

    render () {
        return (
            <div className="bottom_menu">
                <ul>
                    <li><a href="">사회</a></li>
                    <li><a href="">경제</a></li>
                    <li><a href="">스포츠</a></li>
                    <li><a href="">부동산</a></li>
                    <li><a href="">교육</a></li>
                    <li><a href="">건강</a></li>
                    <li><a href="">라이프</a></li>
                    <li><a href="">위켄드</a></li>
                    <li><a href="">문화</a></li>
                    <li><a href="">종교</a></li>
                    <li><a href="">연예</a></li>
                    <li><a href="">핫이슈</a></li>
                    <li className="bd_none"><a href="">포토뉴스</a></li>
                    <li className="bd_none"><a href="">오피니언</a></li>
                    <li className="bd_none"></li>
                    <li className="bd_none"></li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(BottomMenu)
