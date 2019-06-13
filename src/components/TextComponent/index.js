import React, {Component} from 'react'
import {TEXT} from "../../helpers/constants";
import {findDOMNode} from 'react-dom';
import {
    DragSource,
    DropTarget,
    ConnectDropTarget,
    ConnectDragSource,
    DropTargetMonitor,
    DropTargetConnector,
    DragSourceConnector,
    DragSourceMonitor,
} from 'react-dnd';
import { XYCoord } from 'dnd-core';
import flow from 'lodash.flow'

const elementSource = {
    beginDrag(props) {
        console.log('!!!LOGGED: ', props)
        return {
            id: props.id,
            index: props.index,
        }
    },
};


const elementTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveElement(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};


class TextComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {properties} = this.props;
        console.log('!!!LOGGED: ', this.props)
        const styles = {
            'font-size': properties.fontSize,
            'line-height': properties.lineHeight,
            'color': properties.textColor,
            'border': this.props.active === this.props.id ? '1px dashed gray' : null,
        };
        const {
            isDragging,
            connectDragSource,
            connectDropTarget,
        } = this.props;
        return (
            connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(<p style={styles} onClick={(e) => this.props.doOnfocus(e, TEXT, this.props.id)}>{properties.content}></p>))
        )
    }
}

export default flow(
    DragSource(
        'element',
        elementSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ),
    DropTarget('element', elementTarget, (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }))
)(TextComponent);
