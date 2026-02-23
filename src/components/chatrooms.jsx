import React from "react";
import { Link } from "react-router-dom";

export default function chatrooms() {
    return (
        <div className="main-wraper">
            <div className="chatroom-title">
                <i>
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
                        className="feather feather-tv"
                    >
                        <rect
                            x={2}
                            y={7}
                            width={20}
                            height={15}
                            rx={2}
                            ry={2}
                        />
                        <polyline points="17 2 12 7 7 2" />
                    </svg>
                </i>
                <span>
                    Chat Rooms <em>Video chat with friends</em>
                </span>
                <Link className="create-newroom" to="#" title>
                    Create Room
                </Link>
            </div>
            <ul className="chat-rooms">
                <li>
                    <div className="room-avatar">
                        <img src="images/resources/user2.jpg" alt />
                        <span className="status online" />
                    </div>
                    <span>Sara's Room</span>
                    <Link className="join" to="#" title="Join Room">
                        Join
                    </Link>
                    <Link
                        className="say-hi send-mesg"
                        to="#"
                        title="Send Message"
                    >
                        <i className="icofont-facebook-messenger" />
                    </Link>
                </li>
                <li>
                    <div className="room-avatar">
                        <img src="images/resources/user3.jpg" alt />
                        <span className="status offline" />
                    </div>
                    <span>jawad's Room</span>
                    <Link className="join" to="#" title="Join Room">
                        Join
                    </Link>
                    <Link
                        className="say-hi send-mesg"
                        to="#"
                        title="Send Message"
                    >
                        <i className="icofont-facebook-messenger" />
                    </Link>
                </li>
                <li>
                    <div className="room-avatar">
                        <img src="images/resources/user4.jpg" alt />
                        <span className="status away" />
                    </div>
                    <span>Jack's Room</span>
                    <Link className="join" to="#" title="Join Room">
                        Join
                    </Link>
                    <Link
                        className="say-hi send-mesg"
                        to="#"
                        title="Send Message"
                    >
                        <i className="icofont-facebook-messenger" />
                    </Link>
                </li>
                <li>
                    <div className="room-avatar">
                        <img src="images/resources/user5.jpg" alt />
                        <span className="status online" />
                    </div>
                    <span>jobidn's Room</span>
                    <Link className="join" to="#" title="Join Room">
                        Join
                    </Link>
                    <Link
                        className="say-hi send-mesg"
                        to="#"
                        title="Send Message"
                    >
                        <i className="icofont-facebook-messenger" />
                    </Link>
                </li>
                <li>
                    <div className="room-avatar">
                        <img src="images/resources/user6.jpg" alt />
                        <span className="status offline" />
                    </div>
                    <span>Emily's Room</span>
                    <Link className="join" to="#" title="Join Room">
                        Join
                    </Link>
                    <Link
                        className="say-hi send-mesg"
                        to="#"
                        title="Send Message"
                    >
                        <i className="icofont-facebook-messenger" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
