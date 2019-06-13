import React from 'react'
import TextOptions from "../TextOptions";
import {FORM, TEXT} from "../../helpers/constants";
import FormOptions from "../FormOptions";

function EditorOptions(props) {
    switch (props.active) {
        case FORM:
            return (<FormOptions changeElement={props.editElelemnt}
                                 elementData={props.elementData ? props.elementData : null}/>);
        case TEXT:
            return (<TextOptions changeElement={props.editElelemnt}
                                 elementData={props.elementData ? props.elementData: null}/>);
        default:
            break;
    }
    return (<TextOptions/>)
}

export default EditorOptions
