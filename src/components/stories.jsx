import React from "react";
import { Link } from "react-router-dom";

export default function stories() {
    return (
        <div className="story-card">
            <div className="story-title">
                <h5>Recent Stories</h5>
                <Link to="#" title>
                    See all
                </Link>
            </div>
            <div className="story-wraper ">
                <img src="images/resources/story-card5.jpg" alt />
                <div className="users-dp">
                    <img src="images/resources/user3.jpg" alt />
                </div>
                <Link className="add-new-stry" to="#" title>
                    <i className="icofont-plus" />
                </Link>
                <span>Add Your Story</span>
            </div>
            <div className="story-wraper">
                <img src="images/resources/story-card.jpg" alt />
                <div className="users-dp">
                    <img src="images/resources/user6.jpg" alt />
                </div>
                <span>Tamana Bhatia</span>
            </div>
            <div className="story-wraper">
                <img src="images/resources/story-card2.jpg" alt />
                <div className="users-dp">
                    <img src="images/resources/user7.jpg" alt />
                </div>
                <span>Emily Caros</span>
            </div>
            <div className="story-wraper">
                <img src="images/resources/story-card3.jpg" alt />
                <div className="users-dp">
                    <img src="images/resources/user8.jpg" alt />
                </div>
                <span>Daniel Cardos</span>
            </div>
            <div className="story-wraper">
                <img src="images/resources/story-card4.jpg" alt />
                <div className="users-dp">
                    <img src="images/resources/user4.jpg" alt />
                </div>
                <span>Emma Watson</span>
            </div>
        </div>
    );
}