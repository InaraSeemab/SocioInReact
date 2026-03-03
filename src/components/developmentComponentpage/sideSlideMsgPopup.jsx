import React from 'react'

const sideSlideMsgPopup = () => {
    return (
        <>
            <div className="side-slide"> <span className="popup-closed"><i className="icofont-close" /></span>
                <div className="slide-meta">
                    <ul className="nav nav-tabs slide-btns">
                        <li className="nav-item"><Link className="active" to="#messages" data-toggle="tab">Messages</Link></li>
                        <li className="nav-item"><Link className href="#notifications" data-toggle="tab">Notifications</Link></li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div className="tab-pane active fade show" id="messages">
                            <h4><i className="icofont-envelope" /> messages</h4>
                            <Link to="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></Link>
                            <ul className="new-messages">
                                <li>
                                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Ibrahim Ahmed</span> <Link to="#" title>Helo dear i wanna talk to you</Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Fatima J.</span> <Link to="#" title>Helo dear i wanna talk to you</Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Fawad Ahmed</span> <Link to="#" title>Helo dear i wanna talk to you</Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Saim Turan</span> <Link to="#" title>Helo dear i wanna talk to you</Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Alis wells</span> <Link to="#" title>Helo dear i wanna talk to you</Link> </div>
                                </li>
                            </ul>
                            <Link to="#" title className="main-btn" data-ripple>view all</Link> </div>
                        <div className="tab-pane fade" id="notifications">
                            <h4><i className="icofont-bell-alt" /> notifications</h4>
                            <ul className="notificationz">
                                <li>
                                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Alis wells</span> <Link to="#" title>recommend your post</Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Alis wells</span> <Link to="#" title>share your post <strong>a good time today!</strong></Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Alis wells</span> <Link to="#" title>recommend your post</Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Alis wells</span> <Link to="#" title>share your post <strong>a good time today!</strong></Link> </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                                    <div className="mesg-info"> <span>Alis wells</span> <Link to="#" title>recommend your post</Link> </div>
                                </li>
                            </ul>
                            <Link to="#" title className="main-btn" data-ripple>view all</Link> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sideSlideMsgPopup