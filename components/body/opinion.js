import React, { Component } from 'react'

import MainOpinion from "./parts/mainOpinion"
import DetailOpinion from "./parts/detailOpinion"

class Opinion extends Component {

    render () {

        const { location, match } = this.props;

        return (
            <div id="container" className={ location.pathname==='/opinion' ? "bg_container" : "" }>
                { location.pathname==='/opinion' ? <MainOpinion location={location} /> : <DetailOpinion location={location} match={match} /> }
            </div>
        )
    }
}

export default Opinion
