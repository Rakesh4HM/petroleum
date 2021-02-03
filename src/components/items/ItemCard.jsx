import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            "&:hover": {
                cursor: 'pointer',
                scale: '0.2'
            }
        },
    }),
);

const ItemCard = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={4}>
                    <Paper className={classes.paper}>
                <Link to={'/dashboard/items/'+ props.data?.itemId}>
                        <div>
                            <table style={{width: "100%"}}>
                                <tbody>
                                <tr>
                                    <td colspan={2}>{props.data?.item?.name}</td>
                                </tr>
                                <tr>
                                    <td colspan={2}>{props.data?.item?.description}</td>
                                </tr>
                                <tr>
                                    <td colspan={2}>
                                        <img src={props.data?.item?.images?.information} width={150} height={150} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan={2}>Type : {props.data?.item?.type}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                </Link>
                    </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default ItemCard