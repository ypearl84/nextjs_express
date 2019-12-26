import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingNavLocationFolder } from '../../actions/actions'

class SelectLocation extends Component {

    click = () => {
        const { clickingNavLocationFolder } = this.props
        clickingNavLocationFolder()

    }

  render () {

      const { switchReducer } = this.props;

      return (
        <div className={!!switchReducer.locationFolder ? 'select_location side_section active' : 'select_location side_section' }>
            <h2 className="slide_down_menu" >지역선택 <span className="ico" onClick={this.click} /* style="background-position: 0px 1px;" */></span>
            </h2>
            <ul>
                <li className="la current"><a href="http://la.koreatimes.com/">LA</a></li>
                <li className="ny"><a href="http://ny.koreatimes.com/">NY</a></li>
                <li className="dc"><a href="http://dc.koreatimes.com/">DC</a></li>
                <li className="sf"><a href="http://sf.koreatimes.com/">SF</a></li>
                <li className="seattle bd_none"><a href="http://seattle.koreatimes.com/">SEA</a></li>
                <li className="hawaii bd_none"><a href="http://hawaii.koreatimes.com/">HI</a></li>
                <li className="chi bd_none"><a href="http://chi.koreatimes.com/">CHI</a></li>
            </ul>
        </div>
    )
  }
}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingNavLocationFolder }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectLocation)

