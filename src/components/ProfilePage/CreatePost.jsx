import React from 'react'

const CreatePost = () => {
    return (
        <>
            <div className="main-wraper">
                <span className="new-title">Create New Post</span>
                <div className="new-post">
                    <form method="post">
                        <i className="icofont-pen-alt-1" />
                        <input type="text" placeholder="Create New Post" />
                    </form>
                    <ul className="upload-media">
                        <li>
                            <i><img src="images/image.png" alt /></i>
                            <span>Photo/Video</span>
                        </li>
                        <li>
                            <i><img src="images/activity.png" alt /></i>
                            <span>Feeling/Activity</span>
                        </li>
                        <li>
                            <i><img src="images/live-stream.png" alt /></i>
                            <span>Live Stream</span>
                        </li>
                    </ul>
                </div>
            </div>{/* create new post */}
        </>
    )
}

export default CreatePost