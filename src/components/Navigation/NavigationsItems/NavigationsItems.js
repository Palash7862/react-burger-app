import React from 'react';
import Classes from './NavigationsItems.css';
import {NavLink} from 'react-router-dom';

const navigationsItems = (props) => {
    return(
        <nav>
            <ul className={Classes.NavigationItems}>
                <li>
                    <NavLink exact to="/" activeClassName={Classes.active}>Home</NavLink> 
                </li> 
                <li>
                    <NavLink exact to="/orders" activeClassName={Classes.active}>Order Details</NavLink>
                </li> 
            </ul>
        </nav>
    );
}

export default navigationsItems;