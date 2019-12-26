import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SectionOpinion from './sectionOpinion'
import Cartoon from './cartoon'
import AdArea from './adArea'
import Editorial from './editorial'
import Column from './column'
import Contri from './contri'
import Etc from './etc'
import BottomMenu from './bottomMenu'
import { petchingMainOpinion } from '../../../actions/actions'

class MainOpinion extends Component {

    componentDidMount() {
        const { petchingMainOpinion } = this.props
        petchingMainOpinion()
    }

    render () {

        const { location } = this.props;

        return (
            <>
                <SectionOpinion />
                <Cartoon />
                <AdArea location={location} />
                <Editorial />
                <Column />
                <Contri />
                <Etc />
                <AdArea />
                <BottomMenu />
            </>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ petchingMainOpinion }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(MainOpinion)
