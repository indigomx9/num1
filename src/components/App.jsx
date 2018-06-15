import React from 'react';
import Number from '../containers/Number'
import classes from './App.css';

let App = () => (
    <div>
        <h1 className={classes.banner}>Numbers</h1>
        <Number />
    </div>
);

export default App;

