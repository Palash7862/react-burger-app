import React from 'react';
import Oux from '../../../hoc/Oux';
import Classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Oux>
        <Backdrop show={props.show} modalClosed={props.modalClosed}/>
        <div 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}
            className={Classes.Modal}>
            {props.children}
        </div>
    </Oux>
);

export default modal;