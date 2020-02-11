import React, {Component, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

class MainTopNews extends Component {

    constructor(props) {
        super(props)
        this.state = { branch : props.branch, list : [] }
        this.getData.bind(this)

           // console.log(data)

    }

    getData = async() => {

        try {

            import(`raw-loader!../../../data/publishing/${this.state.branch}/main_top/main_top.data`).then(
                (data => JSON.parse(data.default))).then(data => this.setState({list : data.data}));

            /*const url = `http://data.koreatimes.com/publishing/${this.state.branch}/main_top/main_top.data`

            Axios.get(url).then(data => {
                //console.log(data)
                this.setState({ list : data.data.data })
            });*/

        } catch (e) {
            console.log(e)
        }

    }

    componentDidMount() {
        // 첫 로딩시에 getData 호출
        this.getData()
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(prevState.branch===nextProps.branch) return false

        return { branch : nextProps.branch }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.branch !== this.state.branch) {

            this.getData()
        }
    }

    render () {
        return (
            <Fragment>
            {
                this.state.list.length > 0 &&
                    <div key={this.state.list[0].info1} className="main_top_news">
                        <NavLink to={this.state.list[0].url}>
                            <div className="txt">
                                <div className="tit" dangerouslySetInnerHTML={{__html: this.state.list[0].title}}></div>
                                <div className="comment"><span className="ico"></span>댓글 {this.state.list[0].comment_total}개
                                </div>
                            </div>
                            <div className="img">
                                <div><img src={this.state.list[0].image} alt="기사이미지"/></div>
                            </div>
                        </NavLink>
                    </div>
            }
            </Fragment>
        )
    }
}

export default MainTopNews
