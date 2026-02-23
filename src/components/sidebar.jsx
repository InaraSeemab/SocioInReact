import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <ul className="menu-slide">
                <li className="active menu-item-has-children">
                    <Link to="/" className title>
                        <i>
                            <svg
                                id="icon-home"
                                className="feather feather-home"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                height={14}
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </i>{" "}
                        Home
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/" title>
                                Newsfeed
                            </Link>
                        </li>
                        <li>
                            <Link to="/company-home" title>
                                Company Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile-page2" title>
                                User Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" title>
                                Student User Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/groups" title>
                                Groups
                            </Link>
                        </li>
                        <li>
                            <Link to="/group-detail" title>
                                Group Detail
                            </Link>
                        </li>
                        <li>
                            <Link to="/post-detail" title>
                                Social Post Detail
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages" title>
                                Chat/Messages
                            </Link>
                        </li>
                        <li>
                            <Link to="/notifications" title>
                                Notificatioins
                            </Link>
                        </li>
                        <li>
                            <Link to="/search-result" title>
                                Search Result
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="/" className title>
                        <i className>
                            <svg
                                id="ab7"
                                className="feather feather-zap"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                height={14}
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </i>{" "}
                        Features
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/videos" title>
                                Videos
                            </Link>
                        </li>
                        <li>
                            <Link to="/live-stream" title>
                                Live Stream
                            </Link>
                        </li>
                        <li>
                            <Link to="/event-page" title>
                                Events Page
                            </Link>
                        </li>
                        <li>
                            <Link to="/event-detail" title>
                                Event Detail
                            </Link>
                        </li>
                        <li>
                            <Link to="/Q-A" title>
                                QA
                            </Link>
                        </li>
                        <li>
                            <Link to="/Q-detail" title>
                                QA Detail
                            </Link>
                        </li>
                        <li>
                            <Link to="/help-faq" title>
                                Support Help
                            </Link>
                        </li>
                        <li>
                            <Link to="/help-faq-detail" title>
                                Support Detail
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#" className title>
                        <i className>
                            <svg
                                id="ab5"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-shopping-bag"
                            >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1={3} y1={6} x2={21} y2={6} />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                        </i>{" "}
                        Market Place
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/books" title>
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link to="/book-detail" title>
                                Books Detail
                            </Link>
                        </li>
                        <li>
                            <Link to="/courses" title>
                                Course
                            </Link>
                        </li>
                        <li>
                            <Link to="/course-detail" title>
                                course Detail
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-new-course" title>
                                Add New Course
                            </Link>
                        </li>
                        <li>
                            <Link to="/product-cart" title>
                                Cart Page
                            </Link>
                        </li>
                        <li>
                            <Link to="/product-checkout" title>
                                Checkout
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-credits" title>
                                Add Credit
                            </Link>
                        </li>
                        <li>
                            <Link to="/pay-out" title>
                                Payouts
                            </Link>
                        </li>
                        <li>
                            <Link to="/price-plan" title>
                                Pricing Plans
                            </Link>
                        </li>
                        <li>
                            <Link to="/invoice" title>
                                Invoice
                            </Link>
                        </li>
                        <li>
                            <Link to="/thank-you" title>
                                Thank you Page
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#" className title>
                        <i className>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-coffee"
                            >
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1={6} y1={1} x2={6} y2={4} />
                                <line x1={10} y1={1} x2={10} y2={4} />
                                <line x1={14} y1={1} x2={14} y2={4} />
                            </svg>
                        </i>{" "}
                        Blogs
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/blog" title>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog-detail" title>
                                Blog Detail
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#" className title>
                        <i>
                            <svg
                                id="ab8"
                                className="feather feather-file"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                height={14}
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                <polyline points="13 2 13 9 20 9" />
                            </svg>
                        </i>{" "}
                        Featured Pages
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/404" title>
                                Error 404
                            </Link>
                        </li>
                        <li>
                            <Link to="/coming-soon" title>
                                Coming Soon
                            </Link>
                        </li>
                        <li>
                            <Link to="/send-feedback" title>
                                Send Feedback
                            </Link>
                        </li>
                        <li>
                            <Link to="/badges" title>
                                Badges
                            </Link>
                        </li>
                        <li>
                            <Link to="/thank-you" title>
                                Thank You
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#" className title>
                        <i className>
                            <svg
                                id="ab9"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-lock"
                            >
                                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </i>{" "}
                        Authentications
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/sign-in" title>
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" title>
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/forgot-password" title>
                                Forgot Password
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className>
                    <Link to="/about-university" title>
                        <i>
                            <svg
                                id="ab1"
                                className="feather feather-users"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                height={14}
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle r={4} cy={7} cx={9} />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </i>{" "}
                        University Profile
                    </Link>
                </li>
                <li className>
                    <Link to="/messages" title>
                        <i className>
                            <svg
                                className="feather feather-message-square"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                height={14}
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                                id="ab2"
                            >
                                <path
                                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                    style={{
                                        strokeDasharray: "68, 88",
                                        strokeDashoffset: 0,
                                    }}
                                />
                            </svg>
                        </i>{" "}
                        Live Chat
                    </Link>
                </li>
                <li className>
                    <Link to="/privacy-n-policy" title>
                        <i className>
                            <svg
                                id="ab4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-airplay"
                            >
                                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                                <polygon points="12 15 17 21 7 21 12 15" />
                            </svg>
                        </i>{" "}
                        Privacy Polices
                    </Link>
                </li>
                <li className>
                    <Link to="/settings" title>
                        <i className>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={14}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-settings"
                            >
                                <circle cx={12} cy={12} r={3} />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                        </i>{" "}
                        Web Settings
                    </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#" className title>
                        <i className>
                            <svg
                                id="team"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-smile"
                            >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                <line x1={9} y1={9} x2="9.01" y2={9} />
                                <line x1={15} y1={9} x2="15.01" y2={9} />
                            </svg>
                        </i>{" "}
                        Development Tools
                    </Link>
                    <ul className="submenu">
                        <li>
                            <Link to="/widgets" title>
                                Widgets Collection
                            </Link>
                        </li>
                        <li>
                            <Link to="/development-component" title>
                                Web Component
                            </Link>
                        </li>
                        <li>
                            <Link to="/development-elements" title>
                                Web Elements
                            </Link>
                        </li>
                        <li>
                            <Link to="/loader-spiners" title>
                                Loader Spiners
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}