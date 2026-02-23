import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <aside className="sidebar static left">
            <div className="widget whitish low-opacity">
                <img src="images/time-clock.png" alt />
                <div
                    className="bg-image"
                    style={{
                        backgroundImage:
                            "url(images/resources/time-bg.jpg)",
                    }}
                />
                <div className="date-time">
                    <div className="realtime">
                        <span id="hours">00</span>
                        <span id="point">:</span>
                        <span id="min">00</span>
                    </div>
                    <span id="date" />
                </div>
            </div>
            <div className="widget">
                <h4 className="widget-title">
                    Complete Your Profile
                </h4>
                <span>Your Profile is missing followings!</span>
                <div
                    data-progress="tip"
                    className="progress__outer"
                    data-value="0.67"
                >
                    <div className="progress__inner">82%</div>
                </div>
                <ul className="prof-complete">
                    <li>
                        <i className="icofont-plus-square" />{" "}
                        <Link to="#" title>
                            Upload Your Picture
                        </Link>
                        <em>10%</em>
                    </li>
                    <li>
                        <i className="icofont-plus-square" />{" "}
                        <Link to="#" title>
                            Your University?
                        </Link>
                        <em>20%</em>
                    </li>
                    <li>
                        <i className="icofont-plus-square" />{" "}
                        <Link to="#" title>
                            Add Payment Method
                        </Link>
                        <em>20%</em>
                    </li>
                </ul>
            </div>
            {/* complete profile widget */}
            <div className="advertisment-box">
                <h4 className>
                    <i className="icofont-info-circle" /> advertisment
                </h4>
                <figure>
                    <Link to="#" title="Advertisment">
                        <img
                            src="images/resources/ad-widget2.gif"
                            alt
                        />
                    </Link>
                </figure>
            </div>
            {/* adversment widget */}
            <div className="widget">
                <h4 className="widget-title">
                    <i className="icofont-flame-torch" /> Popular
                    Courses
                </h4>
                <ul className="premium-course">
                    <li>
                        <figure>
                            <img
                                src="images/resources/course-5.jpg"
                                alt
                            />
                            <span className="tag">Free</span>
                        </figure>
                        <div className="vid-course">
                            <h5>
                                <Link to="course-detail.html" title>
                                    Wordpress Online video course
                                </Link>
                            </h5>
                            <ins className="price">$19/M</ins>
                        </div>
                    </li>
                    <li>
                        <figure>
                            <img
                                src="images/resources/course-3.jpg"
                                alt
                            />
                            <span className="tag">Premium</span>
                        </figure>
                        <div className="vid-course">
                            <h5>
                                <Link to="course-detail.html" title>
                                    Node JS Online video course
                                </Link>
                            </h5>
                            <ins className="price">$29/M</ins>
                        </div>
                    </li>
                </ul>
            </div>
            {/* popular courses */}
            <div className="widget">
                <h4 className="widget-title">
                    Recent Blogs{" "}
                    <a className="see-all" href="#" title>
                        See All
                    </a>
                </h4>
                <ul className="recent-links">
                    <li>
                        <figure>
                            <img
                                alt
                                src="images/resources/recentlink-1.jpg"
                            />
                        </figure>
                        <div className="re-links-meta">
                            <h6>
                                <Link title to="#">
                                    Moira's fade reach much farther...
                                </Link>
                            </h6>
                            <span>2 weeks ago </span>
                        </div>
                    </li>
                    <li>
                        <figure>
                            <img
                                alt
                                src="images/resources/recentlink-2.jpg"
                            />
                        </figure>
                        <div className="re-links-meta">
                            <h6>
                                <Link title to="#">
                                    Daniel asks The voice of doomfist...
                                </Link>
                            </h6>
                            <span>3 months ago </span>
                        </div>
                    </li>
                    <li>
                        <figure>
                            <img
                                alt
                                src="images/resources/recentlink-3.jpg"
                            />
                        </figure>
                        <div className="re-links-meta">
                            <h6>
                                <Link title to="#">
                                    The socimo over watch scandals.
                                </Link>
                            </h6>
                            <span>1 day before</span>
                        </div>
                    </li>
                </ul>
            </div>
            {/* recent blog */}
            <div className="widget">
                <h4 className="widget-title">
                    Your profile has a new Experience section
                </h4>
                <p>
                    Showcase your professional experience and
                    education to help potential employers and
                    collaborators find and contact you about career
                    opportunities.
                </p>
                <Link
                    className="main-btn"
                    to="/profile"
                    title
                    data-ripple
                >
                    view profile
                </Link>
            </div>
            {/* your profile */}
            <div className="widget web-links stick-widget">
                <h4 className="widget-title">
                    Useful Links{" "}
                    <Link title to="#" className="see-all">
                        See All
                    </Link>
                </h4>
                <ul>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            about
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            career
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            advertise
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            socimo Apps
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            socimo Blog
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            Help
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            socimo Gifts
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            content policy
                        </Link>
                    </li>
                    <li>
                        <i className="icofont-dotted-right" />{" "}
                        <Link title to="#">
                            User Policy
                        </Link>
                    </li>
                </ul>
                <p>© Socimo 2020. All Rights Reserved.</p>
            </div>
            {/* links */}
        </aside>
    );
}
