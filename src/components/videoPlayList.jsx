import React from "react";
import { Link } from "react-router-dom";

export default function videoPlayList() {
    return (
        <div className="main-wraper">
            <div className="wraper-title">
                <span>
                    <i className="icofont-video-alt" /> Videos Play
                    List
                </span>
                <Link to="/videos" title>
                    See all Videos
                </Link>
            </div>
            <div className="videos-caro">
                <div className="item-video" data-merge={2}>
                    <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=8iZTb9NWbz8"
                    />
                    <div className="posted-user">
                        <img src="images/resources/user4.jpg" alt />
                        <span>Frank J.</span>
                    </div>
                    <div className="vid-info">
                        <span>1 year ago</span>
                        <span>
                            <i className="icofont-eye-open" /> 3.1k
                        </span>
                    </div>
                </div>
                <div className="item-video" data-merge={2}>
                    <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=8itUNRIWVIs"
                    />
                    <div className="posted-user">
                        <img src="images/resources/user2.jpg" alt />
                        <span>Maria K.</span>
                    </div>
                    <div className="vid-info">
                        <span>2 weeks ago</span>
                        <span>
                            <i className="icofont-eye-open" /> 1.1k
                        </span>
                    </div>
                </div>
                <div className="item-video" data-merge={2}>
                    <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"
                    />
                    <div className="posted-user">
                        <img src="images/resources/user1.jpg" alt />
                        <span>Jack Carter</span>
                    </div>
                    <div className="vid-info">
                        <span>4 weeks ago</span>
                        <span>
                            <i className="icofont-eye-open" /> 20k
                        </span>
                    </div>
                </div>
                <div className="item-video" data-merge={2}>
                    <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=WNeLUngb-Xg"
                    />
                    <div className="posted-user">
                        <img src="images/resources/user3.jpg" alt />
                        <span>Fawad Jan</span>
                    </div>
                    <div className="vid-info">
                        <span>1 Month ago</span>
                        <span>
                            <i className="icofont-eye-open" /> 8k
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}