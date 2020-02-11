import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changingHeaderGnb, clickingNavClose} from '../../../actions/actions'
import { default as SectionNewsListItem } from '../../containers/sectionNewsListItem'

class SectionArticleList extends Component {

    constructor(props) {
        super(props)

/*        const { changingHeaderGnb, match, clickingNavClose } = this.props
        console.log('changingHeaderGnb')
        changingHeaderGnb([match.params.p1, match.params.p2])
        clickingNavClose()

        this.state = { match : match }*/

    }

    static getDerivedStateFromProps(nextProps, prevState) {



        //const { changingHeaderGnb } = nextProps

        //changingHeaderGnb([nextProps.match.params.p1, nextProps.match.params.p2])
        console.log(nextProps)
        //if(nextProps.match.params.p1===prevState.match.params.p1) return false
       // if(nextProps.match.params.p1===nextProps.switchReducer.gnbSelector) return false

        console.log('SectionArticleList')
        return  null //{ match : nextProps.match }
    }

    render () {
        return (
            <div className="news_list_infinite">
                <ul>
                    {
                        this.props.dataList.map( row => (
                            <SectionNewsListItem key={row.articleId} item={row}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changingHeaderGnb, clickingNavClose  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(SectionArticleList)
