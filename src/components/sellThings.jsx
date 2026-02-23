import React from "react";
import { Link } from "react-router-dom";

export default function sellThings() {
    return (
        <div className="main-wraper">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <em>
                            <svg
                                style={{ verticalAlign: "middle" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#82828e"
                                    stroke="#82828e"
                                    d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                                />
                            </svg>
                        </em>
                        <img alt src="images/resources/user2.jpg" />
                    </figure>
                    <div className="friend-name">
                        <div className="more">
                            <div className="more-post-optns">
                                <i className>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-more-horizontal"
                                    >
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={19} cy={12} r={1} />
                                        <circle cx={5} cy={12} r={1} />
                                    </svg>
                                </i>
                                <ul>
                                    <li>
                                        <i className="icofont-pen-alt-1" />
                                        Edit Post
                                        <span>
                                            Edit This Post within a Hour
                                        </span>
                                    </li>
                                    <li>
                                        <i className="icofont-ban" />
                                        Hide Post
                                        <span>Hide This Post</span>
                                    </li>
                                    <li>
                                        <i className="icofont-ui-delete" />
                                        Delete Post
                                        <span>
                                            If inappropriate Post By Mistake
                                        </span>
                                    </li>
                                    <li>
                                        <i className="icofont-flag" />
                                        Report
                                        <span>Inappropriate content</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ins>
                            <a
                                title
                                href="https://wpkixx.com/html/socimo/time-line.html"
                            >
                                Maria k.
                            </a>{" "}
                            Premium Product
                        </ins>
                        <span>
                            <i className="icofont-globe" /> published:
                            Sep,15 2020
                        </span>
                    </div>
                    <div className="post-meta">
                        <figure className="premium-post">
                            <img src="images/resources/book5.jpg" alt />
                        </figure>
                        <div className="premium">
                            <a
                                href="book-detail.html"
                                className="post-title"
                            >
                                Technicial words 2020 Book world
                            </a>
                            <p>
                                Nam eget dui. Etiam rhoncus. Maecenas
                                tempus, tellus eget condimentum rhoncus, sem
                                quam semper libero.
                            </p>
                            <a
                                className="main-btn purchase-btn"
                                title
                                href="book-detail.html"
                            >
                                <i className="icofont-cart-alt" /> Buy Now
                            </a>
                        </div>
                        <div className="we-video-info">
                            <ul>
                                <li>
                                    <span title="views" className="views">
                                        <i>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-eye"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                        </i>
                                        <ins>1.2k</ins>
                                    </span>
                                </li>
                                <li>
                                    <span
                                        title="Comments"
                                        className="Recommend"
                                    >
                                        <i>
                                            <svg
                                                className="feather feather-message-square"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                height={16}
                                                width={16}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                        </i>
                                        <ins>54</ins>
                                    </span>
                                </li>
                                <li>
                                    <span title="follow" className="Follow">
                                        <i>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-star"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </i>
                                        <ins>5k</ins>
                                    </span>
                                </li>
                                <li>
                                    <span className="share-pst" title="Share">
                                        <i>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-share-2"
                                            >
                                                <circle cx={18} cy={5} r={3} />
                                                <circle cx={6} cy={12} r={3} />
                                                <circle cx={18} cy={19} r={3} />
                                                <line
                                                    x1="8.59"
                                                    y1="13.51"
                                                    x2="15.42"
                                                    y2="17.49"
                                                />
                                                <line
                                                    x1="15.41"
                                                    y1="6.51"
                                                    x2="8.59"
                                                    y2="10.49"
                                                />
                                            </svg>
                                        </i>
                                        <ins>205</ins>
                                    </span>
                                </li>
                            </ul>
                            <a
                                href="post-detail.html"
                                title
                                className="reply"
                            >
                                Reply <i className="icofont-reply" />
                            </a>
                        </div>
                        <div className="stat-tools">
                            <div className="box">
                                <div className="Like">
                                    <Link className="Like__link">
                                        <i className="icofont-like" /> Like
                                    </Link>
                                    <div className="Emojis">
                                        <div className="Emoji Emoji--like">
                                            <div className="icon icon--like" />
                                        </div>
                                        <div className="Emoji Emoji--love">
                                            <div className="icon icon--heart" />
                                        </div>
                                        <div className="Emoji Emoji--haha">
                                            <div className="icon icon--haha" />
                                        </div>
                                        <div className="Emoji Emoji--wow">
                                            <div className="icon icon--wow" />
                                        </div>
                                        <div className="Emoji Emoji--sad">
                                            <div className="icon icon--sad" />
                                        </div>
                                        <div className="Emoji Emoji--angry">
                                            <div className="icon icon--angry" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                        <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                        <div className="icon icon--heart" />
                                    </div>
                                    <div className="Emoji Emoji--haha">
                                        <div className="icon icon--haha" />
                                    </div>
                                    <div className="Emoji Emoji--wow">
                                        <div className="icon icon--wow" />
                                    </div>
                                    <div className="Emoji Emoji--sad">
                                        <div className="icon icon--sad" />
                                    </div>
                                    <div className="Emoji Emoji--angry">
                                        <div className="icon icon--angry" />
                                    </div>
                                </div>
                            </div>
                            <Link title href="#" className="comment-to">
                                <i className="icofont-comment" /> Comment
                            </Link>
                            <Link title href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                            </Link>
                            <div className="emoji-state">
                                <div className="popover_wrapper">
                                    <a
                                        className="popover_title"
                                        href="#"
                                        title
                                    >
                                        <img
                                            alt
                                            src="images/smiles/thumb.png"
                                        />
                                    </a>
                                    <div className="popover_content">
                                        <span>
                                            <img
                                                alt
                                                src="images/smiles/thumb.png"
                                            />{" "}
                                            Likes
                                        </span>
                                        <ul className="namelist">
                                            <li>Jhon Doe</li>
                                            <li>Amara Sin</li>
                                            <li>Sarah K.</li>
                                            <li>
                                                <span>20+ more</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popover_wrapper">
                                    <a
                                        className="popover_title"
                                        href="#"
                                        title
                                    >
                                        <img
                                            alt
                                            src="images/smiles/heart.png"
                                        />
                                    </a>
                                    <div className="popover_content">
                                        <span>
                                            <img
                                                alt
                                                src="images/smiles/heart.png"
                                            />{" "}
                                            Love
                                        </span>
                                        <ul className="namelist">
                                            <li>Amara Sin</li>
                                            <li>Jhon Doe</li>
                                            <li>
                                                <span>10+ more</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popover_wrapper">
                                    <a
                                        className="popover_title"
                                        href="#"
                                        title
                                    >
                                        <img
                                            alt
                                            src="images/smiles/smile.png"
                                        />
                                    </a>
                                    <div className="popover_content">
                                        <span>
                                            <img
                                                alt
                                                src="images/smiles/smile.png"
                                            />{" "}
                                            Happy
                                        </span>
                                        <ul className="namelist">
                                            <li>Sarah K.</li>
                                            <li>Jhon Doe</li>
                                            <li>Amara Sin</li>
                                            <li>
                                                <span>100+ more</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popover_wrapper">
                                    <a
                                        className="popover_title"
                                        href="#"
                                        title
                                    >
                                        <img alt src="images/smiles/weep.png" />
                                    </a>
                                    <div className="popover_content">
                                        <span>
                                            <img
                                                alt
                                                src="images/smiles/weep.png"
                                            />{" "}
                                            Dislike
                                        </span>
                                        <ul className="namelist">
                                            <li>Danial Carbal</li>
                                            <li>Amara Sin</li>
                                            <li>Sarah K.</li>
                                            <li>
                                                <span>15+ more</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>10+</p>
                            </div>
                            <div
                                className="new-comment"
                                style={{ display: "block" }}
                            >
                                <form method="post">
                                    <input
                                        type="text"
                                        placeholder="write comment"
                                    />
                                    <button type="submit">
                                        <i className="icofont-paper-plane" />
                                    </button>
                                </form>
                                <div className="comments-area">
                                    <ul>
                                        <li>
                                            <figure>
                                                <img
                                                    alt
                                                    src="images/resources/user1.jpg"
                                                />
                                            </figure>
                                            <div className="commenter">
                                                <h5>
                                                    <Link title href="#">
                                                        Jack Carter
                                                    </Link>
                                                </h5>
                                                <span>2 hours ago</span>
                                                <p>
                                                    i think that some how, we learn
                                                    who we really are and then live
                                                    with that decision, great post!
                                                </p>
                                                <span>
                                                    you can view the more detail via
                                                    link
                                                </span>
                                                <Link title href="#">
                                                    https://www.youtube.com/watch?v=HpZgwHU1GcI
                                                </Link>
                                            </div>
                                            <Link title="Like" href="#">
                                                <i className="icofont-heart" />
                                            </Link>
                                            <Link
                                                title="Reply"
                                                href="#"
                                                className="reply-coment"
                                            >
                                                <i className="icofont-reply" />
                                            </Link>
                                        </li>
                                        <li>
                                            <figure>
                                                <img
                                                    alt
                                                    src="images/resources/user2.jpg"
                                                />
                                            </figure>
                                            <div className="commenter">
                                                <h5>
                                                    <Link title href="#">
                                                        Ching xang
                                                    </Link>
                                                </h5>
                                                <span>2 hours ago</span>
                                                <p>
                                                    i think that some how, we learn
                                                    who we really are and then live
                                                    with that decision, great post!
                                                </p>
                                            </div>
                                            <Link title="Like" href="#">
                                                <i className="icofont-heart" />
                                            </Link>
                                            <Link
                                                title="Reply"
                                                href="#"
                                                className="reply-coment"
                                            >
                                                <i className="icofont-reply" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}