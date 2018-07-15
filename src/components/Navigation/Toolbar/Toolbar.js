import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationsItems/NavigationsItems';
import Classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={Classes.Toolbar}>
        <div onClick={props.SideDrawerToggle}>Menu</div>
        <Logo />
        <NavigationsItems />
    </header>
);

export default toolbar;