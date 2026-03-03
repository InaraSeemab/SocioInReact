import React from 'react'

const RightSidebar = () => {
    return (
        <>
            <div className="col-lg-4">
                <aside className="sidebar static right">
                    <div className="widget">
                        <h4 className="widget-title">Post Analytics</h4>
                        <ul className="widget-analytics">
                            <li>Reads <span>56</span></li>
                            <li>Recommendations <span>3</span></li>
                            <li>Shares <span>22</span></li>
                            <li>References <span>17</span></li>
                        </ul>
                    </div>
                    <div className="widget">
                        <h4 className="widget-title">Ask Research Question?</h4>
                        <div className="ask-question">
                            <i className="icofont-question-circle" />
                            <h6>Ask questions in Q&amp;A to get help from experts in your field.</h6>
                            <a className="ask-qst" href="#" title>Ask a question</a>
                        </div>
                    </div>
                    <div className="widget">
                        <h4 className="widget-title">Explor Events <a className="see-all" href="#" title>See All</a></h4>
                        <div className="rec-events bg-purple">
                            <i className="icofont-gift" />
                            <h6><a title href>BZ University good night event in columbia</a></h6>
                            <img alt src="https://wpkixx.com/html/socimo/images/clock.png" />
                        </div>
                        <div className="rec-events bg-blue">
                            <i className="icofont-microphone" />
                            <h6><a title href>The 3rd International Conference 2020</a></h6>
                            <img alt src="https://wpkixx.com/html/socimo/images/clock.png" />
                        </div>
                    </div>
                    <div className="widget stick-widget">
                        <h4 className="widget-title">Who's follownig</h4>
                        <ul className="followers">
                            <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar.jpg" /></figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a title href="https://wpkixx.com/html/socimo/time-line.html">Kelly Bill</a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">Follow</a>
                                </div>
                            </li>
                            <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar2.jpg" /></figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a title href="https://wpkixx.com/html/socimo/time-line.html">Issabel</a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">Follow</a>
                                </div>
                            </li>
                            <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar3.jpg" /></figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a title href="https://wpkixx.com/html/socimo/time-line.html">Andrew</a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">Follow</a>
                                </div>
                            </li>
                            <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar4.jpg" /></figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a title href="https://wpkixx.com/html/socimo/time-line.html">Sophia</a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">Follow</a>
                                </div>
                            </li>
                            <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar5.jpg" /></figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a title href="https://wpkixx.com/html/socimo/time-line.html">Allen</a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">Follow</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default RightSidebar