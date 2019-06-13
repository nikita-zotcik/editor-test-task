import React from 'react'
import {FORM, TEXT} from "../../helpers/constants";


function ButtonComponent(props) {
    const styles = {
        'height': props.properties.height,
        'color': props.properties.color,
    };
    const {properties} = props;
    return (
        <button style={styles} onClick={(e) => props.doOnfocus(e, FORM, properties)}>{properties.text}</button>
    )

}

ButtonComponent.defaultProps = {
    properties: {
        color: 'blue',
        height: 24,
        text: 'Default Button Text'
    }
};


export default ButtonComponent
