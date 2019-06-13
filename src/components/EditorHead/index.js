import React from 'react'

function EditorHead() {
    return (
        <div className="editorr__head">
            <div className="editorr__preview">
                <div className="btn-group">
                    <a href="#" className="btn btn-simple active">
                        <i className="upicon-desktop"></i>
                    </a>
                    <a href="#" className="btn btn-simple">
                        <i className="upicon-mobile"></i>
                    </a>
                </div>
                <a href="#" className="btn btn-simple btn-settings" data-type="settings">
                    <i className="upicon-settings"></i>
                </a>
            </div>
        </div>
    )
}
export default EditorHead
