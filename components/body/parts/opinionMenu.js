import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import OpinionList from '../../../constants/opinionList'

class OpinionMenu extends Component {

    constructor(props) {
        super(props)
        this.state = { opinionMenu: false , match : props.match };
        this.onClick  = this.onClick.bind(this);
    }

    onClick() {
        //this.setState({ opinionMenu: true })
        this.setState((state, props) => ({opinionMenu: this.state.opinionMenu?false:true}));

    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(prevState.match.params.p2===nextProps.match.params.p2 && prevState.match.params.p3===nextProps.match.params.p3) return false

        //this.onClick()

        return { opinionMenu: false, match : nextProps.match }

    }

    render () {

        const { match } = this.props; console.log({ match })

        const title = OpinionList.opinion.find(function (row) {
            if( row.id== {match}.match.params.p3) { return row };
        });

        console.log(title)

        return (
            <div className={!!this.state.opinionMenu ? "active section opinion_list_top clearfix" : "section opinion_list_top clearfix"}>
                <h3>{title.name}</h3>
                <a onClick={this.onClick} className="btn_all_menu">전체메뉴 <span className="ico"></span></a>
                <div className="opinion_all_menu">
                    <ul>
                        {
                            OpinionList.opinion.map( row => (
                                <li key={row.id} className={row.liClass}><NavLink to={'/opinion/113/'+row.id}>{row.name}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({  }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(OpinionMenu)
