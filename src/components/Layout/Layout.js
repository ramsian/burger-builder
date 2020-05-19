import React, { Component } from 'react';
import Auxillary from './../../hoc/Auxillary';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state ={
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState(
            {
                showSideDrawer: false
            }
        )
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return( 
            <Auxillary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>         
            </Auxillary>
        )
    }
};
export default Layout;