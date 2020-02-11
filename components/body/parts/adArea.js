import React, { Component } from 'react'

const defaultProps = {
    location: {
        pathname: '/'
    }
}

class AdArea extends Component {

    constructor(props) {
        super(props);
    }

    render () {

        let classType = "ad_area";


        if(this.props.pathname=='article' || this.props.location.pathname=='/article' || this.props.location.pathname =='/opinion') {
            classType = "ad_area pt0 mt0";
        }

        return (
            <div className={classType}>
                <a href="#"><img src={require("../../../public/ad.png")} alt="ad이미지" /></a>
            </div>
        )
    }
}

AdArea.defaultProps = defaultProps;

export default AdArea
