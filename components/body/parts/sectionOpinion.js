import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingSectionOpinion } from '../../../actions/actions'
import More from "./more";
import { default as ListItem } from '../../containers/sectionOpinionItem'

class SectionOpinion extends Component {

    componentDidMount() {
        const { petchingSectionOpinion } = this.props
        petchingSectionOpinion()
    }

    render () {

        const { dataFetchingReducer } = this.props

        return (
            <div className="section opinion">
                <div className="tit_wrap">
                    <h3 className="sub_tit">오피니언</h3>
                    <More opinionId={'113/276'} />
                </div>
                <div className="top5 txt_img_list">
                    <ul>
                        {
                            dataFetchingReducer.sectionOpinion.map( row => (
                                <ListItem key={row.info1} item={row}/>
                            ))
                        }

                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ petchingSectionOpinion }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SectionOpinion)
