import React, {Component} from 'react'
import './fonts/upicon.ttf'
import './App.css';
import './upicons.css'
import './bootstrap.min.css'
import ToolBar from '../src/components/ToolBar/index'
import EditorHead from './components/EditorHead';
import EditorOptions from './components/EditorOptions';
import EditorArea from './components/EditorContent';
import {FORM, TEXT} from './helpers/constants';
import GenerateId from "./helpers/generateId";
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');


class EditorContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeElement: FORM,
            editableElements: [],
            activeEditable: -1,
            activeId: ''
        }
    }

    addElement(type) {
        const editableElements = [...this.state.editableElements];

        editableElements.push({
            id: GenerateId(),
            type: type,
            properties: {
                fontSize: 24,
                lineHeight: 28,
                textColor: 'blue',
                content: 'This is NOT default'
            }

        });
        this.setState({
            ...this.state,
            editableElements
        })
    }

    changeActiveComponent(e, type, ind) {
        this.setState({
            ...this.state,
            activeElement: type,
            activeEditable: this.state.editableElements.findIndex(el => el.id === ind),
            activeId: ind,
        })
    }

    editActiveElement(data, elId) {
        const editedData = [...this.state.editableElements];
        const changeInd = editedData.findIndex(el => el.id === elId);
        if (changeInd !== -1) {
            editedData[changeInd] = data;
            this.setState({
                ...this.state,
                editableElements: editedData
            })
        }
    }
    moveElement (dragIndex, hoverIndex) {

        const { editableElements } = this.state;
        const dragElement = editableElements[dragIndex];

        this.setState(
            update(this.state, {
                editableElements: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragElement]],
                },
            }),
        )
    };


    render() {
        const {activeEditable, editableElements} = this.state;
        return (
            <React.Fragment>
                    <section className={'editor__tools'}>
                        <ToolBar addElement={this.addElement.bind(this)}/>
                        <EditorHead/>
                    </section>
                    <section className={'editorr__content'}>
                                <EditorArea
                                    moveElement = {this.moveElement.bind(this)}
                                    chnageCallback={this.changeActiveComponent.bind(this)}
                                            editableElements={this.state.editableElements}
                                            activeId={this.state.activeId}>
                                </EditorArea>
                            )}
                    </section>
                    <section className={'editor__options side-hide side-show'}>
                        <EditorOptions active={this.state.activeElement}
                                       editElelemnt={this.editActiveElement.bind(this)}
                                       elementData={activeEditable === (-1) ? null : editableElements[activeEditable]}/>
                    </section>
            </React.Fragment>
        )
    }
}

export default DragDropContext(HTML5Backend)(EditorContainer)
