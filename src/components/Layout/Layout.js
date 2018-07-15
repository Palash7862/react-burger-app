import React from 'react';
import Oux from '../../hoc/Oux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Classes from './Layout.css';

const layout = (props) => (
    <Oux>
        <Toolbar />
        <main className={Classes.content}>
            {props.children}
        </main>
    </Oux>
);

export default layout;