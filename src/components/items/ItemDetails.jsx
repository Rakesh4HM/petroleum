import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

 const ItemDetails = ({ match }) => {

    useEffect(()=> {
        fetchItem();
    },[])

    const [item, setItem] = useState({
        name: "",
        images: {}
    });

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json();
        console.log(item.data);
        setItem(item.data)
    }

    // console.log(items)
    return (
        <div>
           <h1>Item Details Page</h1>
            <h2>{item?.item?.name}</h2>
            <img src={item?.item?.images?.icon} />
        </div>
    )
}

export default ItemDetails;