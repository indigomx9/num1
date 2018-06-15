import React from 'react';
import classes from './NControl.css';

let NControl = (props) => {
    return (
        <div className={classes.NControl} onClick={props.clicked}>
            {props.label}
        </div>
    );
};

export default NControl;

