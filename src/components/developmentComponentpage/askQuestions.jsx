import React from 'react'

const askQuestions = () => {
    return (
        <>
            <div className="new-question-popup">
                <div className="popup"> <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i className="icofont-question-circle" /> Ask Question</h5>
                        </div>
                        <div className="post-new">
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Question Title" />
                                <textarea placeholder="Write Question" defaultValue={""} />
                                <select>
                                    <option>Select Your Question Type</option>
                                    <option>Article</option>
                                    <option>Book</option>
                                    <option>Chapter</option>
                                    <option>Code</option>
                                    <option>conference Paper</option>
                                    <option>Cover Page</option>
                                    <option>Data</option>
                                    <option>Exprement Finding</option>
                                    <option>Method</option>
                                    <option>Poster</option>
                                    <option>Preprint</option>
                                    <option>Technicial Report</option>
                                    <option>Thesis</option>
                                    <option>Research</option>
                                </select>
                                <div className="uploadimage"> <i className="icofont-eye-alt" />
                                    <label className="fileContainer">
                                        <input type="file" />
                                        Upload File </label>
                                </div>
                                <button type="submit" className="main-btn">Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default askQuestions