import { useState } from 'react'
import { connect } from 'react-redux'
import { removeItem, updateItem } from '../actions/Actions'


function InventoryItem(props){
    console.log(props)
    const [Sold,setSold] = useState(props.Item.Sold)
    
    async function handleUpdate(e){
        e.preventDefault()
        
       await props.updateItem(props.Item.Sold, {Sold: !Sold})
        setSold(!Sold)
    }

    function handleClick(e){
        e.preventDefault()
        props.removeItem(e.target.id,
            props.Item)
    }
    return(
        <>
        <h2>{props.Item.Item_Name}</h2>
        <p>{props.Item.Category_Id}</p>
        <h4>{props.Item.Description}</h4>
        <p>{props.Item.Location}</p>
        <p>{props.Item.Date_Listed}</p>
        <p>{props.Item.Quantity}</p>
        <p>{props.Item.Sold}</p>
        <h3 onClick={handleUpdate}>{Sold? "Sold" : "Still Available"}</h3>
        <button id = {props.Item._id} onClick={handleClick}>DELETE</button>
        </>
    )
}

export default connect(null, {removeItem, updateItem})(InventoryItem)