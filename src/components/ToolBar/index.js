import React from 'react'
import TextElement from "../TextElement";
import {TEXT} from "../../helpers/constants";

function ToolBar(props) {
    return (
        <nav className="editorr__toolbar">
            <p className="label">Insert</p>
            <TextElement id={'textElement'} handleDrop = {()=>(props.addElement(TEXT))} />
            <div className="btn btn-tool-button" draggable="true" data-eltype="button">
                <i className="upicon-tool-button"></i>
                <p>Button</p>
            </div>
            <div className="btn btn-tool-image" draggable="true" data-eltype="image">
                <i className="upicon-tool-image"></i>
                <p>Image</p>
            </div>
            <div href="#" className="btn btn-tool-form" draggable="true" data-eltype="form">
                <i className="upicon-tool-form"></i>
                <p>Form</p>
            </div>
            <div href="#" className="btn btn-tool-fboptin" draggable="true" data-eltype="fboptin">
                <i className="upicon-tool-fb-optin"></i>
                <p>FB Opt-in</p>
            </div>
            <div className="btn btn-tool-social" draggable="true" data-eltype="social">
                <i className="upicon-tool-social"></i>
                <p>Social</p>
            </div>
            <div className="btn btn-tool-spacer" draggable="true" data-eltype="spacer">
                <i className="upicon-tool-spacer"></i>
                <p>Spacer</p>
            </div>
        </nav>
    )
}

export default ToolBar;


