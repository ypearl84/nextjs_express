import React, { Component } from 'react'
import { connect } from 'react-redux'
import DailyFortuneList from './dailyFortuneList'
import WeeklyFortuneList from './weeklyFortuneList'

class Fortune extends Component {

    constructor(props) {
        super(props)
        this.fortuneSelectChange = this.fortuneSelectChange.bind(this)
        this.state = {
            fortune_select : 'daily'
        }
    }


    fortuneSelectChange(event) {
        this.setState({ fortune_select : event.target.value })
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
                            <select onChange={this.fortuneSelectChange}>&gt;
                                <option value="daily">오늘의 운세</option>
                                <option value="weekly">이번주 운세</option>
                            </select>
                        </div>
                        <img src={require("../../../public/fortune_bg.png")} alt="마켓이미지" />
                    </div>
                </div>
                { this.state.fortune_select === 'daily' && <DailyFortuneList /> }
                { this.state.fortune_select === 'weekly' && <WeeklyFortuneList /> }
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
)(Fortune)

