import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { getUser, removeUserSession } from '../utils/common';
import { ProviderContext } from '../utils/ProviderContext';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../sample-logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container : {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: '#F0F0C9'
    }
}));

const Nav = () => {
    const classes = useStyles();
    const [token, setToken] = useContext(ProviderContext);
    const handleLogout = () => {
        removeUserSession();
        setToken(false)
    }
    return (
        <div className={classes.root}>
            {/* <nav>
                <ul className="nav-links">
                    <li className="li-style">Logo</li>
                    <NavLink exact activeClassName="active" to={'/'} style={{ textDecoration: 'none' }}><li className="nav-button">Home</li></NavLink>
                    <NavLink activeClassName="inactive" to={'/login'} style={{ textDecoration: 'none' }}><li className="nav-button">{token ? 'Dashboard' : 'Login'}</li></NavLink>
                    <NavLink activeClassName="inactive" to={'/login'} style={{ textDecoration: 'none' }}><li className={token ? "nav-button" : "nav-button-disable"} onClick={handleLogout}>Logout</li></NavLink>
                </ul>
            </nav> */}
            <Grid container xs={12} spacing={3} className={classes.container}>
            <Grid item xs={6}>
               <img src={logo} width={64} height={50} style={{display: "flex", justifyContent: "start"}}/>
            </Grid>
            <Grid item xs={2}>
            <NavLink exact activeClassName="active" to={'/'} style={{ textDecoration: 'none' }}><li className="nav-button">Home</li></NavLink>
            </Grid>
            <Grid item xs={2}>
            <NavLink activeClassName="inactive" to={'/login'} style={{ textDecoration: 'none' }}><li className="nav-button">{token ? 'Dashboard' : 'Login'}</li></NavLink>
            </Grid>
            { token ? <Grid item xs={2}>
            <NavLink activeClassName="inactive" to={'/login'} style={{ textDecoration: 'none' }}><li className={token ? "nav-button" : "nav-button-disable"} onClick={handleLogout}>Logout</li></NavLink>
            </Grid> : null}
            </Grid>
        </div>
    )
}

export default Nav;