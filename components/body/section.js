import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { petchingSectionArticleList, changingHeaderGnb, clickingNavClose} from '../../actions/actions'
import AdArea from "./parts/adArea"
import SectionArticleList from "./parts/sectionArticleList"


class Section extends Component {

    constructor(props) {
        super(props)

        console.log('section constructor')

        const { changingHeaderGnb, match, clickingNavClose, petchingSectionArticleList } = this.props

        //console.log(this.props.match.params.p1)
        //changingHeaderGnb([match.params.p1, match.params.p2])
        //clickingNavClose()

        this.state = { match : match }

        // const {  } = nextProps
        //const sectionId =  match.params.p3 == undefined ? match.params.p2 : match.params.p3;

       // petchingSectionArticleList(sectionId)

    }

    static getDerivedStateFromProps(nextProps, prevState) {

        const { clickingNavClose, petchingSectionArticleList } = nextProps

        clickingNavClose()

        console.log('section getDerivedStateFromProps')
        console.log("prevState")
        console.log(prevState)

        //if(prevState===undefined || prevState===null) return false
        if(prevState.match.params.p2===nextProps.match.params.p2) {
            if( prevState.match.params.p3===nextProps.match.params.p3)
                return false
        }

        const sectionId =  nextProps.match.params.p3 == undefined ? nextProps.match.params.p2 : nextProps.match.params.p3;

        petchingSectionArticleList(sectionId)


        console.log("nextProps")
        console.log(nextProps)
        console.log(sectionId)

        return { match : nextProps.match }

    }


    /*   static getDerivedStateFromProps(nextProps, prevState) {
           console.log('section getDerivedStateFromProps')
           console.log(nextProps)
           //const { changingHeaderGnb } = nextProps

           //const sectionId =  match.params.p3 == undefined ? match.params.p2 : match.params.p3;
           //petchingSectionArticleList(sectionId)

           if(nextProps.location.pathname != nextProps.match.url) {
               console.log('section changed')
               const { changingHeaderGnb , clickingNavClose } = nextProps
               changingHeaderGnb([nextProps.match.params.p1, nextProps.match.params.p2])
               clickingNavClose()
           }

               //changingHeaderGnb([nextProps.match.params.p1, nextProps.match.params.p2])

           //changingHeaderGnb([nextProps.match.params.p1, nextProps.match.params.p2])
           console.log(nextProps)
           if(nextProps.match.params.p1===prevState.match.params.p1) return false
           if(nextProps.match.params.p1===nextProps.switchReducer.gnbSelector) return false

           console.log('rerender')
           return { match : nextProps.match }
       }*/



   /* shouldComponentUpdate(nextProps, nextState) {

        console.log('Section shouldComponentUpdate');

        if(nextProps.match.params.p2==null || nextProps.match.params.p2==undefined) return false;

        let sectionId = nextProps.match.params.p3 == undefined ? nextProps.match.params.p2 : nextProps.match.params.p3;

        console.log('Section shouldComponentUpdate '+sectionId);

       // const { petchingSectionArticleList } = nextProps
        // petchingSectionArticleList(sectionId)

        return true;
    }*/

    render () {

        console.log('section rendering')

        const { dataFetchingReducer, match } = this.props;

        return (
            <div id="container">
                <SectionArticleList dataList={ dataFetchingReducer.sectionArticleList } match={match} />
                <AdArea />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { dataFetchingReducer } = state
    return {  dataFetchingReducer }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({petchingSectionArticleList, changingHeaderGnb, clickingNavClose}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Section)
