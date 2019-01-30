import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Lable}>{props.lable}</div>
    <button type="button" className={classes.Less}>
      Less
    </button>
    <button type="button" className={classes.More}>
      More
    </button>
  </div>
);
export default buildControl;
