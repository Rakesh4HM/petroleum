import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "5%"
    },
    paper: {
        padding: theme.spacing(1),
        // textAlign: 'center', 
        color: theme.palette.text.secondary,
    },
}));

const Items = () => {
    const classes = useStyles();
    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        setItems(items.data)
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    {
                        //    items.map(item => <Link to={`/dashboard/items/${item.itemId}`} key={item.itemId}><h3 key={item.itemId}>{item.item.name}</h3></Link>)
                        items.map(item => <ItemCard key={item.itemId} data={item} />)
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Items;