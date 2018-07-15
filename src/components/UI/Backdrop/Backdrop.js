import React from 'react';
import Classes from './Backdrop.css';

const backdrop = (props) =>(
    props.show ? <div className={Classes.Backdrop} onClick={props.modalClosed}></div> : null
);

export default backdrop;