import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OpinionMenu from "./opinionMenu";
import { default as ListItem } from '../../containers/detailOpinionItem'

class DetailOpinion extends Component {

    constructor(props) {
        super(props);

    }


    findingData = (opNo, dataFetchingReducer) => {

        if(opNo==276) {
            return dataFetchingReducer.opinionEditorial
        }

    }

    render () {


        const { match, dataFetchingReducer } = this.props
        const opNo = {match}.match.params.p3

        const rendingData = this.findingData(opNo, {dataFetchingReducer}.dataFetchingReducer)
    console.log(rendingData)

        return (
            <>
                <OpinionMenu match={match} />
                <div className="bg_bar"></div>
                <div className="opinion_list">
                    <div className="txt_list">
                        <ul>
                            <ListItem />
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailOpinion)
