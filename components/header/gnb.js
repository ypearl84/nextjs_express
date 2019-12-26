import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { clickingHeaderSection } from '../../actions/actions'
import GnbList from '../../constants/gnbList'

import { NavLink } from 'react-router-dom'
import {changingHeaderGnb} from "../../actions/actions";



class Gnb extends Component {

    constructor(props) {
        super(props);
       // const { switchReducer, location } = this.props;

       /* const { switchReducer, location } = this.props;

        this.state = {
            hSection : {switchReducer}.switchReducer.gnbSelector
        }*/
    }

   // static getDerivedStateFromProps(nextProps) {
        //console.log(nextProps)
        //return changingHeaderGnb(nextProps.match.params.p1)
       // return { p1: nextProps.match.params.p1 }
   // }

    /*

    getDerivedStateFromProps() {


        this.setState({hSection : {switchReducer}.switchReducer.gnbSelector})

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log(prevProps)
        //if(prevProps.switchReducer.gnbSelector!=this.props.match.params.p1) {
       //     changingHeaderGnb(this.props.match.params.p1)
       // }
    }*/

    _makingGnb() {

        const { switchReducer } = this.props;

        //const hSection = { switchReducer }.switchReducer.headerSection;
        //const mSection = { section }.section.mainSection;

        let hSection = { switchReducer }.switchReducer.gnbSelector

        let selectedGnb = GnbList.gnbs.find(function (row) {
            if( row.id==hSection) {
                return row
            }
        });

        // section 일 경우 1depth 더 들어감
        if(hSection=='section') {
            selectedGnb = selectedGnb.list.find(function(row) {
                if(row.id=={ switchReducer }.switchReducer.gnbSubSelector) {
                    hSection = 'section/'+row.id
                    return row
                }
            })
        }

        let selectedGnbli = selectedGnb.list.map((row) => {

            return <li key={row.id}><NavLink to={ '/' + (hSection=='main'?'': hSection+'/') + row.id} activeClassName="on">{row.name}</NavLink></li>
             //return <li key={row.id} className={ row.id==mSection ? "on" : "" }><a onClick={(e)=>this.click(row.id)}>{row.name}</a></li>
            //return <li key={row.id} className={ row.id==mSection ? "on" : "" }><ActiveLink href={'/index'} >{row.name}</ActiveLink></li>
        });

        return <div id="gnb" className={ hSection.substring(0,7)=='section' ? 'section_gnb' : '' }><ul className={ hSection=='main' ? 'clearfix' : 'scroll' }>{selectedGnbli}</ul></div>

    }

   /* click = (e) => {
        const { clickingHeaderSection } = this.props
        clickingHeaderSection(e)
    } */

    render () {

       // const { switchReducer } = this.props;

        return (
                <>
                    {this._makingGnb()}
                </>
        )
    }
}

function mapStateToProps (state) {
    const { switchReducer } = state
    return { switchReducer }
}

/*
const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickingHeaderSection }, dispatch)
*/
export default connect(
    mapStateToProps,
    null
)(Gnb)
