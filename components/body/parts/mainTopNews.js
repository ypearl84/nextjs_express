import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingMainTopNews } from '../../../actions/actions'

import { NavLink } from 'react-router-dom'

class MainTopNews extends Component {


    constructor(props) {
        super(props);
        const { petchingMainTopNews } = props
        petchingMainTopNews()
    }

    componentDidMount() {

    }

    render () {

        const { dataFetchingReducer } = this.props;

        return (
            <>
                {
                    dataFetchingReducer.mainTop.map(row => (

                        <div key={row.info1} className="main_top_news">
                            <NavLink to={row.url}>
                            <div className="txt">
                                <div className="tit" dangerouslySetInnerHTML={{__html: row.title }}></div>
                                <div className="comment"><span className="ico"></span>댓글 {row.comment_total}개</div>
                            </div>
                            <div className="img">
                                <div ><img src={row.image} alt="기사이미지" /></div>
                            </div>
                            </NavLink>
                        </div>
                    ))
                }
            </>
        )
    }
}


function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return { dataFetchingReducer }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({petchingMainTopNews}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTopNews)
