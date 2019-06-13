import React from "react";


function ImageOptions() {
    return (

        <div className="opt-holder" data-options="image">
            <div className="styleed">
                <div className="styleed__head">
                    <p>Image Options</p>
                    <a href="#" className="btn btn-simple btn-closeOptions">
                        <i className="upicon-x"></i>
                    </a>
                </div>
                <div className="styleed__inner scrollbar">
                    <form className="form">

                        <div className="form-group">
                            <label>Image</label>
                            <div className="file-upload">
                                <i className="upicon-newimage"></i>
                                <p>Select image</p>
                                <input type="file"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Alt text</label>
                            <input className="form-control" type="text" placeholder="Enter descriptive text"/>
                        </div>

                        <div className="form-group">
                            <ul className="list-unstyled list-switches">
                                <li className="list-switches__item">
                                    <p>Set image to full width</p>
                                    <div className="selectblock__switch">
                                        <div></div>
                                    </div>
                                </li>
                                <li className="list-switches__item">
                                    <p>Hide on mobile</p>
                                    <div className="selectblock__switch">
                                        <div></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="form-group">
                            <label>Image alignment</label>
                            <div className="btn-group">
                                <button className="btn btn-default">
                                    <i className="upicon-align-left"></i>
                                </button>
                                <button className="btn btn-default active">
                                    <i className="upicon-align-center"></i>
                                </button>
                                <button className="btn btn-default">
                                    <i className="upicon-align-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Link image</label>
                            <div className="input-group input-group-pre">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="upicon-link"></i>
                                    </div>
                                </div>
                                <input className="form-control" type="text" placeholder="Paste URL"/>
                            </div>
                            <ul className="list-unstyled list-switches mt-2">
                                <li className="list-switches__item">
                                    <p>External link</p>
                                    <div className="selectblock__switch">
                                        <div></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}
export default ImageOptions
