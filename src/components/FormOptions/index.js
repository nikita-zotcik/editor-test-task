import React from 'react'
import {BUTTON, FORM, TEXT} from "../../helpers/constants";

function FormOptions(props) {
    return (

        <div className="opt-holder" data-options="form">

            <div
                onClick={(e)=>props.changeElement({
                    type: BUTTON,
                    properties: {
                        color: 'blue',
                        height: 64,
                        text: 'Default BIG Text'
                    }
                })}
                className="styleed">
                <div className="styleed__head">
                    <p>Form Options</p>
                    <a href="#" className="btn btn-simple btn-closeOptions">
                        <i className="upicon-x"></i>
                    </a>
                </div>
                <div className="styleed__inner scrollbar">

                    <form className="form">


                        <div className="form-group">
                            <p className="touchSlider__val" id="touchFormHeight">56px</p>
                            <label>Input field height</label>
                            <div className="touchSlider noUi-target noUi-ltr noUi-horizontal" data-min="35"
                                 data-max="65" data-init="56" data-suffix="px" data-val="#touchFormHeight">
                                <div className="noUi-base">
                                    <div className="noUi-connect" style={{'left': '0%', 'right': '30%'}}></div>
                                    <div className="noUi-origin" style={{'left': '70'}}>
                                        <div className="noUi-handle noUi-handle-lower" data-handle="0"
                                             style={{'z-index': '4'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group form-group--slider">
                            <p className="touchSlider__val" id="touchFormDistance">56px</p>
                            <label>Input fields distance</label>
                            <div className="touchSlider noUi-target noUi-ltr noUi-horizontal" data-min="2"
                                 data-max="40" data-init="5" data-suffix="px" data-val="#touchFormDistance">
                                <div className="noUi-base">
                                    <div className="noUi-connect" style={{'left': '0%', 'right': '92.1053%'}}></div>
                                    <div className="noUi-origin" style={{'left': '7.89474'}}>
                                        <div className="noUi-handle noUi-handle-lower" data-handle="0"
                                             style={{'z-index': '4'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group form-group--slider">
                            <p className="touchSlider__val" id="touchFormRound">4px</p>
                            <label>Rounded corners</label>
                            <div className="touchSlider noUi-target noUi-ltr noUi-horizontal" data-min="0"
                                 data-max="50" data-init="4" data-suffix="px" data-val="#touchFormRound">
                                <div className="noUi-base">
                                    <div className="noUi-connect" style={{'left': '0%', 'right': '92%'}}></div>
                                    <div className="noUi-origin" style={{'left': '8%'}}>
                                        <div className="noUi-handle noUi-handle-lower" data-handle="0"
                                             style={{'z-index': '4'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form-group mt-5">
                            <label>Border width</label>
                            <div className="btn-group">
                                <button className="btn btn-default active">0px</button>
                                <button className="btn btn-default">1px</button>
                                <button className="btn btn-default">2px</button>
                                <button className="btn btn-default">3px</button>
                            </div>
                        </div>


                        <div calss="form-group">
                            <ul className="list-unstyled list-colors">
                                <li className="list-colors__item">
                                    <p>Background color</p>
                                    <div className="colorswatch">
                                        <div className="colorswatch__picker" style={{'background-color': '#fff'}}></div>
                                        <input type="text" value="#fff"/>
                                    </div>
                                </li>
                                <li className="list-colors__item">
                                    <p>Border color</p>
                                    <div className="colorswatch">
                                        <div className="colorswatch__picker"
                                             style={{'background-color': '#374354'}}></div>
                                        <input type="text" value="#374354"/>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h5>Submit button</h5>


                        <div className="form-group">
                            <label>Button style</label>
                            <select className="form-control" name=" " id="">
                                <option value="">Solid background</option>
                                <option value="">Outlined</option>
                                <option value="">Text link</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label>Button height</label>
                            <ul className="list-unstyled list-switches">
                                <li className="list-switches__item active checked">
                                    <p>
                                        Same as input field
                                    </p>
                                    <div className="selectblock__switch">
                                        <div></div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="form-group">
                            <label>Button border radius</label>
                            <ul className="list-unstyled list-switches">
                                <li className="list-switches__item list-switches__item--withlink active checked">
                                    <p>
                                        Same as input field
                                    </p>
                                    <div className="selectblock__switch">
                                        <div></div>
                                    </div>
                                </li>
                            </ul>
                            <div className="list-switches__hiddenlink">
                                <p className="touchSlider__val" id="touchBtnHeight">56px</p>
                                <div className="touchSlider noUi-target noUi-ltr noUi-horizontal" data-min="36"
                                     data-max="65" data-init="56" data-suffix="px" data-val="#touchBtnHeight">
                                    <div className="noUi-base">
                                        <div className="noUi-connect" style={{'left': '0%', 'right': '31.0345'}}></div>
                                        <div className="noUi-origin" style={{'left': '68.9655'}}>
                                            <div className="noUi-handle noUi-handle-lower" data-handle="0"
                                                 style={{'z-index': '4'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form-group mt-5">
                            <label>Border width</label>
                            <div className="btn-group">
                                <button className="btn btn-default active">0px</button>
                                <button className="btn btn-default">1px</button>
                                <button className="btn btn-default">2px</button>
                                <button className="btn btn-default">3px</button>
                            </div>
                        </div>

                        <div calss="form-group">
                            <ul className="list-unstyled list-colors">
                                <li className="list-colors__item">
                                    <p>Background color</p>
                                    <div className="colorswatch">
                                        <div className="colorswatch__picker"
                                             style={{'background-color': '#EA6D44'}}></div>
                                        <input type="text" value="#EA6D44"/>
                                    </div>
                                </li>
                                <li className="list-colors__item">
                                    <p>Border color</p>
                                    <div className="colorswatch">
                                        <div className="colorswatch__picker"
                                             style={{'background-color': '#374354'}}></div>
                                        <input type="text" value="#374354"/>
                                    </div>
                                </li>
                                <li className="list-colors__item">
                                    <p>Label color</p>
                                    <div className="colorswatch">
                                        <div className="colorswatch__picker" style={{'background-color': '#fff'}}></div>
                                        <input type="text" value="#fff"/>
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

export default FormOptions
