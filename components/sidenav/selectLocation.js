import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickingNavLocationFolder, changingBranch } from '../../actions/actions'

class SelectLocation extends Component {

    openFolder = () => {
        const { clickingNavLocationFolder } = this.props
        clickingNavLocationFolder()

    }

    changeBranch = (branch, e) => {
       // function handleClick(e) {
            e.preventDefault()
            const { changingBranch } = this.props
            changingBranch(branch)
       // }
    }

  render () {

      const { switchReducer } = this.props;

      return (
        <div className={!!switchReducer.locationFolder ? 'select_location side_section active' : 'select_location side_section' }>
            <h2 className="slide_down_menu" >지역선택 <span className="ico" onClick={this.openFolder} /* style="background-position: 0px 1px;" */></span>
            </h2>
            <ul>
                <li className={'la ' + (switchReducer.selectedBranch=='LA'?'current':'')}  onClick={(e)=>this.changeBranch('LA', e)}><a>LA</a></li>
                <li className={'ny ' + (switchReducer.selectedBranch=='NY'?'current':'')} onClick={(e)=>this.changeBranch('NY', e)}><a>NY</a></li>
                <li className={'dc ' + (switchReducer.selectedBranch=='DC'?'current':'')} onClick={(e)=>this.changeBranch('DC', e)}><a>DC</a></li>
                <li className={'sf ' + (switchReducer.selectedBranch=='SF'?'current':'')} onClick={(e)=>this.changeBranch('SF', e)}><a>SF</a></li>
                <li className={'seattle bd_none ' + (switchReducer.selectedBranch=='SEA'?'current':'')} onClick={(e)=>this.changeBranch('SEA', e)}><a>SEA</a></li>
                <li className={'hawaii bd_none ' + (switchReducer.selectedBranch=='HI'?'current':'')} onClick={(e)=>this.changeBranch('HI', e)}><a>HI</a></li>
                <li className={'chi bd_none ' + (switchReducer.selectedBranch=='CHI'?'current':'')} onClick={(e)=>this.changeBranch('CHI', e)}><a>CHI</a></li>
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
    bindActionCreators({ clickingNavLocationFolder, changingBranch }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectLocation)

