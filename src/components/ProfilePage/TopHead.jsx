import React from 'react'

const TopHead = () => {
    return (
        <>
            <div className="gap no-gap">
                <div className="top-area mate-black low-opacity">
                    <div className="bg-image" style={{ backgroundImage: 'url(https://wpkixx.com/html/socimo/images/resources/top-bg.jpg)' }} />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="post-subject">
                                    <div className="university-tag">
                                        <figure><img src="images/resources/user.jpg" alt /></figure>
                                        <div className="uni-name">
                                            <h4>Georg Peeter </h4>
                                            <span>@Georgofficial</span>
                                        </div>
                                        <ul className="sharing-options">
                                            <li><a title="Invite Colleagues" href="#" data-toggle="tooltip"><i className="icofont-id-card" /></a> </li>
                                            <li><a title="Follow" href="#" data-toggle="tooltip"><i className="icofont-star" /></a> </li>
                                            <li><a title="Share" href="#" data-toggle="tooltip"><i className="icofont-share-alt" /></a> </li>
                                        </ul>
                                        <a data-ripple title href="#" className="invite">Invite Colleagues</a>
                                    </div>
                                    <ul className="nav nav-tabs post-detail-btn">
                                        <li className="nav-item"><a className="active" href="#timeline" data-toggle="tab">Timeline</a></li>
                                        <li className="nav-item"><a className href="#followers" data-toggle="tab">Followers</a><span>23</span></li>
                                        <li className="nav-item"><a className href="#follow" data-toggle="tab">Follow</a><span>100</span></li>
                                        <li className="nav-item"><a className href="#about" data-toggle="tab">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* top Head */}
        </>
    )
}

export default TopHead