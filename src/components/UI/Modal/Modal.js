import React, { Component } from 'react';
import Oux from '../../../hoc/Oux/Oux';
import Classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(){
        console.log('[Model] WillUpdate');
    }

    render(){
        return(
            <Oux>
                <Backdrop show={this.props.show} modalClosed={this.props.modalClosed}/>
                <div 
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}
                    className={Classes.Modal}>
                    {this.props.children}
                </div>
            </Oux>
        );
    } 
};

export default Modal;