import React from 'react'

const rightAside = () => {
    return (
        <>
            <div className="col-lg-3">
                <aside className="sidebar static right">
                    <div className="widget">
                        <h4 className="widget-title">Your Groups</h4>
                        <ul className="ak-groups">
                            <li>
                                <figure>
                                    <img
                                        src="images/resources/your-group1.jpg"
                                        alt
                                    />
                                </figure>
                                <div className="your-grp">
                                    <h5>
                                        <a href="group-detail.html" title>
                                            Good Group
                                        </a>
                                    </h5>
                                    <a href="#" title>
                                        <i className="icofont-bell-alt" />
                                        Notifilactions <span>13</span>
                                    </a>
                                    <a
                                        href="https://wpkixx.com/html/socimo/group-feed.html"
                                        title
                                        className="promote"
                                    >
                                        view feed
                                    </a>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="https://wpkixx.com/html/socimo/images/resources/your-group2.jpg"
                                        alt
                                    />
                                </figure>
                                <div className="your-grp">
                                    <h5>
                                        <a href="group-detail.html" title>
                                            E-course Group
                                        </a>
                                    </h5>
                                    <a href="#" title>
                                        <i className="icofont-bell-alt" />
                                        Notifilactions <span>13</span>
                                    </a>
                                    <a
                                        href="https://wpkixx.com/html/socimo/group-feed.html"
                                        title
                                        className="promote"
                                    >
                                        view feed
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Your groups */}
                    <div className="widget">
                        <h4 className="widget-title">Suggested Group</h4>
                        <div className="sug-caro">
                            <div className="friend-box">
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/sidebar-info.jpg"
                                    />
                                    <span>Members: 505K</span>
                                </figure>
                                <div className="frnd-meta">
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/frnd-figure2.jpg"
                                    />
                                    <div className="frnd-name">
                                        <a title href="#">
                                            Social Research
                                        </a>
                                        <span>@biolabest</span>
                                    </div>
                                    <a className="main-btn2" href="#" title>
                                        Join Community
                                    </a>
                                </div>
                            </div>
                            <div className="friend-box">
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/sidebar-info2.jpg"
                                    />
                                    <span>Members: 505K</span>
                                </figure>
                                <div className="frnd-meta">
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/frnd-figure3.jpg"
                                    />
                                    <div className="frnd-name">
                                        <a title href="#">
                                            Bio Labest Group
                                        </a>
                                        <span>@biolabest</span>
                                    </div>
                                    <a className="main-btn2" href="#" title>
                                        Join Community
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* suggested group */}
                    <div className="widget">
                        <h4 className="widget-title">
                            Ask Research Question?
                        </h4>
                        <div className="ask-question">
                            <i className="icofont-question-circle" />
                            <h6>
                                Ask questions in Q&amp;A to get help from
                                experts in your field.
                            </h6>
                            <a className="ask-qst" href="#" title>
                                Ask a question
                            </a>
                        </div>
                    </div>
                    {/* ask question widget */}
                    <div className="widget">
                        <h4 className="widget-title">
                            Explor Events{" "}
                            <a className="see-all" href="#" title>
                                See All
                            </a>
                        </h4>
                        <div className="rec-events bg-purple">
                            <i className="icofont-gift" />
                            <h6>
                                <a title href>
                                    BZ University good night event in columbia
                                </a>
                            </h6>
                            <img
                                alt
                                src="https://wpkixx.com/html/socimo/images/clock.png"
                            />
                        </div>
                        <div className="rec-events bg-blue">
                            <i className="icofont-microphone" />
                            <h6>
                                <a title href>
                                    The 3rd International Conference 2020
                                </a>
                            </h6>
                            <img
                                alt
                                src="https://wpkixx.com/html/socimo/images/clock.png"
                            />
                        </div>
                    </div>
                    {/* event widget */}
                    <div className="widget">
                        <span>
                            <i className="icofont-globe" /> Sponsored
                        </span>
                        <ul className="sponsors-ad">
                            <li>
                                <figure>
                                    <img
                                        src="https://wpkixx.com/html/socimo/images/resources/sponsor.jpg"
                                        alt
                                    />
                                </figure>
                                <div className="sponsor-meta">
                                    <h5>
                                        <a href="#" title>
                                            IQ Options Broker
                                        </a>
                                    </h5>
                                    <a href="#" title target="_blank">
                                        www.iqvie.com
                                    </a>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        src="https://wpkixx.com/html/socimo/images/resources/sponsor2.jpg"
                                        alt
                                    />
                                </figure>
                                <div className="sponsor-meta">
                                    <h5>
                                        <a href="#" title>
                                            BM Fashion Designer
                                        </a>
                                    </h5>
                                    <a href="#" title target="_blank">
                                        www.abcd.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* sponsord */}
                    <div className="widget stick-widget">
                        <h4 className="widget-title">Who's follownig</h4>
                        <ul className="followers">
                            <li>
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/friend-avatar.jpg"
                                    />
                                </figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a
                                            title
                                            href="https://wpkixx.com/html/socimo/time-line.html"
                                        >
                                            Kelly Bill
                                        </a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">
                                        Follow
                                    </a>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/friend-avatar2.jpg"
                                    />
                                </figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a
                                            title
                                            href="https://wpkixx.com/html/socimo/time-line.html"
                                        >
                                            Issabel
                                        </a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">
                                        Follow
                                    </a>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/friend-avatar3.jpg"
                                    />
                                </figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a
                                            title
                                            href="https://wpkixx.com/html/socimo/time-line.html"
                                        >
                                            Andrew
                                        </a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">
                                        Follow
                                    </a>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/friend-avatar4.jpg"
                                    />
                                </figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a
                                            title
                                            href="https://wpkixx.com/html/socimo/time-line.html"
                                        >
                                            Sophia
                                        </a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">
                                        Follow
                                    </a>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img
                                        alt
                                        src="https://wpkixx.com/html/socimo/images/resources/friend-avatar5.jpg"
                                    />
                                </figure>
                                <div className="friend-meta">
                                    <h4>
                                        <a
                                            title
                                            href="https://wpkixx.com/html/socimo/time-line.html"
                                        >
                                            Allen
                                        </a>
                                        <span>Dept colleague</span>
                                    </h4>
                                    <a className="underline" title href="#">
                                        Follow
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* whos following */}
                </aside>
            </div>
        </>
    )
}

export default rightAside