import React from "react";
import { Link } from "react-router-dom";

export default function suggestedPeople() {
    return (
        <div className="main-wraper">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <i className="icofont-learn" />
                    </figure>
                    <div className="friend-name">
                        <ins>
                            <Link
                                title
                                to="https://wpkixx.com/html/socimo/time-line.html"
                            >
                                Suggested
                            </Link>
                        </ins>
                        <span>
                            <i className="icofont-runner-alt-1" /> Follow
                            similar People
                        </span>
                    </div>
                    <ul className="suggested-caro">
                        <li>
                            <figure>
                                <img
                                    src="images/resources/speak-1.jpg"
                                    alt
                                />
                            </figure>
                            <span>Amy Watson</span>
                            <ins>Department of Socilolgy</ins>
                            <Link to="#" title data-ripple>
                                <i className="icofont-star" /> Follow
                            </Link>
                        </li>
                        <li>
                            <figure>
                                <img
                                    src="images/resources/speak-2.jpg"
                                    alt
                                />
                            </figure>
                            <span>Muhammad Khan</span>
                            <ins>Department of Socilolgy</ins>
                            <Link to="#" title data-ripple>
                                <i className="icofont-star" /> Follow
                            </Link>
                        </li>
                        <li>
                            <figure>
                                <img
                                    src="images/resources/speak-3.jpg"
                                    alt
                                />
                            </figure>
                            <span>Sadia Gill</span>
                            <ins>Department of Socilolgy</ins>
                            <Link to="#" title data-ripple>
                                <i className="icofont-star" /> Follow
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
