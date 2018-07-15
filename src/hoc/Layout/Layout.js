import React, { Component } from 'react';
import Oux from '../Oux/Oux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandaler = () => { 
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggledHandaler = () => { 
        this.setState(prevState=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render(){
        return (
            <Oux>
                <Toolbar SideDrawerToggle={this.sideDrawerToggledHandaler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandaler} />
                <main className={Classes.content}>
                    {this.props.children}
                </main>
            </Oux>
        );
    };
};

export default Layout;