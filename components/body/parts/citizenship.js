import React, { Component } from 'react'
import { connect } from 'react-redux'
import CitizenshipCotent1 from './citizenshipContent1'

class Citizenship extends Component {

    constructor(props) {
        super(props)
        this.selectOptionChange = this.selectOptionChange.bind(this)
        this.state = {
            selected_option : 's1'
        }
    }


    selectOptionChange(event) {
        this.setState({ selected_option : event.target.value })
    }

    render () {

        return (
            <div id="container">
                <div className="list_main">
                    <div className="main_area">
                        <h4>
                            <a href="">띠별 주간 운세</a>
                        </h4>
                        <div className="life_select">
                            <select onChange={this.selectOptionChange}>&gt;
                                <option value="s1">신청 준비 사항</option>
                                <option value="s2">예상문제 100</option>
                            </select>
                        </div>
                        <img src={require("../../../public/citizen.png")} alt="citizenship" />
                    </div>
                </div>
                { this.state.selected_option === 's1' && <CitizenshipCotent1 /> }

            </div>
        )
    }
}

function mapStateToProps (state) {
    const {   } = state
    return {   }
}

export default connect(
    mapStateToProps,
    null
)(Citizenship)

