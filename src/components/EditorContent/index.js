import React, {Component} from 'react'
import TextComponent from "../TextComponent";
import {DropTarget} from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class EditorArea extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {connectDropTarget, hovered, item} = this.props;
        const border = hovered? '1px dashed gray':null;
        return (connectDropTarget(
                    <div
                        style={{border}}
                        className="wid-holder">
                        {this.props.editableElements.map((el, index) => (
                                <TextComponent
                                    key={el.id}
                                    active={this.props.activeId}
                                    id={el.id}
                                    index={index}
                                    properties={el.properties}
                                    moveElement={this.props.moveElement}
                                    doOnfocus={this.props.chnageCallback}/>
                            )
                        )}
                    </div>
            )
        )
    }
}

export default DropTarget('textElement', {}, collect)(EditorArea)
