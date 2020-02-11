import React, { Component } from 'react'
import { Router } from '../../routes'


class Footer extends Component {

    buttonClick () {
        // With route name and params
        //Router.pushRoute('home', {slug: 'hello-world'})
        // With route URL
        //Router.pushRoute('/home/hello-world')

            window.scrollTo(0,0)

        }


    render () {
        return (
            <div id="footer">
                <div className="btn_top_wrap">
                    <a className="btn_top" onClick={this.buttonClick}><img src={require("../../public/bt_top.png")} alt="맨위로" /></a>

                    <span>맨위로</span>
                </div>
                <div className="copy">
                    <a className="btn_go_pc">PC버전</a>
                    <div className="txt">
                        3731 Wilshire Blvd., 10th Floor, Los Angeles CA 90010<br/>
                        Tel.(323)<strong>692-2000</strong> <br/>
                        Copyright©The Korea Times All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
}

export default  (Footer)
