import bg1 from "../../img/bgimg-1.jpg";
import bg2 from "../../img/bgimg-2.jpg";
import bg3 from "../../img/bgimg-3.jpg";
import bg4 from "../../img/bgimg-4.jpg";

import React from "react";

function CampaignOptions(props) {
    return (
        <div className="opt-holder" data-options="general">

            <div className="styleed">
                <div className="styleed__head">
                    <p>Campaign Options</p>
                    <a href="#" className="btn btn-simple btn-closeOptions">
                        <i className="upicon-x"></i>
                    </a>
                </div>
                <div className="styleed__inner scrollbar">

                    <form className="form">


                        <div className="styleed__sect">
                            <div className="styleed__ctrl">
                                <div className="form-group">
                                    <label htmlFor="pageTitle">Landing page title</label>
                                    <input className="form-control" type="text" id="pageTitle"
                                           placeholder="Enter page title name" value="New Campaign"/>
                                </div>
                            </div>

                            <div className="styleed__ctrl">
                                <div className="form-group mb-0">
                                    <label htmlFor="sharePageTitle">Landing page URL</label>
                                    <div className="input-group input-group-pre">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">https://upvir.al/62980/</div>
                                        </div>
                                        <input className="form-control" type="text" placeholder="Enter name"
                                               value="lp62790"/>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="styleed__sect">
                            <h5 className="styleed__secthead">
                                <i className="upicon-style"></i>
                                Campaign terms
                            </h5>

                            <div className="collapse show" id="misc">
                                <div className="styleed__ctrl">
                                    <ul className="list-unstyled list-switches">
                                        <li className="list-switches__item list-switches__item--withlink active">
                                            <p>
                                                Terms and conditions
                                            </p>
                                            <div className="selectblock__switch">
                                                <div></div>
                                            </div>
                                            <div className="list-switches__hiddenlink">
                                                <a href="#" className="btn-text btn--withicon" data-toggle="modal"
                                                   data-target="#modal-sideEdit">
                                                    <i className="upicon-edit"></i>
                                                    Edit T&amp;C
                                                </a>
                                            </div>
                                        </li>
                                        <li className="list-switches__item list-switches__item--requireTC">
                                            <p>Require participants to accept T&amp;C</p>
                                            <div className="selectblock__switch">
                                                <div></div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="hidden-block requireTC">
                                        <div className="form-group mb-0">
                                            <input className="form-control" type="text"
                                                   placeholder="Enter checkbox label"
                                                   value="I agree with the terms and conditions"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="styleed__sect">
                            <h5 className="styleed__secthead">
                                <i className="upicon-style"></i>
                                Campaign styling
                            </h5>

                            <div className="collapse show" id="style">

                                <div className="form-group">

                                    <ul className="list-unstyled list-colors">
                                        <li className="list-colors__item">
                                            <p>Background color</p>
                                            <div className="colorswatch">
                                                <div className="colorswatch__picker"
                                                     style={{'background-color': '#374354'}}></div>
                                                <input type="text" value="#374354"/>
                                            </div>
                                        </li>
                                    </ul>

                                </div>

                                <div className="form-group">
                                    <label>Background image / texture</label>
                                    <div className="bg-picker">
                                        <a href="#"
                                           className="bg-picker__item bg-picker__item--icon bg-picker__item--nobg"
                                           data-target=".colorPickerBg">
                                            <i className="upicon-x"></i>
                                            <p>No image</p>
                                        </a>
                                        <a href="#" className="bg-picker__item active">
                                            <img src={bg1} alt="Clouds"/>
                                            <p>Clouds</p>
                                        </a>
                                        <a href="#" className="bg-picker__item">
                                            <img src={bg2} alt="Clouds"/>
                                            <p>Flare</p>
                                        </a>
                                        <a href="#" className="bg-picker__item">
                                            <img src={bg3} alt="Clouds"/>
                                            <p>Grass</p>
                                        </a>
                                        <a href="#" className="bg-picker__item">
                                            <img src={bg4} alt="Clouds"/>
                                            <p>Cityscape</p>
                                        </a>
                                        <a href="#" className="bg-picker__item">
                                            <img src={bg3} alt="Clouds"/>
                                            <p>Grass</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Image</label>
                                    <div className="file-upload">
                                        <i className="upicon-newimage"></i>
                                        <p>Select image</p>
                                        <input type="file"/>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default CampaignOptions
