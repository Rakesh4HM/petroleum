import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "5%"
    },
    container: {
        textAlign: "center",
        marginTop: "5%"
    },
    containerRow: {
        marginBottom: "5%"
    },
    label: {
        padding: "10px 10px"
    }
}));

export default function DailyTransaction() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Dashboard {'/'} Daily Transactions</h1>
            <Grid container className={classes.container}>
                <Grid container xs={12} direction="row" className={classes.containerRow}>
                    <Grid item xs={4}>
                        <label className={classes.label}>Petrol Price</label>
                        <input type="text" name="petrol-price" value="100.00" readOnly />
                    </Grid>
                    <Grid item xs={4}>
                        <label className={classes.label}>Sales Meter</label>
                        <input type="text" name="petrol-price" value="80.00" readOnly />
                    </Grid>
                    <Grid item xs={4}>
                        <label className={classes.label}>Lubricant</label>
                        <input type="text" name="petrol-price" value="300.00" readOnly />
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row" className={classes.containerRow}>
                    <Grid item xs={4}>
                        <label className={classes.label}>Petrol Price</label>
                        <input type="text" name="petrol-price" value="100.00" readOnly />
                    </Grid>
                    <Grid item xs={4}>
                        <label className={classes.label}>Sales Meter</label>
                        <input type="text" name="petrol-price" value="80.00" readOnly />
                    </Grid>
                    <Grid item xs={4}>
                        <label className={classes.label}>Lubricant</label>
                        <input type="text" name="petrol-price" value="300.00" readOnly />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
