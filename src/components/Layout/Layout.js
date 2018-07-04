import React from 'react';
import Oux from '../../hoc/Oux';
import Classes from './Layout.css';

const layout = (props) => (
    <Oux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={Classes.content}>
            {props.children}
        </main>
    </Oux>
);

export default layout;