import React from 'react';
import classes from './NOutput.css';

let NOutput = (props) => (
    <div className={classes.NOutput}>
        Numbers: {props.value}
    </div>
);

export default NOutput;

