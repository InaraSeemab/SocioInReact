import React from 'react'

const chatButton = () => {
    return (
        <>
            <div className="chat-live">
                <a
                    className="chat-btn"
                    href="#"
                    title="Start Live Chat"
                    data-toggle="tooltip"
                >
                    <i className="icofont-facebook-messenger" />
                </a>
                <span>07</span>
            </div>
        </>
    )
}

export default chatButton