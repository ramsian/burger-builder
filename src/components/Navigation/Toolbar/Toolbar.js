import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import ToggleDrawer from './../SideDrawer/ToggleDrawer/ToggleDrawer';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <ToggleDrawer clicked={props.drawerToggleClicked}></ToggleDrawer>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
};
export default toolbar;