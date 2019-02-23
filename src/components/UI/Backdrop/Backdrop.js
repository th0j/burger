/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
import React from 'react';
import classes from './Backdrop.css';

const backDrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backDrop;
