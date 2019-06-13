import React from 'react'
import InputRange from 'react-input-range';

function TextOptions (props) {



    const changePropperties = (value) => {
        const changedPropperties =  {...props.elementData};
        changedPropperties.properties.fontSize = value;
        return changedPropperties
    }

    return (
        <div className="opt-holder" data-options="text">
            <div className="styleed">
                <div className="styleed__head">
                    <p>Text Options</p>
                    <a href="#" className="btn btn-simple btn-closeOptions">
                        <i className="upicon-x"></i>
                    </a>
                </div>
                <div className="styleed__inner scrollbar">
                    <form className="form">

                        <div className="form-group">
                            <label>Font Family</label>
                            <select className="form-control" name=" " id="">
                                <option value="" disabled="">Select font</option>
                                <option value="" selected="">Open Sans</option>
                                <option value="">Lato</option>
                                <option value="">Times New Roman</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p className="touchSlider__val" id="touchSize">{props.elementData.properties.fontSize}px</p>
                            <label>Font Size</label>
                            <InputRange
                                maxValue={38}
                                minValue={24}
                                value={props.elementData.properties.fontSize}
                                onChange={value => props.changeElement(changePropperties(value), props.elementData.id)} />
                        </div>

                        <div className="form-group form-group--slider">
                            <p className="touchSlider__val" id="touchLineHeight">28px</p>
                            <label>Line Height</label>
                            <div className="touchSlider noUi-target noUi-ltr noUi-horizontal" data-min="12"
                                 data-max="45" data-init="28" data-suffix="px" data-val="#touchLineHeight">
                                <div className="noUi-base">
                                    <div className="noUi-connect" style={{'left': '0%', 'right': '51.5152%'}}></div>
                                    <div className="noUi-origin" style={{'left': '48.4848%'}}>
                                        <div className="noUi-handle noUi-handle-lower" data-handle="0"
                                             style={{'z-index': '4'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <ul className="list-unstyled list-colors">
                                <li className="list-colors__item">
                                    <p>Text color</p>
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

export default TextOptions
