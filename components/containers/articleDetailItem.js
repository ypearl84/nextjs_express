import React from 'react'

function subTitleCheck(subTitle) {
    if(subTitle) {
        return <div id="sub_tit"><p className="sub_1">▶ {subTitle}</p></div>
    }
}

export default ({item}) => (

    <div className="section news_wrap">
        <div className="news_top">
            <div className="news_tit">
                <h2>{item.title}</h2>
                <div className="date">{item.inputDate}</div>
            </div>
            <div className="news_btn">
                <a href="#" className="go_comment"><span className="ico"></span>1,020</a>
                <div>
                    <ul>
                        <li><a href="#" className="btn_listen"><span className="ico"></span>본문듣기</a></li>
                        <li><a href="#" className="btn_view_s"><span>가</span> <span>-</span></a></li>
                        <li><a href="#" className="btn_view_l"><span>가</span> <span>+</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/*
        <div className="news_main_img">
            <div className="img">
                <img src={'http://image.koreatimes.com' + item.thumbnail}  alt="메인이미지" />
            </div>
            <div className="img_txt">{item.title}</div>
        </div> */}

        {subTitleCheck(item.subTitle1)}

        <div className="article">
            <div id="article_txt" className="article_txt" dangerouslySetInnerHTML={{__html: item.contents }}></div>
            <div className="ad_area article_ad">뉴스 중간 광고영역</div>
            <div className="reporter">{item.writer}</div>
        </div>
        <ul className="news_sns">
            <li><a href="#"><img src={require("../../public/share_twitter.png")} alt="Twitter" /></a></li>
            <li><a href="#"><img src={require("../../public/share_facebook.png")} alt="Facebook"/></a></li>
            <li><a href="#"><img src={require("../../public/share_kakao.png")} alt="KakaoTalk"/></a></li>
            <li><a href="#" className="btn_url">URL 복사</a></li>
        </ul>
    </div>

)


