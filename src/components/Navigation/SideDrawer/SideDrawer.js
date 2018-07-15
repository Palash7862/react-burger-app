import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationsItems/NavigationsItems';
import Classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Oux from '../../../hoc/Oux/Oux';

const sideDrawer = (props) => {  
    let sideDrawerClass = [Classes.SideDrawer, Classes.Closed];
    if(props.open){
        sideDrawerClass = [Classes.SideDrawer, Classes.Open];
    }
    return (
        <Oux>
            <Backdrop show={props.open} modalClosed={props.closed}/>
            <div className={sideDrawerClass.join(' ')}>
                <Logo style={{height: '11%', textAlign: 'left'}}/>
                <NavigationItems />
            </div>
        </Oux>
    );
}

export default sideDrawer;