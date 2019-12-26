import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PhotoNewsItem from '../../containers/photoNewsItem'

class SectionPhotoNews extends Component {

    render () {
        return (
            <div className="photo_news">
                <ul>
                    {
                        this.props.dataList.map(row => (
                            <PhotoNewsItem item={row} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(SectionPhotoNews)
