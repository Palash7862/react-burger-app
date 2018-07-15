import React from 'react';
import Classes from './NavigationsItems.css';

const navigationsItems = (props) => {
    return(
        <nav>
            <ul className={Classes.NavigationItems}>
                <li><a href='/' className={Classes.active}>Home</a></li> 
            </ul>
        </nav>
    );
}

export default navigationsItems;