import React, {Component, Fragment} from 'react'
import { default as ListItem } from '../../containers/commentItem'
import Axios from "axios"


class CommentArea extends Component {

    constructor(props) {
        super(props)
        this.state = { articleId : props.articleId, list : [], loadedCommentLength: 5 }
        this.getData.bind(this)
        this.clickMoreComment.bind(this)
    }

    getData = async() => {

        try {

            const url = `https://epaperapi.koreatimes.com/koreatimes/article/comment_list?articleId=${this.state.articleId}`

            await Axios.get(url, {headers: {'Client-key': '9a9e059068347c04bbb40455b3e5c03b05a8484bfb3c645fb3974db45a3e4d6478c2f46a554c013353f900c754eed9e0991ad5e5248a6b797d134a82f5d671ceEr2pvrMg94YhQz3IRVUatdD1txT5WV6Ik7MMuY1UoZtQchUeQ1xp2e8E5bc/i3ayoP1o9gXsqKUrK4wFXzLRhHuEFRS0KYznrI4yhO93meOuA7IQSfbBv9tAPJho2A0G'}}).then(data => {
                this.setState({ list : data.data.result })
            });

        } catch (e) {
            console.log(e)
        }

    }

    clickMoreComment = () => {
        this.setState((prevState) => {
            return {
                loadedCommentLength : prevState.loadedCommentLength + 5
            }
        })
    }

    componentDidMount() {
        // 첫 로딩시에 getData 호출
        this.getData()
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if(prevState.articleId===nextProps.articleId) return false

        return { articleId : nextProps.articleId }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.articleId !== this.state.articleId) {

            this.getData()
        }
    }

    render () {
        return (
            <Fragment>
                <div className="section total_comment">
                    <strong className="total">댓글 {this.state.list.length}</strong>
                    <a href="my_comment.html" className="go_my_comment">내 댓글
                        <span className="ico"></span>
                    </a>
                </div>
                <div className="section comment_list">
                    <div className="input">
                        <input type="text" placeholder="댓글을 입력해주세요"/>
                        <input type="button" value="등록"/>
                    </div>
                    { this.state.list.length > 0 &&
                        <Fragment>
                            <ul className="list">
                                {
                                    this.state.list.slice(0,this.state.loadedCommentLength).map(function(row) {
                                        return <ListItem key={row.articleId} item={row}  />
                                    })
                                }
                            </ul>
                            {
                                this.state.list.length > this.state.loadedCommentLength && <a className="btn_list_more" onClick={this.clickMoreComment}>더보기 <span className="ico"></span></a>
                            }

                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

export default CommentArea
