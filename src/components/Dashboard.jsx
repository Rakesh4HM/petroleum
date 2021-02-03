import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { getUser } from '../utils/common';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "10%"
    },
    paper: {
        padding: theme.spacing(1),
        // color: theme.palette.text.secondary,
        height: 100,
        borderRadius: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "3px 3px 5px 6px #999",
        WebkitBoxShadow: "3px 3px 5px 6px #999",
        "&:hover": {
            background: "#F0F0C9",
            transform: "scale(1.05)"
        }
    },
    textStyle: {
        textDecoration: "none",
        fontSize: 18,
        color: "#000",
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    const user = getUser();

    return (
        <div>
            <h1 style={{ marginTop: "5%" }}>Dashboard</h1>
            <div className={classes.root}>
                <Grid container spacing={1} className={classes.container}>
                    <Grid container item xs={12} spacing={3} className={classes.container}>
                        <Grid item xs={4}>
                            <Link to="/dashboard/items" className={classes.textStyle}>
                                <Paper className={classes.paper}>
                                    <h3>Customer Transactions</h3>
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/dashboard/daily-transactions" className={classes.textStyle}>
                                <Paper className={classes.paper}>
                                    <h3>Daily Transactions</h3>
                                </Paper>
                            </Link>
                        </Grid>
                        {user?.isAdmin ? <Grid item xs={4}>
                            <Link to="/dashboard" className={classes.textStyle}>
                                <Paper className={classes.paper}>
                                    <h3>Admin Settings</h3>
                                </Paper>
                            </Link>
                        </Grid> : null}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard;