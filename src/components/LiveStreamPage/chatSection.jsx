import React from 'react'

const chatSection = () => {
    return (
        <>
            <section>
                <div className="gap no-gap">
                    <div className="container-fluid no-pad">
                        <div className="row no-gutters">
                            <div className="col-lg-2">
                                <div className="side-area">
                                    <ul className="side-links">
                                        <li><a className="active" href="#" title><i className="icofont-video-cam" /> Live Stream</a></li>
                                        <li><a href="#" title><i className="icofont-calendar" /> Manage</a></li>
                                        <li><a href="#" title><i className="icofont-camera-alt" /> Webcam</a></li>
                                        <li><a href="#" title><i className="icofont-gears" /> Settings</a></li>
                                        <li><a href="#" title><i className="icofont-comment" /> Feedback</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="screen-area mt-3 pd-20">
                                    <div id="my_camera" />
                                    <div className="stream-controls">
                                        <ul>
                                            <li><i className="icofont-users-alt-3" /> Participants <span>2</span></li>
                                            <li><i className="icofont-record" /> Mute</li>
                                            <li><i className="icofont-video" /> Stop video</li>
                                            <li><i className="icofont-dotcms" /> Record Video</li>
                                            <li><i className="icofont-comment" /> Chat</li>
                                            <li><i className="icofont-slidshare" /> Share Screen</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="livestream-chat">
                                    <div className="livechat-head">
                                        <h5><i className="icofont-live-support" /> Live Chat</h5>
                                        <div className="more">
                                            <div className="more-post-optns">
                                                <i className>
                                                    <svg className="feather feather-more-horizontal" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><circle r={1} cy={12} cx={12} /><circle r={1} cy={12} cx={19} /><circle r={1} cy={12} cx={5} /></svg></i>
                                                <ul>
                                                    <li>
                                                        <i className="icofont-user-alt-3" /> Participants
                                                        <span>How many user are live with you</span>
                                                    </li>
                                                    <li>
                                                        <i className="icofont-external-link" /> Popout chat
                                                        <span>Open chat in new tab</span>
                                                    </li>
                                                    <li>
                                                        <i className="icofont-ban" /> Hide Chat
                                                        <span>Hide chat from Your side</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-content">
                                        <div className="date">Wednesday 25, March</div>
                                        <ul className="chatting-area max-height">
                                            <li className="you">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg" alt /></figure>
                                                <p>what's liz short for? :)</p>
                                            </li>
                                            <li className="me">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-1.jpg" alt /></figure>
                                                <p>Elizabeth lol</p>
                                            </li>
                                            <li className="me">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-1.jpg" alt /></figure>
                                                <p>wanna know whats my second guess was?</p>
                                            </li>
                                            <li className="you">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg" alt /></figure>
                                                <p>yes</p>
                                            </li>
                                            <li className="me">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-1.jpg" alt /></figure>
                                                <p>Disney's the lizard king</p>
                                            </li>
                                            <li className="me">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-1.jpg" alt /></figure>
                                                <p>i know him 5 years ago</p>
                                            </li>
                                            <li className="you">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg" alt /></figure>
                                                <p>coooooooooool dude ;)</p>
                                            </li>
                                            <li className="you">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg" alt /></figure>
                                                <p><img src="images/smiles/heart.png" alt /></p>
                                            </li>
                                            <li className="you">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg" alt /></figure>
                                                <p><img src="https://wpkixx.com/html/socimo/images/smiles/smiling.png" alt /></p>
                                            </li>
                                            <li className="you">
                                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/userlist-2.jpg" alt /></figure>
                                                <p>hahaahhhahah</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <form method="post" className="text-bottom">
                                        <textarea id="emojionearea2" placeholder="wirte someting" defaultValue={""} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default chatSection