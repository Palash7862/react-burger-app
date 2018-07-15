import React from 'react';
import Classes from './Logo.css';
import burgerLogo from '../../assets/images/127 burger-logo.png';

const logo = (props) => (
    <div className={Classes.Logo}>
        <img src={burgerLogo} alt='My Burger' />
    </div>
);
export default logo;