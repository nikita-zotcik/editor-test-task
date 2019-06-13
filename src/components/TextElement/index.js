import React, {Component} from 'react'
import {TEXT} from "../../helpers/constants";
import {DragSource} from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        console.log(props);
        return {
            id: props.id,
        }
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        return props.handleDrop(props.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class  TextElement extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {isDragging, connectDragSource, item} = this.props;
        const opacity = isDragging ? 0 : 1;
        return (
            connectDragSource(
                <div className="btn btn-tool-text" style={{opacity}}>
                    <i className="upicon-tool-text"></i>
                    <p>Text</p>
                </div>
            )
        )
    }
}

export default DragSource('textElement', itemSource, collect)(TextElement);
